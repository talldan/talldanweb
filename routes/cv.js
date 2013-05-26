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
	renderContext.navigation = [
		{
			isSelected: false,
			text: 'Home',
			link: '/'
		},
		{
			isSelected: false,
			text: 'Portfolio',
			link: '/portfolio/'
		},
		{
			isSelected: true,
			text: 'Curriculum Vitae',
			link: '/cv/'
		},
		{
			isSelected: false,
			text: 'Contact Me',
			link: '/contact/'
		}
	];
	res.render('cv', renderContext);
};