	(function($, _, Sly) {
		var $carousel = $('#carousel');
		var slyCarousel = new Sly($carousel.find('.selectarea'), {
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			prev: $carousel.find('.selectbutton.previous'),
			next: $carousel.find('.selectbutton.next'),
			scrollBar: $carousel.find('.selectbar'),
			scrollBy: 0,
			speed: 300,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
	//		dynamicHandle: 1,
			clickBar: 1
		}, {
			load: function() {
				$carousel.addClass('ready');
			},
			active: function(event, activeIndex) {
				var $articles = $carousel.find('.selectcontent article')
				
				$articles.removeClass('shown')
					.eq(activeIndex).addClass('shown');
				
				setTimeout(function() {
					$articles.removeClass('active')
						.eq(activeIndex).addClass('active');
				}, 1);
			}
		}).init();
		
		var resizeSly = _.debounce(function() {
			slyCarousel.reload();
		}, 300);
		$(window).resize(resizeSly);
	})($, _, Sly);