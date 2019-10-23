import { get } from '@/utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081' //?openId=1234

export function getHomeData () {
  return get(` $ { API_URL } /book/home/v2`, params).then((res)=>{
    console.log(res)
  }).catch((erro) => {
    console.log(erro)
  })
};
