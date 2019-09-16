<template>
	<div class="container">
		<!--标题-->
		<van-nav-bar
			  title="个人中心"
			  @click-left="onClickLeft"
			>
		</van-nav-bar>
		<!--第一模块-->
		<div class="first-module">
			<div class="topphoto">
				<!--<img class="tu" src="../assets/img/tu.png" />-->
			</div>
			<div class="tag1"></div>
		</div>
		<!--第二模块-->
		<div class="second-module"></div>
		<!--第三模块-->
		<div class="third-module"></div>
		<!--第四模块-->
		<div class="fourth-module"></div>
	</div>
</template>

<script>
	export default{
		data() {
		    return {
		    	radio:"",
		    	value:0,
		    	url:require("@/assets/img/return.png"),
		      	images: [
			        'https://img.yzcdn.cn/vant/apple-1.jpg',
			        'https://img.yzcdn.cn/vant/apple-2.jpg'
		      	]
		    }
		  },
		  methods:{
		    onSearch(){	
		    },
		    onClickLeft() {
		    },
		  }
		
	}
</script>

<style lang="scss">
	.container{
		background: #f1f1f1;
		padding-top: 0.45rem;
	}
	.van-nav-bar{
		height: 0.45rem;
		line-height: 0.4rem;
		letter-spacing: 0.02rem;
		position: fixed;
		width: 100%;
		top: 0rem;
		background-color: white;
		z-index: 100;
		}
	.first-module{
		height: 2.6rem;
		background: white;
	}
	.topphoto{
		width: 100%;
		height: 1.85rem;
	}
	.tu{
		width: 100%;
		height: 100%;
	}
	.tag1{
		width: 3.6rem;
		height: 0.95rem;
		background-color: yellowgreen;
		margin-top: -0.6rem 0 ;
		
	}
	.second-module{
		height: 0.9rem;
		margin-top: 0.1rem;
		background: white;
	}
	.third-module{
		height: 1.8rem;
		margin-top: 0.1rem;
		background: white;
	}
	.fourth-module{
		height: 0.5rem;
	    margin-top: 0.2rem;
		/*position: fixed;
		width: 100%;
		bottom: 0rem;
		background-color: white;
		z-index: 100;*/
	}
</style>