var SENSOR_CATALOG = {
	json: null,
	currentSensorTypeId: null,
	currentDataStructureTypeId: null
};

$('select#sensor-type').change(function() {
	console.log("select#sensor-type change");
	/*
	$('div.options').hide();
	var selectedSensorTypeId = $('select#sensor-type').find(':selected').val();
	if (selectedSensorTypeId != '') {
		selectedSensorTypeId = +selectedSensorTypeId;
		var sensorType = getSensorType(selectedSensorTypeId);
		if (sensorType != null) {
			if (_.has(sensorType, "data_structures")) {
				populateDataStructureTypeSelect(sensorType.data_structures);
				$('div#data-structure-types').show();
			} else {

			}
		}
	}
	*/
});

$('select#data-structure-type').change(function() {
	console.log("select#data-structure-type change");
	/*
	$('div#catalog table tbody').replateWith($('<tbody/>'));
	var selectedDataStructureTypeId = $('select#data-structure-type').find(':selected').val();
	if (selectedDataStructureTypeId != '') {
		selectedDataStructureTypeId = +selectedDataStructureTypeId;
		var dataStructureType = getDataStructureType(selectedDataStructureTypeId);
		if (dataStructureType != null) {
			if (_.has(sensorType, "data_structures")) {
				populateDataStructureTypeSelect(sensorType.data_structures);
				$('div#data-structure-types').show();
			} else {
				
			}
		}
	}
	*/
});

function populateSensorTypeSelect() {
	$('select#sensor-type').empty();
	for (var sensorTypeIndex = 0 ; sensorTypeIndex < SENSOR_CATALOG_JSON.sensor_types.length ; sensorTypeIndex++) {
		var sensorType = SENSOR_CATALOG_JSON.sensor_types[sensorTypeIndex];
		$('select#sensor-type').append($("<option value='"+sensorType.sensor_type+"'>Sensor Type "+sensorType.sensor_type+" - "+sensorType.product_name+"</option>"));
	}
	//$('select#sensor-type option:first-child').attr("selected", "selected");
	//$('select#sensor-type').trigger('change');
}

function populateDataStructureTypeSelect(dataStructures) {
	$('select#data-structure-type').empty();
	for (var dataStructureTypeIndex = 0 ; dataStructureTypeIndex < dataStructures.length ; dataStructureTypeIndex++) {
		var dataStructureType = dataStructures[dataStructureTypeIndex];
		$('select#data-structure-type').append($("<option value='"+dataStructureType.data_structure_type+"'>Data Structure Type "+dataStructureType.data_structure_type+" - "+dataStructureType.description+"</option>"));
	}
	$('select#data-structure-type').trigger('change');
}

function populateCatalog(dataStructure) {

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

var jqxhr = $.getJSON("/v2-api/resources/universal-sensor-catalog.json")
	.done(function(json) {
		SENSOR_CATALOG.json = json;
		populateSensorTypeSelect();
	});
