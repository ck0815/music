/**
 * 全局基础数据配置项
 * 首字母大写
 */
// 全部主题配置
export const Themes = [
  // 深色主题
  {
    name: '深色主题',
    value: 'theme-dark'
  },
  // 浅色主题
  {
    name: '浅色主题',
    value: 'theme-light'
  }
]

// 服务地图二级菜单显示收藏配置
export const MenuCollect = [
  {
    name: '仪表盘',
    value: 'permission/dashboard'
  },
  {
    name: '大屏展示',
    value: 'permission/largeScreen'
  }
]

// 系统配置>系统管理>组件管理 标题
export const AssemblytTitle = [
  {
    type: 'zabbix',
    name: 'Zabbix配置',
    description: '用于已纳管资源池中已安装zabbix-agent的虚拟机监控指标数据采集。利于成本管理和资源优化。'
  },
  {
    type: 'ansible',
    name: 'Ansible配置',
    description: '用于脚本执行、作业执行、中间件部署、应用编排等；降低日常运维重复性操作，减少乃至消除运维中的延迟，实现“零延时”的运维。'
  },
  // {
  //   type: 'ftp',
  //   name: 'FTP配置',
  //   description: '用于存放软件部署包等。'

  // },
  {
    type: 'remote',
    name: '远程控制配置',
    description: '用于已纳管虚拟机的终端访问。'
  },
  // {
  //   type: 'host',
  //   name: '主机账号配置',
  //   description: 'Zabbix的组件描述Zabbix的组件描述Zabbix的组件描述Zabbix的组件描述Zabbix的组件描述'
  // },
  {
    type: 'domain',
    name: 'AD域配置',
    description: '适用AD、OpenLDAP认证。用于同步组织架构及用户信息。'
  },
  // {
  //   type: 'qingcloud',
  //   name: '青云主机远程控制台路径配置',
  //   description: 'Zabbix的组件描述Zabbix的组件描述Zabbix的组件描述Zabbix的组件描述Zabbix的组件描述'
  // },
  {
    type: 'aci',
    name: 'ACI配置',
    description: '用于对接Cisco ACI。'
  },
  {
    type: 'prometheus',
    name: 'Prometheus配置',
    description: '用于获取kubernetes节点和容器组的监控指标采集。'
  },
  {
    type: 'grafana',
    name: 'Grafana配置',
    description: '用于kubernetes节点和容器组的监控指标采集。'
  }
  // {
  //   type: 'harbor',
  //   name: '镜像Harbor配置',
  //   description: '用于同步Harbor仓库的镜像，快速复制镜像地址。'
  // }
]

// 宿主机状态 
// 云平台详情 > 宿主机状态
export const HostComputerStatus = [
  {
    val: 0,
    name: '未知',
    class: 't-info'
  },
  {
    val: 1,
    name: '运行中',
    class: 't-success'
  },
  {
    val: 2,
    name: '停止',
    class: 't-error'
  },
  {
    val: 3,
    name: '已连接',
    class: 't-success'
  },
  {
    val: 4,
    name: '已断开',
    class: 't-warning'
  },
  {
    val: 5,
    name: '无响应',
    class: 't-error'
  },
  {
    val: 6,
    name: '待命',
    class: 't-primary'
  },
  {
    val: 7,
    name: '故障',
    class: 't-error'
  },
  {
    val: 8,
    name: '初始化',
    class: 't-primary'
  },
  {
    val: 9,
    name: '重启中',
    class: 't-warning'
  },
  {
    val: 10,
    name: '上电中',
    class: 't-warning'
  },
  {
    val: 11,
    name: '下电中',
    class: 't-warning'
  },
  {
    val: 12,
    name: '开机中',
    class: 't-warning'
  },
  {
    val: 13,
    name: '关机中',
    class: 't-warning'
  },
  {
    val: 14,
    name: '删除中',
    class: 't-warning'
  },
  {
    val: 15,
    name: '维护中',
    class: 't-warning'
  },
  {
    val: 16,
    name: '锁定中',
    class: 't-warning'
  }
]

// 系统类型 图标
export const OsType = [
  {
    typeImage: 'red',
    type: 'Red Hat'
  },
  {
    typeImage: 'centos',
    type: 'CentOS'
  },
  {
    typeImage: 'windows',
    type: 'Windows Server'
  },
  {
    typeImage: 'windows',
    type: 'Windows'
  },
  {
    typeImage: 'ubuntu',
    type: 'Ubuntu'
  },
  {
    typeImage: 'suse',
    type: 'SUSE Linux'
  },
  {
    typeImage: 'suse',
    type: 'Linux'
  },
  {
    typeImage: 'debian',
    type: 'Debian'
  },
  {
    typeImage: 'oracle',
    type: 'Oracle'
  },
  {
    typeImage: 'uos',
    type: 'UOS'
  }
]

// 云平台详情 > aliyu  私有网络VPC/子网/路由条目状态
export const AliyunDetailStatus = [
  {
    val: 'Pending',
    name: '配置中',
    class: 'el-icon-loading'
  },
  {
    val: 'Available',
    name: '可用',
    class: 't-success'
  },
  {
    val: 'Modifying',
    name: '修改中',
    class: 't-warning'
  }
]

// 脚本语言格式转换
export const Scriptlanguage = {
  json: 'json',
  javascript: 'javascript',
  shell: 'sh',
  playbook: 'yaml',
  yaml: 'yaml',
  python: 'python',
  powershell: 'powershell',
  java: 'java'
}

// 私有云列表
export const PrivateCloudPlatform = [
  'vmware',
  'kvm',
  'easystack',
  'openstack',
  'fusionsphere',
  'fusioncloud',
  'qingcloud_private'
]

// 公有云列表
export const PublicCloudPlatform = [
  'aliyun',
  'huaweicloud',
  'baidu',
  'tencent',
  'aws',
  'azure',
  'qingcloud_public'
]

// 云平台详情概览 同步周期下拉框
// 同步周期列表
export const SyncTimeList = [
  {
    name: '30分钟',
    value: 30
  },
  {
    name: '1小时',
    value: 60
  },
  {
    name: '6小时',
    value: 360
  },
  {
    name: '12小时',
    value: 720
  },
  {
    name: '24小时',
    value: 1440
  }
]

// 脚本仓库
//  脚本类型
export const ScriptTypeList = [
  {
    name: '公有脚本',
    value: '公有脚本'
  },
  {
    name: '私有脚本',
    value: '私有脚本'
  },
  {
    name: '后台执行',
    value: '后台执行'
  }
]

//  脚本类型
export const LanguageTypeList = [
  {
    name: 'shell',
    value: 'shell'
  },
  {
    name: 'playbook',
    value: 'playbook'
  },
  {
    name: 'python',
    value: 'python'
  }
  // {
  //   name: 'powershell',
  //   value: 'powershell'
  // }
]

//  云主机运行状态
export const VmStatus = {
  0: '未知',
  1: '运行中',
  2: '已关闭',
  3: '启动中',
  4: '关闭中',
  5: '断电中',
  6: '重启中',
  7: '挂起中',
  8: '恢复中',
  9: '销毁中',
  10: '挂起',
  11: '销毁',
  12: '创建中',
  13: '错误',
  14: '迁移中',
  15: '状态更新中',
  16: '扩容中',
  17: '已回收',
  18: '已删除'
}

//  云主机运行状态
export const VmStatusColor = {
  0: 't-info',
  1: 't-success',
  2: 't-info',
  3: 't-warning',
  4: 't-warning',
  5: 't-warning',
  6: 't-warning',
  7: 't-warning',
  8: 't-warning',
  9: 't-warning',
  10: 't-warning',
  11: 't-error',
  12: 't-warning',
  13: 't-error',
  14: 't-warning',
  15: 't-warning',
  16: 't-warning',
  17: 't-warning',
  18: 't-success'
}

//  云主机运行状态
export const ServiceDefinition = {
  1: require(`@/assets/img/operation/service/vm.png`),
  2: require(`@/assets/img/operation/service/app.png`),
  3: require(`@/assets/img/operation/service/ops.png`),
  4: require(`@/assets/img/operation/service/rq.png`),
  5: require(`@/assets/img/operation/service/app.png`),
  6: require(`@/assets/img/operation/service/app.png`),
}

//  私有网络-青云私有云 网络状态
export const NetworkType = {
  0: '自管',
  1: '受管',
  2: '基础网络'
}

export const notValidUrl = [
  '/api/monitor/reportVmAssetCost/exportReportVmAsset',
  '/api/monitor/reportVmAssetCost/exportReportVmCost',
  '/api/monitor/reportProjectAssetCost/exportReportProjectCost',
  '/api/service/project/exportProjectRes',
  '/api/monitor/reportPublicResourceBill/exportReportPublicResourceBill'
]

export default {
  Themes,
  MenuCollect,
  AssemblytTitle,
  HostComputerStatus,
  OsType,
  AliyunDetailStatus,
  Scriptlanguage,
  VmStatus,
  VmStatusColor,
  ServiceDefinition,
  SyncTimeList,
  NetworkType,
  notValidUrl
}