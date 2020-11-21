const http = require('http')

http
  .createServer((req, res) => {
    console.log('req:', req)

    // throw new Error()

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain

    // res.writeHead(500, { 'Content-Type': 'text/plain', name: 'cxh' })

    // // 发送响应数据 "Hello World"
    // res.end(JSON.stringify({ errMsg: '错误信息' }))

    // res.writeHead(400, { 'Content-Type': 'text/plain', name: 'cxh' })

    // // 发送响应数据 "Hello World"
    // res.end(JSON.stringify({ errMsg: '错误信息' }))

    // 演示超时
    // setTimeout(() => {}, 35000)

    res.writeHead(200, { 'Content-Type': 'text/plain' })

    // 发送响应数据 "Hello World"
    res.end('Hello World 9999\n')
  })
  .listen(9999)

console.log('Server running at http://127.0.0.1:9999')
