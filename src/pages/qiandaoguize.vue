<template>
	<div class="body">
		<div class="header">
			<van-nav-bar title="签到规则" left-text="返回" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="content">
			<p>我曾经以为生命是一场游戏。从我出生开始，我的命运早已被设定好了，无论我如何尽力，我也始终是个穷人的孩子，注定成不了大事。知道读了依米花的故事，我真正感悟到了生命的本质。</p>
			<p>在非洲的戈壁滩上，有一种叫“依米”的小花。也许是神嫉妒它的美丽，故意让他默默无闻，不惹人注意，许多游人它只是一株草而已。但是，它明白它是一直在告诉自己：“我不是草，我要开花！” 于是它奋力把它那一条瘦瘦的主根蜿蜒盘曲着插入地层深处， 固执地寻找着沙漠里的如珍珠般稀有的水分，然后，一点一点地积蓄养分。经过了五年漫长时间的积累，它会在第二年的某个清晨突然绽放出美丽的花朵，无比绚丽的一朵花，似乎要占尽人世间所有色彩， 呈莲叶状的花瓣儿，每瓣自成一色红色的瓣，如同熊熊燃烧的火焰般的耀眼，白的花瓣，像山涧清晨那晶莹剔透的雪，黄的灿烂似天使袒露在阳光的闪闪发光的金色，蓝的犹如那最美最美的天空， 使其他花在它面前都相形见绌。可这最美丽的时刻却只有短短的48小时，然后它便随母株一起香消玉殒，开花就意味着生命得到终结和凋零。</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="">
	.header {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.content {
		margin-top: 0.45rem;
		border-top: 0.05rem solid #f1f1f1;
		padding: 0.15rem 0.1rem;
	}
	.content p{
		 text-indent:0.2rem;
		 color: #5b5a5a;
		 font-size: 0.14rem;
		 letter-spacing: 0.01rem;
	}
</style>