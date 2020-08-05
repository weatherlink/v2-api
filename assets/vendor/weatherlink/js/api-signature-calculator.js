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
	
	instructions += "The first step is to take all of the parameters and sort them by parameter name. Once sorted the list of parameters will look like the following:<br>";
	var sortedParams = _.chain(queryParams).concat(pathParams).orderBy("key").value();
	instructions += "<ul>";
	_.forEach(sortedParams, function(param) {
		instructions += "<li>" + param.key + " = " + param.value + "</li>";
	});
	instructions += "</ul>";
	
	instructions += "The second step is to iterate over the sorted parameter set in order and create a string by concatenating the parameter name-value pairs like so:<br>";
	var sortedParamsString = _.chain(sortedParams).map(function(param) { return param.key + param.value; }).join("").value();
	instructions += "<pre>" + sortedParamsString + "</pre><br>";
	var sortedParamsStringDelim = _.chain(sortedParams).map(function(param) { return "(" + param.key + ")(" + param.value + ")"; }).join("").value();
	instructions += "To better illustrate how the string is built here is the string again with parentheses showing the different parts used to create the concatenated string:<br>";
	instructions += "<pre>" + sortedParamsStringDelim + "</pre><br>";
	
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
	var apiSignature = hmac.digest().toHex().toLowerCase();
	
	instructions += "The third step is to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a lower case hexadecimal string is the API Signature.<br>";
	instructions += "The string to hash: " + sortedParamsString + "<br>";
	instructions += "HMAC secret key: " + apiSecret + "<br>";
	instructions += "Computed HMAC as a lower case hexadecimal string: " + apiSignature + "<br>";
	
	queryParams.push({"key": "api-signature", "value": apiSignature});

	
	
	
	apiSignatureDiv.html(instructions);	
}

$('input#calculate-api-signature-button').on('click', function(eventData) {
	calculateApiSignature();
});
