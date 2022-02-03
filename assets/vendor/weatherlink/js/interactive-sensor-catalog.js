$('select#sensor-type').change(function() {
	$('div.options').hide();
	var selectedSensorTypeId = $('select#sensor-type').find(':selected').val();
	if (selectedSensorTypeId != '') {
		selectedSensorTypeId = +selectedSensorTypeId;
		var sensorType = getSensorType(selectedSensorTypeId);
		if (sensorType != null) {
			if (_.has(sensorType, "data_structures")) {
				populateDataStructureTypeSelect(sensorType.data_structures);
				$('div#data-structure-types').show();
			}
		}
	}
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
	$('select#sensor-type').empty();
	for (var sensorTypeIndex = 0 ; sensorTypeIndex < SENSOR_CATALOG_JSON.sensor_types.length ; sensorTypeIndex++) {
		var sensorType = SENSOR_CATALOG_JSON.sensor_types[sensorTypeIndex];
		$('select#sensor-type').append($("<option value='"+sensorType.sensor_type+"'>Sensor Type "+sensorType.sensor_type+" - "+sensorType.product_name+"</option>"));
	}
	$('select#sensor-type').trigger('change');
}

function populateDataStructureTypeSelect(dataStructures) {
	$('select#data-structure-type').empty();
	for (var dataStructureTypeIndex = 0 ; dataStructureTypeIndex < dataStructures.length ; dataStructureTypeIndex++) {
		var dataStructureType = dataStructures[dataStructureTypeIndex];
		$('select#data-structure-type').append($("<option value='"+dataStructureType.data_structure_type+"'>Data Structure Type "+dataStructureType.data_structure_type+" - "+dataStructureType.description+"</option>"));
	}
}

function getSensorType(sensorTypeId) {
	if (SENSOR_CATALOG_JSON == null) {
		return null;
	}
	var result = _.find(SENSOR_CATALOG_JSON.sensor_types, {sensor_type: sensorTypeId});
	return _.isUndefined(result) ? null : result;
}

function displayCatalogDetails() {
	var catalogDiv = $('div#catalog');
	catalogDiv.html('');
	
	var sensorId = $('select#sensor-type').find(':selected').val();
	
	if (sensorId == '') {
		alert("Please select an Sensor");
		return;
	}
	
	catalogDiv.html(sensorId);	
}
