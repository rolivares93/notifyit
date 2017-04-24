function notifyit(obj) {
	var $ntfContainer = $('<div class="ntf-container"></div>');
	var $ntfBox = $('<div class="ntf-box"></div>');
	var $ntfMessage = $('<p class="ntf-message ' + $.trim(obj.status) + '-message">' + $.trim(obj.message) + '</p>');

	$ntfBox.append($ntfMessage);
	$ntfContainer.append($ntfBox);
	$('body').append($ntfContainer);

	setTimeout(function() {
		$ntfContainer.addClass('visible');
	}, 100);

	// Closing manually on user click
	$ntfBox.on('click', function() {
		$ntfContainer.removeClass('visible');
		
		setTimeout(function() {
			$ntfContainer.remove();
		}, 350);
	});

	// Closing automatically after 8 seconds
	setTimeout(function() {
		$ntfContainer.removeClass('visible');
		
		setTimeout(function() {
			$ntfContainer.remove();
		}, 350);
	}, 8000);
};
