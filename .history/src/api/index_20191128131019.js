import { get, post } from '@/utils/request'
import { APP_ID, APP_SECRET } from '@/utils/const'
const API_URL = 'https://test.youbaobao.xyz:18081'
// const APP_ID = 'wx1a5c77f69e55e258'

export function getHomeData (params) {
  return get(`${API_URL}/book/home/v2`, params)
};
export function getRecommend (params) {
  return get(`${API_URL}/book/home/recommend/v2`)
};
export function getFreeRead (params) {
  return get(`${API_URL}/book/home/freeRead/v2`)
};
export function getHotBook (params) {
  return get(`${API_URL}/book/home/hotBook/v2`)
};
export function getOpenId (code) {
  return get(`${API_URL}/openId/get`, {
    appId: APP_ID,
    secret: APP_SECRET,
    code
  })
};
// 注册
export function register (openId, userInfo) {
  return post(`${API_URL}/user/register`, {
    openId,
    platfrom: mpvuePlatform, // 自动获取平台信息 微信 还是支付宝
    ...userInfo
  })
};

export function search (params) {
  return get(`${API_URL}/book/search`, params)
};

export function hotSearch () {
  return get(`${API_URL}/book/hot-search`)
};

export function hotSearch () {
  return get(`${API_URL}/book/hot-search`)
};