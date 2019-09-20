import axios from '../libs/api.request'
//获取产品详情GET /api/product/ProductInfo
export const getProductDetail = (productId) => {   
    return axios.request({
      url: 'product/ProductInfo',
      params: {productId:productId},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//收藏产品GET /api/product/Collection
export const getCollection = (memberId,productId) => {   
    return axios.request({
      url: 'product/Collection',
      params: {memberId:memberId,productId:productId},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//取消收藏  GET /api/product/UnCollection
export const Collection = (id) => {   
    return axios.request({
      url: 'product/UnCollection',
      params: {id:id},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//获取用户收藏列表 GET /api/product/CollectionList
export const getList = (memberId,pageIndex,pageSize) => {   
    return axios.request({
      url: 'product/CollectionList',
      params: {memberId:memberId,'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
  //获取穿品评价 GET /api/product
export const getproduct = (productId,pageIndex,pageSize) => {   
    return axios.request({
      url: 'product',
      params: {productId:productId,'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
      method: 'get',
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
