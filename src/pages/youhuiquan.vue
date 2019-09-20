<template>
	<div class="container">
		<div class="title">
		    	<div class="titel-box">
		    			<div class="topleft">
			    			<div class="fuhao">
			    				<img :src="url" />
				    		</div>
				    		<div class="return" @click="goback">返回</div>
		    			
		    			</div>
		    		<div class="youhui">优惠券</div>
		    	</div>
        </div>
  
    	<div 
			v-for="item in database"
			:key="item.id"
		class="module" >
    		<div class="top-module">
    			
    				<van-row>
					  <van-col span="8">
					  	<div class="topmodule-left">
					  		<div class="dikouquan">
								<van-button type="default"></van-button>
								<div class="dikouword">抵扣券</div>
					  		</div>
					  		<span class="yangjiao">￥</span>
					  		<span class="price">{{item.Price}}</span>
					  	</div>
					  	
					  </van-col>
					  <van-col span="16">
					  	<div class="topmodule-right">
					  		<div class="tejia">{{item.Name}}</div>
					  		<div class="zhang">{{item.ProductName}}</div>
					  		<div class="manjian">{{item.Conditions}}</div>
					  	</div>
					  </van-col>
					</van-row>
					
    		</div>
    		<div class="bottom-module">
		        		<van-row >
							<van-col span="16">
								<div class="qixian">{{item.FailureIns}}</div>
							</van-col>
							<van-col span="8">
						  		<button class="annue" color="#419cfa">
						  			<div class="annue-word"  @click="lingqu(item.ProductId)">
						  				立即领取
						  			</div>
						  		</button>
						    </van-col>
						</van-row>
	        </div>
    	</div>
    	
    	<!-- <div class="module" >
    		<div class="top-module">
    			
    				<van-row>
					  <van-col span="8">
					  	<div class="topmodule-left">
					  		<div class="dikouquan">
								<van-button type="default"></van-button>
								<div class="dikouword">抵扣券</div>
					  		</div>
					  		<span class="yangjiao">￥</span>
					  		<span class="price">100</span>
					  	</div>
					  	
					  </van-col>
					  <van-col span="16">
					  	<div class="topmodule-right">
					  		<div class="tejia">特价抵扣券</div>
					  		<div class="zhang">张家界7日游</div>
					  		<div class="manjian">满1000减100</div>
					  	</div>
					  </van-col>
					</van-row>
					
    		</div>
    		<div class="bottom-module">
		        		<van-row >
							<van-col span="16">
								<div class="qixian">使用期限：自领取之日起7天有效</div>
							</van-col>
							<van-col span="8">
						  		<button class="annue" color="#419cfa">
						  			<div class="annue-word" @click="lingqu">
						  				立即领取
						  			</div>
						  		</button>
						  			
						  				
						    </van-col>
						</van-row>
	        </div>
    		
    	</div> -->
 
        	
        	
	</div>
</template>

<script>
import {getHomeYouHuiQuan,getReceiveCoupons} from "@/api/Home"
	export default{
		data() {
		    return {
				value:"",
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
		      	],
				show: false,
				pageIndex:1,
				pageSize:40,
				database:[],
		
				// 	{
				// 	Id: "00000",//id
				// 	ImgUrl: "string",//图片
				// 	Name: "string",//标题
				// 	ProductId: "000",//产品Id
				// 	ProductName: "string",//适用产品
				// 	// Type: 0,//优惠券类型=[]
				// 	// Conditions: 0,//适用条件，满多少钱可以适用
				// 	ConditionsIns: "string",//适用条件说明
				// 	FailureIns:"string",//失效的
				// 	// Used: true,//是否已经适用
				// 	// Failure: 0,//领取后失效天数
				// 	// ReceiveTime: "2019-09-06T01:08:35.145Z",//领取日期
				// 	// FailureTime: "2019-09-06T01:08:35.145Z",//失效日期
				// 	// Validity: "string",//有效期
				// 	// Status: "string",//状态
				// 	Denomination:0,//面额
				// 	SurplusCount:0,//剩余
				// 	QuantityCount:0,//已领取
				// 	Price:0,//价格
				// 	AllCount:0// 总条数
				// 	}
				// ,
				// Total: 0,//总页数
				// Page: 0,//当前页码
				// Records: 0//总记录数
				}
		    },
		
		created(){
			// //调用获取优惠券的方法
			this.getyouhuiquan()
	
		},
  		methods:{
			goback(){
				this.$router.push("/index")
			},
			lingqu(id){
				this.getreceivecoupons(id)
			},
		    onSearch(){
		    	
			},
		
			// showToast() {
		    //   this.$toast({
			// 	mask: true,
			// 	message: '领取成功',
		    //   })
			// },
			//获取优惠券的方法
			getyouhuiquan(){
				let userId = localStorage.UserId; 
			getHomeYouHuiQuan(userId,this.pageIndex,this.pageSize).then(res=>{
					console.log(res);
					if(res.data.type==1){
						this.database =this.database.concat(res.data.data.Rows) 
						localStorage.setItem("youhuiquan",JSON.stringify(this.database))
						if(this.pageIndex * this.pageSize>= res.data.data.Records){
							return false
						}
						this.pageIndex++
											}
				
					console.log(this.database)
				}).catch(err=>{
					 console.log(err)
				 })
				 
			},
			//领取优惠券
			getreceivecoupons(id){
				let userId = localStorage.UserId; 
				let couponsId = id;
				getReceiveCoupons(userId,couponsId).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
       }
	}
</script>

<style scoped="scoped">
	
    html{
		background: #f3f3f3;
	}
	.container{
		background: #f3f3f3;
		margin-top: 0.6rem;
		padding-bottom:0.6rem;
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
</style>