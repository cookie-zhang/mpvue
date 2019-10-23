import { get } from '@/utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'

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
export function getOpenId (params) {
  return get(`${API_URL}/openId/get/alipay`, {
    appId: APP_ID,
    se
  })
};