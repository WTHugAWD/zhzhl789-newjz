<template>
	<div class="body">
        <!-- <div class="title">
             <div class="returnImg"><img :src="imgUrl1" alt=""></div>
             <span class="back" @click="onClickLeft">返回</span>
            <span class="title-name">待付款</span>
        </div> -->
        <header>
			<van-nav-bar
			  title="待付款"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			>
			</van-nav-bar>
		</header>
        <div class="line"></div>

        <div 
            v-for="item in database"
            :key ="item.id"
        class="list-box">
            <div class="photo">
            <img :src="item.ProductImg " alt="">
        </div>
        <div class="tour-text">
            <span class="text1">{{item.ProductName}}</span><br>
            <span class="text2">
                订单总价：{{item.OrderPirce }}
            </span>
            <span class="text3"><br>
               出行日期：{{item.TravelTime }}
            </span>
            <span class="text4"><br>
              付款方式: {{item.PaymentType }}
            </span>
    
         </div>
            <div class="purchase" @click="clickme()">立即支付</div>
            <div class="purchase1" @click="tellUs">取消订单</div>
   
        </div>
      


 
      

    <div class="list-box">
        <div class="photo1">
            <img :src="imgUrl" alt="">
        </div>
        <div class="tour-text">
            <span class="text1">国庆国内游</span><br>
            <span class="text2">
                订单总价：
            </span>
            <span class="text3"><br>
               出行日期：2019.12.14
            </span>
            <span class="text4"><br>
              付款方式: 在线支付
            </span>
            <p class="text5">
                失效
            </p>
        </div>
        
    </div>
       

  
 </div>
</template>

<script>
	import qs from 'qs'
    import md5 from 'js-md5';
    import {OpenWindow}  from "@/api/Home"
    import {getOrderList} from "@/api/Order"
 //	import thisisjsonp from 'jsonp'

	export default {
		name: 'payment',
		data() {
			return {
                imgUrl:require("@/assets/img/fenghuang.jpg"),
                 imgUrl1:require("@/assets/img/return.png"),
                 pageIndex:1,
                 pageSize:100,	
                 database:[],//要渲染的数组
                 str1:"到店支付",
                 str:""
			}
		},
		activated(){
			this.$store.state.showTab = true;
		},
		created() {
            this.$store.state.showTab = true;
            this.getorderlist()
		},
		methods: {
            clickme(){
                this.$router.push("/zaixianzhifu")
            },
			tellUs(){
                // this.$dialog.confirm({
                //     title: '取消订单',
                //     message: '您确定要取消订单吗？'
                //     }).then(() => {
                //     // on confirm
                //     }).catch(() => {
                //     // on cancel
                //     });
                this.openwindow()
            },
            onClickLeft(){
				this.$router.go(-1)
            },
            //获取弹窗
            openwindow(){
                OpenWindow().then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            },
            //根据订单状态获取订单列表
            getorderlist(){
                let {pageSize,pageIndex} = this
                let memberId = localStorage.UserId
                let orderState = 0
                getOrderList(memberId,orderState,pageIndex,pageSize).then(res=>{
                    console.log(res)
                    if(res.data.type==1){
                        this.database = res.data.data.Rows
                    }
                }).catch(err=>{
                    console.log(err)
                })
            },
            
			
		}
		
  }


</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../assets/css/index.styl" 
	.body{
		background: #fff;
		// padding-top: 0.45rem;
		padding-bottom:0.7rem;
        overflow: hidden;
        
	}
    .*{
        margin :0;
        padding :0;
    }
//    .title {
//         width: 100%;
// 		height: 0.45rem;
// 		line-height: 0.45rem;
// 		position: fixed;
// 		top: 0;
// 		left: 0;
//         background :#fff;
//     }
//     .title-name  {
//        position: relative;
//        z-index: 10;
//        display :block;
//        text-align :center;
//        line-height :0.45rem;
//        font-size :0.2rem;          
//     }
//     .title .returnImg {
//         width :0.2rem;
//         height :0.2rem;
//          position: absolute;
//        top: 0.04rem;
//        left: 0.1rem;
//        z-index: 10;
//        display :block;   
//     }
//     .title .returnImg img {
//         width :100%;
//         height :100%;
//     }
//     .back {
      
//        position: absolute;
//        top: 0;
//        left: 0.3rem;
//        z-index: 10;
//        height :0.45rem;
//        display :block;
       
//        line-height :0.45rem;
//        font-size :0.15rem;  
//     }
.header {
    background :#FFF;
}
 .body >>> .header .van-nav-bar {
    color:black;
}
    .line {
        width :100%;
        height :0.02rem;
        background :#f1f1f1;
    }  
    .list-box {
        width :100%;
        height:1.25rem;
       position:relative;
    }
    .photo {
        width :1.3rem;
        height :1rem;
        float:left;
        margin-left:0.15rem;
        margin-top :.07rem;
    }
    .photo img {
        width :100%;
        height :100%;
        border :0.01rem;
        border-radius:.1rem;
        
    }
    .tour-text {
        float:left;
        margin-top :.05rem;
        margin-left :.05rem;
        overflow :hidden;
        width :1.9rem;
        // height :0.9rem;
        

    }
     .tour-text .text1 {
         font-size :0.18rem;
         font-weight:bold;
         
     }
     .tour-text .text2 {
         
           font-size :0.14rem;
           padding-top :.05rem;
           color :#5a5a5a;
     }
     .tour-text .text3 {
         
           font-size :0.14rem;
           padding-top :.05rem;
           color :#5a5a5a;
     }
     .tour-text .text4 {
         
           font-size :0.14rem;
           padding-top :.05rem;
           color :#5a5a5a;
     }
      .tour-text .text5 {
          width :0.3rem;
          height :0.15rem;
          background :#d2d2d2;
           font-size :0.1rem;
           color :#fff;
           border :0.01rem solid #f1f1f1;
           border-radius:0.05rem;
           text-align :center;
           line-height :0.15rem;
           margin-top :0.02rem;
        //    display :none;
      }
     .purchase  {
        border-radius: 0.5rem;
        background :#fff;
        margin-top :-0.21rem;
        margin-right :.08rem;
        width :0.6rem;
        height :0.2rem;
       border :0.01rem solid #56a8fc;
       color :#56a8fc
       line-height :0.2rem;
       text-align :center;
       font-size :0.11rem;
        position:absolute;
        bottom:0;
        right:0.08rem;
     }
     .photo1 {
        width :1.3rem;
        height :1rem;
        float:left;
        margin-left:0.15rem;
        margin-top :0.03rem;
    }
    .photo1 img {
        width :100%;
        height :100%;
        border :0.01rem;
        border-radius:.1rem;
    }
    .purchase1  {
         border-radius: 0.5rem;
        background :#fff;
        margin-top :-0.21rem;
        margin-right :.08rem;
        width :0.6rem;
        height :0.2rem;
       border :0.01rem solid #f1f1f1 ;
       color :#5a5a5a;
       line-height :0.2rem;
       text-align :center;
       font-size :0.11rem;
        position:absolute;
        bottom:0;
        right:0.8rem;
     }


 

    
</style>