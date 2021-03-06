var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listBooks', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "books.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      var book = data["book" + req.params.id]
      console.log( book  );
      res.end( JSON.stringify(book));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("server listening at http://localhost:%s", port)
})
