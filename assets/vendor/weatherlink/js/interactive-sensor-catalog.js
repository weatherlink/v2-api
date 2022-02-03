$('select#sensor').change(function() {
	$('div.params').hide();
//	var selectedVal = $('select#api-endpoint').find(':selected').val();
//	if (selectedVal != '') {
//		$('div#params-' + selectedVal).show();
//	}
});

var SENSOR_CATALOG_JSON = null;

var jqxhr = $.getJSON("/v2-api/resources/universal-sensor-catalog.json")
	.done(function(json) {
		SENSOR_CATALOG_JSON = json;
		populateSensorSelect();
	});

function populateSensorSelect() {
	if (SENSOR_CATALOG_JSON == null) {
		return;
	}
	$('select#sensor').empty();
	for (var sensorTypeIndex = 0 ; sensorTypeIndex < SENSOR_CATALOG_JSON.sensor_types.length ; sensorTypeIndex++) {
		var sensorType = SENSOR_CATALOG_JSON.sensor_types[sensorTypeIndex];
		$('select#sensor').append($("<option value='"+sensorType.sensor_type+"'>Sensor Type "+sensorType.sensor_type+" - "+sensorType.product_name+"</option>"));
	}
}

function displayCatalogDetails() {
	var catalogDiv = $('div#catalog');
	catalogDiv.html('');
	
	var sensorId = $('select#sensor').find(':selected').val();
	
	if (sensorId == '') {
		alert("Please select an Sensor");
		return;
	}
	
	catalogDiv.html(sensorId);	
}
