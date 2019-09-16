<template>
	<div>
		<!--<div class="title">
	    	<div class="titel-box">
    			<div class="topleft" @click="back">
	    			<div class="fuhao">
	    				<img :src="url" />
		    		</div>
		    		<div class="return">返回</div>
    			</div>	
	    		<div class="zhuce">注册</div>
	    	</div>
		</div>-->
		<HomeNavbar back="上一页" title="注册" @backfun="backfun"></HomeNavbar>
		<div class="hi-welcome">
	    	<div class="hi">Hi!</div>
			<div class="welcome">欢迎加入！</div>
		</div>
		
		<div class="biaoge">
			<div class="column">
			    <input  type="text" placeholder="请输入用户名" v-model="username" style="border: none;width: 95%;"/>	
			</div>

			<div class="column">
			    <input type="text" placeholder="请输入手机号" v-model="phone"  style="border: none;width: 95%;"/>	
			</div>
			<div class="column">
			    <input type="text" placeholder="验证码" v-model="Code" style="border: none;width: 95%;" />	
			    <input type="button" class="fasong" :value="yzmText" @click="yzm" />
			</div>
			<div class="column">
			    <input type="password" placeholder="请输入登录密码" v-model="password" style="border: none;width: 95%;" />	
			</div>
			<div class="column">
			    <input type="password" placeholder="请确认登录密码" v-model="ConfirmPassword" style="border: none;width: 95%;" />	
			</div>
		</div>
		
		<van-button type="info" @click="Register()">
			<div class="submit">提交</div>
		</van-button>
	</div>
</template>

<script>
	import qs from 'qs'
	import md5 from 'js-md5';
	import HomeNavbar from '../components/HomeNavbar'
	export default{
		components: {
			HomeNavbar
		},
		data() {
		    return {
		    	username:"",//手机号
		    	phone:"",//手机号
		    	Code:"",
		    	countDownNum:60,//倒计时
		    	yzmText:"发送验证码",
		    	password:"",//密码
		    	ConfirmPassword:"",//确认密码
		    	codeBtnState:0,//按钮只能点击一次
		    	registerBtnState:0,//按钮只能点击一次
		    }
		},
	  	activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
			localStorage.UserId = "36eedd51-b59c-454f-8630-adf9815a03e7";//用户id
		},
		methods:{
		  	//返回上一页
			backfun(msg){
				this.$router.go(-1);
			},
		    //倒计时
			countdown:function(){
				if (this.countDownNum == 0) {
		            this.yzmText="发送验证码";
		            this.countDownNum = 60;
		            this.codeBtnState = 0;
		        }else{
		            this.yzmText="发送成功(" + this.countDownNum + ")";
		            this.countDownNum--;
		            let self = this;
		            setTimeout(function() {
		                self.countdown();
		            },1000);
		        }
			},
			//请求验证码
			yzm:function(){
				if(this.codeBtnState == 0){
					if(!(/^1[34578]\d{9}$/.test(this.phone))){ 
				        this.$toast("手机号格式有误");
				        return false; 
				    } 
					this.codeBtnState = 1;
					this.countdown();
					this.$axios.get(this.$url+'/api/user/SmsCode', {
						params: {
							"phone": this.phone,
							"codeType":0,//0：注册 1：找回密码
						},
					}).then(res => {
						console.log(res.data)
						//提示信息
						this.$toast(res.data.message);
					}).catch(error => {
						console.log('error init' + error);
					})
				}
			},
			//注册
			Register(){
				if(this.registerBtnState == 0){
					if(this.username == ""){
						this.$toast("请填写用户名");
						return false;
					}
					if(this.phone == ""){
						this.$toast("请填写手机号");
						return false;
					}
					if(this.Code == ""){
						this.$toast("请填写验证码");
						return false;
					}
					if(this.password == ""){
						this.$toast("请填写密码");
						return false;
					}
					if(this.ConfirmPassword == ""){
						this.$toast("请确认密码");
						return false;
					}
					if(this.password != this.ConfirmPassword){
						this.$toast("两次输入密码不一致");
						return false;
					}
					this.registerBtnState = 1;
					let self = this;
					let datas = {
				        	"Id": localStorage.UserId,
							"UserName": this.username,
							"Phone":this.phone,//手机号
							"Password":md5(self.password),//密码
							"Code":this.Code,//验证码
							"RefferEncode":"",//推荐码
				        }
					console.log(datas);
					this.$axios({
				        method: "POST",
				        url:this.$url+'/api/user/Register',
				        data: datas,
	//			        headers: {
	//						'Content-type': 'application/json'
	//					}
				    }).then(function(res) {
				        console.log(res.data);
						//如果注册成功，跳转登录页面登录
						self.$toast(res.data.message);
						self.registerBtnState = 0;
						if(res.data.type == 1) {
							self.$router.push({path:'./denglu'});
						}else{
							self.$toast(res.data.message);
						}
					});
				}
			}
			
		}
		
	}
</script>

<style scoped>
	.title{
			height: 0.45rem;
			line-height: 0.45rem;
			position: fixed;
			width: 100%;
			top: 0rem;
			/*background-color: paleturquoise;*/
		}
	.titel-box{
		position: relative;
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		margin: 0.05rem;
	}
	.topleft{
		position: absolute;
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
	.fuhao img{
		width:100% ;
		height: 100%;
		margin-left: 0.05rem;
		margin-top: 0.1rem;
	}
	.return{
		float: left;
		margin-left: 0.06rem;
		margin-top: -0.03rem;
		letter-spacing: 0.02rem;
	}
	.zhuce{
		position: absolute;
		margin-left: 48%;
		color: #282828;
		font-size: 0.2rem;
		letter-spacing: 0.02rem;
	}

	.welcome{
		margin-top: 0.15rem;
	}
	.hi-welcome{
		height: 0.8rem;
		padding: 0.1rem;
		margin-left: 0.2rem;
		margin-top: 0.75rem;
		/*background-color: cornflowerblue;*/
		font-size: 0.22rem;
		letter-spacing: 0.05rem;
		color: #282828;
	}
	.biaoge{
		line-height: 0.25rem;
		margin-left: 0.3rem;
		margin-top: 0.3rem;
		font-size: 0.16rem;
		color: #b0b0b0;
		letter-spacing: 0.02rem;
	}
	.fasong{
		font-size: 0.13rem;
		color:  #73b1fb;
		letter-spacing: 0.02rem;
		border: 0px;
		position: absolute;
		right: 4%;
		background-color: white;
	}
	.column{
		line-height: 0.3rem;
		margin-top: 0.15rem;
		padding-bottom: 0.1rem;
	    border-bottom: 1px solid #b0b0b0;
	    width: 95%;
	    position: relative;
	}
	.column input{
		color: #333;
	}
    ::-webkit-input-placeholder {
		letter-spacing: 0.02rem;	
	}
    .van-button{
    	width: 90%;
		height: 0.5rem;
		border-radius: 0.3rem;
		background: linear-gradient(left, #86bef7, #55a6fa);
		margin-top: 0.65rem;
		margin-left: 5%;
		border: 0rem;
    }
    .submit{
    	font-size: 0.2rem;
		color: white;
		letter-spacing: 0.02rem;
    }
     a:visited {
    	color:  black;
    }
    
</style>