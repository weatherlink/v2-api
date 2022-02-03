$('select#sensor').change(function() {
	$('div.params').hide();
//	var selectedVal = $('select#api-endpoint').find(':selected').val();
//	if (selectedVal != '') {
//		$('div#params-' + selectedVal).show();
//	}
});

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
