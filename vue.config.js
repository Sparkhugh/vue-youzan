module.exports = {
	devServer:{
		port:8848,
		proxy:{
			'/youzan':{
				target:'http://10.36.136.170:9999',
				changeOrigin:true
			}
		}
	}
}