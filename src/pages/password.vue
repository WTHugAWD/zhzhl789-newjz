<template>
	<div>
		<HomeNavbar back="上一页" title="忘记密码" @backfun="backfun"></HomeNavbar>
    	<div class="chongzhi">重置密码!</div>
		<div class="biaoge">
			<div class="column">
			    <input name="number" type="text" v-model="phone" placeholder="请输入手机号"  style="border: none;width: 95%;"/>	
			</div>
			<div class="column">
			    <input type="password" v-model="Code" placeholder="验证码" style="border: none;width: 95%;" />	
			    <input type="button" class="fasong" :value="yzmText" @click="yzm" />
			</div>
			<!--<div class="column">
			    <input type="text" placeholder="请输入登录密码" style="border: none;width: 95%;" />	
			</div>
			<div class="column">
			    <input type="text" placeholder="请确认登录密码" style="border: none;width: 95%;" />	
			</div>-->
		</div>
		<van-button type="info" @click="FindPwd">
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
		    	phone:"",//手机号
		    	Code:"",
		    	countDownNum:60,//倒计时
		    	yzmText:"发送验证码",
		    	codeBtnState:0,//按钮只能点击一次
		    	passwordBtnState:0,//按钮只能点击一次
		    }
		},
		activated(){
			this.$store.state.showTab = false;
		},
		created() {
			this.$store.state.showTab = false;
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
					if(this.phone == ""){ 
				        this.$toast("请输入手机号");
				        return false; 
				    } 
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
			//找回密码
			FindPwd(){
				if(this.passwordBtnState == 0){
					if(this.phone == ""){
						this.$toast("请填写手机号");
						return false;
					}
					if(!(/^1[34578]\d{9}$/.test(this.phone))){ 
				        this.$toast("手机号格式有误");
				        return false; 
				    } 
					if(this.Code == ""){
						this.$toast("请填写验证码");
						return false;
					}
					this.passwordBtnState = 1;
					let self = this;
					let datas = {
							"Phone":this.phone,//手机号
							"Code":this.Code,//验证码
				        }
					console.log(datas);
					this.$axios({
				        method: "POST",
				        url:this.$url+'/api/user/FindPwd',
				        data: datas,
				    }).then(function(res) {
				        console.log(res.data);
						//如果注册成功，跳转登录页面登录
						self.$toast(res.data.message);
						self.passwordBtnState = 0;
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

<style>
	.title{
			height: 0.45rem;
			line-height: 0.45rem;
			position: fixed;
			width: 100%;
			top: 0rem;
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
		margin-left: -0.2%;
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
		margin-left: 0.05rem;
		margin-top: -0.03rem;
		letter-spacing: 0.02rem;
	}
	.forget{
		position: absolute;
		font-size: 0.20rem;
		letter-spacing: 0.02rem;
		margin-left: 42%;
	}
	.chongzhi{
		height: 0.8rem;
		line-height: 0.4rem;
		padding: 0.1rem;
		margin-left: 0.1rem;
		margin-top: 0.9rem;
		/*background-color: cornflowerblue;*/
		font-size: 0.22rem;
		letter-spacing: 0.04rem;
	}
	.biaoge{
		line-height: 0.3rem;
		margin-left: 0.22rem;
		margin-top: -0.35rem;
		font-size: 0.16rem;
		color: #b0b0b0;
		letter-spacing: 0.02rem;
	}
	 ::-webkit-input-placeholder {
		letter-spacing: 0.015rem;
		font-size: 0.16rem;	
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
	    letter-spacing: 0.03rem;
			
	}
	.column input{
		color: #333;
	}
    .van-button{
    	width: 90%;
    	border: 0px;
		height: 0.5rem;
		border-radius: 0.3rem;
		background: linear-gradient(left, #86bef7, #55a6fa);
		margin-top: 0.7rem;
		margin-left: 5%;
    }
    .submit{
    	font-size: 0.2rem;
		color: white;
		letter-spacing: 0.01rem;
    }
     a:visited {
    	color:  black;
    }
    
</style>