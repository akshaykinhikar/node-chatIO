var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

http.listen(PORT, function(){
    console.log('server listening on '+PORT);
});
