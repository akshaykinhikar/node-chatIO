var app = require('express')();
var http = require('http').createServer(app);
const PORT = 3000;

app.get('/', function(req, res){
    res.send('initiated chatio');
})

http.listen(PORT, function(){
    console.log('server listening on '+PORT);
})