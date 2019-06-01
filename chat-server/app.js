var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server,{
  pingTimeout: 1000,
});
const axios = require('axios')

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// localhost:3000서버에 접속하면 클라이언트로 메세지을 전송한다
app.get('/', function(req, res) {
  res.sendFile('Hellow Chating App Server');
});

io.on('connection', function(socket){
  
  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', function(data) {
    console.log(data)
    console.log('Message from %s: %s ; %s', data.name, data.msg, data.bot);

    var msg = {
      from: {
        name: data.name,
      },
      msg: data.msg,
      bot: data.bot
    };

    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    socket.broadcast.emit('chat', msg);

    // NLP 서버에 보낸다
    axios.post('http://localhost:5001/api/noun_extract/123', {
      'sent': data.msg,
      'speaker': data.name
    })
    .then((res) => {
      console.log('statusCode:' + res.status)
      // BOT 서버에 보낸다
      axios.post('http://localhost:5005/api/sonbot/123', {
        'sent': data.msg,
        'speacker': data.name,
        'bot': data.bot
      })
      .then((res) => {
        console.log('statusCode:' + res.status)

        // BOT 메세지를 보낸다
        var msg = {
          from: {
            name: res.data.botname
          },
          msg: res.data.content
        }
        socket.emit('chat', msg);
      })
      .catch((error) => {
        console.log(error)
      })
    })
    .catch((error) => {
      console.error(error)
    })

  });
  
  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });


});

server.listen(3000);
