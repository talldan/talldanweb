module.exports = {
	title: 'talldan.com | portfolio',
	headerText: 'Welcome to <em>talldan.com</em>',
	introduction: [
		{
			type: {articleHeader: true},
			classNames: '',
			text: 'About Me'
		},
		{
			type: {paragraph: true},
			text: "A coder with experience in full-stack web and game development. I'm experienced with modern client-side technologies"
				+ " while also having experience in multiple server-side stacks and cloud platforms like AWS."
		}
	],
	projects:[
		{
			project: "Lyroke",
			company: "We R Interactive",
			mainImage: "lyroke/main.jpg",
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
							definition: 'April 2014-January 2015'
						}, 
						{
							term: 'Core Technology',
							definition: 'HTML, JavaScript, Less CSS, PHP, AWS (EC2, S3, R53, Cloudfront), Apache, Cassandra, Cordova, iOS, Android'
						}, 
						{
							term: 'Additional Technology',
							definition: 'React JS, Knockout JS, JQuery, Git, SVN, Jenkins, Testflight, XCode, Google Analytics, Bugsnag'
						}
					]
				}, 
				{
					type: {h1: true},
					text: 'Lyroke'
				},
				{
					type: {paragraph: true},
					text: "Lyroke is a music game, previously available on iOS, Android and through the web. The game has similarities "
						+ "to Karaoke (singing optional), but the aim is to correctly choose the missing lyric from three options - with each correct guess "
						+ "earning the player points."
				},
				{
					type: {paragraph: true},
					text: "One of the unique challenges of Lyroke is that it's a multi-platform game. The code base is developed "
						+ "as a web app, with builds for Android and iOS produced using Cordova/Phonegap. Through this, "
						+ "I've garnered an in-depth understanding of the build and publishing process on both of these mobile platforms."
				},
				{
					type: {paragraph: true},
					text: "On the server-side, Lyroke is hosted on AWS, which is my first exposure to the platform. The back-end stack is "
						+ "built on Apache, PHP, with a Cassandra database cluster. We take advantage of automatically scaling our backend "
						+ "to customer demand using the features that the AWS platform provides."
				},
				{
					type: {paragraph: true},
					text: "Lyroke was withdrawn from sale as a result of the acquisition of We R Interactive in January, 2015. "
				},
				{
					type: {vimeo: true},
					videoId: '79885487',
					classNames: 'right'
				},
				{
					type: {h2: true},
					text: "Responsibilities: "
				},
				{
					type: {stringList: true},
					classNames: '',
					list: [
						"Managing the game's architecture on both front and back-end.",
						"Handling deployments to iOS, Android and Web.",
						"Managing a small team of developers.",
						"Development of features and bug-fixing.",
						"Improvement and development of internal tool-chain."
					]
				},
				{
					type: {h2: true},
					text: "Achievements: "
				},
				{
					type: {stringList: true},
					classNames: '',
					list: [
						"Developed and oversaw release of new, radically redesigned client for the game.",
						"Greatly improved dev workflow. Introduced continuous integration, one-click deployment and code reviews.",
						"Managed migration of all analytics from Upsight to Google Analytics.",
						"Migrated developers from a mish-mash of Apache dev environments to Vagrant setup closely mirroring live environment.",
						"Introduced Bugsnag error tracking across server and client - greatly improving productivity in finding and resolving bugs.",
						"Handled setup and migration of company git repositories to a new Gitlab server."
					]
				}
			]
		},
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
							definition: 'August 2011-April 2014'
						}, 
						{
							term: 'Core Technology',
							definition: 'HTML, JavaScript, Less CSS, PHP, Apache, Cassandra, Jenkins'
						}, 
						{
							term: 'Additional Technology',
							definition: 'Knockout JS, JQuery, Canvas2D, Git, SVN, JIRA, Google Analytics'
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
					text: "My role encompassed the full-stack, responsible for the smooth-running of the game, crafting and coding new "
						+ "features and managing our regular release schedule. In addition, I acted as a spokesperson for the project, and "
						+ "work together with a number of areas of the business (design, QA, marketing, analytics, business development), "
						+ "as well as partners and clients."
				},
				{
					type: {paragraph: true},
					text: "At its peak, I Am Playr enjoyed over 2 million monthly active users, and is still available to play through Facebook."
				},
				{
					type: {vimeo: true},
					videoId: '64216405',
					classNames: 'right'
				},
				{
					type: {link: true},
					classNames: 'try-button clear',
					target: '_blank',
					text: "Play 'I Am Playr' on Facebook",
					address: 'https://apps.facebook.com/iamplayr/'
				},
				{
					type: {h2: true},
					text: "Responsibilities: "
				},
				{
					type: {stringList: true},
					classNames: '',
					list: [
						"Managing architecture across the full-stack",
						"Designing and implementing new game features.",
						"Identifying performance issues and bugs using monitoring/profiling tools.",
						"Use of analytics to identify ways to improve player experience.",
						"Internationalisation of the game, and the conquering of the related styling challenges.",
						"Working with third-party APIs (Facebook, TrialPay, Paypal, Zendesk, Boku, SupersonicAds), including highly critical code for payments."
					]
				},
				{
					type: {h2: true},
					text: "Achievements: "
				},
				{
					type: {stringList: true},
					classNames: '',
					list: [
						"Development of several high-profile features for brand partners, including Nike, Gillette, Red Bull and Alfa Romeo.",
						"Lead on redesigning our internal toolchain, which greatly improved productivity for designers and content producers.",
						"Internationalisation of the game into 9 languages, and handling the related styling challenges.",
						"Recommended the use of new technology - notably LESS CSS and HTML templating.",
						"Took an active role in designing and planning new features."
					]
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
						"Development of game concept.",
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