<template>
	<van-nav-bar :title="title" :left-text="backText" @click-left="setUser" left-arrow>
	</van-nav-bar>
</template>

<script>
	export default {
		name: 'HomeNavbar',
		data(){
			return {
				backText:"返回",
				registerStr:'注册'
			}
			
		},
		props:['back','title'],//接手psMsg值
		methods:{
	      	setUser:function(){
				this.$emit('backfun',this.registerStr)//将值绑定到transfer上传递过去
				this.$router.go(-1)
	      	}
	    }
	}
</script>

<style>
	.van-nav-bar__left{
		left: 5px;
	}
	.van-nav-bar .van-icon {
		color: black;
	}
	
	.van-nav-bar__text {
		color: black;
	}
	.van-hairline--bottom::after{
		border-bottom-width: 0px;
	}
</style>