<template>
	<div class="shop">
		<div class="tabs">
			<div class="tab-tip">移动店铺试用剩余有效期 2 天 22 小时 47 分钟</div>
			<el-tabs v-model="tabName" @tab-click="tabClick">
				<el-tab-pane label="店铺主页" name="first">
					<Tabcontent1></Tabcontent1>
				</el-tab-pane>
				<el-tab-pane label="店铺导航" name="second">
					<Tabcontent2></Tabcontent2>
				</el-tab-pane>
				<el-tab-pane label="个人中心" name="third">
					<Tabcontent3></Tabcontent3>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	const Tabcontent1=()=>import('./components/Tabcontent1.vue')
	const Tabcontent2=()=>import('./components/Tabcontent2.vue')
	const Tabcontent3=()=>import('./components/Tabcontent3.vue')
	
	export default{
		components:{
			Tabcontent1,
			Tabcontent2,
			Tabcontent3
		},
		data() {
      return {
        tabName: 'first'
      };
    },
    methods: {
      tabClick(tab) {
        console.log(tab.name);
      }
    }
	}
</script>

<style lang="scss" scoped>
	.shop{
		.tabs{
			position:relative;
			.tab-tip{
				position: absolute;
				right:20px;
				top:0;
				font-size:12px;
				color:#aaa;
				line-height:40px;
			}
		}
	}
</style>
