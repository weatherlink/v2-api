if ($('input#api-timestamp').length > 0) {
	setInterval(updateAPITimestamp, 1000);
}

function updateAPITimestamp() {
	$('input#api-timestamp').val(Math.floor(Date.now() / 1000));
}

$('select#api-endpoint').change(function() {
	$('div.params').hide();
	var selectedVal = $('select#api-endpoint').find(':selected').val();
	if (selectedVal != '') {
		$('div#params-' + selectedVal).show();
	}
});

function calculateAPISignature() {
	var apiEndpoint = $('select#api-endpoint').find(':selected').val();
	
	if (apiEndpoint == '') {
		alert("Please select an API Endpoint");
		return;
	}
	
	var apiKey = $('input#api-key').val();
	var apiSecret = $('input#api-secret').val();
	var t = $('input#api-timestamp').val();
	
	var queryParams = [
		{"key": "api-key", "value": apiKey},
		{"key": "t",       "value": t}
	];
	var pathParams = [];
	
	switch (apiEndpoint) {
		case 'stations-all':
			break;
		case 'stations-some':
			pathParams.push({"key": "station-ids", "value": $('input#stations-some-station-ids').val()});
			break;
		case 'nodes-all':
			break;
		case 'nodes-some':
			pathParams.push({"key": "node-ids", "value": $('input#nodes-some-node-ids').val()});
			break;
		case 'sensors-all':
			break;
		case 'sensors-some':
			pathParams.push({"key": "sensor-ids", "value": $('input#sensors-some-sensor-ids').val()});
			break;
		case 'sensor-activity-all':
			break;
		case 'sensor-activity-some':
			pathParams.push({"key": "sensor-ids", "value": $('input#sensor-activity-some-sensor-ids').val()});
			break;
		case 'sensor-catalog':
			break;
		case 'current':
			pathParams.push({"key": "station-id", "value": $('input#current-station-id').val()});
			break;
		case 'historic':
			pathParams.push({"key": "station-id", "value": $('input#historic-station-id').val()});
			break;
	}

	var stringToHash = _.chain(queryParams)
		.concat(pathParams)
    		.orderBy("key")
    		.map(function(param) {
        		return param.key + param.value;
    		})
    		.join("")
    		.value();

	var hmac = forge.hmac.create();
	hmac.start('sha256', apiSecret);
	hmac.update(stringToHash);
	var apiSignature = hmac.digest().toHex();
	
	console.log(stringToHash);
	console.log(apiSignature);
}

$('input#send-api-request-button').on('click', function(eventData) {
	calculateAPISignature();
});
