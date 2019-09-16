<template>
	<div class="container">
		<div class="line">
			<div class="title">
		    	<div class="titel-box">
		    			<div class="topleft">
			    			<div class="fuhao">
			    				<img :src="url" />
				    		</div>
				    		<div class="return">返回</div>
		    			
		    			</div>
		    		<div class="product-list">产品列表</div>
		    	</div>
	    	
            </div>
		</div>
			
        <div class="detailes">
        	<div class="column">
        		<div class="tu">
        			<img class="photo" src="../assets/img/2.jpg" />
        		</div>
        		<div class="project">
        			<div class="project-name">凤凰古城双飞9日游</div>
        			<div class="project-word"><漓江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游>桂湘全</div>
        			<div class="project-price">
        				<span class="yangjaio">￥</span>
        				<span class="money">5698</span>
        			</div>
        		</div>
        	</div>
        	<div class="column">
        		<div class="tu">
        			<img class="photo" src="../assets/img/2.jpg" />
        		</div>
        		<div class="project">
        			<div class="project-name">凤凰古城双飞9日游</div>
        			<div class="project-word"><漓江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游>桂湘全</div>
        			<div class="project-price">
        				<span class="yangjaio">￥</span>
        				<span class="money">5698</span>
        			</div>
        		</div>
        	</div>
	       <div class="column">
        		<div class="tu">
        			<img class="photo" src="../assets/img/2.jpg" />
        		</div>
        		<div class="project">
        			<div class="project-name">凤凰古城双飞9日游</div>
        			<div class="project-word"><漓江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游>桂湘全</div>
        			<div class="project-price">
        				<span class="yangjaio">￥</span>
        				<span class="money">5698</span>
        			</div>
        		</div>
        	</div>
        	<div class="column">
        		<div class="tu">
        			<img class="photo" src="../assets/img/2.jpg" />
        		</div>
        		<div class="project">
        			<div class="project-name">凤凰古城双飞9日游</div>
        			<div class="project-word"><漓江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游>桂湘全</div>
        			<div class="project-price">
        				<span class="yangjaio">￥</span>
        				<span class="money">5698</span>
        			</div>
        		</div>
        	</div>
        	<div class="column">
        		<div class="tu">
        			<img class="photo" src="../assets/img/2.jpg" />
        		</div>
        		<div class="project">
        			<div class="project-name">凤凰古城双飞9日游</div>
        			<div class="project-word"><漓江-阳朔-世外-刘三姐-张家界-玻璃栈桥-凤凰古城双飞9日游>桂湘全</div>
        			<div class="project-price">
        				<span class="yangjiao">￥</span>
        				<span class="money">5698</span>
        			</div>
        		</div>
        	</div>
	        	
        </div>
        
    </div>
	
</template>

<script>
	export default{
		data() {
		    return {
		    	value:"",
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
		  }
		
	}
</script>

<style scoped="">
	.title{
			height: 0.45rem;
			line-height: 0.45rem;
			position: fixed;
			width: 100%;
			top: 0rem;
			background-color: white;
			z-index: 100;
		}
	.line{
		border-bottom: 2px solid #e5e5e5;
		margin-top: 0.5rem;
		position: fixed;
		width: 100%;
		top: -0.05rem;

	}
	.topleft{
		position: relative;
		margin-left:-0.2%;
		margin-top: 0.04rem;
		float: left;
		font-size: 0.13rem;
	}
	.fuhao{
		position: absolute;
		float: left;
		width: 0.18rem;
		height: 0.18rem;
		
	}
	.fuhao:after{ 
		content: ''; 
		clear: both;
	}
	.fuhao img{
		width:100% ;
		height: 100%;
		margin-left: 0.05rem;
		margin-top: 0.1rem;
	}
	.return{
		position: absolute;
		width: 0.4rem;
		height: 0.4rem;
		margin-left: 0.25rem;
		margin-top: -0.04rem;
		letter-spacing: 0.02rem;
	}
	.product-list{
		text-align: center;
		color: #282828;
		font-size: 0.19rem;
		letter-spacing: 0.02rem;
		font-weight: 450;
	}
	.detailes{
		margin-top: 0.5rem;
	}
	.column{
		border-bottom: 1px solid #e5e5e5;
        height: 1.2rem;
        padding: 0rem  0.05rem;   
	}
	.column:last-child{
		border-bottom: 0px;
	}
	.tu{
		width: 34%;
		height: 1.1rem;
		float: left;
		margin-top: 0.05rem;
		
	}
	.photo{
		width: 100%;
		height: 100%;
		border-radius: 0.08rem;
	}
	.project{
		width: 61%;
		float: right;
		margin-left: 0.15rem;
    	margin-top: 1.5%;
	}
	.project:after{
		content: '';
		clear:both;
	}
	.project-name{
		font-size: 0.17rem;
		letter-spacing: 0.02rem;
		font-weight: 400; 
	}
	.project-word{
		margin-top: 4%;
		font-size: 0.13rem;
		letter-spacing: 0.01rem;
		color: #8e8e8e;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.project-price{
    	margin-top:0.2rem;
    	color: red;
	}
	.yangjiao{
		font-size: 0.15rem;	
	}
	.money{
		margin-left: -0.05rem;
		font-size: 0.20rem;
		letter-spacing: 0.01rem;
	}
	
</style>