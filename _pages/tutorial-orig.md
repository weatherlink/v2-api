---
title: Tutorial
permalink: /tutorial-orig
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

This tutorial will walk you through what a first time user of the WeatherLink v2 API needs to do in order to start retrieving weather observation data.

<!--
You can enter your API credentials below to update the examples in this tutorial with your real world values.

<div class="form-style-2">
<form action="" method="post">

<label for="api-key">
<span>API Key</span>
<input id="api-key" type="text" class="input-field api-credential" name="api-key" value="" placeholder="YOUR API KEY" />
</label>

<label for="api-secret">
<span>API Secret</span>
<input id="api-secret" type="text" class="input-field api-credential" name="api-secret" value="" placeholder="YOUR API SECRET" />
</label>

</form>
</div>
-->

## Step 1 - Get Your API Key and API Secret

To retrieve your WeatherLink v2 API Key and API Secret you can go to WeatherLink.com and visit the Account page at <a href="https://www.weatherlink.com/account">https://www.weatherlink.com/account</a>.

Once on the Account page you can click the `Generate v2 Key` button to create a new WeatherLink v2 API Key and API Secret.

**The API Secret must be protected and should never be passed as a query parameter to the API.**

If your API Secret is compromised it will allow others to access the API while pretending to be you. If this occurs please go back to the Account page and click the `Generate v2 Key` button again. This will delete the old API Secret and create a new API Secret. You will then need to update your code to use the new API Secret. 

Please note that the API Key will not be changed and can not be deleted when generating a new API Secret.

## Step 2 - Get Your Station ID

Before you can download weather observation data you need to know the Station ID of your weather station. Currently, the WeatherLink v2 API accepts 2 forms of Station ID:

* A unique integer Station ID that can only be retrieved by making an API call to the `/stations` API endpoint.
* A UUID which can be retrieved by making an API call to the `/stations` API endpoint or you can find it in your browser address bar when viewing the station in question on WeatherLink.com.

The Station ID is different from your station's Device ID or DID. The [FAQ](faq) page has some brief explanations on why it is different from the Device ID of the past that was used in older WeatherLink APIs.

The [API Reference](api-reference) documents information on what parameters/headers are available with each API call the WeatherLink v2 API supports.

To make the API call to the `/stations` API endpoint you need to make an HTTP GET API call to the following URL and include a header named `X-Api-Secret` set to the value of your API Secret.

```
https://api.weatherlink.com/v2/stations?api-key={YOUR API KEY}
```

The JSON response for the API call will contain a list of all stations that are accessible by the API Key.

Here is a sample segment of the API response JSON showing what the Station ID will look like. This sample JSON omits many additional fields of infomation like product number, time zone, GPS coordinates, etc. because that information will be different for your weather station.

```json
{
    "stations": [
        {
            "station_id": 96230,
            "station_id_uuid": "9722cfc3-a4ef-47b9-befb-72f52592d6ed",
            "station_name": "Home WeatherLink Live"
        }
    ]
}
```

## Step 3 - Get Current Conditions Data

Continuing with the Station ID from before, you will now make an API call to retrieve current conditions weather observation data. This is done by making an API call to the `/current/{station-id}` API path where you will replace the `{station-id}` path parameter with the Station ID. Both integer and UUID versions of the Station ID are accepted.

You can check the [API Reference](api-reference) for information on what parameters are available with each API call the WeatherLink v2 API supports.

To make the API call to the `/current/{station-id}` API endpoint you need to make an HTTP GET API call to the following URL and include a header named `X-Api-Secret` set to the value of your API Secret.

```
https://api.weatherlink.com/v2/current/{station-id}?api-key={YOUR API KEY}
```

The JSON response for the API call will contain current condition observation data for the specified Station ID, assuming you have permission to view the station via the WeatherLink v2 API. Please refer to the [Data Permissions](data-permissions) documentation about what level of data access is available for the different combinations of weather station types and WeatherLink service plans.

Information about what the weather observation data API response looks like is at [API Response](api-response).

## Step 4 - Get Historic Data

<div class="notice--warning">
<h4>Please Note:</h4>
<p>In order to retrieve historic data for a station your subscription level to that station must be either Pro or Pro+.</p>
</div>

Continuing with the Station ID from before, you will now make an API call to retrieve historic weather observation data. This is done by making an API call to the `/historic/{station-id}` API path where you will replace the `{station-id}` path parameter with the Station ID.

When retrieving historic weather observation data you need to provide Unix timestamps for the start and end of the period of time you want to download data for. Please note the current size limit of periods of time per historic data API call is documented at [Size Limits](size-limits).

You can check the [API Reference](api-reference) for information on what parameters are available with each API call the WeatherLink v2 API supports.

In this tutorial example we will query for historic data from the day 2019-07-01 in the America/Los_Angeles timezone. To do this you need to use the following parameters:

* Unix timestamp `1561964400` for the `start-timestamp` parameter.
* Unix timestamp `1562050800` for the `end-timestamp` parameter.

In WeatherLink, the timestamps on historic data records represents the end of the data record's recording time interval. For example, if your station generates 1 historic data record (also known as Archive data record) per hour then the record with the timestamp of 7:00 AM represents the summary of data for the hour of time between 6:00 AM and 7:00 AM. Therefore, any historic data record with a timestamp of midnight is actually the last record of the previous day's data and not the first record of the new day.

Keeping this in mind, the WeatherLink v2 API uses the `start-timestamp` and `end-timestamp` parameters to look for data records where timestamps fall into an interval that can be expressed as (`start-timestamp`, `end-timestamp`]. This is equivalent to looking for data records with a timestamp &gt; `start-timestamp` and &lt;= `end-timestamp`.

To make the API call to the `/historic/{station-id}` API endpoint you need to make an HTTP GET API call to the following URL and include a header named `X-Api-Secret` set to the value of your API Secret.

The final URL with parameters for our example scenario is:

```
https://api.weatherlink.com/v2/historic/{station-id}?api-key={YOUR API KEY}&start-timestamp=1561964400&end-timestamp=1562050800
```

The JSON response for the API call will contain historic weather observation data for the specified Station ID, assuming you have permission to view the station via the WeatherLink v2 API. Please refer to the [Data Permissions](data-permissions) documentation about what level of data access is available for the different combinations of weather station types and WeatherLink service plans.

Information about what the weather observation data API response looks like is at [API Response](api-response).

<script>
(function() {
  var nTimer = setInterval(function() {
    if (window.jQuery) {
      clearInterval(nTimer);
      var fileref = document.createElement('script');
      fileref.setAttribute("type","text/javascript");
      fileref.setAttribute("src", "/v2-api/assets/vendor/weatherlink/js/tutorial.js");
      document.getElementsByTagName("head")[0].appendChild(fileref);

      //console.log($('select#api-endpoint').find(':selected').val());
    }
  }, 100);
})();
</script>