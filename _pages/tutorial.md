---
title: Tutorial
permalink: /tutorial
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---
This tutorial will walk you through what a first time user of the WeatherLink v2 API needs to do to start retrieving weather observation data.

For the examples shown in this tutorial we will use the following details:

* We will use the fictitious API Key `987654321`.
* We will use the fictitious API Secret `ABC123`.
* We will use the Unix timestamp 1558729481 for the parameter `t` in all API calls.

<div class="notice--warning">
<h4>Please Note:</h4>
<p>Make sure to use your own real API Key and API Secret if you try to recreate the steps shown in this tutorial.</p>
<p>Also make sure you get a new Unix timestamp for every API call you make.</p>
</div>

## Step 1 - Get Your API Key and API Secret

To retrieve your WeatherLink v2 API Key and API Secret you can go to WeatherLink.com and visit the Account page at <a href="https://www.weatherlink.com/account">https://www.weatherlink.com/account</a>.

Once on the Account page you can click the `Generate v2 Key` button to create a new WeatherLink v2 API Key and API Secret.

**The API Secret must be protected and must never be passed as a parameter to the API.**

If your API Secret is compromised it will allow others to access the API while pretending to be you. If this occurs please go back to the Account page and click the `Generate v2 Key` button again. This will delete the old API Secret and create a new API Secret. You will then need to update your code to use the new API Secret. 

Please note that the API Key will not be changed and can not be deleted when generating a new API Secret.

## Step 2 - Get Your Station ID

Before you can download weather observation data you need to know the Station ID of your weather station. This is done by making an API call to the `/stations` API path.

The Station ID is different from your station's Device ID or DID. The [FAQ](faq) page has some brief explanations of what the Station ID is and why it is different from the Device ID of the past.

### Step 2.1 - Collect the Parameters

You can check the [API Reference](api-reference) for information on what parameters are available with each API call the WeatherLink v2 API supports.

First, collect all of the API request query parameters and path parameters (except for the `api-signature` parameter) and sort them by parameter name using ASCII sorting. All parameter names are in US English so ASCII sorting is safe.

In this example there are no path parameters because we are making an API call to `/stations` which does not have any parameter place holders currounded by curly braces in the path. 

However, there are query parameters:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481

After sorting the combined set of query and path parameters your set of parameters will look like this:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481

### Step 2.2 - Create the String to Hash

Next, iterate over the sorted set of all parameters in order by the parameter name and create a string by concatenating the parameter name-value pairs. The resulting string for this example will be:

```
api-key987654321t1558729481
```

To better illustrate how the string is built, here is the string again with parentheses showing the different parts used to create the concatenated string:

```
(api-key)(987654321)(t)(1558729481)
```

### Step 2.3 - Compute the API Signature

Now it is time to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a hexadecimal string is the API Signature.

In this scenario we have the following:

```
Message to hash: api-key987654321t1558729481
HMAC secret key: ABC123
Computed HMAC as a hexadecimal string: 9b6a15f40d78b309a10b8b5a70ce5de4a3993ac2309795b9f90c9f93d5c31f20
```

The online HMAC tool at <a href="https://www.freeformatter.com/hmac-generator.html" target="_blank">https://www.freeformatter.com/hmac-generator.html</a> can help you test your computed HMAC SHA-256 values.

All major programming languages have built-in support or offer libraries to calculate HMAC SHA-256 values.

### Step 2.4 - Build the Final URL For the API Call 

Take the computed API Signature and include it in the API request as the value of a query parameter named `api-signature`.

The final URL with parameters in the example scenario is:

```
https://api.weatherlink.com/v2/stations?api-key=987654321&t=1558729481&api-signature=9b6a15f40d78b309a10b8b5a70ce5de4a3993ac2309795b9f90c9f93d5c31f20
```

### Step 2.5 - Read the API Response

The JSON response for the API call will contain a list of all stations that are accessible by the API Key.

Here is a sample segment of the API response JSON showing what the Station ID will look like. This sample JSON omits many additional fields of infomation like product number, time zone, GPS coordinates, etc. because that information will be different for your weather station.

```json
{
    "stations": [
        {
            "station_id": 96230,
            "station_name": "Home WeatherLink Live"
        }
    ]
}
```

Now that you have found the Station ID you will use that number for all API requests to retrieve weather observation data for that station.

## Step 3 - Get Current Conditions Data

Continuing with the Station ID from before, you will now make an API call to retrieve current conditions weather observation data. This is done by making an API call to the `/current/{station-id}` API path where you will replace the `{station-id}` path parameter with the Station ID.

### Step 3.1 - Collect the Parameters

You can check the [API Reference](api-reference) for information on what parameters are available with each API call the WeatherLink v2 API supports.

First, collect all of the API request query parameters and path parameters (except for the `api-signature` parameter) and sort them by parameter name using ASCII sorting. All parameter names are in US English so ASCII sorting is safe.

In this example there is a single path parameter because we are making an API call to `/current/{station-id}`.

Parameter Name|Parameter Value
--------------|---------------
station-id|96230

Additionally, there are query parameters:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481

After sorting the combined set of query and path parameters your set of parameters will look like this:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
station-id|96230
t|1558729481

### Step 3.2 - Create the String to Hash

Next, iterate over the sorted set of all parameters in order by the parameter name and create a string by concatenating the parameter name-value pairs. The resulting string for this example will be:

```
api-key987654321station-id96230t1558729481
```

To better illustrate how the string is built, here is the string again with parentheses showing the different parts used to create the concatenated string:

```
(api-key)(987654321)(station-id)(96230)(t)(1558729481)
```

### Step 3.3 - Compute the API Signature

Now it is time to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a hexadecimal string is the API Signature.

In this scenario we have the following:

```
Message to hash: api-key987654321station-id96230t1558729481
HMAC secret key: ABC123
Computed HMAC as a hexadecimal string: c818f075283713f1a133c30e27984032e19ca6dd37c33160d1c8f1edbaa509e4
```

The online HMAC tool at <a href="https://www.freeformatter.com/hmac-generator.html" target="_blank">https://www.freeformatter.com/hmac-generator.html</a> can help you test your computed HMAC SHA-256 values.

All major programming languages have built-in support or offer libraries to calculate HMAC SHA-256 values.

### Step 3.4 - Build the Final URL For the API Call 

Take the computed API Signature and include it in the API request as the value of a query parameter named `api-signature`.

The final URL with parameters in the example scenario is:

```
https://api.weatherlink.com/v2/current/96230?api-key=987654321&t=1558729481&api-signature=c818f075283713f1a133c30e27984032e19ca6dd37c33160d1c8f1edbaa509e4
```

### Step 3.5 - Read the API Response

The JSON response for the API call will contain current condition observation data for the specified Station ID, assuming you have permission to view the station via the WeatherLink v2 API. Please refer to the [Data Permissions](data-permissions) documentation about what level of data access is available for the different combinations of weather station types and WeatherLink service plans.

Information about what the weather observation data API response looks like is at [API Response](api-response).

## Step 4 - Get Historic Data

Continuing with the Station ID from before, you will now make an API call to retrieve historic weather observation data. This is done by making an API call to the `/historic/{station-id}` API path where you will replace the `{station-id}` path parameter with the Station ID.

When retrieving historic weather observation data you need to provide Unix timestamps for the start and end of the period of time you want to download data for. Please note the current size limit of periods of time per historic data API call is documented at [Size Limits](size-limits).

### Step 4.1 - Collect the Parameters

You can check the [API Reference](api-reference) for information on what parameters are available with each API call the WeatherLink v2 API supports.

In this tutorial example we will query for historic data from the day 2019-07-01 in the America/Los_Angeles timezone. To do this you need to use the following parameters:

* Unix timestamp `1561964400` for the `start-timestamp` parameter.
* Unix timestamp `1562050800` for the `end-timestamp` parameter.

In WeatherLink, the timestamps on historic data records represents the end of the data record's recording time interval. For example, if your station generates 1 historic data record (also known as Archive data record) per hour then the record with the timestamp of 7:00 AM represents the summary of data for the hour of time between 6:00 AM and 7:00 AM. Therefore, any historic data record with a timestamp of midnight is actually the last record of the previous day's data and not the first record of the new day.

Keeping this in mind, the WeatherLink v2 API uses the `start-timestamp` and `end-timestamp` parameters to look for data records where timestamps fall into an interval that can be expressed as (`start-timestamp`, `end-timestamp`].

Now, getting back making the API call, you first need to collect all of the API request query parameters and path parameters (except for the `api-signature` parameter) and sort them by parameter name using ASCII sorting. All parameter names are in US English so ASCII sorting is safe.

In this example there is a single path parameter because we are making an API call to `/historic/{station-id}`.

Parameter Name|Parameter Value
--------------|---------------
station-id|96230

Additionally, there are query parameters:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481
start-timestamp|1561964400
end-timestamp|1562050800

After sorting the combined set of query and path parameters your set of parameters will look like this:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
end-timestamp|1562050800
start-timestamp|1561964400
station-id|96230
t|1558729481

### Step 4.2 - Create the String to Hash

Next, iterate over the sorted set of all parameters in order by the parameter name and create a string by concatenating the parameter name-value pairs. The resulting string for this example will be:

```
api-key987654321end-timestamp1562050800start-timestamp1561964400station-id96230t1558729481
```

To better illustrate how the string is built, here is the string again with parentheses showing the different parts used to create the concatenated string:

```
(api-key)(987654321)(end-timestamp)(1562050800)(start-timestamp)(1561964400)(station-id)(96230)(t)(1558729481)
```

### Step 4.3 - Compute the API Signature

Now it is time to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a hexadecimal string is the API Signature.

In this scenario we have the following:

```
Message to hash: api-key987654321end-timestamp1562050800start-timestamp1561964400station-id96230t1558729481
HMAC secret key: ABC123
Computed HMAC as a hexadecimal string: fbe025018d78d7b13bb09eb36c6c2d7b1461b33253bf3d291b1ed37826599e8e
```

The online HMAC tool at <a href="https://www.freeformatter.com/hmac-generator.html" target="_blank">https://www.freeformatter.com/hmac-generator.html</a> can help you test your computed HMAC SHA-256 values.

All major programming languages have built-in support or offer libraries to calculate HMAC SHA-256 values.

### Step 4.4 - Build the Final URL For the API Call 

Take the computed API Signature and include it in the API request as the value of a query parameter named `api-signature`.

The final URL with parameters in the example scenario is:

```
https://api.weatherlink.com/v2/historic/96230?api-key=987654321&t=1558729481&start-timestamp=1561964400&end-timestamp=1562050800&api-signature=fbe025018d78d7b13bb09eb36c6c2d7b1461b33253bf3d291b1ed37826599e8e
```

### Step 4.5 - Read the API Response

The JSON response for the API call will contain historic weather observation data for the specified Station ID, assuming you have permission to view the station via the WeatherLink v2 API. Please refer to the [Data Permissions](data-permissions) documentation about what level of data access is available for the different combinations of weather station types and WeatherLink service plans.

Information about what the weather observation data API response looks like is at [API Response](api-response).
