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
							definition: 'Lead Game Developer'
						}, 
						{
							term: 'Dates',
							definition: 'August 2011-Present'
						}, 
						{
							term: 'Core Technology',
							definition: 'HTML, JavaScript, Less CSS, PHP, Apache, Cassandra, Unity (Game Engine)'
						}, 
						{
							term: 'Additional Technology',
							definition: 'Knockout JS, JQuery, Canvas2D, Git, SVN, JIRA'
						}
					]
				}, 
				{
					type: {h1: true},
					text: 'I Am Playr'
				},
				{
					type: {paragraph: true},
					text: "I Am Playr is a BAFTA nominated game, available to play on popular social networking sites like "
						+ "Facebook and Kongregate. I’ve worked as a developer on ‘Playr’ since August 2011, crafting new "
						+ "game features as part of a multi-disciplined agile team. I became lead developer of the project in July 2013. "
				},
				{
					type: {paragraph: true},
					text: "Playr is an ambitious game, and challenging to work on; it incorporates features like a strong "
						+ "narrative with branching storylines, live action first-person video, 3D gameplay through the unity "
						+ "game engine, and a business model which brings together microtransactions and strong brand integration. "
				},
				{
					type: {paragraph: true},
					text: "My role encompasses the full-stack. I'm responsible for the smooth-running of the game, crafting and coding new "
						+ "features and managing our regular release schedule. In addition, I act as a spokesperson for the project, and have direct "
						+ "communication with a number of areas of the business, as well as partners and clients."
				},
				{
					type: {vimeo: true},
					videoId: '64216405',
					classNames: 'right'
				},
				{
					type: {h2: true},
					text: "Achievements and Responsibilities: "
				},
				{
					type: {stringList: true},
					classNames: '',
					list: [
						"Designing and implementing new game features.",
						"Identifying performance issues and bugs using monitoring/profiling tools.",
						"Use of analytics to identify ways to improve player experience.",
						"Development of game tools used for artists and designers.",
						"Internationalisation of the game, and the conquering of the related styling challenges.",
						"Working with third-party APIs (Facebook, TrialPay, Paypal, Zendesk, Boku, SupersonicAds), including highly critical code for payments.",
						"Worked on high-profile brand integration with companies including Nike, Gillette, Red Bull, and Alfa Romeo."
					]
				},
				{
					type: {link: true},
					classNames: 'try-button clear',
					target: '_blank',
					text: "Play 'I Am Playr' on Facebook",
					address: 'https://apps.facebook.com/iamplayr/'
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
					text: "Deep Visuals are a Cambridge (UK) based startup providing interactive experiences "
						+ "that support the browsing of digital archives/collections. Products are delivered "
						+ "through on-site installations and the web, with the museum and gallery sectors "
						+ "the company's main clients. At Deep Visuals I worked as a developer "
						+ "and was tasked with producing a plugin-free web app version of  their existing Silverlight "
						+ "application 'ViziQuest'."
				},
				{
					type: {paragraph: true},
					text: "ViziQuest is an interactive application for the deep browsing of large "
						+ "collections. As the user browses, the system builds up knowledge of user preferences "
						+ "and displays appropriate matching content. I developed the web-version of the ViziQuest "
						+ "client from the ground up, and also contributed to the back-end, including migrating the "
						+ "existing deprecated 'ASMX' web service to instead use the Windows Communication Foundation API, "
						+ "and setting up the application on the Windows Azure cloud platform."
				},
				{
					type: {paragraph: true},
					text: "The ViziQuest client makes use of a number of HTML5/CSS3 standards. The animation of the images "
						+ "is performed using CSS3 Transitions where available, with a fallback to jQuery animations. The "
						+ "application supports viewing images, listening to audio and watching video - the HTML5 standards "
						+ "are used for the playing of videos and audio, with Flash support on unsupported platforms. "
				},
				{
					type: {h2: true},
					text: "Achievements and Responsibilities: "
				},
				{
					type: {stringList: true},
					classNames: 'two-columns',
					list: [
						"Development of new web client for the company's ViziQuest product, which was then sold to the Fitzwilliam Museum as a product.",
						"Porting of back-end to the Windows Azure cloud platform, which required significant re-engineering of some aspects of the application.",
						"Storyboarding, and artwork for all of the company's products.",
						"Development of prototypes and supporting tools for other initiatives/ projects."
					]
				},
				{
					type: {link: true},
					classNames: 'try-button',
					target: '_blank',
					text: 'Try ViziQuest*',
					address: 'http://www.deepvisuals.com/collections/scottpolar/BAARE_JS.php'
				},
				{
					type: {small: true},
					classNames: 'clear',
					text: " * This demonstration shows images from the British Artic Air Route expedition, courtesy of the Scott Polar Museum. "
						+ "A couple of aspects of the application have been altered since I worked at Deep Visuals - the light blue color used "
						+ "on the user-interface, and the hover effect on surrounding images to bring them to the top."
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
					text: "Dare to be Digital is a leading videogame competition for students throughout the world. "
						+ "Teams of 5 students develop a game prototype from scratch, and go through the process of "
						+ "building a project plan, pitching the game, development of the game, and finally the presentation "
						+ "of the game at a special event called 'Dare Protoplay' as part of the Edinburgh Interactive Festival. "
						+ "At Dare Protoplay, a panel of judges decide on the winner of the competition, with the top three games "
						+ "being given the opportunity to win the prestigious BAFTA 'Ones to Watch' award."
				},
				{
					type: {paragraph: true},
					text: "I formed a team with four other students from my University (The University of Westminster) during the "
						+ "second year of our course. We developed the idea for a cooperative puzzle-platform game called 'Splats!' "
						+ "and were successful in (nervously) pitching the game to a panel of games-industry experts/bosses, and thus "
						+ "reached the final of the competition. "
				},
				{
					type: {paragraph: true},
					text: "The finals took place over the summer of 2009. All of the teams were relocated to Dundee for ten weeks of "
						+ "furious (but fun) game development. "
				},
				{
					type: {paragraph: true},
					text: "My role in the team was that of Team Leader and Programmer, so I had to balance project management with "
						+ "my day-to-day programming tasks. "
				},
				{
					type: {youtube: true},
					videoId: 'SfyIuDnseyk',
					classNames: 'right'
				},
				{
					type: {h2: true},
					text: "Achievements and Responsibilities: "
				},
				{
					type: {stringList: true},
					list: [
						"Integration of physics engine (JigLibX).",
						"Incorporation of animation library.",
						"Shader integration and programming.",
						"Music creation (using Garageband).",
						"Audio programming.",
						"General gameplay programming."
					]
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