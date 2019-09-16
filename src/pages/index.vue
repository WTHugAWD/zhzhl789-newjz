<template>
	<div class="body">
		<!--<div class="header">首页</div>-->
		<div class="shouji">
			<van-row class="shouji-tu">
				<van-col span="4" class="fuzhou">
					<p><span class="fuzhou-zi">福州</span><span class="fuzhou-tu"><img src="../assets/img/weizhi.png" /></span></p>
				</van-col>
				<van-col span="16">
					<router-link to="searchpage">
						<van-search placeholder="请输入搜索您所需要的"/>
					</router-link>
				</van-col>
				<van-col span="4" class="qiandao">
					<p><span @click="godao" class="qiandao-zi">签到</span><span class="qiandao-tu"><img :src="url" /></span></p>
				</van-col>
			</van-row>
		</div>
		<div class="tu">
			<van-swipe style="width: 100%; height: 100%; overflow: hidden;" :autoplay="2000">
				<van-swipe-item v-for="(image, index) in bannerList" :key="index">
					<router-link :to='{name:"chanpinxiangqing",params:{type:image.Id}}'>
						<img class="swiper-banner" :src="image.ImgUrl"/>
					</router-link>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="secondmodule">
			<van-row class="type-module">
				<div class="youhui">
					<van-col span="6">
						<router-link to="youhuiquan">
							<img class="module-icon" src="../assets/img/icon-youhuiquan.png" />
							<div>优惠券</div>
						</router-link>
					</van-col>
					<van-col span="6">
						<router-link to="lvyougonglue">
							<img class="module-icon" src="../assets/img/icon-lvyou.png" />
							<div>旅游攻略</div>
						</router-link>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-jiaoyuzhuanqu.png" />
						<div>教育联盟</div>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-jinzhongyouxuan.png" />
						<div>金众优选</div>
					</van-col>
				</div>
				<div class="youhui">
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-xianshigou.png" />
						<div>限时购</div>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-meishiyanxuan.png" />
						<div>美食严选</div>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-jiaozhoushangjia.png" />
						<div>胶州商家</div>
					</van-col>
					<van-col span="6">
						<img class="module-icon" src="../assets/img/icon-gengduofuwu.png" />
						<div>更多服务</div>
					</van-col>
				</div>

			</van-row>
		</div>
		<div class="remen">
			<div class="tuijian">
				<div class="tuijian-left">
					<img src="../assets/img/rementuijian.png" alt="" />
				</div>
				<div class="tuijian-right">
					<router-link :to="{name:'vidio'}">
						<span class="tuijian-zi">查看更多</span>
					</router-link>
					<span class="tuijian-t">
						<img src="../assets/img/gengduo2.png" alt="" />
					</span>
				</div>
			</div>
			<div class="box1">
				<ul>
					<li class="liebiao" v-for="(item,index) in videoList" :key="index" :id="item.Id">
						<div 
					
						class="liebiao-left">
							<img :src="item.ImgUrl" alt="" />
						</div>
						<div class="liebiao-right">
							<p class="wenzi-o">{{item.Title}}</p>
							<p class="wenzi-t">
								{{item.SortTitle}}
							</p>
							<p class="wenzi-h">
								<router-link :to="{name:'chanpinxiangqing',params:{type:item.Id}}">
									点击详情/购买
								</router-link>
							</p>
						</div>
					</li>
					<!--<li class="liebiao liebiaoyi">
						<div class="liebiao-left">
							<img src="../../img/02.png" alt="" />
						</div>
						<div class="liebiao-right">
							<p class="wenzi-o">凤凰古城双飞9日游</p>
							<p class="wenzi-t">
								<漓江-阳朔-世外-刘三姐-张家界-玻璃栈道-凤凰古城双飞9日游>桂湘全
							</p>
							<p class="wenzi-h">点击详情/购买</p>
						</div>
					</li>-->
				</ul>
			</div>
		</div>
		<div class="tehui">
			<div class="tehui-t">
				<div class="tuijian-left">
					<img src="../assets/img/youhuitehui.png" alt="" />
				</div>
				<div class="tuijian-right">
					<span class="tuijian-zi">查看更多</span>
					<span class="tuijian-t">
						<img src="../assets/img/gengduo1.png" alt="" />
					</span>
				</div>
			</div>
			<div class="tehui-r">
				<div class="rexiao">
					<div class="rexiao-t">
						<router-link :to="{name:'liebiao',params:{type:0}}">
							<img src="../assets/img/1.png" alt="" />
						
						</router-link>
					</div>
					<div class="rexiao-b">
						<div class="caizhai">
							<router-link :to="{name:'liebiao',params:{type:1}}">
								<img src="../assets/img/2.png" alt="" />
							
								
							</router-link>
						</div>
						<div class="meishi">
							<router-link :to="{name:'liebiao',params:{type:2}}">
								<img src="../assets/img/3.png" alt="" />
							
							</router-link>
						</div>
					</div>
				</div>
				<div class="meizhou">
					<router-link :to="{name:'liebiao',params:{type:3}}">
						<img src="../assets/img/4.png" alt="" />
					
					</router-link>
				</div>
			</div>
		</div>
		<div class="chelufuwu">
			<div class="chelu">
				<div class="fuwu"><img src="../assets/img/11.png" alt="" /></div>
				<div class="shequ"><img src="../assets/img/22.png" alt="" /></div>
			</div>
			<div class="chelu">
				<div class="fuwu"><img src="../assets/img/33.png" alt="" /></div>
				<div class="shequ"><img src="../assets/img/44.png" alt="" /></div>
			</div>
		</div>
		<div id="chi">
			<div id="btns">
				<div class="chi-l active" >美食任我吃</div>
				<div class="chi-r">生活乐翻天</div>
				<div class="shenghuo">五福临门购</div>
			</div>
			<!-- <div id="content-div">
					<div style="display:block">美食任我吃ddddd
						fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
						fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
						fffffffffffffffffffffffffffffffffffffffff
						ddddddddddddddddddddddddddddddddddddddddddddd
						ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddhhhhh</div>
					<div>生活乐翻天</div>
					<div>五福临门购</div>
			</div> -->
		</div>
	
		<div v-if="popupState == 1" class="popup-container">
			<div class="popup-banner">
				<img class="popup-delete" src="../assets/img/del.png" />
				<img class="popup-tu" src="@/assets/img/list-tu.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
import {getHomeTravelStrategy} from "@/api/Home"
	export default {
		data() {
			return {
			
				active: 0,
				value: "",
				index: '',
				url: require("@/assets/img/qiandao.png"),
				// images: [
				// 	'https://img.yzcdn.cn/vant/apple-1.jpg',
				// 	'https://img.yzcdn.cn/vant/apple-2.jpg'
				// ],
				activeName: 'a',
				popupState:0,
				pageIndex:1,
				pageSize:2,
				bannerList:[],//轮播图
				videoList:[],//轮播
				rows:[]//数据	
					// Id: "00000000",//id
					// Title: "string",//标题
					// SortTitle: "string",//副标题
					// ImgUrl: "string",//图片
					// ChildrenPrice: 0,//儿童价
					// AdultPrice: 0//儿童价
    			
			}
		},
		activated(){
			this.$store.state.showTab = true;
		},
		created() {
			this.$store.state.showTab = true;
			this.bannerBox();//轮播
			this.VideoList()//视频列表接口
			this.getmore()//首页的 查看更多
			
		},
		mounted(){
			// this.tab()
		},
		methods: {
			//选项卡操作dom，vue中得有2个数组来实现操作
			// tab(){
			// 	let oDiv = document.getElementById("chi")
			// 	let oDivBtn = document.getElementById("btns")
			// 	let oDivSpan = document.getElementById("content-div")
			// 	let obtns  = oDivBtn.getElementsByTagName("div")
			// 	let oSpans  = oDivSpan.getElementsByTagName("div")

			// 	for(var i =0; i< obtns.length;i++){
			// 		obtns[i].index = i;
			// 		obtns[i].onclick = function(){
			// 			for(var j =0;j< obtns.length; j++){
			// 				obtns[j].className = "";
			// 				oSpans[j].style.display = "none"
			// 			}
			// 			this.className = "active";
			// 			oSpans[this.index].style.display = "block"
			// 		}
			// 	}
			// },
			// toxiangqing(id){
			// 	this.$router.push({name:'chanpinxiangqing',params:{type:id}})
			// },
			//根据视频id，跳到bofang页面进行观看
			// bofang(id){
			// 	this.$router.push({name:"bofang",params:{type:id}})
			// },
			godao(){
				this.$router.push("/dao")
			},
			//获取更多
			getmore(){
				getHomeTravelStrategy(-1,10,20).then(res=>{
					// console.log(res)
				if(res.data.type==1){
					this.rows = res.data.data.Rows
					}
					console.log(this.rows)
				}).catch(err=>{
					console.log(err)
				})	
			},
			//轮播图
			bannerBox(){
				this.$axios.get(this.$url+'/api/home/Slide', {
					params: {
						"type": 1,//1：首页轮播图 2：旅游攻略轮播图
					},
					headers: {
						'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
						'Content-type': 'application/json'
					}
				}).then(res => {
					console.log(res.data)
					//提示信息
					if(res.data.type == 1){
						this.bannerList = res.data.data;
					}
				}).catch(error => {
					console.log('error init' + error);
				})
			},
			//视频列表接口
			VideoList(){
				this.$axios.get(this.$url+'/api/home/VideoList', {
					params: {
						"pageIndex": this.pageIndex,
						"pageSize": this.pageSize,
					},
					headers: {
						'Authorize': localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
						'Content-type': 'application/json'
					}
				}).then(res => {
					console.log(res.data)
					//提示信息
					if(res.data.type == 1){
						this.videoList = res.data.data.Rows;
						
					}
				}).catch(error => {
					console.log('error init' + error);
				})
			}
			
		}
	}
</script>

<style scoped>
	/*.header {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		text-align: center;
		font-weight: 550;
		letter-spacing: 0.08rem;
	}*/
	
	.shouji {
		padding: 0 0.1rem;
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: #f3f3f3;

	}
	
	.fuzhou {
		height: 0.45rem;
		line-height: 0.45rem;
		position: relative;
	}
	
	.fuzhou-tu {
		display: block;
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		top: 0.05rem;
		left: 0.35rem;
	}
	
	.fuzhou-tu img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.qiandao {
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: #f3f3f3;
		position: relative;
	}
	
	.qiandao-tu {
		display: block;
		width: 0.2rem;
		height: 0.2rem;
		position: absolute;
		top: 0.05rem;
		left: 0.4rem;
	}
	
	.qiandao-tu img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.tu {
		height: 2rem;
		padding: 0 0.1rem;
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
		height: 1rem;
		margin-bottom: 0.05rem;
	}
	
	.module-icon {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
	}
	
	.remen {
		padding: 0 0.1rem;
		border-top: 0.1rem solid #f3f3f3;
	}
	
	.tuijian {
		height: 0.4rem;
		line-height: 0.4rem;	
		margin-top: 0.1rem;
	}
	
	.tuijian-left {
		float: left;
		height: 0.3rem;
		width: 40%;
	}
	
	.tuijian-left img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.tuijian-right {
		height: 0.4rem;
		float: right;
		font-size: 0.14rem;
		text-align: right;
	}
	
	.tuijian-zi {
		width: 0.7rem;
		height: 0.3rem;
		line-height: 0.3rem;
		display: inline-block;
		float: left;
		color: #858585;
	}
	
	.tuijian-t {
		width: 0.2rem;
		height: 0.2rem;
		display: block;
		float: right;
	}
	
	.tuijian-t img {
		width: 0.2rem;
		height: 0.2rem;
		object-fit: cover;
	}
	
	.box1 {
		margin-top: 0.05rem;
	}
	
	.liebiao {
		width: 100%;
		height: 1.1rem;
		border-bottom: 0.01rem solid #dcdcdc;
		margin-bottom: 0.05rem;
	}
	
	.liebiao-left {
		float: left;
		width: 40%;
		height: 0.9rem;
		padding: 0.1rem 0.1rem;
	}
	
	.liebiao-left img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.liebiao-right {
		float: right;
		width: 51%;
		height: 0.9rem;
		padding: 0.1rem 0.05rem;
	}
	
	.liebiaoyi {
		border-bottom: 0;
	}
	
	.wenzi-o {
		width: 100%;
		font-weight: 600;
		letter-spacing: 0.02rem;
		color: #282828;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.wenzi-t {
		width: 100%;
		font-size: 0.14rem;
		margin-top: 0.08rem;
		color: #8e8e8e;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.wenzi-h {
		width: 100%;
		font-size: 0.14rem;
		height: 20%;
		color: #57a6fa;
		margin-top: 0.08rem;
		text-align: right;
	}
	
	.tehui {
		padding: 0 0.1rem;
		border-top: 0.1rem solid #f3f3f3;
	}
	
	.tehui-t {
		height: 0.4rem;
		line-height: 0.4rem;
		margin-top: 0.1rem;
	}
	
	.tehui-r {
		width: 100%;
		height: 2.3rem;
		margin-top: 0.1rem;
	}
	
	.rexiao {
		width: 65%;
		height: 2.2rem;
		float: left;
	}
	
	.rexiao-t {
		width: 100%;
		height: 1rem;
		border-radius:2px;
	}
	
	.rexiao-t img {
		width: 100%;
		height: 100%;
		border-radius: 2px;
		/* object-fit: cover; */
		
	}

	
	.rexiao-b {
		margin-top: 0.1rem;
		width: 100%;
		height: 1.1rem;
	}
	
	.caizhai {
		float: left;
		width: 48%;
		height: 1.1rem;
		border-radius:5px;
	}
	
	.caizhai img {
		width: 100%;
		height: 100%;
		border-radius: 2px;
		
	}
	
	.meishi {
		float: right;
		width: 48%;
		height: 1.1rem;
		border-radius:5px;
	}
	
	.meishi img {
		width: 100%;
		height: 100%;
		border-radius: 2px;
	
	}
	
	.meizhou {
		float: right;
		width: 33%;
		height: 2.2rem;
		border-radius:5px;
	}
	
	.meizhou img {
		width: 100%;
		height: 100%;
		border-radius: 2px;
		
	}
	
	.chelufuwu {
		width: 100%;
		height: 2.2rem;
		border-top: 0.1rem solid #f3f3f3;
	}
	
	.chelu {
		height: 1rem;
		margin-top: 0.1rem;
		padding: 0 0.1rem;
	}
	
	.fuwu {
		float: left;
		width: 48%;
		height: 1rem;
	}
	
	.fuwu img {
		width: 100%;
		height: 100%;
		border-radius: 2px;
		
	}
	
	.shequ {
		float: right;
		width: 48%;
		height: 1rem;
	}
	
	.shequ img {
		width: 100%;
		height: 100%;
		border-radius: 5%;
		
	}
	
	#chi {
		margin-top: 0.1rem;
		height: 2rem;
		border-top: 0.1rem solid #f3f3f3;
		padding: 0 0.1rem;
	}
	
	.chi-l {
		width: 30%;
		height: 0.4rem;
		line-height: 0.4rem;
		float: left;
		color: #419cfa;
		text-align: center;
	}
	
	.chi-r {
		width: 30%;
		height: 0.4rem;
		line-height: 0.4rem;
		float: left;
		background-color: #419cfa;
		margin-left: 0.3rem;
		color: #fff;
		text-align: center;
	}
	
	.shenghuo {
		float: right;
		width: 30%;
		height: 0.4rem;
		line-height: 0.4rem;
		background-color: #419cfa;
		color: #fff;
		text-align: center;
	}
	.popup-container{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		display: flex;
	  	justify-content: center;
	  	align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.popup-banner{
		width: 80%;
		position: relative;
	}
	.popup-banner .popup-tu{
		width: 100%;
	}
	.popup-delete{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		overflow: hidden;
		background: #000;
		position: absolute;
		right: -5px;
		top: -5px;
	}

</style>