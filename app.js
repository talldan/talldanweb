// dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var consolidate = require('consolidate');
var _ = require('underscore');

// routes
var routesConfig = {
	home: {
		route: require('./routes/home'),
		path: '/'
	},
	portfolio: {
		route: require('./routes/portfolio'),
		path: '/portfolio/'
	},
	cv: {
		route: require('./routes/cv'),
		path: '/cv/'
	},
	contact: {
		route: require('./routes/contact'),
		path: '/contact/'
	}
};

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
	app.use(require('less-middleware')({ 
		src: __dirname + '/views', 
		dest: __dirname + '/public',
		debug: true
	}));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

_.each(routesConfig, function(routeConfig) {
	app.get(routeConfig.path, routeConfig.route);
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
