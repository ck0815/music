/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
export const local = {
  set (key, value) {
    // console.log(key, value)
    window.localStorage[key] = value
  },
  // 读取单个属性
  get (key, defaultValue) {
    // console.log(key, defaultValue)
    return window.localStorage[key] || defaultValue
  },
  // 存储对象，以JSON格式存储
  setObject (key, value) {
    // console.log(key, value)
    window.localStorage[key] = JSON.stringify(value)
  },
  // 读取对象
  getObject (key) {
    // console.log(key)
    return JSON.parse(window.localStorage[key] || '{}')
  },
  // 删除单个对象
  remove (key) {
    // console.log(key)
    window.localStorage.removeItem(key)
  },
  // 删除所有
  removeAll () {
    window.localStorage.clear()
  },
}

/**
 * util 常用方法
 **/
export const utils = {
  // 格式化时间
  formatDate (timer) {
    if (!timer) {
      return '-'
    }
    let date = new Date(timer)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    let d = date.getDate()
    d = d < 10 ? '0' + d : d
    let h = date.getHours()
    h = h < 10 ? '0' + h : h
    let M = date.getMinutes()
    M = M < 10 ? '0' + M : M
    let s = date.getSeconds()
    s = s < 10 ? '0' + s : s
    return y + '-' + m + '-' + d + ' ' + h + ':' + M + ':' + s
  },

  // 深拷贝
  copy (data) {
    return JSON.parse(JSON.stringify(data))
  },

  // 深拷贝
  deepCopy (startObj, endObj) {
    let obj = endObj || {}
    for (const i in startObj) {
      // [] {}
      if (typeof startObj[i] === 'object') {
        obj[i] = startObj[i].constructor === Array ? [] : {}
        this.deepCopy(startObj[i], obj[i])
      } else {
        obj[i] = startObj[i]
      }
    }
    return obj
  },

  // 获取容器高度
  getContentHeight (className) {
    return document.querySelector(className).clientHeight - 55
  },

  // 级联单选框回填参数
  // arr 数据对象 value 值
  // 返回值及值得 父节点id 数组
  callBackRadioValue (arr, value) {
    // console.log(arr, value, 1111111111)
    var parentNodes = [];//所有父节点
    var forfun = function (id, nodes) {
      for (var i = 0; i < nodes.length; i++) {
        var currentNode = nodes[i]
        if (currentNode.id == id) {
          return currentNode.id
        } else if (currentNode.children) {
          var validNodeId = forfun(id, currentNode.children);
          if (validNodeId && parentNodes.indexOf(validNodeId) < 0) {
            parentNodes.push(validNodeId)
          }
          if (validNodeId) {
            return currentNode.id
          }
        }
      }
    }
    var validNodeId = forfun(value, arr)
    if (validNodeId && parentNodes.indexOf(validNodeId) < 0) {
      parentNodes.push(validNodeId)
    }
    parentNodes.reverse()
    // console.log(parentNodes, 11111111111)
    return parentNodes
  },

  // 数组分组
  groupBy (array, f) {
    const groups = {}
    array.forEach(function (o) {
      const group = JSON.stringify(f(o))
      groups[group] = groups[group] || []
      groups[group].push(o)
    })
    return Object.keys(groups).map(function (group) {
      return groups[group]
    })
  },

  // 递归查询返回对象 - 查询这条子级数据
  // v : id值,
  // name : 查询对比字段
  // list : 数组
  getObj (v, name, list) {
    let data
      ; (list || []).map((i) => {
        if (i[name] === v) {
          data = [i]
        } else {
          const child = this.getObj(v, name, i.children)
          if (child) {
            data = child
          }
        }
      })
    return data
  },

  // 多维数组 转 一维 对象
  repeat (data, name) {
    let obj = {}
    let format = (data) => {
      for (var i = 0, j = data.length; i < j; i++) {
        var item = this.copy(data[i])
        item.children = null
        obj[item[name]] = item

        data[i].children && format(data[i].children)
      }
    }
    format(data)
    return obj
  },

  // 数组去重
  unique (arr) {
    // 定义常量 res,值为一个Map对象实例
    const res = new Map()
    // 返回arr数组过滤后的结果，结果为一个数组
    // 过滤条件是，如果res中没有某个键，就设置这个键的值为1
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
  },

  // 手动拦截删除操作选中问题
  codeIntercept (event) {
    let stu = false
    event.target.onkeydown = () => {
      let _key = window.event.keyCode
      stu = true
      if (_key === 13) {
        return false
      }
    }
    if (!stu) {
      return false
    }
  },

  // 去除index
  getValue (str) {
    if (!str) { return '' }
    // str = login/Index
    // 获取最后一个/杠索引
    let index = str.lastIndexOf('/')
    // 获取最后一个/后面的值
    let val = str.substring(index + 1, str.length)
    // 判断是不是Index 结尾
    if (val === 'Index') {
      return str.substring(index, -1)
    }
    return str
  },

  // 处理路由Index
  getRouterUrl (arr) {
    let arrs = this.copy(arr)
    let forArr = ars => {
      ars.forEach(item => {
        item.code = this.getValue(item.code)
        if (item.children.length) {
          forArr(item.children)
        }
      })
    }
    forArr(arrs)
    return arrs
  },

  // image转Base64
  fileToBase64 (file, callBck) {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      // console.log('file 转 base64结果：' + reader.result)
      callBck && callBck(reader.result)
    }
    reader.onerror = () => {
      // console.log('Error: ', error)
    }
  },

  // 下载 数据流文件
  // name : 名称加.格式
  download (name, data) {
    if (!data) { return }
    let url = window.URL.createObjectURL(new Blob([data]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()
  },

  // 下载 数据流文件
  downloadFiles (response) {
    if (!response.data) {
      return
    }
    let fileName = response.headers['content-disposition']
      .split(';')[1]
      .split('=')[1]
    fileName = decodeURI(fileName)
    let url = window.URL.createObjectURL(new Blob([response.data]))

    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  },

  // 申请页面 登录用户名
  setLoginName (osType) {
    // root - administrator
    let name = osType.substring(0, 7).toLowerCase()
    return name === 'windows' ? 'administrator' : 'root'
  },
}

// 判断环境 - 暂时注释
// export const judgeEnv = () => {
//   let host = window.location.host,
//     res = '//www.baidu.com'
//   if (host.indexOf('dev') > -1) {
//   } else if (host.indexOf('test') > -1) {
//   } else if (host.indexOf('localhost') > -1) {
//   return res
// }

export default {
  install: function (Vue) {
    Vue.prototype.$local = local
    Vue.prototype.$utils = utils
  },
}
