<template>
	<div class="body">
		<div class="header">
			<van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft"/>
		</div>
		<div class="collection">
			<input type="password" placeholder="原密码"/>
			<input type="password" placeholder="新密码"/>
			<input type="password" placeholder="确认新密码" style="border: 0;"/>
		</div>
		<div class="submission"><button>提交</button></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods: {
			onClickLeft() {
				
			},

		}
	}
</script>

<style scoped="">
	.collection{
		padding: 0 0.1rem;
		border-top: 0.05rem solid #f1f1f1;
	}
	.collection input{
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		border: 0;
		border-bottom: 0.01rem dashed #f1f1f1;
	}
	.submission{
		text-align: center;
		margin-top: 1rem;
	}
	.submission button{
		padding: 0.08rem 1rem;
		background-color: #56a8fc;
		color: #fff;
		border: 0;
		border-radius: 8%;
	}
</style>