var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';



var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

//You need to tell express from where should it serve static content.
app.use(express.static('public'));

app.use('/', router);

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/projects', function (req, res) {
    res.sendFile(path + 'projects.html');
});

router.get('/contact', function (req, res) {
    res.sendFile(path + 'contact.html');
});

app.use('*', function (req, res) {
    res.send('Error 404: Not Found!');
});

app.listen(8080, function () {
    console.log("Server running at Port 8080");
});