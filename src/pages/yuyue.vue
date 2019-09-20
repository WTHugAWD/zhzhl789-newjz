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
        			<img class="photo" :src="img" />
        		</div>
        		<div class="project">
        			<div class="project-name" v-html="title"></div>
        			<div class="project-word" v-html="sorttitle"></div>
        			<div class="project-price">
        				<span class="yangjaio">￥</span>
        				<span class="money">{{database.ChildrenPrice}}</span>
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
					  <van-field v-model="date" placeholder="可选最早/最晚出发日期" />
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
					  <van-cell title="儿童价：2222/人"/>
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
				    <input type="text" placeholder="请输入手机号"/>	
				</div>
			  </van-col>
			  <van-col span="24">
			  		<div class="biaoge">
				  		<span class="word">验证码</span>
					    <input type="text" placeholder="请输入验证码"/>
					    <button class="fasong" @click="getcode()">发送验证码</button>
					</div>
			  </van-col>
			</van-row>
		</div>
		<!--第五栏-->	
		<div class="liuyan">
			<div class="liuyan-title">出游留言：</div>
			<textarea class="liuyan-content" placeholder="请输入出游留言......"></textarea>
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
				    <router-link :to="{name:'zaixianzhifu',params:{type:database.ProductId}}">
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
			<van-button type="default" @click ="clickme()">提交订单</van-button>
		</div>	
	
	</div>
	
</template>

<script>
	import {PostPlaceOrder} from "@/api/Order"
	import {getSmsCode} from "@/api/User"
		export default {
		name:"yuyue",
		data() {
		    return {
		    	radio:"",
		    	value:"",
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
				  ],
				  date:"",
				  img:"",
				  title:"",
				  sorttitle:"",
				  ph:"13864284868",
				  name:"ceshi123",
				  code:"123456",
				  AdultNum:1,
				  ChildrenNum:1,
				  str1:"2019-10-1",
				  str2:"2019-11-2",
				  txt:"旅游留言",
				database:{
					Code:"123456", //验证码 ,
					MemberId:"36eedd51-b59c-454f-8630-adf9815a03e7",//用户ID ,
					ProductId:"ca89fa50-20f4-42e4-a947-c95e0bd35772",//产品ID ,
					TravelStartTime:"2019-10-1",//计划出行开始时间 ,
					TravelEndTime:"2019-11-2",// 计划出行结束时间 ,
					ChildrenPrice:1,//儿童价 ,
					ChildrenNum:1,//儿童人数 ,
					AdultPrice:1,//成人价 ,
					AdultNum:1,// 成人数 ,
					Name:"ceshi123", //联系人 ,
					Phone:"13864284868", //手机号 ,
					Message :"旅游留言",//旅游留言 ,
					PaymentType :false,//支付方式 false：到店支付 true：在线支付 ,
					// PaymentWay :, //支付方式 false：微信 true：支付宝 ,
					OrderPrice:1,//订单原价 ,
					CouponsId :"ca89fa50-20f4-42e4-a947-c95e0bd35772",//抵扣券ID
				},
		    } 
		  },
		  created(){
			  	this.img=this.$route.params.data.image
				this.title=this.$route.params.data.title
				this.sorttitle= this.$route.params.data.sorttitle
				let {database}  = this
				database.MemberId = localStorage.UserId;
				database.ProductId = this.$route.params.data.id;
				database.ChildrenPrice =this.$route.params.data.ChildrenPrice
				database.AdultPrice = this.$route.params.data.AdultPrice
				database.TravelStartTime = this.str1;
				database.TravelEndTime = this.str2;
				database.Phone = this.ph
				database.Name = this.name
				database.Code = this.code
				database.ChildrenNum = this.ChildrenNum;
				database.AdultNum = this.AdultNum;
				database.OrderPrice =this.$route.params.data.ChildrenPrice + this.$route.params.data.AdultPrice
				database.Message = this.txt;
				database.CouponsId="ca89fa50-20f4-42e4-a947-c95e0bd35772";
				database.PaymentType = false;
				// database.PaymentWay = false;
				
		  },
			beforeRouteEnter(to,from,next){
			//to=》自身   from=>从哪里来

			//来自来自预约页面的要缓存
			if(from.name === 'chanpinxiangqing'){
				from.meta.keepAlive = true;
				//来自chanpinxiangqing之外的都要缓存
			}else if(from.name !== 'chanpinxiangqing'){
				//从yuyue页面'以外的页面进来的路由，他们本身都需要缓存
				from.meta.keepAlive = false;
			};
			next();
		},
		methods:{
			//调用 预约的方法
			clickme(){
				this.postplaceorder()
			},
			//调用获取验证码的方法
			getcode(){
				this.getsmscode()
			},
		    onSearch(){	
		    },
		    onClickLeft() {
		     this.$router.replace("/chanpinxiangqing")
			},
			//获取验证码
			getsmscode(){
				let phone = this.ph
				getSmsCode(phone,2).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
		
			//预约
			postplaceorder(){
				let {database} = this
				PostPlaceOrder(database).then(res=>{
					console.log(res)
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
		margin-bottom :0.6rem;
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