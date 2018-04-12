 var port = 9000;
 var express =  require('express');
 var app = new express();

 app.route('/api')
 .get(function (request, response) {
 	response.status(200).send("This is the API");
 });

 app.listen(port,function() {
 	console.log("App is Listening on " + port);
 });