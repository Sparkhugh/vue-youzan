import fetch from './fetch'

//获取商品列表
export function fetchGoodList(params){
	//返回promise对象
	return fetch({
		method:'GET',
		params:params,
		url:'/youzan/getGoodList'
	})
}

//登录接口
export function fetchLogin(data){
	return fetch({
		method:"post",
		data:data,
		url:'/youzan/login'
	})
}

export default{
	fetchGoodList,
	fetchLogin
}