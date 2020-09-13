let WS = require('ws').Server
let wss = new WS({
  port: 8282,
})
wss.on('connection', function (ws) {
  console.log('有socket连接过来')
  ws.on('message', (data) => {
    console.log(data)
  })
})
