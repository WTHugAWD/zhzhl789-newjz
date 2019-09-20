<template>
	<div class="container">
		<div class="top-module">
			<van-nav-bar
			  title="评价"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			/>
			<span class="tijiao" @click ="tijiao()">提交</span>
		</div>
		<div class="second-module">
			<van-row>
			  <van-col span="8">
			  	<img class="tu" :src="$route.params.type.image" />
				  </van-col>
			  	<div class="tu-right">
			  		<van-col span="16">
			  			<span class="xiangfu">相符描述</span>
			  			<div class="xiangfu-star">
				  			<van-rate
								van-rate v-model="value1" />
			  			</div>
					</van-col>
				</div>				  
			</van-row>
		</div>
		<div class="third-module">
			<div class="word">
				宝贝满足你的期待吗？说说你的心得吧，分享给想买的他们吧！
			</div>
		</div>
		<div class="fourth-module">
			<div class="fuwu-module">
				<van-col span="8">
			  		<span class="fuwu">服务描述</span>
				</van-col>
				<van-col span="8">
			  		 <div class="fuwu-star">
			  			<van-rate
						 van-rate v-model="value" />
			  		 </div>	
				</van-col>
			</div>
		</div>
		
	</div>
</template>

<script>
import {PostEvaluation} from "@/api/Order"
	export default{
		data() {
		    return {
		    	radio:"",
				value:0,
				value1:1,
				txt:"相关评价",
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
				  ],
				database:{
                    MemberId:"str",//: 用户ID ,
                    OrderId :"",//: 订单ID ,
                    Consistent:1,// 相符描述 ,
                    Describe:"str",//: 评价 ,
                    ImgUrl:"",// : 照片 ,
                    Anonymous :false,//  是否匿名 ,
                    Serve :1,//  服务描述
                }	
		    }
		  },
		  created(){
			  console.log(this.$route.params.type.orderid)
			   console.log(this.$route.params.type.image)
			  	this.database.MemberId = localStorage.UserId
				this.database.orderId = this.$route.params.type.orderid
				this.database.Consistent = this.value1;
				this.database.Describe = this.txt
				this.database.ImgUrl = this.$route.params.type.image
				this.database.Anonymous = false;
				this.database.Serve = this.value;
		  },
		  methods:{
		    onSearch(){	
			},
			tijiao(){
				this.postevaluation()
			},
		     onClickLeft() {
		     this.$router.go(-1)
		    },
		       //订单评价
        postevaluation(){
			let {database} = this
        	PostEvaluation(database).then(res=>{
					console.log(res)
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
	.top-module{
		position: relative;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 0.18rem;
	    font-weight: 500;
	    letter-spacing: 0.03rem;
	}
	.tijiao{
		color: #56a8fc;
		font-size: 0.15rem;
	    letter-spacing: 0.03rem;
	    z-index: 100;
	    position: absolute;
	    top: 0.16rem;
	    right: 0.15rem;
	    
	}
	.second-module{
		margin-top: 0.05rem;
		background-color: white;
	}
	.tu-right{
		/*position: relative;*/
		display:block ;
	}
	.xiangfu{
		color: #737373;
		font-size: 0.15rem;
	    letter-spacing: 0.02rem;
	    margin-left: 0.1rem;
	    margin-top: 0.35rem;
	    float: left;
	}
	.xiangfu-star{
		margin-left: -0.2rem;
		margin-top: 0.35rem;
		/*float: right;*/
	}
	.tu{
		margin-left: 0.1rem;
		width: 90%;
		height: 1rem;
		padding: 0.02rem 0rem;
		border-radius: 0.06rem;
	}
	.van-icon-arrow-left:before {
	    content: "\F008";
	    color: black;
	}
	.van-nav-bar__text{
		color: black;
		font-size: 0.13rem;
	    letter-spacing: 0.03rem;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 0.18rem;
	    font-weight: 500;
	    letter-spacing: 0.03rem;
	}
	.van-icon-star-o:before {
	    content: "\F0AC";
	    /*font-size: 0.23rem;*/
	    padding: 0 0.05rem;
	}
	.third-module{
		height: 1.8rem;
		background-color: white;
		margin-top: 0.1rem;
	}
	.word{
		color: #979797;
		font-size: 0.15rem;
	    letter-spacing: 0.01rem;
	    padding: 0.1rem 0.1rem;
	}
	.fourth-module{
		height: 0.45rem;
		background-color: white;
		margin-top: 0.1rem;
	}
	.fuwu-module{
		height: 0.45rem;
		margin-top: 0.1rem;
		padding: 0.12rem 0.1rem;
	}
	.fuwu{
		color: #737373;
		font-size: 0.15rem;
	    letter-spacing: 0.02rem;
	}
	.fuwu-star{
		margin-left: -0.35rem;
		
		
	}
</style>