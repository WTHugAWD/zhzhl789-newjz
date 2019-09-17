<template>
	<div class="container">
		<van-nav-bar
			  title="联系我们"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			>
		</van-nav-bar>
		<div class="weixin-phone">
			<van-row>
			    <van-col span="12" class="left-line">
			    	<div>
			    		<div class="tu"  @click="showPopup">
					  		<img class="weixin-tu" src="../assets/img/wechat.png" />
					  	</div>
					  	<div class="weixin">微信</div>
						<van-popup v-model="show">
							<p class="tishi">识别图中二维码</p>
							<div class="erweima">
								<img :src="database.ImgUrl"/>
							</div>
						</van-popup>
			    	</div>
			   </van-col>
			    <van-col span="12" >
			    	<div>
			    		<div class="tu">
					  		<img class="phone-tu" src="../assets/img/phone .png" />
					  	</div>
					  	<div class="phone">
					  		<a href="tel:13520660170" style="color: #000;">电话</a>
					  	</div>
			    	</div>
			    </van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import {Contactus} from "@/api/User"
	export default{
		data() {
		    return {
		    	radio: '1',
		    	value:0,
		    	show: false,
				showF: false,
				database:[],
				//ImgUrl   Phone
		    	//url:require("@/assets/img/return.png"),
//		      	images: [
//			        'https://img.yzcdn.cn/vant/apple-1.jpg',
//			        'https://img.yzcdn.cn/vant/apple-2.jpg'
//		      	]
		    }
		  },
		  created(){
			  this.getcontactus()
		  },
		methods:{
		    onSearch(){	
		    },
		    onClickLeft() {
				this.$router.go(-1)
		    },
		    showPopup() {
		      this.show = true;
			},
			getcontactus(){
				Contactus().then(res=>{
					console.log(res)
					if(res.data.type==1){
						this.database = res.data.data	
					}
					console.log(this.database)
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped="">

	.container{
		background: #f1f1f1;
		padding-top: 0.42rem;
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
	.van-nav-bar .van-icon{
	  color: black;
	}
    .van-nav-bar__text{
	  color: black;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 0.19rem;
	    font-weight: 500;
	    letter-spacing: 0.02rem;
	}
	.weixin-phone{
		background: white;
		text-align: center;
		padding-bottom: 0.2rem;
		margin-top: 0.05rem;
	}
	.left-line{
		border-right: 1px solid #f1f1f1;
		box-sizing: border-box;
	}
	.tu{
		width: 0.4rem;
		height: 0.4rem;
		margin: auto;
		margin-top: 0.3rem;
	}
	.weixin-tu{
		width: 100%;
		height: 100%;
	}
	.weixin{
		font-size: 0.16rem;
		letter-spacing: 0.02rem;
		margin-top: 0.1rem;
	}
	.phone{
		font-size: 0.16rem;
		letter-spacing: 0.02rem;
		margin-top: 0.1rem;
	}
	.phone-tu{
		width: 100%;
		height: 100%;
		
	}
	.van-popup {
    	width: 2rem;
    	height: 1.8rem;
    	text-align: center;
    }
    .erweima{
    	width: 1.9rem;
    	height: 1.3rem;
    	padding: 0.16rem 0.05rem;
    }
    .erweima img{
    	width: 100%;
    	height: 100%;
    }
    .tishi{
    	padding-top: 0.05rem;
    }
</style>