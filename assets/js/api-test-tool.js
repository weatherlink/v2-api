if ($('input#api-timestamp').length > 0) {
	setInterval(updateAPITimestamp, 1000);
}

var editor = null;

if ($('div#api-response').length > 0) {
	editor = ace.edit("api-response");
	editor.setReadOnly(true);
	editor.session.setMode("ace/mode/json");
    	//editor.setTheme("ace/theme/monokai");
    	//editor.session.setMode("ace/mode/javascript");
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

function sendAPIRequest() {
	editor.setValue("");
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
			apiEndpointPath = '/historic/' + $('input#historic-station-id').val();
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
	
	queryParams.push({"key": "api-signature", "value": apiSignature});
	
	var requestData = {};
	_.forEach(queryParams, function(param) {
		_.set(requestData, param.key, param.value);
	});

	var jqxhr = $.getJSON('https://enviro-testapi.weatherlink.com/v2' + apiEndpointPath, requestData)
		.done(function(responseJson) {
			editor.setValue(JSON.stringify(responseJson));
		})
		.fail(function(jqxhr, textStatus, error) {
			console.log(textStatus);
			console.log(error);
		});
}

$('input#send-api-request-button').on('click', function(eventData) {
	sendAPIRequest();
});
