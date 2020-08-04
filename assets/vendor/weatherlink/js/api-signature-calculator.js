if ($('input#api-timestamp').length > 0) {
	setInterval(updateApiTimestamp, 1000);
}

function updateApiTimestamp() {
	$('input#api-timestamp').val(Math.floor(Date.now() / 1000));
}

$('select#api-endpoint').change(function() {
	$('div.params').hide();
	var selectedVal = $('select#api-endpoint').find(':selected').val();
	if (selectedVal != '') {
		$('div#params-' + selectedVal).show();
	}
});

function calculateApiSignature() {
	var apiSignatureDiv = $('div#api-signature');
	apiSignatureDiv.html('');
	
	var apiEndpointID = $('select#api-endpoint').find(':selected').val();
	
	if (apiEndpointID == '') {
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
	
	var apiEndpointPath = null;
	
	switch (apiEndpointID) {
		case 'stations-all':
			apiEndpointPath = '/stations';
			break;
		case 'stations-some':
			pathParams.push({"key": "station-ids", "value": $('input#stations-some-station-ids').val()});
			apiEndpointPath = '/stations/' + $('input#stations-some-station-ids').val();
			break;
		case 'nodes-all':
			apiEndpointPath = '/nodes';
			break;
		case 'nodes-some':
			pathParams.push({"key": "node-ids", "value": $('input#nodes-some-node-ids').val()});
			apiEndpointPath = '/nodes/' + $('input#nodes-some-node-ids').val();
			break;
		case 'sensors-all':
			apiEndpointPath = '/sensors';
			break;
		case 'sensors-some':
			pathParams.push({"key": "sensor-ids", "value": $('input#sensors-some-sensor-ids').val()});
			apiEndpointPath = '/sensors/' + $('input#sensors-some-sensor-ids').val();
			break;
		case 'sensor-activity-all':
			apiEndpointPath = '/sensor-activity';
			break;
		case 'sensor-activity-some':
			pathParams.push({"key": "sensor-ids", "value": $('input#sensor-activity-some-sensor-ids').val()});
			apiEndpointPath = '/sensor-activity/' + $('input#sensor-activity-some-sensor-ids').val();
			break;
		case 'sensor-catalog':
			apiEndpointPath = '/sensor-catalog';
			break;
		case 'current':
			pathParams.push({"key": "station-id", "value": $('input#current-station-id').val()});
			apiEndpointPath = '/current/' + $('input#current-station-id').val();
			break;
		case 'historic':
			pathParams.push({"key": "station-id", "value": $('input#historic-station-id').val()});
			queryParams.push({"key": "start-timestamp", "value": $('input#historic-start-timestamp').val()});
			queryParams.push({"key": "end-timestamp", "value": $('input#historic-end-timestamp').val()});
			apiEndpointPath = '/historic/' + $('input#historic-station-id').val();
			break;
	}
	
	var instructions = '';
	
	instructions += "For an API call to " + apiEndpointPath + " the following parameters are used:<br>";
	if (pathParams.length > 0) {
		instructions += "Path Parameters:";
		instructions += "<ul>";
		_.forEach(pathParams, function(param) {
			instructions += "<li>" + param.key + " = " + param.value + "</li>";
		});
		instructions += "</ul>";
	}
	if (queryParams.length > 0) {
		instructions += "Query Parameters:";
		instructions += "<ul>";
		_.forEach(queryParams, function(param) {
			instructions += "<li>" + param.key + " = " + param.value + "</li>";
		});
		instructions += "</ul>";
	}
	instructions += "The first step is to take all of the parameters and sort them by parameter name.<br>";
	instructions += "Once sorted the list of parameters will look like the following:<br>";
	var sortedParams = _.chain(queryParams).concat(pathParams).orderBy("key").value();
	instructions += "<ul>";
	_.forEach(sortedParams, function(param) {
		instructions += "<li>" + param.key + " = " + param.value + "</li>";
	});
	instructions += "</ul>";
	

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
	
	queryParams.push({"key": "api-signature", "value": apiSignature});

	
	
	
	apiSignatureDiv.html(instructions);	
}

$('input#calculate-api-signature-button').on('click', function(eventData) {
	calculateApiSignature();
});
