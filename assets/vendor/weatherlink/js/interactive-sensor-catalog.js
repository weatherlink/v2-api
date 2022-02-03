var SENSOR_CATALOG = {
	json: null,
	currentSensorTypeId: null,
	currentDataStructureTypeId: null
};

$('select#sensor-type').change(function() {
	console.log("select#sensor-type change");
	$('div.options').hide();
	var selectedSensorTypeId = $('select#sensor-type').find(':selected').val();
	console.log(selectedSensorTypeId);
	if (!_.isNil(selectedSensorTypeId)) {
		selectedSensorTypeId = +selectedSensorTypeId;
		SENSOR_CATALOG.currentSensorTypeId = selectedSensorTypeId;

		var sensorType = _.find(SENSOR_CATALOG.json.sensor_types, {sensor_type: selectedSensorTypeId});
		sensorType = _.isNil(sensorType) ? null : sensorType;

		if (_.has(sensorType, "data_structures")) {
			$('select#data-structure-type').empty();
			for (var dataStructureTypeIndex = 0 ; dataStructureTypeIndex < sensorType.data_structures.length ; dataStructureTypeIndex++) {
				var dataStructureType = sensorType.data_structures[dataStructureTypeIndex];
				$('select#data-structure-type').append($("<option value='"+dataStructureType.data_structure_type+"'>Data Structure Type "+dataStructureType.data_structure_type+" - "+dataStructureType.description+"</option>"));
			}
			$('div#data-structure-types').show();
			$('select#data-structure-type').trigger('change');
		}
	} else {
		SENSOR_CATALOG.currentSensorTypeId = null;
	}
});

$('select#data-structure-type').change(function() {
	console.log("select#data-structure-type change");
	var selectedDataStructureTypeId = $('select#data-structure-type').find(':selected').val();
	console.log(selectedDataStructureTypeId);
	if (!_.isNil(selectedDataStructureTypeId)) {
		selectedDataStructureTypeId = +selectedDataStructureTypeId;
		SENSOR_CATALOG.currentDataStructureTypeId = selectedDataStructureTypeId;
	}
});

function populateSensorTypeSelect() {
	$('select#sensor-type').empty();
	for (var sensorTypeIndex = 0 ; sensorTypeIndex < SENSOR_CATALOG.json.sensor_types.length ; sensorTypeIndex++) {
		var sensorType = SENSOR_CATALOG.json.sensor_types[sensorTypeIndex];
		$('select#sensor-type').append($("<option value='"+sensorType.sensor_type+"'>Sensor Type "+sensorType.sensor_type+" - "+sensorType.product_name+"</option>"));
	}
	$('select#sensor-type').trigger('change');
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
