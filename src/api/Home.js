import axios from '../libs/api.request'
//从获取弹窗到获取资讯详情共9个 api ，其中  轮播和视频已在index.vue中调用

  //获取弹窗  /api/home/OpenWindow
  export const OpenWindow =function(){   //不需要传参
    return axios.request({
      url: 'home/OpenWindow',
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//GET /api/home/Slide  获取轮播图方法
export const getSlide =(type) => {   //不需要传参
  return axios.request({
    url: 'home/Slide',
    method: 'get',
    params:{type:type},
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}

//获取优惠券列表
export const getHomeYouHuiQuan = (memberId,pageIndex,pageSize) => {   
    return axios.request({
      url: 'home/Coupons',
      params: {memberId:memberId,'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//获取旅游攻略(优惠特惠产品，查看更多也是用此接口，旅游攻略同样根据类别获取此接口)
export const getHomeTravelStrategy = (productType,pageIndex,pageSize) => {   
  return axios.request({
    url: 'home/PreProduct',
    params: {productType:productType,'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
    method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}
//获取根据产品标题搜索产品
export const getSearch = (title,pageIndex,pageSize) => {   
  return axios.request({
    url: 'home/Search',
    params:{title:title,'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
    method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}
 
// 领取优惠券
export const getReceiveCoupons = (memberId,couponsId) => {   
  return axios.request({
    url: 'home/ReceiveCoupons',
    params:{memberId:memberId,couponsId:couponsId},
    method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}

// 获取资讯列表
export const getInformation = (pageIndex,pageSize) => {   
  return axios.request({
    url: 'home/Information',
    params:{'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
    method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}

// 获取资讯详情
export const getInformationInfo = (id) => {   
  return axios.request({
    url: 'home/InformationInfo',
    params:{id:id},
    method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}
// 获取视频方法GET /api/home/VideoList
export const getMoreVideo = (pageIndex,pageSize) => {   
  return axios.request({
    url: 'home/VideoList',
    params:{'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
    method: 'get',
    headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
    'Content-type': 'application/json'}
  })
}