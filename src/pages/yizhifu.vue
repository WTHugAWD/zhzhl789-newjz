<template>
	<div class="container">
		<header>
			<van-nav-bar
			  title="订单详情"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			>
			</van-nav-bar>
		</header>
		<!--第一模块-->
		<div class="first-module">
			<div class="first-module-tu">
				<div class="success">已支付</div>
				<img src="../assets/img/picture-1.png" />
			</div>
			<div class="first-module-word">
				<div class="word">订单编号：{{database.OrderNo}}</div>
				<div class="word">订单金额：￥{{database.OrderPirce}}</div>
				<div class="word">优惠抵扣：￥{{database.DeductionPrice}}</div>
				<div class="word">下单时间：{{database.OrderTime}}</div>
				<div class="word">支付方式：{{database.PaymentType}}</div>
			</div>
		</div>
		<!--第二模块-->
		<div class="second-module">
			<div class="second-module-title">产品信息</div>
			<div class="second-module-ticket">
				<div class="guoqing">{{database.ProductName}}</div>
				<div class="price">
					<van-row>
					  <van-col span="8">成人票：{{database.AdultNum}}位</van-col>
					  <van-col span="14">成人价：{{database.AdultPrice}}/人</van-col>
					</van-row>
					<van-row>
					  <van-col span="8">儿童票：{{database.ChildrenNum}}位</van-col>
					  <van-col span="14">儿童价：{{database.ChildrenPrice}}/人</van-col>
					</van-row>	
				</div>	
			</div>
			<div class="second-module-information">
				<div class="information-title">联系人信息</div>
				<div class="name-liuyan">
					<div>姓名：{{database.Name}}</div>
					<div>手机号：{{database.Phone}}</div>
					<div>出行留言：{{database.Message}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getOrderInfo} from "@/api/Order"
 	export default {
		 name:"yizhifu",
		data() {
		    return {
		    	radio: '1',
		    	value:0,
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
				  ],
				  database:[]
		    }
		  },
		  created(){
			  console.log(this.$route.params.type)
			  this.getorderinfo()
		  },
		  methods:{
		    onSearch(){	
		    },
		    onClickLeft() {
		     this.$router.go(-1)
			},
			getorderinfo(){
				let orderId = this.$route.params.type
				let memberId = localStorage.UserId
				getOrderInfo(orderId,memberId).then(res=>{
					console.log(res)
					if(res.data.type == 1){
						this.database = res.data.data
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			
		  }
		
	} 
</script>

<style scoped="">
	html{
		background: #f1f1f1;
	}
	.container{
		background: #f1f1f1;
	}
	.van-nav-bar{
		height: 0.4rem;
		line-height: 0.4rem;
		letter-spacing: 0.02rem;
		position: fixed;
		width: 100%;
		top: 0rem;
		background-color: white;
		z-index: 100;
	}
	header .van-nav-bar .van-icon{
	   color: black;
	}
	header .van-nav-bar__text{
	   color: black;
	}
	.van-nav-bar__arrow+.van-nav-bar__text {
	    margin-left: -20px;
	    padding-left: 25px;
	    font-size: 0.14rem;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 18px;
	    font-weight: 500;
	    letter-spacing: 0.02rem;
	}
	.title{
		font-size: 0.15rem;
		font-weight: bold;
		letter-spacing: 0.02rem;
		margin-top: 0.45rem;
		text-align: center;
	}
	.first-module{
		background-color: white;
	}
	.success{
		position: absolute;
		top: 0.45rem;
		left: 0.6rem;
		color: white;
		font-size: 0.16rem;
		font-weight: 500;
		letter-spacing: 0.02rem;
	}
	.first-module-tu{
		width:100% ;
		height: 1.1rem;
		margin-top: 0.4rem;		
		position: relative;
	}
	.first-module-tu img{
		width:100% ;
		height: 100%;
	}
	.first-module-word{
		padding: 0.1rem 0.12rem;
		font-size: 0.13rem;
		color:#636363 ;
		letter-spacing: 0.02rem;
		line-height: 0.25rem;
	}
	.second-module{
		margin-top: 0.1rem;
		background-color: white;
		padding: 0 0.08rem;	
	}
	.second-module-title{
		font-size: 0.17rem;
		font-weight: bold;
		letter-spacing: 0.02rem;
		padding: 0.1rem 0.05rem;
		border-bottom: 0.01rem solid #bfbfbf;
	}
	.guoqing{
		font-size: 0.16rem;
		font-weight: 500;
		letter-spacing: 0.02rem;
		padding: 0.06rem 0.05rem 0 0.05rem;
	}
	.price{
		font-size: 0.13rem;
		letter-spacing: 0.02rem;
		padding: 0.05rem 0.05rem;
		line-height: 0.3rem;
	}
	.second-module-information{
		padding: 0.1rem 0;
	}
	.information-title{
		font-size: 0.16rem;
		font-weight: 500;
		letter-spacing: 0.02rem;
		padding: 0.05rem 0.05rem;
	}
	.name-liuyan{
		font-size: 0.13rem;
		letter-spacing: 0.02rem;
		padding: 0.06rem 0.05rem;
		line-height: 0.28rem;
	}
</style>