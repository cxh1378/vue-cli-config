import Mock, { Random } from 'mockjs'
import urls from './urls'

let params = Mock.mock({ // 数据池
  'userTableData|10': [{ // 图表过滤所需数据
      'name': '@cname',
      'date': '@date',
      'province': '@province',
      'city': '@city',
      'address': '@county(true) @ctitle() @natural(1000,9999) 号',
      'zip': '@zip'
  }]
})
// 设置请求时长200-600毫秒，模拟真实接口请求场景
Mock.setup({
  timeout: '200-600'
})
// 拦截urls.userTableData.url对应地址的请求，方式urls.userTableData.type，返回值为params.userTableData
Mock.mock(urls.userTableData.url, urls.userTableData.type, params.userTableData) // 请求该接口时，拦截请求并返回对应数据

