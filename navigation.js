module.exports = (function(){
	var _ = require('underscore');
	
	var navigationConfig = {
		"home": {
			text: 'Home',
			link: '/'
		},
		"portfolio": {
			name: 'portfolio',
			text: 'Portfolio',
			link: '/'
		},
		"cv": {
			name: 'cv',
			text: 'Curriculum Vitae',
			link: '/cv/'
		},
		"contact": {
			name: 'contact',
			text: 'Contact Me',
			link: '/contact/'
		}
	};
	
	var activeNavigationKeys = ['portfolio', 'contact'];
	
	return {
		getNavigationContext: function(current) {
			return _.map(activeNavigationKeys, function(navKey) {
				return _.extend(navigationConfig[navKey], { 
					isSelected: navKey === current 
				});
			});
		}
	};
})();