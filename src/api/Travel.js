import axios from '../libs/api.request'
//获取旅游攻略热门推荐产品，查看更多时页调用此方法
export const getMore = (pageIndex,pageSize) => {   
    return axios.request({
      url: 'travel/GetHotProduct',
      params: {'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }

  //获取首页5个好时节GET /api/travel/HousjoyList
export const getHousjoylist =function(){   //不需要传参
    return axios.request({
      url: 'travel/HousjoyList',
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//获取更多好时节列表GET /api/travel/HousjoyMutList
export const Housjoylist = (pageIndex,pageSize) => {   
    return axios.request({
      url: 'travel/HousjoyMutList',
      params:{'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }

