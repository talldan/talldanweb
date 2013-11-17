module.exports = function(req, res){
	var renderContext = {
		title: 'talldan.com | cv',
		headerText: 'My <em>CV</em>',
		introduction: [
			{
				type: {h1: true},
				text: "About Me"
			},
			{
				type: {paragraph: true},
				text: "Coming Soon"
			}
		]
	};
	
	renderContext.partials = {
		mainstyles: '../views/partials/mainstyles',
		topnav: '../views/partials/topnav',
		mainheader: '../views/partials/header',
		footer: '../views/partials/footer',
		article: '../views/partials/article'
	};
	
	var navigation = require('../navigation');
	renderContext.navigation = navigation.getNavigationContext('cv');
	
	res.render('cv', renderContext);
};