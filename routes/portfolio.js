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
		carouselscripts: '../views/partials/carouselscripts'
	};
	
	renderContext.navigation = [
		{
			isSelected: false,
			text: 'Home',
			link: '/'
		},
		{
			isSelected: true,
			text: 'Portfolio',
			link: '/portfolio/'
		},
		{
			isSelected: false,
			text: 'Curriculum Vitae',
			link: '/cv/'
		},
		{
			isSelected: false,
			text: 'Contact Me',
			link: '/contact/'
		}
	];
	
	res.render('portfolio', renderContext);
};