module.exports = function(req, res){
	var renderContext = {
		title: 'talldan.com | cv',
		headerText: 'How to <em>contact me</em>',
		introduction: [
			{
				type: {h1: true},
				text: "Email Me"
			},
			{
				type: {paragraph: true},
				text: "Coming Soon"
			},
			{
				type: {h1: true},
				text: "Tweet Me"
			},
			{
				type: {link: true},
				text: "@bigtalldan",
				address: 'http://twitter.com/bigtalldan'
			},
			{
				type: {h1: true},
				text: "Connect with me"
			},
			{
				type: {link: true},
				text: "Daniel Richards on LinkedIn",
				address: 'http://lnkd.in/VrMeHG'
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
			isSelected: false,
			text: 'Curriculum Vitae',
			link: '/cv/'
		},
		{
			isSelected: true,
			text: 'Contact Me',
			link: '/contact/'
		}
	];
	
	res.render('contact', renderContext);
};