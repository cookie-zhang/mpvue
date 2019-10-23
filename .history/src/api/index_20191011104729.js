import { get } from '@/utils/request'
const API_url = 'https://test.youbaobao.xyz:18081'
export function getHomeData () {
  return get(`${ API_url }/book/home/v2?openId=1234'`,).then((res)=>{
    console.log(res)
  }).catch((erro) => {
    console.log(erro)
  })
};
