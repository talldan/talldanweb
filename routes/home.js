module.exports = function(req, res){
	
	var renderContext = {
		title: 'talldan.com',
		headerText: 'Welcome to <em>talldan.com</em>',
		introduction: [
			{
				type: {image: true},
				classNames: 'hollowface left',
				src: 'hollow-face.png',
				description: 'this is not what I look like in real life'
			},
			{
				type: {h1: true},
				text: "Hello, I'm Dan"
			},
			{
				type: {paragraph: true},
				text: "I'm a Software Developer, and I'm probably far too excited about Web Development, "
					+ "Game Development, and Interactive Experiences."
			},
			{
				type: {paragraph: true},
				text: "I've been coding since around 2007, when I decided to opt for a big career change. "
					+ "I gave up my job and went to University for 3 years to study a degree in game development. "
			},
			{
				type: {image: true},
				src: 'computer.png',
				classNames: 'first left gadget'
			},
			{
				type: {image: true},
				src: 'tablet.png',
				classNames: 'left gadget'
			},
			{
				type: {image: true},
				src: 'gamepad.png',
				classNames: 'left gadget'
			},
			{
				type: {paragraph: true},
				text: "Since my degree, I've found "
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
	renderContext.navigation = navigation.getNavigationContext('home');
	
	res.render('home', renderContext);
};