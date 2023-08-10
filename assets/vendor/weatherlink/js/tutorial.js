function updateTemplates() {
	// var apiKey = $('input#api-key').val().trim();
	// var apiSecret = $('input#api-secret').val().trim();

	// if (apiKey.length == 0) {
	// 	apiKey = '{YOUR API KEY}';
	// }
	// if (apiSecret.length == 0) {
	// 	apiSecret = '{YOUR API SECRET}';
	// }

	// $('span.url-stations-all').html('https://api.weatherlink.com/v2/stations?api-key=' + apiKey);
}

$('input.api-credential').on('input', function(eventData){
	updateTemplates();
});
