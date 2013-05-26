module.exports = {
	title: 'Portfolio',
	headerText: 'My <em>portfolio</em>',
	projects:[
		{
			project: "I Am Playr",
			company: "We R Interactive",
			mainImage: "playr/main.jpg",
			content: [
				{
					type: {definitionList: true},
					classNames: 'left',
					list: [
						{
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
							definition: 'Knockout JS, JQuery, Canvas2D, Git, SVN'
						}
					]
				}, 
				{
					type: {h1: true},
					text: 'I Am Playr'
				},
				{
					type: {paragraph: true},
					text: "I Am Playr is the BAFTA nominated social game where players "
						+ "experience the life of a footballer. I've worked as a developer "
						+ "on the Playr project since August 2011, working on both front "
						+ "and back-end code."

				}
			]
		},
		{
			project: "ViziQuest",
			company: "Deep Visuals",
			mainImage: "vizi/main.jpg",
			content: [
				{
					type: {definitionList: true},
					classNames: 'left',
					list: [
						{
							term: 'Company',
							definition: 'Deep Visuals'
						}, 
						{
							term: 'Role',
							definition: 'Web Developer'
						}, 
						{
							term: 'Dates',
							definition: 'September 2010-July 2011'
						}, 
						{
							term: 'Core Technology',
							definition: 'HTML, JavaScript, CSS, C#, .Net, IIS, SQL Server, jQuery'
						}, 
						{
							term: 'Additional Technology',
							definition: 'WCF, Modernizr, Azure, Team Foundation Server'
						}
					]
				}, 
				{
					type: {h1: true},
					text: 'ViziQuest'
				},
				{
					type: {paragraph: true},
					text: "ViziQuest is an interactive application for deep browsing of large "
						+ "collections. As the user browses, the system builds up knowledge of user preferences "
						+ "and displays appropriate matching content. I joined Deep Visuals as a web developer "
						+ "and was tasked with porting their existing Silverlight application to the web."

				}
			]
		},
		{
			project: "Splats",
			company: "NPR3 / Dare To Be Digital",
			mainImage: "splats/main.jpg",
			content: [
				{
					type: {definitionList: true},
					classNames: 'left',
					list: [
						{
							term: 'Company',
							definition: 'Dare To Be Digital / NPR3'
						}, 
						{
							term: 'Role',
							definition: 'Game Developer / Team Leader'
						}, 
						{
							term: 'Dates',
							definition: 'June 2009-August 2009'
						}, 
						{
							term: 'Core Technology',
							definition: 'C#, XNA, .Net, JigLibX'
						}, 
						{
							term: 'Additional Technology',
							definition: 'Garageband, Maya, XACT, HLSL, Hansoft'
						}
					]
				}, 
				{
					type: {h1: true},
					text: 'Splats!'
				},
				{
					type: {paragraph: true},
					text: "Dare to be Digital is a leading videogame competition for students. "
				}
			]
		}
	]
};
//
////module.exports = [
//{ 
//	sectionClassNames: "playr",
//	rows : [
//		{
//			content: [
//				{
//					type: {image: true},
//					classNames: 'slot-0-1-2-3 main-image',
//					src: "playr/main.jpg",
//					description : "I Am Playr is a popular social game, where players are given the opportunity to experience the life of a professional footballer."
//				}, 
//				{
//					type: {h1: true},
//					classNames: 'slot-4-5',
//					text: 'I Am Playr'
//				}, 
//				{
//					type: {paragraph: true},
//					classNames: 'slot-4-5 introduction',
//					text: "I Am Playr is a BAFTA nominated game developed by We R Interactive, and available to play on popular social networking sites like Facebook "
//						+ "and Kongregate. I've worked as a developer since August 2011 on the Playr project, developing new game features as part of a small, agile team."
//				}
//			]
//		}, 
//		{
//			content: [
//				{
//					type: {definitionList: true},
//					classNames: 'slot-6-7',
//					list: [
//						{
//							term: 'Company',
//							definition: 'We R Interactive'
//						}, 
//						{
//							term: 'Role',
//							definition: 'Game Developer'
//						}, 
//						{
//							term: 'Dates',
//							definition: 'August 2011-Present'
//						}, 
//						{
//							term: 'Core Technology',
//							definition: 'HTML, JavaScript, CSS, PHP, Apache, Cassandra, Unity (Game Engine)'
//						}, 
//						{
//							term: 'Additional Technology',
//							definition: 'Knockout JS, JQuery, HTML Canvas (2D)'
//						}
//					]
//				}, 
//				{
//					type: {paragraph: true},
//					classNames: 'slot-8-9',
//					text: "It's not often that games are developed using web standards, but that's the case with Playr. It's a challenging and exciting game  "
//						+ "project to work on: It incorporates a strong narrative with branching storylines, live action video footage, 3D gameplay through "
//						+ "the Unity game engine, and microtransactions."
//				}, 
//				{
//					type: {paragraph: true},
//					classNames: 'slot-8-9',
//					text: "My role covers both the server and client-side code, but I have a focus on the client. I particularly enjoy working on some of the "
//						+ "fantastic interfaces our designers have come up with, and bringing them to life with modern web standards that naturally degrade on "
//						+ "older browsers; like CSS3 transitions and animations."
//				}
//			]
//		},
//		{
//			content: [
//				{
//					type: {paragraph: true},
//					classNames: 'slot-6-7-8-9',
//					text: "Some of the features I've worked on for this project are:"
//				}, 
//				{
//					type: {stringList: true},
//					classNames: 'slot-6-7-8-9',
//					list: [
//						''
//					]
//				}
//			]
//		}
//	]
//}];
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