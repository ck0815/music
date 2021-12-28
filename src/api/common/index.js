/*
 * 全局公共请求配置文件
  in 按照
  by 通过
  of 关于
  from 来自
 */

import {
  $http
} from '@/utils/http'

// 登录接口
export const login = (params) => {
  return $http.post('/permission/login', params)
}

// 登出接口
export const logOut = () => {
  return $http.get('/permission/logout')
}

// 切换角色登录
export const checkRoleLogin = (data) => {
  return $http.post('/permission/checkRoleLogin', data)
}

//  服务地图收藏
export const setServiceMapOfCollect = (data) => {
  return $http.post('/permission/userPermissionRelation/saveUserPermissionRelation', data)
}

//  服务地图取消收藏
export const setServiceMapOfCancelCollect = (data) => {
  return $http.post('/permission/userPermissionRelation/deleteUserPermissionRelation', data)
}

//  快速入口列表
export const getFastEntryList = () => {
  return $http.get('/permission/userPermissionRelation/getUserCollectPermission')
}

//  快速入口列表排序
export const setFastEntrySort = (data) => {
  return $http.post('/permission/userPermissionRelation/updateCollectPermissionSort', data)
}

// 查询数据中心
export const getDataCenterList = (data) => {
  return $http.get('/resource/datacenter/queryDataCenterByPage', {
    params: data
  })
}

// 云平台查询数据中心
export const getCpfDataCenterList = (data) => {
  return $http.get('/resource/datacenter/getCloudDataCenterList', {
    params: data
  })
}

// 服务定义数据中心id查询数据中心对象
export const getDataCenterById = (data) => {
  return $http.get('/resource/datacenter/getDataCenterById', {
    params: data
  })
}

// 获取操作系统
export const getOsTypeList = () => {
  return $http.get('/service/os/queryOsType')
}

// 获取操作系统
export const getOsList = (data) => {
  return $http.get('/service/os/queryOsList', {
    params: data
  })
}

// 获取个人公告与消息列表
export const getAnnounceMsgList = (data) => {
  return $http.get('/message/send/queryOwnerMessageByPage', {
    params: data
  })
}

// 设置标记已读
export const setMsgTag = (data) => {
  return $http.post('/message/send/updateStatus', data)
}

// 修改密码
export const setPas = (data) => {
  return $http.post('/permission/user/restPassword', data)
}


export default {
  login,
  logOut,
  checkRoleLogin,
  setServiceMapOfCollect,
  setServiceMapOfCancelCollect,
  getFastEntryList,
  setFastEntrySort,
  getDataCenterList,
  getCpfDataCenterList
}