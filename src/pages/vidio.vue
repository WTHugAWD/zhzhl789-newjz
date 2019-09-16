<template>
	<div class="body">
        <div class="title">
             <div class="returnImg"><img :src="imgUrl1" alt=""></div>
             <span class="back" @click="onClickLeft">返回</span>
            <span class="title-name">视频</span>
        </div>
        <div class="line"></div>

       <div 
            v-for="item in database"
            :key ="item.id"
            class="list-box">
            <div class="photo">
                <img :src="item.VideoUrl" alt="">
            </div>
            <div class="tour-text">
                <span class="text1">{{item.Title}}}</span><br>
                <span class="text2">
                   {{item.SortTitle}}
                </span>
            </div>
                <router-link 
                :to="{name:'chanpinxiangqing',params:{type:item.Id}}"
                tag="div"
                class="purchase">点击购买</router-link>
        </div>
    

    <!-- <div class="list-box">
            <div class="photo">
            <img :src="imgUrl" alt="">
        </div>
        <div class="tour-text">
            <span class="text1">凤凰古城双飞9日游</span><br>
            <span class="text2">
                 漓江-阳朔-世外-刘三姐-张家界-玻璃栈道-凤凰古城双飞9日游>桂湘全景0购物/ 拷贝
            </span>
        </div>
        <div class="purchase">点击购买</div>
       </div>
    
   
    <div class="list-box">
            <div class="photo">
            <img :src="imgUrl" alt="">
        </div>
        <div class="tour-text">
            <span class="text1">凤凰古城双飞9日游</span><br>
            <span class="text2">
                 漓江-阳朔-世外-刘三姐-张家界-玻璃栈道-凤凰古城双飞9日游>桂湘全景0购物/ 拷贝
            </span>
        </div>
        <div class="purchase">点击购买</div>
       </div>
   
   
   <div class="list-box">
            <div class="photo">
            <img :src="imgUrl" alt="">
        </div>
        <div class="tour-text">
            <span class="text1">凤凰古城双飞9日游</span><br>
            <span class="text2">
                 漓江-阳朔-世外-刘三姐-张家界-玻璃栈道-凤凰古城双飞9日游>桂湘全景0购物/ 拷贝
            </span>
        </div>
        <div class="purchase">点击购买</div>
       </div>
   

    <div class="list-box">
            <div class="photo">
            <img :src="imgUrl" alt="">
        </div>
        <div class="tour-text">
            <span class="text1">凤凰古城双飞9日游</span><br>
            <span class="text2">
                 漓江-阳朔-世外-刘三姐-张家界-玻璃栈道-凤凰古城双飞9日游>桂湘全景0购物/ 拷贝
            </span>
        </div>
        <div class="purchase">点击购买</div>
       </div> -->
    
 </div>
</template>

<script>
	import qs from 'qs'
	import md5 from 'js-md5';
//	import thisisjsonp from 'jsonp'
    import {getMoreVideo} from "@/api/Home"
	export default {
		name: 'vidio',
		data() {
			return {
                imgUrl:require("@/assets/img/fenghuang.jpg"),
                imgUrl1:require("@/assets/img/return.png"),	
                database:[],//存放视频列表的数组
          
			}
		},
		activated(){
			this.$store.state.showTab = true;
		},
		created() {
            this.$store.state.showTab = true;
            //获取视频列表的方法
            this.getmorevideo()
		},
		methods: {
			onClickLeft(){
				this.$router.go(-1)
            },
          //获取视频列表
            getmorevideo(){
                getMoreVideo(1,2).then(res=>{
                    console.log(res)
                    if(res.data.type== 1 ){
                        this.database = res.data.data.Rows
                    }
                console.log(this.database)
                }).catch(err=>{
                    console.log(err)
                })
            }
		}
		
  }


</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../assets/css/index.styl" 
	.body{
		background: #fff;
		padding-top: 0.45rem;
		padding-bottom:0.7rem;
        
	}
    .*{
        margin :0;
        padding :0;
    }
   .title {
        width: 100%;
		height: 0.45rem;
		line-height: 0.45rem;
		position: fixed;
		top: 0;
		left: 0;
        background :#fff;
    }
    .title-name  {
       position: relative;
       z-index: 10;
       display :block;
       text-align :center;
       line-height :0.45rem;
       font-size :0.2rem;          
    }
    .title .returnImg {
        width :0.2rem;
        height :0.2rem;
         position: absolute;
       top: 0.04rem;
       left: 0.1rem;
       z-index: 10;
       display :block;   
    }
    .title .returnImg img {
        width :100%;
        height :100%;
    }
    .back {
    
       position: absolute;
       top: 0;
       left: 0.3rem;
       z-index: 10;
       height :0.45rem;
       display :block;
       line-height :0.45rem;
       font-size :0.15rem;  
    }
    .line {
        width :100%;
        height :0.02rem;
        background :#f1f1f1;
    }  
     .list-box {
        width :100%;
        height:1.15rem; 
        border-bottom:0.02rem solid #f1f1f1; 
    }
    .photo {
        width :1.3rem;
        height :0.9rem;
        float:left;
        margin-left:0.15rem;
        margin-top :.1rem;
    }
    .photo img {
        width :100%;
        height :100%;
        border :0.01rem;
        border-radius:.1rem;
        
    }
    .tour-text {
        float:left;
        margin-top :.1rem;
        margin-left :.05rem;
        overflow :hidden;
        width :2.1rem;
        height :0.9rem;
        

    }
     .tour-text .text1 {
         font-size :0.18rem;
         font-weight:bold;
         
     }
     .tour-text .text2 {
         display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 2;
           overflow: hidden;
           font-size :0.14rem;
           padding-top :.03rem;
           color :gray;

     }
     .purchase  {
         border-radius: 0.5rem;
         float:right;
        background :#fff;
        margin-top :-0.2rem;
        margin-right :.08rem;
        width :0.6rem;
        height :0.2rem;
       border :0.01rem solid #5193f3 ;
       color :#5193f3
       line-height :0.2rem;
       text-align :center;
       font-size :0.11rem;
     }
     .small-line {
         width :94%;
         height :0.01rem;
         background :#f1f1f1;
        display:inline-block;
        margin-left :0.08rem;
               
     }
   
     


 

    
</style>