const http = require('http')

http.createServer((req, res) => {
    console.log('req:', req)
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    res.end('Hello World\n');
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888')