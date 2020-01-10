<template>
	<div class="goods">
		<div class="publish">
			<el-button @click='skip' type="primary" plain>发布商品</el-button>
		</div>
		
		<FormFilter v-model="formParams" @filter="filterHandle"></FormFilter>
		
		<TabFilter v-model='tabIdx'></TabFilter>
		
		<GoodsTable :list="list"></GoodsTable>
		
		<div class="goods-page">
			<el-pagination
				@size-change="SizeChange"
				@current-change="CurrentChange"
				:current-page="currentPage"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="5"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total">
			</el-pagination>
		</div>
		
	</div>
</template>

<script>
	
	import {mapState} from 'vuex'
	//import {fetchGoodList} from '@/utils/api'
	const TabFilter=()=>import('./components/TabFilter.vue')
	const FormFilter=()=>import('./components/FormFilter.vue')
	const GoodsTable=()=>import('./components/GoodsTable.vue')
	
	export default{
		//局部路由守卫
		beforeRouterEnter(to,from,next){
			const isLogin=localStorage.getItem('isLogin')
			if(isLogin==1){
				next()
			}else{
				next('/login')
			}
		},
		components:{
			TabFilter,
			FormFilter,
			GoodsTable
		},
		data:function(){
			return {
				tabIdx:'-1',
				currentPage:1,
				currentSize:5,
				list:[],
				total:0,
				formParams:{
					name:'',
					group_no:0,
					type_no:0,
					sale_min:0,
					sale_max:0,
					price_min:0,
					price_max:0,
					deduction_no:'0'
				}
			}
		},
		computed:{
			...mapState('goods',['msg'])
		},
		watch:{
			tabIdx(){
				this.changeList()
			}
		},
		mounted(){
			//入参
			this.changeList()
		},
		methods:{
			//调接口
			changeList(){
				const params={
					status_no:this.tabIdx,	//商品状态
					page:this.currentPage,	//分页页码
					size:this.currentSize,	//每页条数
					//name:this.formParams.name,									//商品名称
					//group_no:this.formParams.group_no,					//商品分组
					//type_no:this.formParams.type_no,						//商品类型
					//sale_min:this.formParams.sale_min,					//最小销量
					//sale_max:this.formParams.sale_max,					//最大销量
					//price_min:this.formParams.price_min,				//最低价格
					//price_max:this.formParams.price_max,				//最高价格
					//deduction_no:this.formParams.deduction_no,	//库存扣减方式
					...this.formParams
				}
				//入参校验
				if(params.sale_max===0) delete params.sale_max
				if(params.price_max===0) delete params.price_max
				
				this.$http.fetchGoodList(params).then(res=>{
					console.log('res',res)
					this.list=res.list
					this.total=res.total
				})
			},
			skip(){ //点击按钮 发布商品
				this.$router.push('/publish')
			},
			SizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.currentSize=val
				this.changeList()
			},
			CurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage=val
				this.changeList()
			},
			filterHandle(){
				console.log('父组件 执行筛选')
				this.changeList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods{
		.publish{
			padding:16px 0;
		}
		.goods-page{
			.el-pagination{
				margin:16px 0;
				text-align:right;
			}
		}
	}
</style>
