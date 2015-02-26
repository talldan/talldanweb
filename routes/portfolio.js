module.exports = function(req, res){
	
	var renderContext = require('../config/portfolio');
	
	renderContext.partials = {
		mainstyles: '../views/partials/mainstyles',
		mainjavascripts: '../views/partials/mainjavascripts',
		topnav: '../views/partials/topnav',
		mainheader: '../views/partials//header',
		footer: '../views/partials/footer',
		article: '../views/partials/article',
		carouselmarkup: '../views/partials/carouselmarkup',
		carouselscripts: '../views/partials/carouselscripts',
		portfoliointroduction: '../views/partials/portfoliointroduction'
	};
	
	var navigation = require('../navigation');
	renderContext.navigation = navigation.getNavigationContext('portfolio');
	
	res.render('portfolio', renderContext);
};