//main.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));//정적파일 저장소
app.use(bodyParser.urlencoded({extended:false})); // post형식의 요청 bodyparser


app.set('view engine', 'jade'); //jade 설정
app.set('views', './views'); // template 위치
app.get('/dynamic', function(req,res){
var lis = '';
  for(var i = 0; i<5; i++) {
    lis +="<h1>hi</h1>"
  }
  res.send(lis);
});


app.get('/form', function(req, res){
  res.render('form');
});

app.post('/form', function(req, res){
  var title = req.body.title;
  var content = req.body.content;
  res.send(title + " : "+content);
});

app.get('/template', function(req,res){
  res.render('temp', {msg : 'hello', time : new Date()});
});

app.listen(3000, function(){//port, callback
  console.log('Connection 3000 port');
});

app.get('/route', function(req,res){
  res.send('Hello Router, <img src = "/apple.jpg">')
})

app.get('/', function(req, res) {
  res.send('Hello index page');
});


app.get('/login', function(req,res){
  res.send('login first');
});
