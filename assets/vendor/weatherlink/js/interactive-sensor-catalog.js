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
		SENSOR_CATALOG.currentDataStructureTypeId = null;
	} else {
		SENSOR_CATALOG.currentSensorTypeId = null;
		SENSOR_CATALOG.currentDataStructureTypeId = null;
	}
	populateDataStructuresTypeSelect();
});

$('select#data-structure-type').change(function() {
	console.log("select#data-structure-type change");
	var selectedDataStructureTypeId = $('select#data-structure-type').find(':selected').val();
	console.log(selectedDataStructureTypeId);
	if (!_.isNil(selectedDataStructureTypeId)) {
		selectedDataStructureTypeId = +selectedDataStructureTypeId;
		SENSOR_CATALOG.currentDataStructureTypeId = selectedDataStructureTypeId;
	} else {
		SENSOR_CATALOG.currentDataStructureTypeId = null;
	}
	populateCatalogItemDetails();
});

function populateSensorTypeSelect() {
	$('select#sensor-type').empty();
	for (var sensorTypeIndex = 0 ; sensorTypeIndex < SENSOR_CATALOG.json.sensor_types.length ; sensorTypeIndex++) {
		var sensorType = SENSOR_CATALOG.json.sensor_types[sensorTypeIndex];
		$('select#sensor-type').append($("<option value='"+sensorType.sensor_type+"'>Sensor Type "+sensorType.sensor_type+" - "+sensorType.product_name+"</option>"));
	}
	$('select#sensor-type').trigger('change');
}

function populateDataStructuresTypeSelect() {
	var sensorType = _.find(SENSOR_CATALOG.json.sensor_types, {sensor_type: SENSOR_CATALOG.currentSensorTypeId});
	sensorType = _.isNil(sensorType) ? null : sensorType;

	if (_.has(sensorType, "data_structures")) {
		$('select#data-structure-type').empty();
		for (var dataStructureTypeIndex = 0 ; dataStructureTypeIndex < sensorType.data_structures.length ; dataStructureTypeIndex++) {
			var dataStructureType = sensorType.data_structures[dataStructureTypeIndex];
			$('select#data-structure-type').append($("<option value='"+dataStructureType.data_structure_type+"'>Data Structure Type "+dataStructureType.data_structure_type+" - "+dataStructureType.description+"</option>"));
		}
		$('div#data-structure-types').show();
		$('select#data-structure-type').trigger('change');
	} else if (_.has(sensorType, "data_structure")) {
		populateCatalogItemDetails();
	} else {
		populateCatalogItemDetails();
	}
}

function populateCatalogItemDetails() {
	console.log("populate catalog item details with sensor type id " + SENSOR_CATALOG.currentSensorTypeId + " data structure type id " + SENSOR_CATALOG.currentDataStructureTypeId);	

	var divCatalogItemDetails = $('div#catalog-item-details');
	divCatalogItemDetails.find("span#catalog-item-details-sensor-type").empty();
	divCatalogItemDetails.find("span#catalog-item-details-manufacturer").empty();
	divCatalogItemDetails.find("span#catalog-item-details-product-name").empty();
	divCatalogItemDetails.find("span#catalog-item-details-product-number").empty();
	divCatalogItemDetails.find("span#catalog-item-details-category").empty();

	divCatalogItemDetails.find("span#catalog-item-details-data-structure-type").empty();
	divCatalogItemDetails.find("span#catalog-item-details--data-structure-description").empty();

	var tbody = $('div#catalog-item-details table tbody');
	tbody.empty();

	var sensorType = null;
	var dataStructureType = null;
	var dataStructure = null;

	sensorType = _.find(SENSOR_CATALOG.json.sensor_types, {sensor_type: SENSOR_CATALOG.currentSensorTypeId});
	sensorType = _.isNil(sensorType) ? null : sensorType;

	if (sensorType != null) {
		divCatalogItemDetails.find("span#catalog-item-details-sensor-type").text(sensorType.sensor_type);
		divCatalogItemDetails.find("span#catalog-item-details-manufacturer").text(sensorType.manufacturer);
		divCatalogItemDetails.find("span#catalog-item-details-product-name").text(sensorType.product_name);
		divCatalogItemDetails.find("span#catalog-item-details-product-number").text(sensorType.product_number);
		divCatalogItemDetails.find("span#catalog-item-details-category").text(sensorType.category);

		if (_.has(sensorType, 'data_structures')) {
			dataStructureType = _.find(sensorType.data_structures, {data_structure_type: _.toString(SENSOR_CATALOG.currentDataStructureTypeId)});
			dataStructureType = _.isNil(dataStructureType) ? null : dataStructureType;
			if (dataStructureType != null) {
				if (_.has(dataStructureType, "data_structure")) {
					dataStructure = dataStructureType.data_structure;
					dataStructure = _.isNil(dataStructure) ? null : dataStructure;
				}
			}
		} else if (_.has(sensorType, "data_structure")) {
			dataStructure = sensorType.data_structure;
			dataStructure = _.isNil(dataStructure) ? null : dataStructure;
		}
	}

	if (dataStructure != null) {
		divCatalogItemDetails.find("span#catalog-item-details-data-structure-type").text(dataStructure.data_structure_type);
		divCatalogItemDetails.find("span#catalog-item-details--data-structure-description").text(dataStructure.description);

		var fieldNames = _.keys(dataStructure);

		for(var i = 0 ; i < fieldNames.length ; i++) {
			var fieldName = fieldNames[i];
			var fieldType = dataStructure[fieldName].type;
			var fieldUnits = dataStructure[fieldName].units;

			tbody.append(
				$('<tr/>')
					.append($('<td/>').text(fieldName))
					.append($('<td/>').text(fieldType))
					.append($('<td/>').text(fieldUnits))
			);
		}
	} else {
		tbody.append(
			$('<tr/>')
				.append($('<td colspan="3" align="center"/>').text("Not Available"))
		);
	}
}

var jqxhr = $.getJSON("/v2-api/resources/universal-sensor-catalog.json")
	.done(function(json) {
		SENSOR_CATALOG.json = json;
		SENSOR_CATALOG.currentSensorTypeId = null;
		SENSOR_CATALOG.currentDataStructureTypeId = null;
		populateSensorTypeSelect();
	});
