<template>
<div class="title">
	    	
	    <div class="denglu">登录</div>
		
		<div class="hi-welcome">
	    	<div class="hi">Hi!</div>
			<div class="welcome">欢迎回来！</div>
		</div>
		
		<div class="biaoge">
			<div class="column">
			    <input  type="text" v-model="phone" placeholder="请输入用户名或手机号" style="border: none;width: 95%;"/>	
			</div>

			<div class="column">
			    <input type="password" v-model="password" placeholder="请输入登录密码"  style="border: none;width: 95%;"/>	
			</div>
		</div>
		<div class="zhuce-forget">
			<router-link to="zhuce">
				<span class="zhuce2">注册</span>
			</router-link>
			<router-link to="password">
				<span class="forget">忘记密码？</span>
			</router-link>
			
		</div>
		<van-button type="info" @click="Login()">
			<div class="denglu1">登录</div>
		</van-button>
		
		
	</div>
</template>

<script>
	import qs from 'qs'
	import md5 from 'js-md5';
	export default{
		data() {
		    return {
		    	phone:"13520660170",//账号
		    	password:"123456",//密码
		    	value:"",
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
		      	]
		    }
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
		},
		methods:{
		    Login(){
//		    	if(!(/^1[34578]\d{9}$/.test(this.phone))){
//					this.$toast("手机号码不正确");
//					return false;
//				}
				if(this.password == ''){
					this.$toast("请填写密码");
					return false;
				}
				let self = this;
				let datas = {
			        	"Account": this.phone,
						"Password": md5(self.password),
			       };
			       console.log(datas);
				this.$axios({
			        method: "POST",
			        url:this.$url+'/api/user/Login',
			        data: datas,
			    }).then(function(res) {
			        console.log(res.data);
					//如果注册成功，跳转登录页面登录
					self.$toast(res.data.message);

					if(res.data.type == 1) {
						
						localStorage.AccessToken = res.data.data.Access_token;
						localStorage.RefreshToken = res.data.data.Refresh_token;
						localStorage.UserName = res.data.data.UserName;//用户名
						localStorage.UserId = res.data.data.UserId;//用户id
						localStorage.UserName = res.data.data.UserName;//实名认证状态
						self.$router.push({path:'./index'});
						// console.log(res.data.data);
						// alert(res.data.data.UserId);
					}else{
						self.$toast(res.data.message);
					}
				});
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
		}
	
	.denglu{
		text-align: center;
		font-size: 0.2rem;
		letter-spacing: 0.02rem;
		
	}

	.welcome{
		margin-top: 0.1rem;
	}
	.hi-welcome{
		height: 0.8rem;
		line-height: 0.4rem;
		padding: 0.1rem;
		margin-left: 0.15rem;
		margin-top: 0.68rem;
		/*background-color: cornflowerblue;*/
		font-size: 0.23rem;
		letter-spacing: 0.05rem;
	}
	.biaoge{
		/*line-height: 0.15rem;*/
		margin-left: 0.25rem;
		margin-top: 0.3rem;
		font-size: 0.16rem;
		color: #b0b0b0;
		letter-spacing: 0.02rem;
	}
	
	.column{
		line-height: 0.3rem;
		margin-top: 0.15rem;
		padding-bottom: 0.1rem;
		border-bottom: 1px solid #b0b0b0;
	    width: 95%;
	}
	.column input{
		color: #333;
	}
    .van-button{
    	width: 90%;
		height: 0.5rem;
		border-radius: 0.3rem;
		background: linear-gradient(left, #86bef7, #55a6fa);
		margin-top: 0.5rem;
		margin-left: 5%;
		border: 0rem;
    }
    .denglu1{
    	font-size: 0.2rem;
		color: white;
		letter-spacing: 0.025rem;
    }
    ::-webkit-input-placeholder {
		letter-spacing: 0.015rem;
		font-size: 0.16rem;	
	}
    .zhuce-forget{
    	margin-left: 8%;
    	margin-top: 0.03rem;
    	/*background-color: peachpuff;*/
    	position: relative;
    	font-size: 0.13rem;
		color:  #73b1fb;
		letter-spacing: 0.02rem;
    }
    .zhuce{
    	position: absolute;
    	margin-left: 0.2rem;
    
    }
    .zhuce2{
    	color:  #73b1fb;
    }
    a{
    	color:  #73b1fb;
    }
    .forget{
    	color:  #73b1fb;
    	position: absolute;
    	font-size: 0.13rem;
	    letter-spacing: 0.02rem;
	    margin-left: 66%;
    }
</style>