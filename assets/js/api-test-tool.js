if ($('input#api-timestamp').length > 0) {
  setInterval(updateAPITimestamp, 1000);
}

function updateAPITimestamp() {
	$('input#api-timestamp').val(Math.floor(Date.now() / 1000));
}

$('select#api-endpoint').change(function() {
  $('div.params').hide();
  var selectedVal = $('select#api-endpoint').find(':selected').text();
  if (selectedVal != '') {
  	 $('div#params-' + selectedVal).show();
  }
});
