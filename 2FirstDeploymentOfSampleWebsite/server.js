// server.js: This is a tiny NodeJS web server hosting static files from the /www folder in the Elastic Beanstalk deployment ZIP
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
var express = require('express');
// Let's create an instance of an express web server
var app = express();
// By default, let's use port 80, unless we provide a different value as argument or system environment variable
var port = process.env.PORT || process.argv[2] || 80;
// Let's host all the static files in /www as root of our little web server
app.use('/', express.static(__dirname + '/www'));
// Start listening on the desired port for incoming traffic
var server = app.listen(port, function () {
    console.log('listening on port:', port);
});
