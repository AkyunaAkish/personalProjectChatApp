//var app = require('express')();
//var http = require('http').Server(app);
//
//app.get('/', function(req, res){
//    res.sendFile(__dirname + '/index.html');
//
//});
//
//http.listen(3000, function(){
//    console.log('listening on *:3000');
//});

var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

var port = process.env.PORT || 3000;


http.listen(port, function(){
    console.log('listening');
});