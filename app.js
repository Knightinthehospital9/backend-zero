const http = require('node:http');// thư viện  có sẵn trong nodejs

const hostname = 'localhost';//local host
const port = 3000; // 16bit chạy từ 0 * ->65355 trừ những cái port đã được quy định sẵn

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n Nguyễn Khánh Nam');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});