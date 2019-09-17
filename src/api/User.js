import axios from '../libs/api.request'
// 获取用户信息
export const getUserInfo = (memberId) => {   
    return axios.request({
      url: 'user/MemberInfo',
      params: {memberId:memberId},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
}
//获取用户优惠券
  export const getYouHuiQuan = (memberId,pageIndex,pageSize) => {   
    return axios.request({
      url: 'user/MemberCouponsInfo',
      params: {memberId:memberId,pageIndex:pageIndex,pageSize:pageSize},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
  //签到 GET /api/user/Sign
  export const SignIn = (memberId) =>{
    return axios.request({
      url:'user/Sign',
      params: {memberId:memberId},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
 //联系我们 GET /api/user/ContactUs
 export const Contactus = () =>{
  return axios.request({
    url:'user/ContactUs',
     method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}