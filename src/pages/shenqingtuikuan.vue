<template>
	<div class="container">
		<div class="top-module">
			<van-nav-bar
			  title="申请退款"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			/>
		</div>
		<div class="second-module">
			<van-row>
			  	<van-col span="8">
			  		<img class="tu" src="../assets/img/1.jpg" />
				</van-col>
		  		<van-col span="16">
		  			<div class="tu-right">
			  			<div class="title">国庆国内游</div>
			  			<div class="bianhao">
			  				<span class="dingdan">订单编号：</span>
			  				<span class="number">65847325945615463861</span>	
			  			</div>
			  			<div class="jine">订单金额：￥5642</div>
		  			</div>
				</van-col>			  
			</van-row>
		</div>
		<div class="third-module">
			<van-row>
			  <van-col span="6">
			  	<div class="liyou">退款理由:</div>
			  </van-col>
			  <van-col span="18">
			  	<textarea class="liyou-kuang"></textarea>
			  </van-col>
			 
			</van-row>			
		</div>
		<div class="fourth-module">
			<div class="tuikuan">退款金额</div>
				<input class="tuikuan-kuang" type="text" size="38"/>
			
		</div>
		<div class="fifth-module">
			<router-link to="tuikuanchenggong">
				<van-button type="default">提交申请</van-button>
			</router-link>		
		</div>
		<div class="fifth-module">
			<router-link to="tuikuanshibai">
				<van-button type="default">提交申请</van-button>
			</router-link>		
		</div>
		<div class="fifth-module">
			<router-link to="yizhifu">
				<van-button type="default">已支付</van-button>
			</router-link>		
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
		      Toast('返回');
		    },
		   
		  }
	
}
</script>

<style>
	html{
		background: #f1f1f1;
	}
	.container{
		background: #f1f1f1;
	}
	.van-nav-bar__text{
		color: black;
		font-size: 0.13rem;
	    letter-spacing: 0.03rem;
	}
	.van-icon-arrow-left:before {
	    content: "\F008";
	    color: black;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 19px;
	    font-weight: 500;
	    letter-spacing: 0.02rem;
	}
	.second-module{
		margin-top: 0.05rem;
		height: 1.1rem;
		background-color: white;
	}
	.tu{
		width: 90%;
		height: 1rem;
		margin: 0.05rem 0.1rem;
		border-radius: 0.06rem;
	}
	.tu-right{
	    padding: 0.1rem 0.1rem;
	}
	.title{
		font-weight: 500;
		font-size: 0.19rem;
	    letter-spacing: 0.02rem; 
	}
	.bianhao{
		color: #7d7d7d;
	    font-size: 0.12rem;
		line-height: 0.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		/*display: -webkit-box;*/
		white-space:nowrap;
		/*-webkit-box-orient: vertical;*/
		-webkit-line-clamp: 1;
		letter-spacing: 0.02rem;
		margin-top: 0.1rem;
	}
    .dingdan{
    	width:1rem;
    	
    }
	.number{ 
		/*flex: 1;*/
		letter-spacing: 0.01rem;
	}
	.jine{
		color: #7d7d7d;
		font-size: 0.12rem;
	    letter-spacing: 0.015rem;
	    margin-top: 0.1rem;
	}
	.third-module{
		height: 1.25rem;
		margin-top: 0.1rem;
		background-color: white;
	}
	.liyou {
		color: #7d7d7d;
		font-weight: 500;
		font-size: 0.15rem;
	    letter-spacing: 0.01rem;
	    padding: 0.1rem 0.1rem;
	}
	.liyou-kuang{
		width: 100%;
		border: 0rem solid black;
	    margin: 0.05rem -0.1rem;
		vertical-align:top;
	}
	.fourth-module{
		height: 1.25rem;
		margin-top: 0.1rem;
		background-color: white;
	}
	.tuikuan{
		color: #7d7d7d;
		font-weight: 500;
		font-size: 0.15rem;
	    letter-spacing: 0.01rem;
	    padding: 0.1rem 0.1rem;
	}
	.tuikuan-kuang{
		display: block;
		width: 89%;
		border: 1px solid #d2d2d2;
        line-height: 0.4rem;
		margin: 0.1rem auto 0.1rem;
	}
	.fifth-module{
		margin-top: 0.45rem;
		
	}
	.van-button{
		width: 87%;
		height: 0.5rem;
		background-color: #56a8fc;
		color: white;
		font-size: 0.17rem;
	    letter-spacing: 0.02rem;
	    padding: 0.01rem 0.1rem;
	    margin-left: 0.25rem;
	    border-radius: 0.05rem ;
	    display:block;
		margin:0 auto;
	    
	}
</style>