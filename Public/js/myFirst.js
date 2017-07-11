var http = require('http');
/*console.log('Hey Ritika');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);*/
var fs = require('fs');
var path = require('path');
var url = require('url');
var MongoClient = require('mongodb').MongoClient;

var mongoUrl = "mongodb://localhost:27017/mydb";


http.createServer(function (req, res) {
	    var pathname = url.parse(req.url).pathname;
    var ext = path.extname(pathname);

  fs.readFile('login.html', function(err, data) {
    if(ext === ".css"){
            res.writeHead(200, { "Content-Type" : "text/css" });
        }
        else if(ext === ".js") {
            res.writeHead(200, { "Content-Type" : "text/javascript" });
        }
    else if(ext === ".jpg") {
            res.writeHead(200, { "Content-Type" : "image/jpg" });
        } else {
        	    res.writeHead(200, {'Content-Type': 'text/html'});

        }
    res.write(data);
    res.end();
  });

  MongoClient.connect(mongoUrl, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

}).listen(8080);

