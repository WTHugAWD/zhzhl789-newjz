import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'//首页
import zhuce from '@/pages/zhuce'//注册
import denglu from '@/pages/denglu'//登录
import Password from '@/pages/password'//密码
import LieBiao from '@/pages/liebiao'//列表
import LvYouGongLue from '@/pages/lvyougonglue'//旅游攻略
import ChanPinXiangQing from '@/pages/chanpinxiangqing'//产品详情
import xiangqing from '@/pages/xiangqing'//详情
import youhuiquan from '@/pages/youhuiquan'//优惠券
import yuyue from '@/pages/yuyue'//预约
import ZiXunXiangQing from '@/pages/zixunxiangqing'//资讯详情页面
import pingjiadingdan from '@/pages/pingjiadingdan'//评价订单
import shenqingtuikuan from '@/pages/shenqingtuikuan'//申请退款
import zaixianzhifu from '@/pages/zaixianzhifu'//在线支付
import Vidio from '@/pages/vidio'//视频
import UserInfo from '@/pages/userinfo'//个人中心
import Evaluate from '@/pages/evaluate'//待支付
import Payment from '@/pages/payment'//待付款
import Paymented from '@/pages/Paymented'//退款	
import Finished from '@/pages/finished'//完成
import LianXiWoMen from '@/pages/lianxiwomen'//联系我们
import ShenQingTuiKuan from '@/pages/shenqingtuikuan'//申请退款
import TuiKuanChengGong from '@/pages/tuikuanchenggong'//退款成功
import TuiKuanShiBai from '@/pages/tuikuanshibai'//退款失败
import YiZhiFu from '@/pages/yizhifu'//已支付
import searchpage from '@/pages/searchpage'//搜索页面
import ZiXun from '@/pages/zixun'//资讯页面
import Dao from "@/pages/dao" //签到页面



Vue.use(Router)

export default new Router({
//	mode:'history',
  routes: [
    {path: '/',redirect:'/denglu'},
    {path: '/index',name: 'index',component: Index,meta:{keepAlive:false}},//首页
    {path: '/zhuce',name: 'zhuce',component: zhuce},//注册
    {path: '/denglu',name: 'denglu',component: denglu},//登录
    {path: '/password',name: 'password',component: Password},//密码
    {path: '/liebiao',name: 'liebiao',component: LieBiao},//列表
    {path: '/lvyougonglue',name: 'lvyougonglue',component: LvYouGongLue},//旅游攻略
    {path: '/chanpinxiangqing',name: 'chanpinxiangqing',component: ChanPinXiangQing,},//产品详情
    //{path: '/list',name: 'list',component: list},//列表
    // {path: '/xiangqing',name: 'xiangqing',component: xiangqing},//详情
    {path: '/youhuiquan',name: 'youhuiquan',component: youhuiquan},//优惠券
    {path: '/yuyue',name: 'yuyue',component: yuyue},//预约
    {path: '/zixunxiangqing',name: 'zixunxiangqing',component: ZiXunXiangQing},//资讯详情 
    {path: '/pingjiadingdan',name: 'pingjiadingdan',component: pingjiadingdan},//评价订单
    {path: '/shenqingtuikuan',name: 'shenqingtuikuan',component: shenqingtuikuan},//申请退款
    {path: '/zaixianzhifu',name: 'zaixianzhifu',component: zaixianzhifu},//在线支付
    {path: '/vidio',name: 'vidio',component: Vidio},//视频
    {path: '/userinfo',name: 'userinfo',component: UserInfo},//个人中心
    {path: '/evaluate',name: 'evaluate',component: Evaluate},//待支付
    {path: '/payment',name: 'payment',component: Payment},//待付款
    {path: '/Paymented',name: 'Paymented',component: Paymented},//退款
    {path: '/finished',name: 'finished',component: Finished},//完成
    {path: '/lianxiwomen',name: 'lianxiwomen',component: LianXiWoMen},//联系我们
    {path: '/shenqingtuikuan',name: 'shenqingtuikuan',component: ShenQingTuiKuan},//申请退款
    {path: '/tuikuanchenggong',name: 'tuikuanchenggong',component: TuiKuanChengGong},//退款成功
    {path: '/tuikuanshibai',name: 'tuikuanshibai',component: TuiKuanShiBai},//退款失败
    {path: '/yizhifu',name: 'yizhifu',component: YiZhiFu},//已支付
    {path: '/searchpage',name: 'searchpage',component: searchpage},//搜索页面
    {path: '/zixun',name: 'zixun',component: ZiXun},//资讯页面
    {path: '/dao',name: 'dao',component: Dao},//资讯页面

    // {path: '/zixunxiangqing',name: 'zixunxiangqing',component: zixunxiangqing}//资讯详情
  ]
})
