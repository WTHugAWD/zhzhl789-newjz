<template>
	<div class="body">
		<div class="menu">
			<van-nav-bar title="列表" left-text="返回" left-arrow @click-left="onClickLeft" />
		</div>
		<div class="box1">
			<van-list v-model="isUpLoading" :finished="upFinished" finished-text="没有更多了"  :offset = offset>
				<ul>
					<li class="liebiao" v-for="(item,index) in database" :key="index">
						<router-link :to="{name:'chanpinxiangqing',params:{type:item.Id}}">
							<div class="liebiao-left">
								<img :src="item.ImgUrl" />
							</div>
							<div class="liebiao-right">
								<p class="wenzi-o">{{item.Title}}</p>
								<p class="wenzi-t">{{item.SortTitle}}</p>
								<p class="wenzi-h">{{'￥'+item.ChildrenPrice}}起</p>
							</div>
						</router-link>
					</li>
				</ul>
			</van-list>
		</div>
	</div>

</template>

<script>
	import HomeNavbar from '../components/HomeNavbar'
	import {getHomeTravelStrategy} from  "@/api/Home"
	export default {
		name:"liebiao",
		data() {
			return {
				isUpLoading: false,
				upFinished: false,
				index:'',
				pageIndex:1,//数据页数
				pageSize:50,//数据条数
				productType:"",//必须传的参数
				offset:5,
			
				hasmore:true,
				//列表数组
				database:[
					// AdultPrice: 452,//儿童价
					// ChildrenPrice: 452,//儿童价
					// Id: "00",//id
					// ImgUrl: "http:/c6c.png",//图片
					// SortTitle: "45245",//副标题
					// Title: "454"//标题
				]
			}
		},
		// beforeRouteLeave(to, from, next) {
		// 	// 设置下一个路由的 meta
		// 	if(to.path=='/chanpinxiangqing'){
		// 		to.meta.isUseCache = false;
		// 	}
		// 	next();
		// 	},
		created(){
				this.productType =this.$route.params.type
				this.gethometravelstrategy()
			},
		activated(){
			// console.log(11111)
			// if(!this.$route.meta.isUseCache){
			// this.gethometravelstrategy()
			// }
		},
		methods: {
		//接收参数，进行GET优惠特惠产品，查看更多也是用此接口，旅游攻略同样根据类别
			gethometravelstrategy(){
				let {productType,pageSize,pageIndex} = this;
				this.upFinished = true;//先不加载
				getHomeTravelStrategy(productType,pageIndex,pageSize).then(res=>{
					// console.log(res)
					if(res.data.type==1){
						this.isUpLoading = true//开启加载提示
						this.upFinished = false;// 加载数据
						this.database=this.database.concat(res.data.data.Rows)
						if(this.database.length >0){this.isUpLoading = false}//数据请求回来关闭加载提示
						if(this.pageSize*this.pageIndex >= res.data.data.Records){
							this.upFinished = true;//表示没有更多数据了
							this.isUpLoading = false;
							this.hasmore = false;
							return false;
						}
						this.pageIndex ++;
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// onLoadList() {
			
			// 		if(!this.hasmore){ //没有更多数据了
			// 		this.isUpLoading = false;//关闭加载提示
			// 		this.upFinished = true;//表示没有更多数据了
			// 		return false;//阻止后续代码的请求
            // }
			// },
			onClickLeft(){
				this.$router.go(-1);
			},
		
		}
	}
</script>

<style scoped="">
	.menu {
		width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		top: 0;
		left: 0;
		border-bottom: 0.01rem solid #bbb;
		background-color: #fff;
	}
	.menu-t{
		position: relative;
	}
	.menu-l {
		position: absolute;
		left: 2%;
		top: 0;
	}
	
	.menu-m {
		font-size: 0.18rem;
	}
	
	.menu-m p {
		text-align: center;
	}
	.box1{
		margin-top: 0.45rem;
	}
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
		object-fit: cover;
	}
	
	.liebiao-right {
		float: right;
		width: 53%;
		height: 0.9rem;
		padding: 0.1rem 0.1rem;
	}
	.liebiao-right .wenzi-o{
		color: #333;
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
</style>