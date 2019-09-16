<template>
	<div class="body">
		<div class="header">
			<van-nav-bar title="签到" left-text="返回" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="cont">
			<div class="sign">
				<ul class="dao">
					<li class="dao-t" v-for="(item,index) in list" :key="index">
						<div class="dao-o" v-if="item.typl == 0">
							<p>{{item.title}}</p>
							<div class="dao-tu-t">
								<img :src="item.tu" />
							</div>
						</div>
						<div class="dao-b" v-else>
							<p>{{item.title}}</p>
							<div class="dao-tu-t">
								<img :src="item.tu2" />
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="check">
			<div class="check-b">
				<button @click="qianDao">立即签到</button>
			</div>
			<div class="explain">
				<p>签到说明</p>
				<ul>
					<li>每日签一次，连续签到7天送一张优惠券</li>
					<li>必须连续7天签到，隔断之后清零从头开始算</li>
				</ul>
			</div>
		</div>
		<div>
			<van-popup v-model="show">
				<div class="neir-cuo">
					<img src="../assets/img/cuohao.png" alt="" />
				</div>
				<div class="neir" @click="guan">
					<img src="../assets/img/qiandao2.png" alt="" />
				</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
import {SignIn} from "@/api/User"
	export default {
		data() {
			return {
				list: [{
						id: 1,
						title: "1天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0
					},
					{
						id: 2,
						title: "2天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0,
					},
					{
						id: 3,
						title: "3天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0
					},
					{
						id: 4,
						title: "4天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0
					},
					{
						id: 5,
						title: "5天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0
					},
					{
						id: 6,
						title: "6天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0
					},
					{
						id: 7,
						title: "7天",
						tu: require('../assets/img/qian.png'),
						tu2: require('../assets/img/duihao.png'),
						typl: 0
					},
				],
				show: false,
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
		
			qianDao() {
				//执行签到方法
				this.signin()
				
 			},
			guan(){
				this.show = false;
			},
			//签到方法
			signin(){
				let memberId = localStorage.UserId
				SignIn(memberId).then(res=>{
					console.log(res)
					this.$toast(res.data.message)
				}).catch(err=>{
					console.err
				})
			}
		}

	}
</script>

<style scoped>
	.cont {
		padding: 0 0.1rem;
	}
	
	.sign {
		width: 100%;
		height: 1.4rem;
		background-color: #419cfa;
		border-radius: 6%;
	}
	
	.dao {
		width: 100%;
		height: 1rem;
		padding-top: 0.4rem;
	}
	
	.dao-t {
		float: left;
		width: 0.4rem;
		height: 0.6rem;
		background-color: #ededed;
		margin-left: 0.1rem;
	}
	.dao-o{
		width: 0.4rem;
		height: 0.6rem;
		background-color: #ededed;
	}
	.dao-b{
		width: 0.4rem;
		height: 0.6rem;
		background-color: #f5ca34;
		color: #fff;
	}
	.dao-t p {
		text-align: center;
	}
	
	.dao-tu-t {
		width: 0.2rem;
		height: 0.2rem;
		margin: 0 auto;
		margin-top: 0.1rem;
	}
	
	.dao-tu-t img {
		width: 100%;
		height: 100%;
	}
	
	.check {
		padding: 0 0.1rem;
		margin-top: 0.05rem;
		background-color: #fff;
	}
	
	.check-b {
		text-align: center;
		padding-top: 0.5rem;
	}
	
	.check button {
		padding: 0.1rem 1rem;
		background-color: #fff;
		border: 0;
		border: 0.01rem solid #419cfa;
		color: #419cfa;
		text-align: center;
		border-radius: 5rem;
	}
	
	.explain {
		margin-top: 0.6rem;
		text-align: left;
		padding: 0 0.4rem;
		font-size: 0.14rem;
		color: #bbb;
	}
	
	.explain p {
		text-align: center;
	}
	
	.explain li {
		margin-top: 0.1rem;
	}
	.neir {
		width: 1.8rem;
		height: 1.2rem;
		position: relative;
	}
	
	.neir img {
		width: 100%;
		height: 100%;
	}
	.neir-cuo{
		width: 0.3rem;
		height: 0.3rem;
		text-align: right;
		position: absolute;
		top: 0;
		right: 0;
	}
	.neir-cuo img{
		width: 100%;
		height: 100%;
	}
	.van-popup {
		background-color: transparent;
	}
</style>