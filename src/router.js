import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home =()=>import('@/views/home/Home.vue')
const Shop =()=>import('@/views/shop/Shop.vue')
const Goods =()=>import('@/views/goods/Goods.vue')
const PublishGoods =()=>import('@/views/goods/publishGoods.vue')
const Login =()=>import('@/views/login/Login.vue')
const Client =()=>import('@/views/client/Equitycard.vue')

const router=new VueRouter({
	routes:[
		{path:'/',component:Home},
		{path:'/shop',component:Shop},
		{path:'/goods',component:Goods},
		{path:'/publish',component:PublishGoods},
		{
			path:'/login',
			components:{
				login:Login
			}
		},
		{path:'/client',component:Client},
		{path:'/*',redirect:'/'}
	]
})

//全局路由守卫
router.beforeEach((to,from,next)=>{
	const isLogin=localStorage.getItem('isLogin')
	console.log('isLogin',isLogin)
	if(to.path==='/login'){
		next()
	}else{
		if(isLogin==1){
			next()
		}else{
			next('/login')
		}
	}
})

export default router