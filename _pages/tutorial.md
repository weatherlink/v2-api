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
* We will ise the Unix timestamp 1558729481 for the parameter `t` in all API calls.

Make sure to use your own real API Key and API Secret if you try to recreate the steps shown in this tutorial. And make sure you get a new Unix timestamp for every API call you make.

## Step #1 - Get Your Station ID

Before you can download weather observation data you need to know the Station ID of your weather station. This is done by making an API call to the `/stations` API path.

Please note that the Station ID is different from your station's Device ID or DID. The [FAQ](faq) page has some brief explanations of what the Station ID is and why it is different from the Device ID of the past.

### Step 1.1 - Collect the Parameters

You can check the [API Reference](api-reference) for information on what parameters are available with each API call the WeatherLink v2 API supports.

The first step is to collect all of the API request query parameters and path parameters (except for the `api-signature` parameter) and sort them by parameter name using ASCII sorting. All parameter names are in US English so ASCII sorting is safe.

In this example there are no path parameters because we are making an API call to `/stations` which does not have any parameter place holders currounded by curly braces in the path. 

However, there are query parameters:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481

After sorting the combined set of parameters will look like this:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481

### Step 2

Next, iterate over the sorted parameter set in order and create a string by concatenating the parameter name-value pairs. The resulting string for this example will be:

```
api-key987654321station-id1052t1558729481
```

To better illustrate how the string is built here is the string again with parentheses showing the different parts used to create the concatenated string:

```
(api-key)(987654321)(station-id)(1052)(t)(1558729481)
```

### Step 3

Now it is time to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a hexadecimal string is the API Signature.

In this scenario we have the following:

```
Message to hash: api-key987654321station-id1052t1558729481
HMAC secret key: ABC123
Computed HMAC as a hexadecimal string: dd4b08355101dc6d259bbe21413d0838a1b83c4e9df24a98f61323a1198b08ff
```

The online HMAC tool at <a href="https://www.freeformatter.com/hmac-generator.html" target="_blank">https://www.freeformatter.com/hmac-generator.html</a> can help you test your computed HMAC SHA-256 values.

All major programming languages have built-in support or offer libraries to calculate HMAC SHA-256 values.

### Step 4

Take the computed API Signature and include it in the API request as the value of a query parameter named `api-signature`.

The final URL with parameters in the example scenario is:

```
https://api.weatherlink.com/v2/current/1052?api-key=987654321&t=1558729481&api-signature=dd4b08355101dc6d259bbe21413d0838a1b83c4e9df24a98f61323a1198b08ff
```

### Example #2 - Historic Data

Now we will walk through another example. In this example we will use the following details:

* This is for an API request for Historic data which is available at the `/historic/{station-id}` API path which accepts a station ID as a URL path parameter.
* We will use the fictitious Station ID `72443`.
* We will use the fictitious API Key `987654321`.
* We will use the fictitious API Secret `ABC123`.
* We will use the Unix timestamp `1562176956` as the API Request Timestamp.
* We will query for historic data from the day 2019-07-01 in the America/Los_Angeles timezone.
  * This will result in a starting Unix timestamp of `1561964400`.
  * And an ending Unix timestamp of `1562050800`.

In this example we are querying for data with timestamps greater than 2019-07-01 00:00:00 America/Los_Angeles and less than or equal to 2019-07-02 00:00:00 America/Los_Angeles. This is due to the fact that data record timestamps represent the end of the data record's recording time interval. Therefore the record with the 2019-07-01 00:00:00 America/Los_Angeles timestamp is actually the last data record from 2019-06-30 America/Los_Angeles.

### Step 1

The first step is to collect all of the API request query parameters and path parameters (except for the `api-signature` parameter) and sort them by parameter name using ASCII sorting. All parameter names are in US English so ASCII sorting is safe.

In this example the path parameters are:

Parameter Name|Parameter Value
--------------|---------------
station-id|72443

And the query parameters are:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1562176956
start-timestamp|1561964400
end-timestamp|1562050800

After sorting the combined set of parameters will look like this:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
end-timestamp|1562050800
start-timestamp|1561964400
station-id|72443
t|1562176956

### Step 2

Next, iterate over the sorted parameter set in order and create a string by concatenating the parameter name-value pairs. The resulting string for this example will be:

```
api-key987654321end-timestamp1562050800start-timestamp1561964400station-id72443t1562176956
```

To better illustrate how the string is built here is the string again with parentheses showing the different parts used to create the concatenated string:

```
(api-key)(987654321)(end-timestamp)(1562050800)(start-timestamp)(1561964400)(station-id)(72443)(t)(1562176956)
```

### Step 3

Now it is time to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a hexadecimal string is the API Signature.

In this scenario we have the following:

```
Message to hash: api-key987654321end-timestamp1562050800start-timestamp1561964400station-id72443t1562176956
HMAC secret key: ABC123
Computed HMAC as a hexadecimal string: d40baf8649aaf83fae135e0b57db03ec78688b49fce96d815474f366957f2b39
```

The online HMAC tool at <a href="https://www.freeformatter.com/hmac-generator.html" target="_blank">https://www.freeformatter.com/hmac-generator.html</a> can help you test your computed HMAC SHA-256 values.

All major programming languages have built-in support or offer libraries to calculate HMAC SHA-256 values.

### Step 4

Take the computed API Signature and include it in the API request as the value of a query parameter named `api-signature`.

The final URL with parameters in the example scenario is:

```
https://api.weatherlink.com/v2/historic/72443?api-key=987654321&t=1562176956&start-timestamp=1561964400&end-timestamp=1562050800&api-signature=d40baf8649aaf83fae135e0b57db03ec78688b49fce96d815474f366957f2b39
```

