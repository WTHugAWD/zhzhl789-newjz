<template>
	<div class="container">
		<div class="title">
		    	<div class="titel-box">
		    			<div class="topleft">
			    			<div class="fuhao">
			    				<img :src="url" />
				    		</div>
				    		<div class="return" @click="onClickLeft">返回</div>
		    			
		    			</div>
		    		<div class="youhui">优惠券</div>
		    	</div>
        </div>
  
    	<div 
		v-for="item in database"
		:key ="item.Id"
		
		class="module" >
    		<div class="top-module">
    			
    				<van-row>
					  <van-col span="7">
					  	<div class="topmodule-left">
					  		<div class="dikouquan">
								<van-button type="default"></van-button>
								<div class="dikouword">{{item.Type}}</div>
					  		</div>
					  		<span class="yangjiao">￥</span>
					  		<span class="price">100</span>
					  	</div>
					  	
					  </van-col>
					  <van-col span="12">
					  	<div class="topmodule-right">
					  		<div class="tejia">{{item.Name}}</div>
					  		<div class="zhang">{{item.ProductName }}</div>
					  		<div class="manjian">{{item.Conditions }}</div>
					  	</div>
					  </van-col>
					</van-row>
					
    		</div>
    		<div class="bottom-module">
		        		<van-row >
							<van-col span="16">
								<div class="qixian">
									有效日期：{{item.FailureTime}}
								</div>
							</van-col>
							
						</van-row>
	       </div>
    	</div>


    	<!-- <div class="module" >
    		<div class="top-module">
    			
    				<van-row>
					 
					  <van-col span="7">
					  	<div class="topmodule-left">
					  		<div class="dikouquan">
								<van-button type="default"></van-button>
								<div class="dikouword">抵扣券</div>
					  		</div>
					  		<span class="yangjiao">￥</span>
					  		<span class="price">100</span>
					  	</div>
					  	 
					  </van-col>
					  <van-col span="12">
					  	<div class="topmodule-right">
					  		<div class="tejia">特价抵扣券</div>
					  		<div class="zhang">张家界7日游</div>
					  		<div class="manjian">满1000减100</div>
					  	</div>
					  </van-col>
					   <van-col span="5">
						<div class="blue-img">
					       <img :src="imgUrl" alt="">
				       </div>
					  </van-col>
					</van-row>
				 
    		</div>
    		<div class="bottom-module">
		        		<van-row >
							<van-col span="16">
								<div class="qixian">
									有效日期：2019.05.02-2020.02.09
								</div>
							</van-col>
						</van-row>
	       </div>
    	</div>


		<div class="module" >
    		<div class="top-module">
    			
    				<van-row>
					 
					  <van-col span="7">
					  	<div class="topmodule-left">
					  		<div class="dikouquan">
								<van-button type="default"></van-button>
								<div class="dikouword">抵扣券</div>
					  		</div>
					  		<span class="yangjiao">￥</span>
					  		<span class="price">100</span>
					  	</div>
					  	
					  </van-col>
					  <van-col span="12">
					  	<div class="topmodule-right">
					  		<div class="tejia">特价抵扣券</div>
					  		<div class="zhang">张家界7日游</div>
					  		<div class="manjian">满1000减100</div>
					  	</div>
					  </van-col>
					   <van-col span="5">
						<div class="blue-img">
					       <img :src="imgUrl1" alt="">
				       </div>
					  </van-col>
					</van-row>
				 
    		</div>
    		<div class="bottom-module">
		        		<van-row >
							<van-col span="16">
								<div class="qixian">
									有效日期：2019.05.02-2020.02.09
								</div>
							</van-col>
						</van-row>
	       </div>
    	</div>
 -->


	</div>
</template>

<script>
	import {getYouHuiQuan} from "@/api/User"
	export default{
		data() {
		    return {
		    	value:"",
				url:require("@/assets/img/return.png"),
				imgUrl:require("@/assets/img/blue.png"),
				imgUrl1:require("@/assets/img/gray.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
		      	],
				  show: false,
				  memberId:"",
				  pageIndex:1,
				  pageSize:100,
				  database:[]
		    }
		},
		created(){
			this.getyouhuiquan()
		},
  		methods:{

		    onClickLeft(){
				this.$router.go(-1)
			},
			getyouhuiquan(){
				let {memberId,pageIndex,pageSize} =this
				memberId = localStorage.UserId;
				getYouHuiQuan(memberId,pageIndex,pageSize).then(res=>{
					console.log(res)
					if(res.data.type == 1){
						this.database = res.data.data.Rows
					}
				}).catch(err=>{
					console.log(err)
				})
			}
       }
	}
</script>

<style>
	
    html{
		background: #f3f3f3;
	}
	.container{
		background: #f3f3f3;
		margin-top: 0.6rem;
	}
    .title{
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		width: 100%;
		top: 0rem;
		background-color: white;
		z-index: 100;
	}
	.topleft{
		position: relative;
		margin-left:-0.2%;
		margin-top: 0.04rem;
		float: left;
		font-size: 0.13rem;
	}
	.fuhao{
		position: absolute;
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
		width: 0.4rem;
		height: 0.4rem;
		position: absolute;
		left: 0.25rem;
		top: -0.03rem;
		letter-spacing: 0.02rem;
	}
	
	.youhui{
		text-align: center;
		color: #282828;
		font-size: 0.19rem;
		letter-spacing: 0.02rem;
		font-weight: 450;
	}
	.module{
		width: 95%;
		margin: auto;
		background-color: white;
		border-radius: 0.05rem;
	}
	.top-module{
		position: relative;
		margin-top: 0.2rem;
		border-bottom: 1px dashed #dcdcdc;
		
	}
	.top-module:before{
		content: '';
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background:#f3f3f3 ;
		position: absolute;
		left:-0.1rem;
		top: 86%;
		
	}
	.top-module:after{
		content: '';
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background:#f3f3f3 ;
		position: absolute;
		right:-0.1rem;
		top: 86%;
		
	}
	.van-button{
		width: 0.5rem;
		height: 0.2rem;
		border: 1px solid #f13434;
		border-radius: 0.1rem;		
	}
	.topmodule-left{
		margin-left: 0.25rem;
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
	.price{
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
	.annue{
		width: 0.75rem;
		height: 0.25rem;
		font-size: 0.10rem;
		letter-spacing: 0.02rem;
		border-radius: 0.05rem;
		background: white;
		color: #419cfa;
		border: 0.01rem solid #419cfa;
		margin-left: 0.3rem;
		margin-top: 0.06rem;
	}
	.annue-word{
		height: 0.15rem;
		line-height: 0.15rem;
	}
	.van-icon{
        color: white;
        border-radius: 50%;
        background:#389cff ;
		text-align: center;
	}
	.van-popup{
		width: 2rem;
        border-radius: 0.05rem;
		text-align: center;
		padding:0.2rem 0.2rem;
	}
	.success{
		padding-top: 0rem;
		letter-spacing: 0.01rem;
	}
	.blue-img {
        width:0.5rem;
		height: 0.5rem;
		float: right;
		
	}
	.blue-img img {
         width: 100%;
		 height: 100%;
	}
</style>