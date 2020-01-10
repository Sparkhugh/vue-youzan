<template>
	<div id="app">
		<!-- 显示登录页 -->
		<router-view v-if="$route.path==='/login'" name="login"></router-view>
		<!-- 登录后系统内页 -->
		<el-container v-else class="app-container">
			<!-- 左侧导航菜单 -->
			<el-aside width="92px">
				<Myaside></Myaside>
			</el-aside>
			
			<el-container class="app-right">
				<!-- 顶部 -->
				<el-header class="app-header" height="56px">
					<Myheader></Myheader>
				</el-header>
				
				<!-- 主体区 -->
				<el-main class="app-main">
					<Mymain></Mymain>
				</el-main>
				<!-- 底部 -->
				<el-footer height="40px">
					<Myfooter></Myfooter>
				</el-footer>
			</el-container>
		</el-container>

	</div>
</template>

<script>
	import Myaside from '@/components/layout/Myaside.vue'
	import Myheader from '@/components/layout/Myheader.vue'
	import Mymain from '@/components/layout/Mymain.vue'
	import Myfooter from '@/components/layout/Myfooter.vue'
	export default {
		name: 'app',
		components: {
			Myaside,
			Myheader,
			Mymain,
			Myfooter
		},
		updated(){
			console.log(this.$route)
		}
	}
</script>

<style lang="scss">
	html,
	body {
		margin: 0;
		padding: 0;
		width:100%;
		height: 100%;
		background:#f7f8fa;
	}
	
	#app {
		height: 100%;
		.app-container{
			height:100%;
		}
		.el-aside{
			overflow:hidden;
		}
		.el-header {
			padding-left:0;
			padding-right:0;
		}
		.el-main{
			padding-right:0;
		}
		.el-footer{
			right:0;
		}
		
	}

	
	
</style>
