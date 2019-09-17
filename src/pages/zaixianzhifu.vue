<template>
	<div class="container">
		<header>
			<van-nav-bar
			  title="在线支付"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			>
			</van-nav-bar>
		</header>
		<!--第一栏-->
		<div class="first-module">
			<span class="hao">订单号：</span>
			<span class="number">156897872897452</span>
		</div>
		<!--第二栏-->
		<div class="second-module">
			<span class="yingfu">应付金额</span>
			<div class="price1">
			    <span class="yangjiao">￥</span>
			    <span class="shuzi">5698</span>	
			</div>
		</div>
		<!--第三栏-->
		<div class="third-module">
			<div class="third-module-top">
				<span class="keyong">可用优惠券</span>
				<span>
					<img class="xiala" src="../assets/img/xiala.png" />
				</span>
			</div>
			<div class="third-module-center">
				<div class="top-module">
    				<van-row>
					  	<van-col span="7">
						  	<div class="topmodule-left">
						  		<div class="dikouquan">
									<van-button type="default"></van-button>
									<div class="dikouword">抵扣券</div>
						  		</div>
						  		<span class="yangjiao">￥</span>
						  		<span class="price2">100</span>
						  	</div>
					  	</van-col>
					  	<van-col span="15">
						  	<div class="topmodule-right">
						  		<div class="tejia">特价抵扣券</div>
						  		<div class="zhang">张家界7日游</div>
						  		<div class="manjian">满1000减100</div>
						  	</div>
						  	
					  	</van-col>
					  	<van-col span="2">
					  		<van-radio-group class="radio-state" v-model="radio">
							  <van-radio name="1"></van-radio>
							</van-radio-group>
					  	</van-col>
					</van-row>
	    		</div>
	    		<div class="bottom-module">
			        		<van-row >
								<van-col span="16">
									<div class="qixian">使用期限：自领取之日起7天有效</div>
								</van-col>
								<van-col span="8">
							    </van-col>
							</van-row>
		        </div>
			</div>
		</div>
		<!--第四栏-->
		<div class="fourth-module">
			<div class="xuanze">选择支付方式</div>
			<div class="danxuankuang">
				<van-radio-group v-model="radio">
				  <van-cell-group>
				  	<img class="weixin-tu" src="../assets/img/wechat.png" />
				    <van-cell title="微信支付" clickable @click="radio = '1'">
				      <van-radio slot="right-icon" name="1" />
				    </van-cell>
				  </van-cell-group>
				</van-radio-group>
			</div>
		</div>
		<!--第五栏-->
		<div class="fifth-module">
				<button class="tijiao">提交</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		data() {
		    return {
		    	radio: '1',
		    	value:0,
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
		      	]
		    }
		  },
		  methods:{
		    onSearch(){	
		    },
		    onClickLeft() {
		      Toast('返回');
		    },
		  }
		
	}
</script>

<style>
	.container{
		background: #f1f1f1;
		padding-top: 0.45rem;
	}
	html{
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
	    font-size: 0.13rem;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 0.18rem;
	    font-weight: 500;
	    letter-spacing: 0.02rem;
	}
	.first-module{
		height: 0.5rem;
		background-color: white;
		letter-spacing: 0.01rem;
	}
	.hao{
		float: left;
		margin-top: 0.15rem;	
		margin-left: 0.1rem;
	}
	.number{
		float: right;
		margin-top: 0.15rem;	
		margin-right: 0.1rem;
	}
	.number:after{
		content: '';
		clear: both;
	}
	.second-module{
		height: 0.5rem;
		background-color: white;
		margin-top: 0.1rem;
		letter-spacing: 0.01rem;
	}
	.yingfu{
		float: left;
		margin-top: 0.15rem;	
		margin-left: 0.1rem;
	}
	.price1{
		float: right;
		margin-top: 0.15rem;	
		margin-right: 0.1rem;
		color: red;
		font-weight: bold;
	}
	.price1:after{
		content: '';
		clear: both;
	}
	.yangjiao{
		font-size: 0.14rem;
	}
	.shuzi{
		font-size: 0.18rem;
	}
	.third-module{
		height: 2rem;
		background-color: white;
		margin-top: 0.1rem;
	}
	.third-module-top{
		margin-top: 0.2rem;
	}
	.keyong{
		margin-left: 0.1rem;
		letter-spacing: 0.01rem;
		display: block;
		padding: 0.1rem 0.02rem;
	}
	.xiala{
		width: 0.25rem;
		height: 0.25rem;
		float: right;
		display: block;
		margin-top: -0.35rem;
	}
	.xiala{
		content: '';
		clear: both;
	}
	.third-module-center{
		background-color: #eef6fc;
		margin: -0.1rem 0.1rem;
		border-radius: 0.05rem;
	}
	.top-module{
		position: relative;
		margin-top: 0.2rem;
		border-bottom: 1px dashed #dcdcdc;
		
	}
	.top-module .van-radio{
		margin-left: -0.02rem;
	}
	.radio-state{
		margin-top: 0.4rem;
	}
	.top-module:before{
		content: '';
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background:white ;
		position: absolute;
		left:-0.1rem;
		top: 90%;
	}
	.top-module:after{
		content: '';
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background:white ;
		position: absolute;
		right:-0.1rem;
		top: 90%;
	}
	.van-button{
		width: 0.5rem;
		height: 0.2rem;
		border: 1px solid #f13434;
		border-radius: 0.1rem;		
	}
	.topmodule-left{
		margin-left: 0.2rem;
		margin-top: 0.15rem;
	}
	.dikouquan{
		margin-left: 0.25rem;
	}
	.dikouword{
		font-size: 0.1rem;
		color:#f13434 ;
	    position: absolute;
		margin-left: 0.07rem;
		margin-top: -0.21rem;
	}
	.yangjiao{
		font-size: 0.18rem;
		color: #eb0606;
	}
	.price2{
		font-size: 0.3rem;
		color: #eb0606;
		font-weight: bold;
	}
    .topmodule-right{
    	margin-top: 0.12rem;
    }
	.tejia{
		letter-spacing: 0.02rem;
		margin-left: 0.45rem;
	}
	.zhang{
		font-size: 0.12rem;
		letter-spacing: 0.02rem;
		color: #828282;
		padding: 0.05rem;
		margin-left: 0.4rem;
	}
	.manjian{
		font-size: 0.12rem;
		letter-spacing: 0.015rem;
		color: #419cfa;
		margin-left: 0.45rem;
	}
	.bottom-module{
		height: 0.4rem;
		line-height: 0.4rem;
	}
	.qixian{
		font-size: 0.11rem;
		letter-spacing: 0.01rem;
		color: #969696;
		text-align: center;
		margin-top: -0.01rem;
		margin-left: -0.15rem;
	}
	.fourth-module{
		height: 0.9rem;
		background-color: white;
		margin-top: 0.1rem;
	}
	.xuanze{
		padding-top: 0.2rem;
		margin-left: 0.1rem;
		letter-spacing: 0.01rem;
	}
	.danxuankuang{
		margin-top: 0.15rem;
	}
	.weixin-tu{
		width: 0.3rem;
		height: 0.3rem;
		margin-left: 0.15rem;
		margin-top: 0.05rem;
	}
	.van-cell{
		width: 87%;
	    margin-left: 0.45rem;
	    margin-top: -0.42rem;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    padding: 10px 15px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    /* line-height: 24px; */
	    position: relative;
	    background-color: #fff;
	    color: #323233;
	    font-size: 0.15rem;
	    letter-spacing: 0.01rem;
	    overflow: hidden;
	    z-index: 100;
	}
	.fifth-module{
		margin-top: 0.1rem;
		text-align: center;	
	}
	.tijiao{
		margin-top: 0.3rem;
		border-radius: 0.05rem;
		border: 0rem;
		width: 3.3rem;
		height: 0.5rem;
		background-color: #56a8fc;
		color: white;
		font-size: 0.18rem;
		letter-spacing: 0.02rem;
	}
		
</style>