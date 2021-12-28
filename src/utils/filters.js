/**
 * 过滤器
 * 所有方法名 都大写
 */
import config from '@/utils/config'

// 格式化时间戳
export const DATE = (date, fmt) => {
  if (!date) {
    return ''
  }

  var dateNew = new Date(date * 1)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (dateNew.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': dateNew.getMonth() + 1,
    'd+': dateNew.getDate(),
    'h+': dateNew.getHours(),
    'm+': dateNew.getMinutes(),
    's+': dateNew.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)
      )
    }
  }
  return fmt
}

// 系统配置>系统管理>组件管理 过滤标题
export const ASSEMBLYTITLE = (type) => {
  let obj = config.AssemblytTitle.find(item => {
    return item.type === type
  })
  return obj ? obj.name : ''
}

// type | ASSEMBLIMGURL
// 系统配置>系统管理>组件管理 不同类型图片
export const ASSEMBLIMGURL = (type) => {
  if (!type) { return '' }
  return require('@/assets/img/permission/assembly/' + type + '.png')
}

// 服务管理>操作系统 不同类型图片
export const OPESYSTEMIMGURL = (type) => {
  if (!type) { return '' }
  let os = config.OsType.find(item => {
    return item.type === type
  })
  return os ? require('@/assets/img/common/os/' + os.typeImage + '.png') : ''
}

// 系统配置>系统管理>组件管理 新增-描述
export const ASSEMBLDESCRIPTION = (type) => {
  let obj = config.AssemblytTitle.find(item => {
    return item.type === type
  })
  return obj ? obj.description : ''
}

// 云资源>资源管理>云平台不同类型图片 (服务管理>资源管理>云主机) cloudPlatform
export const PLATFORMIMGURL = (type) => {
  if (!type) { return '' }
  return require('@/assets/img/resource/cloudPlatform/cpf/' + type + '.png')
}

// 云平台详情 > 宿主机状态
export const HOSTCOMPUTERSTATUS = (val, type) => {
  let obj = config.HostComputerStatus.find(item => {
    return item.val === val
  })
  return obj ? obj[type] : ''
}

// 云平台详情 > aliyu  私有网络VPC/子网/路由条目状态
export const ALIYUNDETAILTATUS = (val, type) => {
  let obj = config.AliyunDetailStatus.find(item => {
    return item.val === val
  })
  return obj ? obj[type] : ''
}

// 脚本语言格式转换 
export const SCRIPTLANGUAGE = (type) => {
  if (!type) { return '' }
  return config.Scriptlanguage[type]
}

//配额管理百分比计算
export const SETPERCENTAGE = (value) => {
  if (!value) { return 0 }
  let num = Math.round(value * 100)
  return num
}

// 云主机运行状态 
export const VMSTATUS = (type) => {
  let val = config.VmStatus[type]
  return val ? val : config.VmStatus[0]
}

// 云主机运行状态颜色
export const VMSTATUSCOLOR = (type) => {
  let val = config.VmStatusColor[type]
  return val ? val : config.VmStatusColor[0]
}

// 云运营>服务管理>服务定义  
export const SERVICEDEFINITION = (type) => {
  if (!type) { return '' }
  return config.ServiceDefinition[type]
}

// 云平台详情概览 同步周期下拉框 名称
export const SYNCHRONIZATIONPERIODNAME = (val) => {
  if (!val) { return '' }
  let obj = config.SyncTimeList.find(item => {
    return item.value === val
  })
  return obj ? obj.name : ''
}

// 私有网络-青云私有云 网络状态
export const NETWORKTYPE = (type) => {
  return config.NetworkType[type]
}


export default {
  DATE,
  ASSEMBLYTITLE,
  ASSEMBLIMGURL,
  ASSEMBLDESCRIPTION,
  PLATFORMIMGURL,
  HOSTCOMPUTERSTATUS,
  OPESYSTEMIMGURL,
  ALIYUNDETAILTATUS,
  SCRIPTLANGUAGE,
  SETPERCENTAGE,
  VMSTATUS,
  VMSTATUSCOLOR,
  SERVICEDEFINITION,
  SYNCHRONIZATIONPERIODNAME,
  NETWORKTYPE
}