---
title: API Signature Calculator
permalink: /api-signature-calculator
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

<style type="text/css">
.form-style-2{
	max-width: 600px;
	padding: 20px 12px 10px 20px;
	font: 13px Arial, Helvetica, sans-serif;
}
.form-style-2-heading{
	font-weight: bold;
	font-style: italic;
	border-bottom: 2px solid #ddd;
	margin-bottom: 20px;
	font-size: 15px;
	padding-bottom: 3px;
}
.form-style-2 label{
	display: block;
	margin: 0px 0px 15px 0px;
}
.form-style-2 label > span{
	width: 150px;
	font-weight: bold;
	float: left;
	padding-top: 8px;
	padding-right: 5px;
}
.form-style-2 span.required{
	color:red;
}
.form-style-2 input.input-field, .form-style-2 .select-field{
	width: 60%;	
}
.form-style-2 input.input-field, 
.form-style-2 .textarea-field, 
.form-style-2 .select-field{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 4px #EBEBEB;
	-moz-box-shadow: 1px 1px 4px #EBEBEB;
	-webkit-box-shadow: 1px 1px 4px #EBEBEB;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	padding: 7px;
	outline: none;
}
.form-style-2 .input-field:focus, 
.form-style-2 .textarea-field:focus,  
.form-style-2 .select-field:focus{
	/*
	border: 1px solid #0C0;
	*/
}
.form-style-2 .textarea-field{
	height:100px;
	width: 55%;
}
.form-style-2 input[type=submit],
.form-style-2 input[type=button]{
	border: none;
	padding: 8px 15px 8px 15px;
	background: #3c464d;
	color: #fff;
	box-shadow: 1px 1px 4px #DADADA;
	-moz-box-shadow: 1px 1px 4px #DADADA;
	-webkit-box-shadow: 1px 1px 4px #DADADA;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
}
.form-style-2 input[type=submit]:hover,
.form-style-2 input[type=button]:hover{
	background: #EA7B00;
	color: #fff;
}

.form-style-2 div.params {
	display: none;
}
</style>

<style type="text/css" media="screen">
#api-signature { 
	position: relative !important;
	border: 1px solid lightgray;
	min-height: 200px;
	width: 80%;
	padding: 16px;
}
</style>

<div class="notice--warning">
<h4>DEPRECATED</h4>
<p>API Signature is no longer required as this is no longer the preferred way of authenticating with the WeatherLink v2 API. Please see the [Tutorial](Tutorial) and [Authentication](Authentication) pages for more information on the preferred authentication mechanism which involves passing the API secret as a header.</p>
</div>

The purpose of this page is to provide an interactive demonstration of how to compute an API Signature based on the type of API call and parameters you enter in the form below.

<div class="form-style-2">
<form action="" method="post">

<label for="api-endpoint">
<span>API Endpoint <span class="required">*</span></span>
<select id="api-endpoint" name="api-endpoint" class="select-field">
<option value="">*** Metadata API Endpoints *** </option>
<option value="stations-all">/stations - Get all weather stations associated with your API Key</option>
<option value="stations-some">/stations/{station-ids} - Get weather stations for one or more station IDs provided</option>
<option value="nodes-all">/nodes - Get all nodes attached to all weather stations associated with your API Key</option>
<option value="nodes-some">/nodes/{node-ids} - Get nodes for one or more node IDs provided</option>
<option value="sensors-all">/sensors - Get all sensors attached to all weather stations associated with your API Key</option>
<option value="sensors-some">/sensors/{sensor-ids} - Get sensors for one or more sensor IDs provided</option>
<option value="sensor-activity-all">/sensor-activity - Get latest reporting times for all sensors attached to all weather stations associated with your API Key</option>
<option value="sensor-activity-some">/sensor-activity/{sensor-ids} - Get latest reporting times for one or more sensors for sensor IDs provided</option>
<option value="sensor-catalog">/sensor-catalog - Get a catalog of all types of sensors</option>
<option value="">*** Weather Data API Endpoints *** </option>
<option value="current">/current/{station-id} - Get current conditions data for one station</option>
<option value="historic">/historic/{station-id} - Get historic data for one station ID within a given time range</option>
<option value="">*** Reports API Endpoints *** </option>
<option value="report-et">/report/et/{station-id} - Get evapotranspiration data for one WeatherLink Live station</option>
</select>
</label>

<label for="api-key">
<span>API Key <span class="required">*</span></span>
<input id="api-key" type="text" class="input-field" name="api-key" value="" />
</label>

<label for="api-secret">
<span>API Secret <span class="required">*</span></span>
<input id="api-secret" type="text" class="input-field" name="api-secret" value="" />
</label>

<label for="api-timestamp">
<span>API Timestamp <span class="required">*</span></span>
<input id="api-timestamp" type="text" class="input-field" name="api-timestamp" value="" readonly/>
</label>

<div id="params-stations-all" class="params">
</div>

<div id="params-stations-some" class="params">
<label for="stations-some-station-ids">
<span>Station IDs <span class="required">*</span></span>
<input id="stations-some-station-ids" type="text" class="input-field" name="stations-some-station-ids" value="" placeholder="Comma-separated list of Station IDs" />
</label>
</div>

<div id="params-nodes-all" class="params">
</div>

<div id="params-nodes-some" class="params">
<label for="nodes-some-node-ids">
<span>Node IDs <span class="required">*</span></span>
<input id="nodes-some-node-ids" type="text" class="input-field" name="nodes-some-node-ids" value="" placeholder="Comma-separated list of Node IDs" />
</label>
</div>

<div id="params-sensors-all" class="params">
</div>

<div id="params-sensors-some" class="params">
<label for="sensors-some-sensor-ids">
<span>Sensor IDs <span class="required">*</span></span>
<input id="sensors-some-sensor-ids" type="text" class="input-field" name="sensors-some-sensor-ids" value="" placeholder="Comma-separated list of Sensor IDs" />
</label>
</div>

<div id="params-sensor-activity-all" class="params">
</div>

<div id="params-sensor-activity-some" class="params">
<label for="sensor-activity-some-sensor-ids">
<span>Sensor IDs <span class="required">*</span></span>
<input id="sensor-activity-some-sensor-ids" type="text" class="input-field" name="sensor-activity-some-sensor-ids" value="" placeholder="Comma-separated list of Sensor IDs" />
</label>
</div>

<div id="params-sensor-catalog" class="params">
</div>

<div id="params-current" class="params">
<label for="current-station-id">
<span>Station ID <span class="required">*</span></span>
<input id="current-station-id" type="text" class="input-field" name="current-station-id" value="" placeholder="Station ID" />
</label>
</div>

<div id="params-report-et" class="params">
<label for="report-et-station-id">
<span>Station ID <span class="required">*</span></span>
<input id="report-et-station-id" type="text" class="input-field" name="report-et-station-id" value="" placeholder="Station ID" />
</label>
</div>

<div id="params-historic" class="params">
<label for="historic-station-id">
<span>Station ID <span class="required">*</span></span>
<input id="historic-station-id" type="text" class="input-field" name="historic-station-id" value="" placeholder="Station ID" />
</label>

<label for="historic-start-timestamp">
<span>Start Timestamp <span class="required">*</span></span>
<input id="historic-start-timestamp" type="text" class="input-field" name="historic-start-timestamp" value="" placeholder="Unix timestamp" />
</label>

<label for="historic-end-timestamp">
<span>End Timestamp <span class="required">*</span></span>
<input id="historic-end-timestamp" type="text" class="input-field" name="historic-end-timestamp" value="" placeholder="Unix timestamp" />
</label>
</div>

<label><span> </span><input id="calculate-api-signature-button" type="button" value="Calculate API Signature" /></label>
</form>

</div>

<label></label>
<div><span>API Signature Calculation Walkthrough</span></div>
<div id="api-signature"></div>


<script>
(function() {
  var nTimer = setInterval(function() {
    if (window.jQuery) {
      clearInterval(nTimer);
      var fileref = document.createElement('script');
      fileref.setAttribute("type","text/javascript");
      fileref.setAttribute("src", "/v2-api/assets/vendor/weatherlink/js/api-signature-calculator.js");
      document.getElementsByTagName("head")[0].appendChild(fileref);

      //console.log($('select#api-endpoint').find(':selected').val());
    }
  }, 100);
})();
</script>
<script src="https://cdn.jsdelivr.net/npm/node-forge@0.8.5/dist/forge.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ace-builds@1.4.5/src-min/ace.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ace-builds@1.4.5/src-min/ext-beautify.js"></script>
