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
				text: "Hello, I'm Daniel Richards"
			},
			{
				type: {paragraph: true},
				text: "I'm a Software Developer, and I'm probably far too excited about Web Development, "
					+ "Game Development, and Interactive Experiences."
			},
			{
				type: {paragraph: true},
				text: "I've been coding since around 2007, when I decided to opt for a big career change. "
					+ "I gave up my job, went to University for 3 years to study a degree, and emerged a different person. "
					+ "I studied game development. I've always had a big love of Video Games. "
					+ "I want to work on ambitious projects that take advantage of the fantastic technology that's out there."
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
				classNames: 'clear',
				type: {paragraph: true},
				text: "Since my degree I've become fascinated by the web. This inherently connected "
					+ "platform is going somewhere new and exciting. It could be great for games "
					+ "and other highly interactive experiences. There are some great collaborative "
					+ "and imaginative web applications around, but I don't quite feel that this is the "
					+ "case with games on the web. (yet)"
			},
			{
				type: {paragraph: true},
				text: "So I've been lucky enough to work for the last three years in web development. "
					+ "For one year at a startup in Cambridge, developing applications for museum "
					+ "visitors, and for the last two years at a new games studio working on an ambitious social game."
			},
			{
				type: {paragraph: true},
				text: "I feel that JavaScript has become my strongest language. I've learnt quite a "
					+ "few different backend technologies, and have come to appreciate approaches like "
					+ "templating, MV(C|VM) frameworks, semantic markup, css preprocessors, and much more. "
					+ "I've found a domain where I can marry my technical and creative sides to create "
					+ "wonderful looking user interfaces. "
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