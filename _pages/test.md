---
title: Test
permalink: /test
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
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
	width: 100px;
	font-weight: bold;
	float: left;
	padding-top: 8px;
	padding-right: 5px;
}
.form-style-2 span.required{
	color:red;
}
.form-style-2 .tel-number-field{
	width: 40px;
	text-align: center;
}
.form-style-2 input.input-field, .form-style-2 .select-field{
	width: 48%;	
}
.form-style-2 input.input-field, 
.form-style-2 .tel-number-field, 
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
.form-style-2 .tel-number-field:focus, 
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
	background: #FF8500;
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
</style>

<div class="form-style-2">
<form action="" method="post">

<label for="api-endpoint">
<span>API Endpoint</span>
<select name="api-endpoint" class="select-field">
<option value="/stations">/stations - Get All Stations</option>
<option value="/current">/current/{station-id} - Current Conditions Data</option>
<option value="/historic">/historic/{station-id} - Historic Data</option>
</select>
</label>

<label for="api-key">
<span>API Key <span class="required">*</span></span>
<input type="text" class="input-field" name="api-key" value="" />
</label>

<label for="api-secret">
<span>API Secret <span class="required">*</span></span>
<input type="text" class="input-field" name="api-secret" value="" />
</label>

<label for="api-timestamp">
<span>API Timestamp <span class="required">*</span></span>
<input id="api-timestamp" type="text" class="input-field" name="api-timestamp" value="" readonly/>
</label>

<label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
<label for="field2"><span>Email <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
<label for="field5"><span>Message <span class="required">*</span></span><textarea name="field5" class="textarea-field"></textarea></label>

<label><span> </span><input type="submit" value="Submit" /></label>
</form>
</div>

<script>
setInterval(updateAPITimestamp, 1000);

function updateAPITimestamp() {
	$('input#api-timestamp').val(Math.floor(Date.now() / 1000));
}

</script>
