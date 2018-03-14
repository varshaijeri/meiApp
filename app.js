var express = require('express');
var app = express();
var path = require('path');

app.set('port',3000);

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
app.use('/bower_components',express.static(path.join(__dirname,'bower_components')));

var server = app.listen(app.get('port'),"0.0.0.0",function(){
    var port = server.address().port;
    console.log('listening on port: '+port);
})