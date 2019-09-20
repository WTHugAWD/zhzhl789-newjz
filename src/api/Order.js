import axios from '../libs/api.request'
//下单 POST /api/order/PlaceOrder
export const PostPlaceOrder =(data)=>{  
    return axios.request({
      url: 'order/PlaceOrder',
      method: 'post',
      data:data,
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//支付成功回调 POST /api/order/call_back
export const Postcall_back =(data)=>{  
    return axios.request({
      url: 'order/call_back',
      method: 'post',
      data:data,
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
  //退款 POST /api/order/Refund
export const PostRefund =(data)=>{  
    return axios.request({
      url: 'order/Refund',
      method: 'post',
      data:data,
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//订单评价 POST /api/order/Evaluation
export const PostEvaluation =(data)=>{  
    return axios.request({
      url: 'order/Evaluation',
      method: 'post',
      data:data,
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
  //获取微信支付参数 GET /api/order/WeChatPay
export const getWeChatPay =(billNo)=>{  
    return axios.request({
      url: 'order/WeChatPay',
      method: 'get',
      params:{billNo:billNo},
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//根据订单状态获取订单列表  GET /api/order/OrderList
export const getOrderList =(memberId,orderState,pageIndex,pageSize)=>{  
    return axios.request({
      url: 'order/OrderList',
      method: 'get',
      params:{memberId:memberId,orderState:orderState,'pageParameters.pageIndex':pageIndex,'pageParameters.pageSize':pageSize},
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }

    //获取订单详情  GET /api/order/OrderInfo
export const getOrderInfo =(orderId,memberId)=>{  
    return axios.request({
      url: 'order/OrderInfo',
      method: 'get',
      params:{orderId:orderId,memberId:memberId},
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }
//获取订单退款详情 GET /api/order/RefundInfo
export const getRefundInfo =(orderId,memberId,type)=>{  
    return axios.request({
      url: 'order/RefundInfo',
      method: 'get',
      params:{orderId:orderId,memberId:memberId,type:type},
      headers:{'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      'Content-type': 'application/json'}
    })
  }