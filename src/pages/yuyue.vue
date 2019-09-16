<template>
	<div class="container">
		<header>
			<van-nav-bar
			  title="产品预约"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			>
			</van-nav-bar>
		</header>
       <!--第一栏-->
		<div class="column1">
        		<div class="tu">
        			<img class="photo" src="../assets/img/2.jpg" />
        		</div>
        		<div class="project">
        			<div class="project-name">凤凰古城双飞9日游</div>
        			<div class="project-word"><漓江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游>桂湘全</div>
        			<div class="project-price">
        				<span class="yangjaio">￥</span>
        				<span class="money">5698</span>
        				<span class="qi">起</span>
        			</div>
        		</div>
        </div>
        <!--第二栏-->
		<div class="riqi">
			<div class="select-date">出行计划时间</div>
			<div class="date-box">
				<van-row>
				  <van-col span="24">
				  	<van-cell-group>
					  <van-field v-model="value" placeholder="可选最早/最晚出发日期" />
					</van-cell-group>
				  </van-col>
				</van-row>
			</div>
			
		</div>
		<!--第三栏-->
		<div class="jiawei">
			<div class="line">
				<van-row>
					<van-col span="12">
					  <van-cell title="儿童价：1988/人" />
				  	</van-col>
				  	<van-col span="12">
				  		<div class="jia-jian clearfix">
						  	<div class="circle-jia">+</div>
						  	<div class="number">0</div>
						  	<div class="circle-jian">-</div>
						  	
					  	</div>
				  	</van-col>
				</van-row>
			</div>
				<van-row>
					<van-col span="12">
					  <van-cell title="成人价：3988/人" />
				  	</van-col>
				  	<van-col span="12">
				  		<div class="jia-jian clearfix">
						  	<div class="circle-jia">+</div>
						  	<div class="number">0</div>
						  	<div class="circle-jian">-</div>
						  	
					  	</div>
				  	</van-col>
				</van-row>
		</div>
		<!--第四栏-->	
		<div class="lianxi">
			<van-row>
			  <van-col span="24">
			  	<div class="biaoge">
			  		<span class="word">联系人</span>
				    <input  type="text" placeholder="请输入联系人"/>	
				</div>
			  </van-col>
			  <van-col span="24">		
				<div class="biaoge">
					<span class="word">手机号</span>
				    <input type="text" placeholder="请输入手机号" />	
				</div>
			  </van-col>
			  <van-col span="24">
			  		<div class="biaoge">
				  		<span class="word">验证码</span>
					    <input type="password" placeholder="请输入验证码"/>
					    <button class="fasong">发送验证码</button>
					</div>
			  </van-col>
			</van-row>
		</div>
		<!--第五栏-->	
		<div class="liuyan">
			<div class="liuyan-title">出游留言：</div>
			<div class="liuyan-content">请输入出游留言......</div>
		</div>
		<!--第六栏-->	
		<div class="zhifu">
			<div class="zhifu-methods">支付方式</div>
			<div>
				<van-radio-group v-model="radio">
				  <van-cell-group>
				    <van-cell title="到店支付" clickable @click="radio = '1'">
				      <van-radio slot="right-icon" name="1" />
				    </van-cell>
				    <router-link to="zaixianzhifu">
				    	<van-cell title="在线支付" clickable @click="radio = '2'">
					      <van-radio slot="right-icon" name="2" />
					    </van-cell>
				    </router-link>
				  </van-cell-group>
				</van-radio-group>
			</div>
			
		</div>
		<!--第七栏-->	
		<div class="tijiao">
			<van-button type="default">提交订单</van-button>
		</div>	
	
	</div>
	
</template>

<script>
	export default{
		data() {
		    return {
		    	radio:"",
		    	value:"",
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
		     this.$router.replace("/chanpinxiangqing")
		    },
		  }
		
	}
</script>

<style scoped="">
	.container{
		background: #f1f1f1;
		padding-top: 0.45rem;
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
	/*.van-nav-bar__arrow+.van-nav-bar__text {
	    margin-left: -10px;
	    padding-left: 30px;
	}
	
	.van-nav-bar__text {
	    color: black;
	    margin: 0 -15px;
	    padding: 0 15px;
	    font-size: 0.14rem;
	    display: inline-block;
	    vertical-align: middle;
	}*/
	header .van-nav-bar .van-icon{
	  color: black;
	}
	header .van-nav-bar__text{
	  color: black;
	}
	.van-icon-arrow-left:before {
	    content: "\F008";
	    color: black;
	}
	.column1{
		border-bottom: 1px solid #e5e5e5;
        height: 1rem;
        padding: 0rem  0.05rem;
        background-color: white;
	}
	.tu{
		width: 32%;
		height: 0.9rem;
		float: left;
		margin-top: 0.05rem;
	}
	.tu:after{
		 content:".";        
	     display:block;        
	     height:0;        
	     clear:both;        
	     visibility:hidden;  
	}
	.photo{
		width: 100%;
		height: 100%;
		border-radius: 0.08rem;
	}
	.project{
		float: left;
		width: 68%;
		padding:0.1rem;
		box-sizing: border-box;
	}
	
	.project-name{
		font-size: 0.15rem;
		font-weight: bold;
		letter-spacing: 0.02rem;
		font-weight: 400;
		/*margin-top: 0.06rem; */
	}
	.project-word{
		/*margin-top: 4%;*/
		font-size: 0.12rem;
		letter-spacing: 0.01rem;
		color: #8e8e8e;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.project-price{
    	margin-top:0.04rem;
    	color: red;
	}
	.yangjiao{
		font-size: 0.12rem;	
	}
	.money{
		margin-left: -0.05rem;
		font-size: 0.16rem;
		letter-spacing: 0.01rem;
	}
	.qi{
		margin-left: -0.05rem;
		font-size: 0.12rem;
		letter-spacing: 0.02rem;
		color: #8e8e8e;
	}
	.riqi{
		height: 0.8rem;
		background-color: white;
		margin-top: 0.05rem;
	}
	.select-date{
		font-size: 0.14rem;
		font-weight: bold;
		letter-spacing: 0.01rem;
		padding: 0.08rem 0.15rem;
	}
	.date-box{
		border: 1px solid #f3f3f3;
		
	}
	.box{
		width: 0.5rem;
		height: 0.4rem;
		background-color: white;
		margin-top: 0.15rem;
		font-size: 0.13rem;
		color: #349cf4;
	}
	.day{
		font-size: 0.12rem;
		color: #349cf4;
		margin-top: 0.05rem;
		margin-left: 0.12rem;
		letter-spacing: 0.01rem;
	}
	.yuefen{
		text-align: center;
		padding-top: 0.02rem;
		position: relative;
	}
	.more{
		position: absolute;
		margin-left: 0.1rem;
	}
	.jiantou{
		width: 0.2rem;
		height: 0.2rem;
		position: absolute;
		margin-top: 0.06rem;
		margin-left: 0.08rem;
	}
	.jiawei{
		/*height: 0.85rem;*/
		background-color: white;
		margin-top: 0.1rem;
		padding: 0.05rem 0;
	}
	.line{
		border-bottom:0.01rem solid #e5e5e5;
	}
	.jia-jian{
		width: 100%;
		padding: 10px 15px;
		box-sizing: border-box;
	}
	.clearfix:after{
	     content:".";        
	     display:block;        
	     height:0;        
	     clear:both;        
	     visibility:hidden;        
	
	}
	.circle-jia{
		float: right;
		width: 0.15rem;
		height: 0.15rem;
		border-radius: 50%;
		color:#5197f8 ;
		border: 0.01rem solid #5197f8;
		/*position: absolute;*/
		/*margin-left: 0.08rem;*/
	    margin-top: 0.02rem;
		text-align: center;
		line-height: 0.13rem;
	}
	.jianhao {
		margin: auto;
	}
	.number{
		float: right;
		margin: -0.01rem 0.1rem;
	}
	.circle-jian{
		float: right;
		width: 0.15rem;
		height: 0.15rem;
		border-radius: 50%;
		color:#5197f8 ;
		border: 0.01rem solid #5197f8;
		/*position: absolute;*/
		/*margin-left: -0.5rem;*/
	    margin-top: 0.02rem;
		text-align: center;
		line-height: 0.13rem;
	}
	.van-cell{
		font-size: 0.13rem;
		letter-spacing: 0.01rem;
		
	}
	.jiaqian{
		margin: 0.1rem 0.1rem;
	}
	.lianxi{
		height: 1.2rem;
		background-color: white;
		margin-top: 0.1rem;
	}
	.biaoge{
		margin-top: 0.08rem;
		padding-bottom: 0.1rem;
	    border-bottom: 1px solid #e5e5e5;
	    position: relative;
	}
	.biaoge:nth-child(3){
		border-bottom: 0px;
	}
	.word{
		position: absolute;
		font-size: 0.13rem;
		margin-left: 0.15rem;
		letter-spacing: 0.01rem;
		margin-top: 0.03rem;
	}
	input{
		border: 0rem;
		margin-left:0.7rem ;
		font-size: 0.11rem;
		letter-spacing: 0.01rem;
	}
	.fasong{
		font-size: 0.11rem;
		border: 0rem;
		position: absolute;
		right: 0.05rem;
		margin-top: -0.35rem;
		color: #72a6f9;
		background: white;
	}
	.liuyan{
		height: 1rem;
		background-color: white;
		margin-top: 0.1rem;
		padding: 0.05rem 0.12rem;
		letter-spacing: 0.01rem;
	}
	.liuyan-title{
		font-size: 0.14rem;
	}
	.liuyan-content{
		font-size: 0.13rem;
		color: #cacaca;
		padding: 0.05rem 0rem;
	}
	.zhifu{
		height: 1.1rem;
		background-color: white;
		padding: 0.05rem 0.05rem;
		margin-top: 0.1rem;
	}
	.zhifu-methods{
		font-size: 0.14rem;
		font-weight: 500;
		padding: 0.02rem 0.13rem;
		letter-spacing: 0.01rem;
	}
	.tijiao{
		height: 0.4rem;
		background-color: white;
		margin-top: 0.08rem;
	}
	.van-button{
		width: 1.1rem;
		height: 100%;
		color: white;
		background: #56a8fc;
		letter-spacing: 0.01rem;
		float: right;
	}
	.van-button:after{
		content: '';
		clear: both;
	}
	
</style>