module.exports = function(req, res){
	var renderContext = require('../config/portfolio');
	renderContext.partials = {
		mainstyles: 'partials\\mainstyles',
		mainjavascripts: 'partials\\mainjavascripts',
		topnav: 'partials\\topnav',
		mainheader: 'partials\\header',
		footer: 'partials\\footer',
		article: 'partials\\article',
		carouselmarkup: 'partials\\carouselmarkup',
		carouselscripts: 'partials\\carouselscripts'
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