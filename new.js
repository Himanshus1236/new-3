
const http = require('http');
const server = http.createServer((req,res)=> {
  res.end('hello world');
});
// server listner himanshu
server.listen(3000 , () => {
  console.log('listening the 3000..')
});