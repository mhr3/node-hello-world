
const rand = Math.random().toString().substr(2, 8);
require('http').createServer((req, res) => res.end(JSON.stringify({now: Date.now(), rand: rand, method: req.method, URL: req.url, headers: req.headers}))).listen(3000);


