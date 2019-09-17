<template>
	<div class="body">
        <div class="title">
            <span>
                个人中心
            </span>
        </div>
        <div class="backImg">
           <img :src="imgUrl" alt="">
           <img class="head"    :src="imgUrl3" alt="">
          <span class="ueserName">用户名：{{info.UserName}}</span>
          <span class="invite">邀请码：{{info.Encode}}</span>
          
           <!-- 签到有礼 -->
           <div class="sign">
               <img :src="imgUrl21" alt="">
               <span>签到有礼</span>
               
           </div>
        </div>
      <!-- 导航栏 第一排 -->
        <div class="module-box">
            <van-row>
                <router-link to="mycoupon">
                <van-col span="5">
                    <img :src='imgUrl2' alt=""/>
                    <p class="module-text">优惠券</p>
                </van-col>
                </router-link>
                <router-link to="">
                <van-col span="5">
                    <img :src=' imgUrl4' alt=""/>
                    <p class="module-text">积分</p>
                </van-col>
                </router-link>
                <router-link to="">
                <van-col span="4">
                    <img :src='imgUrl5' alt=""/>
                    <p class="module-text">收藏</p>
                </van-col>
                </router-link>
                <router-link to="">
                <van-col span="5">
                    <img :src='imgUrl6' alt=""/>
                    <p class="module-text">钱包</p>
                </van-col>
                 </router-link>
                 <router-link to="">
                <van-col span="5">
                    <img :src='imgUrl7' alt=""/>
                    <p class="module-text">分享</p>
                </van-col>
                </router-link>
            </van-row>
        </div>
        <div class="bgcolor">
            <!-- 第二排 导航栏 -->
           <div class="module-box2">
            <van-row>
             <router-link to="">
               <van-col span="5">
	               	<router-link to="evaluate">
	               		<img :src=' imgUrl8' alt=""/>
	                    <p class="module-text2">待评价</p>
	               	</router-link>  
                </van-col>
             </router-link>
             <router-link to="paymented">
                <van-col span="5">
                    <img :src=' imgUrl9' alt=""/>
                    <p class="module-text2">已支付</p>
                </van-col>
            </router-link>
            <router-link to="">
                <van-col span="4">
                	<router-link to="pingjiadingdan">
	                    <img :src=' imgUrl10' alt=""/>
	                    <p class="module-text2">评价区</p>
                    </router-link>
                </van-col>
            </router-link>
            <router-link to="">
                <van-col span="5">
                	<router-link to="finished">
	                    <img :src='imgUrl11' alt=""/>
	                    <p class="module-text2">已完成</p>
                    </router-link>
                </van-col>
            </router-link>
              <router-link to="">
                 <van-col span="5">
                 	<router-link to="Paymented">
	                    <img :src='imgUrl9' alt=""/>
	                    <p class="module-text2">退款</p>
                    </router-link>  
                </van-col>
             </router-link>
            </van-row>
           </div>
           <!-- 第三排 导航栏 -->
          <div class="module-box3">
            <div class="first">
              <van-row>
                <router-link to="">
                 <van-col span="6">
                    <img :src=' imgUrl13' alt=""/>
                    <p class="module-text3">商家入驻</p>
                 </van-col>
                </router-link>
                <router-link to="">
                 <van-col span="6">
                    <img :src='  imgUrl14' alt=""/>
                    <p class="module-text3">金管家</p>
                 </van-col>
                </router-link>
                <router-link to="">
                 <van-col span="6">
                    <img :src=' imgUrl15' alt=""/>
                    <p class="module-text3">产品推广</p>
                 </van-col>
                </router-link>
                <router-link to="">
                 <van-col span="6">
                    <img :src='imgUrl16' alt=""/>
                    <p class="module-text3">客服</p>
                 </van-col>
                </router-link>
               </van-row>
              </div>
              
              <div class="last">
                <van-row>
                 <router-link to="">
                  <van-col span="6">
                    <img :src='  imgUrl17' alt=""/>
                    <p class="module-text3">我的视频</p>
                  </van-col>
                </router-link>
                <router-link to="">
                 <van-col span="6">
                 	<router-link to="lianxiwomen">
                 		<img :src='  imgUrl18' alt=""/>
                    	<p class="module-text3">联系我们</p>
                 	</router-link>
                 </van-col>
                </router-link>
                <router-link to="">
                 <van-col span="6">
                    <img :src='  imgUrl19' alt=""/>
                    <p class="module-text3">修改密码</p>
                 </van-col>
                </router-link>
                <router-link to="">
                 <van-col span="6">
                    <img :src='imgUrl20' alt=""/>
                    <p class="module-text3">退出登入</p>
                 </van-col>
                </router-link>
              </van-row>
              </div>
                
         
          </div>
        </div>
	</div>
</template>

<script>
	import qs from 'qs'
	import md5 from 'js-md5';
//	import thisisjsonp from 'jsonp'
    import {getUserInfo} from "@/api/User"
	export default {
		name: 'userinfo',
		data() {
			return {
                imgUrl:require("@/assets/img/z4.png"),
                imgUrl2:require("@/assets/img/youhuiquan.png"),
                imgUrl3:require("@/assets/img/avatar.png"),
                imgUrl4:require("@/assets/img/jifen(2).png"),
                imgUrl5:require("@/assets/img/shouchang.png"),
                imgUrl6:require("@/assets/img/qianbao(1).png"),
                imgUrl7:require("@/assets/img/fenxiang_line.png"),
                imgUrl8:require("@/assets/img/daifukuan.png"),
                imgUrl9:require("@/assets/img/tuikuan.png"),
                imgUrl10:require("@/assets/img/pingjia.png"),
                imgUrl11:require("@/assets/img/yizhifu.png"),
                imgUrl12:require("@/assets/img/tuikuan.png"),
                imgUrl13:require("@/assets/img/shangjia(2).png"),
                imgUrl14:require("@/assets/img/jinguanjia3.png"),
                imgUrl15:require("@/assets/img/chanpin(1).png"),
                imgUrl16:require("@/assets/img/kefu.png"),
                imgUrl17:require("@/assets/img/shipin.png"),
                imgUrl18:require("@/assets/img/lianxiwomen.png"),
                imgUrl19:require("@/assets/img/xiugaimima.png"),
                imgUrl20:require("@/assets/img/tuichu.png"),
                imgUrl21:require("@/assets/img/qiandao.png"),
                info:[]
                    // Encode: "string",   //邀请码
                    // UserName: "string", //用户名    
                    // Phone: "string",    //手机号
                    // Id: "0",  //userid
                    // Intergral: 0,       //积分
                    // SignCount: 0,       //连续签到天数
                    // LastSignTime: "string" //最后签到日期
                
			}
		},
		activated(){
			this.$store.state.showTab = true;
		},
		created() {
            this.$store.state.showTab = true;
            this.getUserInfo();
        	},
		methods: {
            getUserInfo(){
                let userId = localStorage.UserId;
                 getUserInfo(userId).then(res => {
                   if(res.data.type == 1){
                        this.info = res.data.data
                        
                   }
                    console.log(this.info)
                  }).catch(err => {
                    console.log(err);
                })
            }
		}
      }


</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../assets/css/index.styl" 
	.body{
		background: #fff;
		padding-top: 0.45rem;
		padding-bottom:0.7rem;
	}
    .*{
        margin :0;
        padding :0;
    }
    
    .title span {
       width: 100%;
       position: fixed;
       top: 0;
       left: 0;
       z-index: 10;
       height :0.45rem;
       display :block;
       text-align :center;
       line-height :0.45rem;
       font-size :0.2rem;          
    }
    .backImg {
        position :relative;
       
    }
    .backImg img {
        width :100%;
        display :block;
    }
    .backImg .head  {
        width :.5rem;
        height :.5rem;
       position :absolute;
         top: 12%;
          left: 48%;
           margin-left: -.2rem;    
    }
     .backImg .ueserName {
         position :absolute;
         top:.9rem;
         left:1.3rem; 
         color :#fff;
     }
     .backImg .invite {
         position :absolute;
         top:1.15rem;
         left:1.3rem;
         font-size :0.13rem;
         color :#fff;
     }
    .backImg .sign {
        width :.85rem;
        height :.3rem;
        background :#f57d31;
        border-radius:.05rem 0 0 .05rem;
        float :right;
        margin-top :-1.6rem;
        position :relative;
    }
     .backImg .sign span {
         font-size :.13rem;
         color :#fff;
         display :block;
         margin-left :.3rem;
         margin-top :-.24rem;
         
     }
     .backImg .sign img {
         width :.3rem;
         height :.3rem;
     }
    //  ***************************
    .module-box {
        width:92%;
        margin:0 auto;
        padding:0.15rem;
        border-radius:0.03rem;
        box-sizing:border-box;
        text-align:center;
        background:#FFF;
        margin-top :-.8rem;
        position :relative;
        z-index :11;
    }
    .module-box img{
        width:0.35rem;    
    }
    .module-box .module-text{
        font-size:0.14rem;
    }
    // *****************************
    .bgcolor {
        width :100%;
        height :60%;
        background-color:#f1f1f1;
        position :absolute;
        margin-top :-.4rem; 
    }
    .bgcolor .module-box2 {
        width :100%;
        height :1rem;
        background :#fff;
        margin-top :.5rem;
        box-sizing:border-box;
        text-align:center;
          padding:0.15rem;
    }
    .bgcolor .module-box2 img {
        width:0.35rem;
    }
    .bgcolor .module-box2 .module-text2 {
        color :#2f2f2f;
        font-size:0.13rem;
    }
    // *******************************
    .bgcolor .module-box3 {
        width :100%;
        height :45%;
        background :#fff;
        margin-top :.11rem;
         box-sizing:border-box;
        text-align:center;
          padding:0.15rem ;
    }
    .bgcolor .module-box3 img {
        width:0.35rem;
    }
    .bgcolor .module-box3 .module-text3 {
        color :#2f2f2f;
        font-size:0.13rem;
    }
     .bgcolor .module-box3 .last {
         margin-top :.3rem;
     }

    


    
</style>