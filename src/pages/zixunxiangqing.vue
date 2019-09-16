<template>
	<div class="container">
		<!--标题-->
		<header>
			<van-nav-bar
			  title="资讯详情"
			  left-text="返回"
			  left-arrow
			  @click-left="onClickLeft"
			>
			</van-nav-bar>
		</header>
		<!--内容-->
		<div class="neirong">
			<div class="title">{{database.Title}}</div>
			<div class="date">{{database.DataCreateDateTime}}</div>
			<div class="wordandtu">
				<div class="word">{{database.Content}}</div>
				<div class="tu">
					<img class="photo" :src="database.ImgUrl" />
				</div>
				<!-- <div class="word">在非洲的戈壁上在非洲的戈壁上在非洲的戈壁上在非洲的戈壁上在非洲的戈壁上在非洲的戈壁上在非洲的戈壁上在非洲的戈壁上......</div> -->
			</div>
			
			
		</div>
	</div>
</template>

<script>
import {getInformationInfo} from "@/api/Home"
	export default{
		data() {
		    return {
		    	radio: '1',
		    	value:0,
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
				  ],
				  database:[]//存放资讯详情的数组
		    }
		  },
		  created(){
			  //获取资讯详情的方法
			  this.getinformationinfo()
		  }, 
		  methods:{
		    onSearch(){	
		    },
		    onClickLeft() {
		      this.$router.go(-1)
			},
			//获取资讯详情
			getinformationinfo(){
				let id=this.$route.params.id
			getInformationInfo(id).then(res=>{
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

<style>
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
	    font-size: 0.12rem;
	}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 0.16rem;
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
	.date{
		font-size: 0.12rem;
		color: #acacac;
		text-align: center;
		margin: 0.05rem 0.05rem;
	}
	.tu{
		width: 3.5rem;
		height: 2rem;
		margin: auto;
		object-fit: cover;
	}
	.photo{
		border-radius: 0.05rem;
		width: 100%;
		height: 100%;
	}
	/*.word{
		line-height: 0.2rem;
		font-size: 0.11rem;
		color: #5b5a5a;
		letter-spacing:0.03rem;
		margin: 0.05rem 0.15rem;
	}*/
	.wordandtu{
		margin: 0.1rem ;
	}
</style>