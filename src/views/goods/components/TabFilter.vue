<template>
	<div class="tab-filter">
		<span :class="{'on':value==='-1'}" @click="$emit('input','-1')">全部</span>
		<span :class="{'on':value==='1'}" @click="$emit('input','1')">销售中</span>
		<span :class="{'on':value==='2'}" @click="$emit('input','2')">已告罄</span>
		<span :class="{'on':value==='3'}" @click="$emit('input','3')">仓库中</span>
	</div>
</template>

<script>
	export default{
		props:{
			value:{
				type:String,
				required:false,
				default:'1'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-filter{
		line-height:40px;
		border-bottom: 1px solid #eee;
		&>span{
			display:inline-block;
			width:70px;
			text-align:center;
			margin:0 16px;
			font-size:14px;
			cursor: pointer;
			border-bottom:2px solid transparent;
		}
		&>span.on{
			border-color:rgba(102,177,255,1);
		}
	}
</style>
