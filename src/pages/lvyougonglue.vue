<template>
	<div class="body">
		<div class="header">
			<home-navbar />
		</div>
		<div class="tu">
			<van-swipe style="width: 100%; height: 100%; overflow: hidden;" :autoplay="2000">
				<van-swipe-item v-for="(image, index) in slide" :key="index">
					<img class="swiper-banner" :src="image.ImgUrl" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="secondmodule">
			<van-row class="type-module">
				<div class="youhui">
					<van-col span="6">
						<router-link :to="{name:'liebiao',params:{type:3}}">
							<img class="module-icon" src="../assets/img/icon-youhuiquan.png"/>
							<div>每周推荐</div>
						</router-link>
					</van-col>
					<van-col span="6">
						<router-link :to="{name:'liebiao',params:{type:5}}">
							<img class="module-icon" src="../assets/img/icon-lvyou.png"/>
							<div>国内游</div>
						</router-link>
					</van-col>
					<van-col span="6">
						<router-link :to="{name:'liebiao',params:{type:6}}">
							<img class="module-icon" src="../assets/img/icon-jiaoyuzhuanqu.png"/>
							<div>国外游</div>
						</router-link>
					</van-col>
					<van-col span="6">
						<router-link :to="{name:'liebiao',params:{type:7}}">
							<img class="module-icon" src="../assets/img/icon-jinzhongyouxuan.png"/>
							<div>邮轮集锦</div>
						</router-link>
					</van-col>
				</div>
				<div class="youhui">
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-xianshigou.png" @click="BotOpen" />
						<div>签证</div>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-meishiyanxuan.png" @click="BotOpen" />
						<div>定制旅游</div>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-jiaozhoushangjia.png" @click="BotOpen" />
						<div>移民留学</div>
					</van-col>
					<van-col span="6">
						<router-link :to="{name:'liebiao',params:{type:8}}">
							<img class="module-icon" src="../assets/img/icon-gengduofuwu.png"/>
							<div>亲子研学</div>
						</router-link>
					</van-col>
				</div>
			</van-row>
		</div>
		<div class="season">
			<div class="season-zi">
				<h3>好时节</h3>
				<span>更多</span>
			</div>
			<div class="season-tu">
				<div class="tu-left" @click ="goxiangqing(ProductId[0])">
					<img :src="ImgUrl[0]" alt="" />
					<p class="tu-left-zi">
						{{Title[0]}}</p>
				</div>
				<div class="tu-right" @click ="goxiangqing(ProductId[1])">
					<img :src="ImgUrl[1]" alt="" />
					<p class="tu-right-zi">
						{{Title[1]}}</p>
				</div>
			</div>
			<div class="season-b">
				<div class="season-b-o" @click ="goxiangqing(ProductId[2])">
					<img :src="ImgUrl[2]" alt="" />
					<p class="season-o">
						{{Title[2]}}</p>
				</div>
				<div class="season-b-t" @click ="goxiangqing(ProductId[3])">
					<img :src="ImgUrl[3]" alt="" />
					<p class="season-t">
						{{Title[3]}}</p>
				</div>
				<div class="season-b-h" @click ="goxiangqing(ProductId[4])">
					<img :src="ImgUrl[4]" alt="" />
					<p class="season-h">
						{{Title[4]}}</p>
				</div>
			</div>
		</div>
		<div class="remen">
			<div class="tuijian">
				<h3>热门推荐</h3>
				<span @click="lieBiao">更多</span>
			</div>
			<div class="box1">
				<li 
				v-for="item in traveldata"
				:key = "item.Id"
				class="liebiao" @click="lieBiao">
					<div class="liebiao-left">
						<img :src="item.ImgUrl" alt="" />
					</div>
					<div class="liebiao-right">
						<p class="wenzi-o">{{item.Title}}</p>
						<p class="wenzi-t">
							{{item.sortTitle}}</p>
						<p class="wenzi-h">{{item.AdultPrice}}</p>
					</div>
				</li>
				<!-- <li class="liebiao liebiao-t">
					<div class="liebiao-left">
						<img src="../../img/02.png" alt="" />
					</div>
					<div class="liebiao-right">
						<p class="wenzi-o">凤凰古城双飞9日游</p>
						<p class="wenzi-t">
							<漓江-阳朔-世外-刘三姐-张家界-玻璃栈道-凤凰古城双飞9日游>桂湘全</p>
						<p class="wenzi-h">￥5698</p>
					</div>
				</li> -->
			</div>
		</div>

	</div>
</template>

<script>
	import HomeNavbar from '../components/HomeNavbar'
	import  {getSlide}  from '@/api/Home'
	import  {getMore,getHousjoylist}  from '@/api/Travel'
	export default {
		components: {
			HomeNavbar
		},
		data() {
			return {
				//5个好时节的数组
				five:[],
				Title:[],//标题 ,
				ImgUrl:[],//图片 ,
				ProductId:[],//跳转的产品ID ,
				ProductName:[],//产品名称 ,
				//这个是旅游攻略页面的   热门推荐和  更多的  方法数据
				traveldata:[],
				//轮播图相关数据
				slide:[	]
				}
		},
		created(){
		//获取5个好时节的方法
			this.gethousjoylist();
		//这个是调用 旅游攻略 页面的 热门推荐和  更多  的方法
			this.getmore()
			//调用获取旅游攻略的 轮播方法
			this.getslide()
		},
		methods: {
			goxiangqing(id){
				this.$router.replace({name:"chanpinxiangqing",params:{type:id}})
			},
			onClickLeft() {
					this.$router.replace('/lvyougongneng');
			},
			lieBiao() {
				this.$router.replace({name:'liebiao',params:{type:4}});
			},
			BotOpen() {
				this.$toast("暂未开放");
			}, 
			// 获取旅游攻略页面的轮播图
			getslide(){
				getSlide(2).then(res=>{
					console.log(res)
					if(res.data.type==1){
						this.slide = res.data.data
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			
			//这是获取旅游攻略页面   更多 的方法
			getmore(){
				getMore(10,200).then(res=>{
					// console.log(res)
					if(res.data.type == 1){
						this.traveldata = res.data.data.Rows
						}
					}).catch(err=>{
					console.log(err)
				})
			},
			//获取5个好时节的方法
			gethousjoylist(){
				getHousjoylist(()=>{
					console.log("不需要传参")
				}).then(res=>{
					// console.log(res)
					if(res.data.type == 1){
						this.five = res.data.data
						}
						let {five} = this
					for(var i =0;i<five.length;i++){
						this.Title = this.Title.concat(five[i].Title)
						this.ImgUrl = this.ImgUrl.concat(five[i].ImgUrl)
						this.ProductId = this.ProductId.concat(five[i].ProductId)
						this.ProductName = this.ProductName.concat(five[i].ProductName)
					}
					console.log(this.ProductName)
				}).catch(err=>{
					console.log(err)
				})
			},
		
		}
	}
</script>

<style scoped="">
	li {
		list-style: none;
	}
	
	.mask {
		height: 50%;
		width: 100%;
		background: #000;
		opacity: 0.6;
		position: fixed;
		top: 25%;
		left: 0;
		color: #fff;
		text-align: center;
	}
	
	.body {
		width: 100%;
		height: 100%;
	}
	
	.header {
		height: 0.45rem;
		line-height: 0.45rem;
	}
	
	.tu {
		height: 2rem;
		padding: 0 0.1rem;
		border-top: 0.07rem solid #f1f1f1;
	}
	
	.tu .swiper-banner {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 0.1rem;
		object-fit: cover;
	}
	
	.secondmodule {
		background-color: #ffffff;
		margin-top: 0.1rem;
		text-align: center;
		font-size: 0.14rem;
		color: #2b2a2a;
	}
	
	.youhui {
		height: 0.9rem;
		margin-bottom: 0.05rem;
	}
	
	.module-icon {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
	}
	
	.season {
		padding: 0 0.1rem;
		border-top: 0.07rem solid #f1f1f1;
	}
	
	.season-zi {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
	}
	
	.season-zi h3 {
		float: left;
		color: #282828;
	}
	
	.season-zi span {
		float: right;
		color: #a2a2a2;
	}
	
	.season-tu {
		width: 100%;
		height: 1.2rem;
		margin-top: 0.05rem;
		position: relative;
		font-size: 0.12rem;
	}
	
	.tu-left {
		width: 48%;
		height: 1rem;
		float: left;
	}
	
	.tu-left img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
	}
	
	.tu-left .tu-left-zi {
		width: 48%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 0.12rem;
		position: absolute;
		left: 0;
		bottom: 0.2rem;
		opacity: 0.8;
		color: #fff;
		background: #000;
		opacity: 0.6;
	}
	
	.tu-right .tu-right-zi {
		width: 48%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 0.12rem;
		position: absolute;
		right: 0;
		bottom: 0.2rem;
		opacity: 0.8;
		color: #fff;
		background: #000;
		opacity: 0.6;
	}
	
	.tu-right {
		width: 48%;
		height: 1rem;
		float: right;
		border-radius: 8%;
	}
	
	.tu-right img {
		width: 100%;
		height: 100%;
		border-radius: 8%;
	}
	
	.season-b {
		width: 100%;
		height: 1rem;
		font-size: 0.12rem;
		color: #fff;
		margin-bottom: 0.2rem;
		position: relative;
	}
	
	.season-b-o {
		width: 30%;
		height: 1rem;
		float: left;
	}
	
	.season-b img {
		width: 100%;
		height: 100%;
	}
	
	.season-b-t {
		width: 30%;
		height: 1rem;
		float: left;
		margin-left: 0.2rem;
	}
	
	.season-b-h {
		width: 30%;
		height: 1rem;
		float: right;
	}
	
	.season-o {
		width: 30%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		position: absolute;
		left: 0;
		bottom: 0;
		background: #000;
		opacity: 0.6;
	}
	
	.season-t {
		width: 30%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		position: absolute;
		left: 36%;
		bottom: 0;
		background: #000;
		opacity: 0.6;
	}
	
	.season-h {
		width: 30%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		position: absolute;
		right: ;
		bottom: 0;
		background: #000;
		opacity: 0.6;
	}
	
	.remen {
		padding: 0 0.1rem;
		border-top: 0.07rem solid #f1f1f1;
	}
	
	.tuijian {
		height: 0.4rem;
		line-height: 0.4rem;
	}
	
	.tuijian h3 {
		float: left;
		color: #282828;
	}
	
	.tuijian span {
		float: right;
		color: #a2a2a2;
	}
	/*.box1{
		margin-top: 0.05rem;
	}*/
	
	.liebiao {
		width: 100%;
		height: 1.1rem;
		border-bottom: 0.01rem solid #bbb;
		margin-bottom: 0.05rem;
	}
	
	.liebiao-left {
		float: left;
		width: 35%;
		height: 0.9rem;
		padding: 0.1rem 0.1rem;
	}
	
	.liebiao-left img {
		width: 100%;
		height: 100%;
		border-radius: 10%;
		object-fit: cover;
	}
	
	.liebiao-right {
		float: right;
		width: 53%;
		height: 0.9rem;
		padding: 0.1rem 0.1rem;
	}
	
	.wenzi-o {
		width: 100%;
		height: 20%;
		font-weight: 600;
	}
	
	.wenzi-t {
		width: 100%;
		font-size: 0.14rem;
		margin-top: 0.05rem;
		color: gray;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.wenzi-h {
		width: 100%;
		font-size: 0.18rem;
		height: 20%;
		color: red;
		margin-top: 0.1rem;
	}
	
	.liebiao-t {
		border-bottom: 0;
	}
	
	.van-nav-bar .van-icon {
		color: black;
	}
	
	.van-nav-bar__text {
		color: black;
	}
</style>