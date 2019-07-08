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
	/*
	var _ = require("lodash");
	var apiKey = pm.environment.get("V2_API_KEY");
	var apiSecret = pm.environment.get("V2_API_SECRET");
	var t = Math.round((new Date()).getTime() / 1000);
	pm.environment.set("V2_API_TIMESTAMP", t);
	var requestUrlObject = JSON.parse(JSON.stringify(pm.request.url));
	var stringToHash = _.chain(requestUrlObject.query)
    		.concat(requestUrlObject.variable)
    		.filter(function(param) {
        		if (param.key == "api-key" || param.key == "api-signature" || param.key == "t" || _.get(param, "disabled", false) === true) {
            			return false;
        		}
        		return true;
    		})
    		.concat([
        		{"key": "api-key", "value": apiKey},
        		{"key": "t",       "value": t}
    		])
    		.orderBy("key")
    		.map(function(param) {
        		return param.key + param.value;
    		})
    		.join("")
    		.value();
	var apiSignature = CryptoJS.HmacSHA256(stringToHash, apiSecret).toString(CryptoJS.enc.Hex);
	pm.environment.set("V2_API_SIGNATURE", apiSignature);
	*/
}

$('input#send-api-request-button').on('click', function(eventData) {

});
