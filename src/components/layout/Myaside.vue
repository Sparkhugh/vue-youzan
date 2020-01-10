<template>
	<div class="aside">
		<div class="logo">
			<i class="fa fa-thumbs-up"></i> 
		</div>
		
		<div v-for='(item,idx) in navs' :key='idx' class="navs">
			<router-link tag="span" :to="item.path" active-class='nav-on' exact>
				<div class='nav'>
					<i class="fa" :class="item.icon"></i>
					<span v-text="item.text"></span>
				</div>
			</router-link>
		</div>
		
		<div class="aside-bot">
			<div>
				<i class="fa fa-search"></i>
			</div>
			<div>
				<i class="fa fa-comment"></i> 
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				navs:[
					{path:'/',text:'概况',icon:'fa-desktop'},
					{path:'/shop',text:'店铺',icon:'fa-briefcase'},
					{path:'/goods',text:'商品',icon:'fa-shopping-bag'},
					{path:'/order',text:'订单',icon:'fa-book'},
					{path:'/client',text:'客户',icon:'fa-user'},
					{path:'/data',text:'数据',icon:'fa-cube'},
					{path:'/property',text:'资产',icon:'fa-credit-card'},
					{path:'/apply',text:'应用',icon:'fa-th-large'},
					{path:'/settings',text:'设置',icon:'fa-cog'}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.aside {
		width:100%;
		height: 100%;
		background-color:#444;
		position:relative;
		.logo{
			height:56px;
			text-align:center;
			>i{
				display: inline-block;
				width:32px;
				height:32px;
				line-height:32px;
				border-radius:50%;
				background:#fff;
				color:rgba(238,0,0,1);
				cursor:pointer;
				margin-top:12px;
			}
		}
		.navs:nth-of-type(9){
			margin-top:80px;
		}
		.nav{
			height:40px;
			line-height:40px;
			cursor:pointer;
			color: #c8c9cc;
			font-size:14px;
			text-align: center;
			>span{
				margin-left:6px;
			}
		}
		.nav:hover{
			background:rgba(102,102,102,1);
			color:#fff;
		}
		.nav-on .nav{
			background:#fff;
			color:#333;
		}
		.aside-bot{
			display:flex;
			background:#535353;
			height:42px;
			width:100%;
			position:absolute;
			bottom:0;
			>div{
				height:42px;
				line-height:42px;
				flex:1;
				text-align:center;
				>i{
					cursor:pointer;
					color: #c8c9cc;
					font-size:18px;
				}
			}
		}
	}
	
</style>