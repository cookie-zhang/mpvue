import { get } from '@/utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData (params) {  ///book/home/recommend/v2
  return get(`${API_URL}/book/home/v2`, params)
};

export function getRecommend (params) {  ///book/home/recommend/v2
  return get(`${API_URL}/book/home/v2`, params)
};