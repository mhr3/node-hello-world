
const rand = Math.random().toString().substr(2, 8);
require('http').createServer((req, res) => {
  var receivedBytes = 0
  console.log("[request]", req.method, req.url, "- from", req.socket.remoteAddress + ":" + req.socket.remotePort);
  req.on('data', (chunk) => {
    receivedBytes += chunk.length;
  });
  req.on('end', () => {
    res.end(JSON.stringify({
      now: Date.now(),
      rand: rand,
      method: req.method,
      requestLength: receivedBytes,
      URL: req.url,
      headers: req.headers
    }));
  })
}).listen(3000);


