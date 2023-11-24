const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

// 서버생성
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world')
});

// 서버실행(대기하고 있겠다, 서버내용을 듣고 있겠다.)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

//res : 요청이 오고 요청을 응답
//req : 요청을 주는것
//POST : 입력을 받고 주는것
//GET : 서버로부터 얻는것