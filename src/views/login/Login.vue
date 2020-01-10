<template>
	<div class="login">
		<div class="log-head">
			<a href="//www.youzan.com">
				<i class="fa fa-thumbs-up"></i>
				<span>有赞</span>
			</a>
			<span>登录</span>
		</div>
		<div class="log-content">
			<div class="top">
				<span>密码登录</span>
				<span>验证码登录</span>
				<span>扫码登录</span>
			</div>
			<div class="content">
				<div>
					<input type="text" placeholder="请输入手机号">
				</div>
				<div>
					<input type="password" placeholder="请输入密码">
				</div>
				<el-button type="primary" @click='login'>登录</el-button>
			</div>
		</div>
		<div class="log-foot">
			© 2012 - 2019 Youzan.com
		</div>
	</div>
</template>

<script>
	import {mapActions,mapMutations} from 'vuex'
	export default{
		data:function(){
			return {
				username:'Hugh',
				password:''
			}
		},
		methods:{
			...mapActions('user',['userLogin']),
			...mapMutations('user',['updateUserinfo']),
			login(){
				const data={
					username:this.username,
					password:this.password
				}
				this.$http.fetchLogin(data).then(res=>{
					this.updateUserinfo(res)
					localStorage.setItem('token',res.token)
					localStorage.setItem('isLogin',1)
					this.$router.replace('/')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		//background:#fff;
		width:900px;
		margin:0 auto;
		.log-head{
			height:24px;
			border-bottom:1px solid #e5e5e5;
			padding: 50px 0 21px;
			>a{
				text-decoration:none;
				font-size:22px;
				color:rgb(44,58,70);
				margin-right:10px;
				i{
					color: rgb(238,0,0);
					margin-right:4px;
				}
			}
			>span{
				font-size:16px;
				color:#333;
				padding-left:10px;
				border-left:1px solid #e8e8e8;
			}
		}
		.log-content{
			width:410px;
			min-height:340px;
			background:#fff;
			box-shadow:0 0 6px rgba(0,0,0,.08);
			margin:40px 20px 50px;
			box-sizing: border-box;
			padding:15px;
			.top{
				margin-top:15px;
				span{
					font-size:18px;
					padding:0 15px;
					color:#999;
					line-height:20px;
					cursor:pointer;
				}
				>span:nth-of-type(1){
					color:#333;
					font-weight:700;
					cursor:default;
				}
			}
			.content{
				padding:20px 15px 0;
				div{
					width:350px;
					height:35px;
					padding-top:18px;
					font-size:14px;
					color:#333;
					input{
						display:inline-block;
						width:100%;
						line-height:35px;
						padding-left:5px;
						border:none;
						border-bottom:1px solid #e5e5e5;
					}
				}
				.el-button{
					width:350px;
					height:45px;
					font-size:16px;
					margin-top:40px;
				}
			}
		}
		.log-foot{
			width:100%;
			height:12px;
			text-align:center;
			color:#999;
			padding-bottom:30px;
			line-height:12px;
			font-size:12px;
		}
	}
</style>
