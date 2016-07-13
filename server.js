var express = require('express');
var app = express();

app.use("/styles", express.static(__dirname + '/styles'));
app.use("/svg", express.static(__dirname + '/svg'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/src", express.static(__dirname + '/src'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/map.html', function(req, res){
  res.sendFile(__dirname + '/map.html');
});

app.listen(4000, function() {
  console.log('App launched at localhost:4000 🚀"' );
});
