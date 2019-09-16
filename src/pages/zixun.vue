<template>
	<div class="container">
		<div class="line">
			<!--标题-->
			<div class="title">
		   		<van-nav-bar title="资讯"/>
            </div>
        </div>
        <!--内容-->
		<div class="detailes">
		
			<router-link
			v-for="item in database"
			:key = "item.Id"
			tag="div"
			class="column"
			:to="{name:'zixunxiangqing',params:{id:item.Id}}">
        		<div class="tu">
        			<img class="photo" :src="item.ImgUrl" />
        		</div>
        		<div class="project">
        			<div class="project-name">{{item.Title}}</div>
        			<div class="project-word">{{item.Introduction}}</div>
        			<div class="create">{{item.DataCreateDateTime}}</div>
        		</div>
			</router-link>
			
        </div>
	</div>
</template>

<script>
import {getInformation} from "@/api/Home"
	export default{
		data() {
		    return {
		    	value:"",
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
				  ],
				  //这是存放资讯列表的数组
				  database:[

				  ],
				 
		    }
		},
		 created(){
			 //调用 获取资讯列表的方法
			 this.getinformation()
		 },
  		methods:{
			
		    onSearch(){
		    	
			},
			//获取资讯列表方法
			getinformation(){

				getInformation(1,2).then(res=>{
				console.log(res)
					if(res.data.type == 1){
						this.database = res.data.data.Rows
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
	.title{
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		width: 100%;
		top: 0rem;
		background-color: white;
		z-index: 100;
		}
	.van-nav-bar__title {
	    margin: 0 auto;
	    max-width: 60%;
	    font-size: 0.19rem;
	    font-weight: 500;
	    letter-spacing: 0.04rem;
	}
	.line{
		border-bottom: 4px solid #e5e5e5;
		margin-top: 0.5rem;
		position: fixed;
		width: 100%;
		top: -0.05rem;
	}
	.detailes{
		margin-top: 0.5rem;
	}
	.column{
		border-bottom: 1px solid #e5e5e5;
        height: 1.1rem;
        padding: 0rem  0.05rem;   
	}
	.column:last-child{
		border-bottom: 0px;
	}
	.tu{
		width: 35%;
		height: 0.9rem;
		float: left;
		margin-top: 0.1rem;
	}
	.photo{
		width: 100%;
		height: 100%;
		border-radius: 0.08rem;
	}
	.project{
		width: 61%;
		float: right;
    	margin-top: 2.8%;
	}
	.project:after{
		content: '';
		clear:both;
	}
	.project-name{
		font-size: 0.16rem;
		letter-spacing: 0.02rem;
		font-weight: 400; 
	}
	.project-word{
		margin-top: 3%;
		font-size: 0.12rem;
		letter-spacing: 0.01rem;
		color: #8e8e8e;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.create{
		font-size: 0.12rem;
		color: #c1c1c1;
		letter-spacing: 0.02rem;
		margin-top: 0.06rem;
	}
</style>