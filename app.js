var express   = require("express");
var http      = require("http");
var nunjucks  = require("nunjucks");

var routes = require("./app/routes/index");

app = express();

app.use(express.static(__dirname + '/public'));

nunjucks.configure('app/views', {
    autoescape: true,
    express: app
});

app.use('/', routes);

module.exports = app;

if(module.parent === null) {
    var port = process.env.PORT | 3000;
    http.createServer(app).listen(port, function() {
        console.log("Server listening on port " + port);
    });
}

