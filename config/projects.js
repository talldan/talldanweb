module.exports = [{ 
	sectionClassNames: "playr",
	rows : [{
		content: [{
			type: {image: true},
			classNames: 'slot-0-1-2-3 main-image',
			src: "playr/main.jpg",
			description : "I Am Playr is a popular social game, where players are given the opportunity to experience the life of a professional footballer."
		}, 
		{
			type: {h1: true},
			classNames: 'slot-4-5',
			text: 'I Am Playr'
		}, 
		{
			type: {paragraph: true},
			classNames: 'slot-4-5 introduction',
			text: "I Am Playr is a BAFTA nominated game developed by We R Interactive, and available to play on popular social networking sites like Facebook "
				+ "and Kongregate. I've worked as a developer since August 2011 on the Playr project, developing new game features as part of a small, agile team."
		}]
	},
	{
		content: [{
			type: {definitionList: true},
			classNames: 'slot-6-7',
			list:
			[{
					term: 'Company',
					definition: 'We R Interactive'
			}, 
			{
				term: 'Role',
				definition: 'Game Developer'
			}, 
			{
				term: 'Dates',
				definition: 'August 2011-Present'
			}, 
			{
				term: 'Core Technology',
				definition: 'HTML, JavaScript, CSS, PHP, Apache, Cassandra, Unity (Game Engine)'
			}, 
			{
				term: 'Additional Technology',
				definition: 'Knockout JS, JQuery, HTML Canvas (2D)'
			}]
		},
		{
			type: {paragraph: true},
			classNames: 'slot-8-9',
			text: "It's not often that games are developed using web standards, but that's the case with Playr. It's a challenging and exciting game  "
				+ "project to work on: It incorporates strong narrative with branching storylines, live action video footage, and 3D gameplay through "
				+ "the Unity game engine."
		},
		{
			type: {paragraph: true},
			classNames: 'slot-8-9',
			text: "Through my role, I get to work on both the server and client-side code, but I have a focus on the client. "
				+ " "
		}]
	}]
}];
//	,
//	{ 
//		"name" : "vizi",
//		"title" : "ViziQuest",
//		"description" : "ViziQuest is a semantic browsing portal that allows users to naturally find their way through large media collections.",
//		"mainImage": "vizi/main.jpg",
//		"company" : "Deep Visuals",
//		"content" : []
//	},
//	{ 
//		"name" : "splats",
//		"title" : "Splats",
//		"description" : "Four tiny creatures are accidentally brought to life in a lab experiment, can you help them escape their captors?",
//		"mainImage": "splats/main.jpg",
//		"company" : "NPR3 / Dare To Be Digital",
//		"content" : []