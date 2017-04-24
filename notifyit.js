function notifyit(params)
{
	var body = document.body;
	var ntfContainer = document.createElement('div');
	var ntfBox = document.createElement('div');
	var ntfMessage = document.createElement('p');

	ntfContainer.classList.add('ntf-container');
	ntfBox.classList.add('ntf-box');
	ntfMessage.classList.add('ntf-message');
	ntfMessage.classList.add(params.status.trim()+'-message');
	ntfMessage.textContent = params.message.trim();

	ntfBox.appendChild(ntfMessage);
	ntfContainer.appendChild(ntfBox);
	body.appendChild(ntfContainer);

	setTimeout(function() {
		ntfContainer.classList.add('visible');
	}, 100);

	// Closing manually on user click
	ntfBox.addEventListener('click', function() {
		ntfContainer.classList.remove('visible');

		setTimeout(function() {
			ntfContainer.remove();
		}, 350);
	});

	// Closing automatically after 8 seconds
	setTimeout(function() {
		ntfContainer.classList.remove('visible');

		setTimeout(function() {
			ntfContainer.remove();
		}, 350);
	}, 8000);
}
