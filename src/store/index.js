import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import user from './modules/user'

Vue.use(Vuex)

const store=new Vuex.Store({
	modules:{
		goods,
		user
	}
})

export default store