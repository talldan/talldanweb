define(['jquery', 'underscore'], function($, _){
	return {
		'initialise': function() {
			$('.tdSelectMenu .tdSelectSource').click(function() {
				var targetSelector = $(this).attr('data-target');
				$('.tdSelectTarget')
					.removeClass('tdSelected');
				$(targetSelector)
					.addClass('tdSelected');
			});
		}
	};
});