
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var consolidate = require('consolidate');

// routes
var routes = {
	home: require('./routes/home'),
	portfolio: require('./routes/portfolio')
}

var app = express();

app.engine('handlebars', consolidate.handlebars);
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('view engine', 'handlebars');
	app.set('views', __dirname + '/views');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(require('less-middleware')({ src: __dirname + '/public' }));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', routes.home);
app.get('/portfolio/', routes.portfolio);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
