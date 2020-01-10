<template>
	<div class="header">
		<!-- 渲染首页时显示 -->
		<div v-if="$route.path==='/'">
			<div class="header-left">
				<span v-text='userinfo.username'></span>
				<span class="blue">试用期</span>
				<span>SVIP</span>
				<span>有赞担保</span>
			</div>
			<div class="header-right">
				<i class="fa fa-user-circle" @click='logout'></i>
				<span v-text='userinfo.username'></span>
				<i class="fa fa-angle-right"></i>
			</div>
		</div>
		<div v-else>
			<!-- 面包屑导航 -->
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/Goods'}">商品管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState('user',['userinfo'])
		},
		mouted(){
			//console.log('route',this.$route)
		},
		methods:{
			logout(){
				this.$confirm('你确定要退出吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					localStorage.removeItem('isLogin')
					localStorage.removeItem('token')
					this.$router.replace('/login')
					this.$message({
						type: 'success',
						message: '退出成功!'
					});
				}).catch(() => {
					//this.$message({
					//	type: 'info',
					//	message: '已取消删除'
					//});
				});
			}
		}
	}
	</script>

<style lang="scss" scoped>
	.header{
		background:#fff7cc;
		height:100%;
		width:100%;
		line-height:56px;
		padding:0 20px;
		box-sizing:border-box;
		font-size:12px;
		.header-left{
			float:left;
			cursor:pointer;
			margin-left:16px;
			&>span:nth-child(1){
				color:#323233;
				font-size: 20px;
				font-weight: 700;
			}
			&>span:nth-child(2),span:nth-child(3),span:nth-child(4){
				display: inline-block;
				color:#323233;
				border:1px solid #c8c9cc;
				border-radius:2px;
				box-sizing:border-box;
				padding:0 4px;
				height:20px;
				line-height:18px;
				margin-left:5px;
				background:#fff;
			}
			span.blue{
				color:#155bd4;
				border-color:#5487df;
			}
		}
		.header-right{
			float:right;
			cursor:pointer;
			i{
				font-size:20px;
				color:gray;
			}
			i.fa-angle-right{
				color:#c8c9cc;
				font-size:14px;
			}
			span{
				color:#333;
				margin:0 10px;
				font-size:14px;
				font-weight:500;
			}
		}
		.el-breadcrumb{
			line-height:56px;
		}
		
	}
	
	
</style>
