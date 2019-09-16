<template>
	<div>
		<div class="line">
			<div class="title">
		    	<div class="titel-box">
		    			<div class="topleft">
			    			<div class="fuhao">
			    				<img :src="url" />
				    		</div>
				    		<div class="return">返回</div>
		    			
		    			</div>
		    		<div class="product-list">产品详情</div>
		    	</div>
	    	
            </div>
		</div>
		<div class="line1">
			<div class="top-box">
				<div class="tu">
					<img src="../assets/img/1.jpg" />
				</div>
				
				<div class="tu-bottom">
					<div class="biaoti">云南昆明+大理+丽江6日5晚跟团</div>
					<div class="xiangmu">温泉养生+VIP私人游船+雪山登顶+敞篷吉普环海+网红天空之镜</div>
				
					<div class="price-order-reserve">
						<span class="price-money">
							<span class="price">价格:</span>
							<span class="fuhao1">￥</span>
							<span class="money">5698</span>
						</span>
						<span class="ordered">
							<span>已预约：</span>
							<span>20</span>
						</span>
						<span class="reserved">
							<span>剩余：</span>
							<span>15</span>
						</span>
						
				    </div>
						
			    </div>
				
			</div>
		</div>
		
		<div class="bottom-box">
			<div class="line2">
				<div class="jieshao">
					<van-tabs v-model="activeName">
					  <van-tab title="线路介绍" name="a" title-active-color="#56a8fc">
					  	<div class="everyday">
					  		<div>第一天:昆明接机</div>
							<div>第二天：昆明-石林</div>
							<div>第三天：楚雄</div>
							<div>第四天：大理-白族文化园</div>
							<div>第五天：束河古镇</div>
							<div>第六天：鲜花市场</div>	
					  	</div>
					  	
					  </van-tab>
					  <van-tab title="行程介绍" name="b">内容 2</van-tab>
					  <van-tab title="行程亮点" name="c">内容 3</van-tab>
					</van-tabs>
				</div>
				
			</div>
			<div class="wechat-annue">
				<div class="weixintoannue">
					<span class="wechat">
						<img src="../assets/img/weixin .png" />
						<span class="wechat-word">微信</span>
					</span>
					<span class="phone">
						<img src="../assets/img/dianhua.png" />
						<span class="phone-word">电话</span>
					</span>
					<span class="shoucang">
						<img src="../assets/img/shoucang.png" />
						<span class="shoucang-word">收藏</span>
					</span>
					<span>
						<router-link to="yuyue">
							<van-button type="info">马上预约</van-button>
						</router-link>
					</span>
				</div>	
			</div>
		</div>
		
		
	</div>
</template>

<script>
import {getProductDetail} from  "@/api/Product"
 	export default{
		data() {
		    return {
				
                activeName: 'a',
                value:"",
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
				  ],
				typeIndex:"",//接收liebiao 页面传过来的参数
			database:{
					Id: "000000000000",//Id
					Title: "string",//标题
					SortTitle: "string",//副标题
					ImgUrl: "string",//产品封面
					AdultPrice: 0,//成人价
					ChildrenPrice: 0,//儿童价
					AllCount: 0,//总数量
					AppointCount: 0,//已预约数量
					SurplusCount: 0,//剩余数量
					LineFeature: "string",//线路特色
					TourItinerary: "string",//行程介绍
					TourHighlights: "string",//行程亮点
					//产品轮播图
					ProductBanners: [
						
					]
									}
		    }
		  },
		  created(){
			//   console.log(this.typeIndex)
			//   //调用获取产品详情方法 
			  this.getproductdetail()
			
		  },
		  methods:{
			getproductdetail(){
				this.typeIndex = this.$route.params.type
				 getProductDetail(this.typeIndex).then(res=>{
					 console.log(res)

				 }).catch(err=>{
					 console.log(err)
				 })
			}
		}
		
	}
</script>

<style scoped="">
	.title{
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		width: 100%;
		top: 0rem;
		background-color: white;
		z-index: 100;
		}
	.line{
		border-bottom: 2px solid #e5e5e5;
		margin-top: 0.5rem;
		position: fixed;
		width: 100%;
		top: -0.05rem;

	}
	.topleft{
		position: relative;
		margin-left:-0.2%;
		margin-top: 0.04rem;
		float: left;
		font-size: 0.13rem;
	}
	.fuhao{
		float: left;
		width: 0.18rem;
		height: 0.18rem;
		
	}
	.fuhao:after{ 
		content: ''; 
		clear: both;
	}
	.fuhao img{
		width:100% ;
		height: 100%;
		margin-left: 0.05rem;
		margin-top: 0.1rem;
	}
	
	.return{
		position: absolute;
		width: 0.4rem;
		height: 0.4rem;
		margin-left: 0.25rem;
		margin-top: -0.04rem;
		letter-spacing: 0.02rem;
	}
	
	.product-list{
		text-align: center;
		color: #282828;
		font-size: 0.19rem;
		letter-spacing: 0.02rem;
		font-weight: 450;
	}
	.top-box{
		margin-top:15rem;
		margin: auto;
		padding: 0.5rem 0.05rem 0.1rem;
	}
	.tu{
		width: 100%;
		height: 2rem;	
	}
	.tu img{
		width: 100%;
		height: 100%;
		border-radius: 0.05rem;
	}
	.biaoti{
		font-weight: bold;
		margin-top: 0.1rem;
	}
	.xiangmu{
		font-size: 0.15rem;
		color: #777777;
		letter-spacing: 0.015rem;
		margin-top: 0.1rem;
	}
	.price-order-reserve{
		margin-top: 0.1rem;
	}
	.price{
		font-size: 0.13rem;
		color: #777777;
	}
	.fuhao1{
		font-size: 0.13rem;
		color: red;
	}
	.price-money{
		margin-left: 0.05rem;
	}
	.money{
		font-size: 0.18rem;
		color: red;
		
	}
	.ordered{
		margin-left: 0.5rem;
		font-size: 0.13rem;
		color: #777777;
	}
	.reserved{
		margin-left: 0.5rem;
		font-size: 0.13rem;
		color: #777777;
	}
	.line1{
		border-bottom: 8px solid #e5e5e5;
	}
	.bottom-box{
		font-size: 0.15rem;
		color: #777777;
		letter-spacing: 0.01rem;
	}
	.van-tab{
		font-size: 0.15rem;
		letter-spacing: 0.01rem;
		title-active-color: #777777;
		background: ##56a8fc;
	}
	
	.everyday{
		line-height: 0.25rem;
		margin-left: 0.1rem;
		font-size: 0.14rem;
		letter-spacing: 0.01rem;
	}
	.line2{
		border-bottom: 1px solid #e5e5e5;
	}
	.wechat{
		font-size: 0.12rem;
		letter-spacing: 0.01rem;
		margin-top: 0.5rem;
	}
	.wechat img{
		width: 8%;
		height: 8%;
        margin-bottom: 0.1rem;
        margin-left: 0.1rem;
	}
	.wechat-word{
		margin-left: -0.32rem;
		
	}
	.phone{
		font-size: 0.12rem;
		letter-spacing: 0.01rem;
		margin-left: 0.2rem;
	}
	.phone img{
		width:8%;
		height: 8%;
    	margin-bottom: 0.1rem;
	}
	.phone-word{
		margin-left: -0.32rem;
		
	}
	.shoucang{
		font-size: 0.12rem;
		letter-spacing: 0.02rem;
		margin-left: 0.4rem;
	}
	.shoucang img{
		width: 8%;
		height: 8%;
		margin-bottom: 0.1rem;
	}
	.shoucang-word{
		margin-left: -0.34rem;
		
	}
	.van-button{
		width: 1.5rem;
		height: 0.4rem;
		font-size: 0.16rem;
		background-color: #56a8fc;
		color: white;
		border: 0rem;
		border-radius: 0.20rem;
		letter-spacing: 0.02rem;
		position: absolute;
		margin-top: 0.5%;
		margin-left: 8%;

	}
	.wechat-annue{
	    margin-top: 30%;
	    position: fixed;
	    width: 100%;
	    bottom: 0rem;
	    background-color: white;
		z-index: 100;
	}
	.weixintoannue{
		position: relative;
	}
</style>