<template>
	<div class="body">
		<div class="header">
			<van-nav-bar title="产品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="tu">
			<van-swipe style="width: 100%; height: 100%; overflow: hidden;" :autoplay="2000">
				<van-swipe-item v-for="(image, index) in database.ProductBanners" :key="index">
					<img class="swiper-banner" :src="image" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="yunnan">
			<h3>{{database.Title}}</h3>
			<p>{{database.SortTitle}}</p>
			<div class="jiang">
				<van-row gutter="20">
					<van-col span="8">
						<div class="jiang-l">价格：<span class="jiang-zi">{{'￥'+database.AdultPrice}}</span></div>
					</van-col>
					<van-col span="8">
						<div class="jiang-m">已预约：{{database.AppointCount}}</div>
					</van-col>
					<van-col span="8">
						<div class="jiang-r">剩余:{{database.SurplusCount}}</div>
					</van-col>
				</van-row>
			</div>
		</div>
		<div class="xianlu">
			<van-tabs v-model="activeName">
				<van-tab title="线路介绍" name="a" v-html="database.LineFeature">
					
						<!-- 千华魅力,体验非物质文化遗产展示馆的民族文化、花卉文化、美食文化、 -->
				</van-tab>
				<van-tab title="行程介绍" name="b" v-html="database.TourItinerary"></van-tab>
				<van-tab title="行程亮点" name="c" v-html="database.TourHighlights"></van-tab>
			</van-tabs>
		</div>
		<div class="footer-weixin">
			<div class="weixin-left">
				<van-row gutter="20">
					<van-col span="8">
						<div class="wechat">
							<div class="wechat-t"><img src="../assets/img/wechat.png" alt="" /></div>
							<div class="wechat-b">微信</div>
						</div>
					</van-col>
					<van-col span="8">
						<div class="wechat">
							<div class="wechat-t"><img src="../assets/img/phone.png" alt="" /></div>
							<div class="wechat-b">电话</div>
						</div>
					</van-col>
					<van-col span="8">
						<div class="wechat" @click="clickme()" >
							<div class="wechat-t" v-if="isshow"> <img src="../assets/img/xin2.png" alt="" /></div>
							<div class="wechat-t" v-else><img src="../assets/img/xin1.png" alt="" /></div>
							<div class="wechat-b">收藏</div>
						</div>
					</van-col>
				</van-row>
			</div>
			<div class="weixin-right">
				<button @click = "goyuyue">马上预约</button>
			</div>
		</div>

	</div>
</template>

<script>
	import {getProductDetail,getCollection,Collection} from "@/api/Product"
	import HomeNavbar from '../components/HomeNavbar'
	export default {
		data() {
			return {
				isshow:false,
				videoProductId:"",
				dali: "云南昆明+大理+丽江6日五晚跟团",
				price: "￥5698",
				spring: "温泉养生+VIP私人游船+雪山登顶+敞篷吉普环海+网红天空之境",
				yuyue: "20",
				shengyu: "15",
				activeName: 'a',
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				database:[
// 					Id: "00000000-0000000",//id
// 					Title: "string",//标题
// 					SortTitle: "string",//副标题
// 					ImgUrl: "string",//产品封面
// 					AdultPrice: 0,//成人价
// 					ChildrenPrice: 0,//儿童价
// 					AllCount: 0,//总数量
// 					AppointCount: 0,//已预约数量
// 					SurplusCount: 0,//剩余数量
// 					LineFeature: "string",//线路特色
// 					TourItinerary: "string",//行程介绍
// 					TourHighlights: "string",//行程亮点
// 					//获取产品的轮播图
					// ProductBanners: []
				]
			}
		},
		created(){
				this.videoProductId  = this.$route.params.type
				//调用获取详情方法
				this.getproductdetail()
		
			},
			beforeRouteEnter(to, from, next) {
			if (from.path == "/yuyue") {
					to.meta.isBack = true;
				} else {
					to.meta.isBack = false;
				
				}
				next();
			},
			watch:{
			},
			methods: {
				goyuyue(){
					this.$router.push("/yuyue")
				},
				clickme(){
					let {isshow} = this;
					if(!isshow){
						this.getcollection()
						this.isshow = true;
					}else{
						this.uncollection()
						this.isshow = false
					}
				},
				onClickLeft() {
					this.$router.go(-1)
			},
			//获取详情的方法
				getproductdetail(){
					let {videoProductId} =this;
					getProductDetail(videoProductId).then(res=>{
							console.log(res)
							if(res.data.type==1){
								this.database = res.data.data
							}
							console.log(this.database)
						}).catch(err=>{
							console.log(err)
						})
				},
			// 取消收藏
			uncollection(){
				let id = "305d4b81-428b-4e59-aaf5-be988ef56bca"
				Collection(id).then(res=>{
					console.log(res)
					if(res.data.type == 1){
						this.$toast(res.data.message)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			
			//收藏产品
			getcollection(){
				let memberId = localStorage.UserId
				let {Id} = this.database;
				let productId = "305d4b81-428b-4e59-aaf5-be988ef56bca"
				getCollection(memberId,productId).then(res=>{
					console.log(res)
					if(res.data.type==1){
						this.$toast(res.data.message)
					}
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped="">
	.body {
		width: 100%;
	}
	.tu {
		height: 2rem;
		padding: 0 0.1rem;
	}
	
	.tu .swiper-banner {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 0.1rem;
		object-fit: cover;
	}
	
	
	/*.tu {
		padding: 0.1rem 0.1rem;
		height: 2rem;
		border-top: 0.05rem solid #f1f1f1;
	}
	
	.tu img {
		width: 100%;
		height: 100%;
		border-radius: 5%;
	}*/
	.yunnan {
		padding: 0 0.1rem;
	}
	
	.yunnan h3 {
		height: 0.3rem;
		line-height: 0.3rem;
	}
	
	.yunnan p {
		padding: 0.1rem 0;
		color: #777777;
		font-size: 0.14rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.jiang {
		width: 100%;
		height: 0.4rem;
		text-align: center;
		color: #8d8d8d;
	}
	
	.jiang-zi {
		color: red;
	}
	
	.xianlu {
		border-top: 0.05rem solid #f1f1f1;
	}
	
	.xianlu-jieshao {
		padding: 0.1rem 0.1rem;
	}
	
	.xianlu-jieshao p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		color: #8d8d8d;
		font-size: 0.14rem;
	}
	
	.footer-weixin {
		width: 100%;
		padding: 0 0.1rem;
		height: 0.5rem;
		background-color: #fff;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0.6rem;
		/* padding-bottom: 0.5rem; */
	}
	
	.weixin-left {
		width: 50%;
		float: left;
		font-size: 0.14rem;
		color: #8d8d8d;
	}
	
	.weixin-right {
		width: 50%;
		float: right;
		height: 0.5rem;
		text-align: right;
	}
	
	.weixin-right button {
		padding: 0.08rem 0.2rem;
		background-color: #56a8fc;
		border: 0.01rem solid #bbb;
		border-radius: 2rem;
		color: #fff;
		margin-top: 0.05rem;
	}
	
	.wechat {
		width: 0.5rem;
		height: 0.5rem;
		text-align: center;
		position: relative;
	}
	
	.wechat-t {
		width: 0.3rem;
		height: 0.25rem;
		position: absolute;
		top: 0.02rem;
		left: 0.1rem;
		text-align: center;
	}
	
	.wechat img {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		object-fit: cover;
	}
	
	.wechat-b {
		width: 0.5rem;
		height: 0.2rem;
		position: absolute;
		bottom: 0.02rem;
		left: 0;
		}

	
</style>