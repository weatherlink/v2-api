---
title: Interactive Sensor Catalog
permalink: /interactive-sensor-catalog
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

<style type="text/css">
.form-style-2{
	max-width: 900px;
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
	width: 80%;	
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

.form-style-2 div.options {
	display: none;
}
</style>

<style type="text/css" media="screen">
/*
#catalog { 
	position: relative !important;
	border: 1px solid lightgray;
	min-height: 200px;
	width: 80%;
	padding: 16px;
}
*/
</style>

<div class="form-style-2">
<form action="" method="post">

<label for="sensor-type">
<span>Sensor Type</span>
<select id="sensor-type" name="sensor-type" class="select-field">
</select>
</label>

<div id="data-structure-types" class="options">
<label for="data-structure-type">
<span>Data Structure Type</span>
<select id="data-structure-type" name="data-structure-type" class="select-field">
</select>
</label>
</div>

</form>
</div>

<label></label>
<div><span></span></div>
<div id="catalog">
<table class="table">
	<thead>
		<th>Field Name</th>
		<th>Data Type</th>
		<th>Units</th>
	</thead>
	<tbody>
	</tbody>
</table>
</div>

<script>
(function() {
  var nTimer = setInterval(function() {
    if (window.jQuery) {
      clearInterval(nTimer);
      var fileref = document.createElement('script');
      fileref.setAttribute("type","text/javascript");
      fileref.setAttribute("src", "/v2-api/assets/vendor/weatherlink/js/interactive-sensor-catalog.js");
      document.getElementsByTagName("head")[0].appendChild(fileref);

      //console.log($('select#api-endpoint').find(':selected').val());
    }
  }, 100);
})();
</script>
