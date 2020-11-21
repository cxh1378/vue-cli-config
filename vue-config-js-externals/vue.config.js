module.exports = {
  lintOnSave: false,
  configureWebpack:{
    externals: {
      // 'BaiduMap': 'BMap',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
  }
}