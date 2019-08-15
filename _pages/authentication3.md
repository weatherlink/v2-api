---
title: Authentication3
permalink: /authentication3
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
---

<article id="article">

The WeatherLink v2 API uses an API Key, an API Secret, a request timestamp, and a calculated API Signature for authenticating API requests.

<div class="notice--warning">
<h4>Beta Test:</h4>
<p>During the beta test phase of the v2 API selected beta testers will be provided with an API Key and API Secret.</p>
<p>After the beta test phase WeatherLink users will be able to generate their own API Key and API Secret on the WeatherLink web site.</p>
</div>

## API Key

The API Key is a unique ID that identifies the API user making the API call. The API Key must be passed as a query parameter in all API requests.

The API Key is passed in the API request as a query parameter named `api-key`.

## API Secret

The API Secret is a secret value that is used to calculate a signature for each API request.

**The API Secret must be protected and must never be passed as a parameter to the API.**

If your API Secret is compromised it will allow others to access the API while pretending to be you. If your API Secret is compromised please [contact the Davis Instruments/WeatherLink engineering team](support).

## API Request Timestamp

The API request timestamp is the Unix timestamp at the time the API request is being generated. The purpose of the timestamp is to prevent request replay attacks.

The API Request Timestamp is passed in the API request as a query parameter named `t`.

## API Signature

The API Signature is a calculated value used to prevent API request parameter tampering. The API Signature process takes all of the request parameters and the API Secret and computes a fingerprint-like value that represents the request. If someone else intercepts the request parameters and attempts to alter them the API Signature will no longer match and the API servers will reject the altered request.

The API Signature is passed in the API request as a query parameter named `api-signature`.

## API Signature Calculation Live Code Examples

We have created some live code samples similar to Example #1 below. The live code sample is available in different programming languages.

* [Java](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Java)
* [Node.js](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Nodejs)
* [PHP](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-PHP)
* [Python](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Python)

## API Signature Calculation Walkthrough Examples

### Example #1 - Current Conditions Data

To explain how the API Signature calculation process works we will walk through an example. For the purposes of this example we will use the following details:

* This is for an API request for Current Conditions data which is available at the `/current/{station-id}` API path which accepts a station ID as a URL path parameter.
* We will use the fictitious Station ID `2`.
* We will use the fictitious API Key `987654321`.
* We will use the fictitious API Secret `ABC123`.
* We will use the Unix timestamp `1558729481` as the API Request Timestamp.

### Step 1

The first step is to collect all of the API request query parameters and path parameters (except for the `api-signature` parameter) and sort them by parameter name using ASCII sorting. All parameter names are in US English so ASCII sorting is safe.

In this example the path parameters are:

Parameter Name|Parameter Value
--------------|---------------
station-id|2

And the query parameters are:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
t|1558729481

After sorting the combined set of parameters will look like this:

Parameter Name|Parameter Value
--------------|---------------
api-key|987654321
station-id|2
t|1558729481

### Step 2

Next, iterate over the sorted parameter set in order and create a string by concatenating the parameter name-value pairs. The resulting string for this example will be:

```
api-key987654321station-id2t1558729481
```

To better illustrate how the string is built here is the string again with parentheses showing the different parts used to create the concatenated string:

```
(api-key)(987654321)(station-id)(2)(t)(1558729481)
```

### Step 3

Now it is time to compute the API Signature using the the API Secret and the concatenated string from the previous step. To calculate the signature use the HMAC SHA-256 algorithm with the concatenated string as the message and the API Secret as the HMAC secret key. The resulting computed HMAC value as a hexadecimal string is the API Signature.

In this scenario we have the following:

```
Message to hash: api-key987654321station-id2t1558729481
HMAC secret key: ABC123
Computed HMAC as a hexadecimal string: 9de393b0c939545065b67c3560ac900fd3f83fb5b70c67f3cd6b5d2f6a806d9d
```

The online HMAC tool at <a href="https://www.freeformatter.com/hmac-generator.html" target="_blank">https://www.freeformatter.com/hmac-generator.html</a> can help you test your computed HMAC SHA-256 values.

All major programming languages have built-in support or offer libraries to calculate HMAC SHA-256 values.

### Step 4

Take the computed API Signature and include it in the API request as the value of a query parameter named `api-signature`.

The final URL with parameters in the example scenario is:

```
https://api.weatherlink.com/v2/current/2?api-key=987654321&t=1558729481&api-signature=9de393b0c939545065b67c3560ac900fd3f83fb5b70c67f3cd6b5d2f6a806d9d
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

</article>

<aside>
<div id="tc"></div>
</aside>
  
<script>
  const tc = (e,c,d) => {

  let container = d.getElementById(e),
      tags      = [...container.querySelectorAll('h2, h3, h4, h5, h6')],
      output    = d.getElementById(c);

  let nav  = d.createElement('nav');
  nav.classList.add('tc');

  let titles = tags.map(t => {
    // Adding ID to the actual titles
    let idContent = t.textContent.replace(/ /g, "_") 
    t.id = idContent;

    //	Creating Elements
    let title = d.createElement(t.nodeName);
    let link = d.createElement('a');

    // Adding Content
    link.textContent = t.textContent;
    link.href = `#${idContent}`;
    
    title.appendChild(link);
    nav.appendChild(title);
  });


  // Adding to the DOM
  output.appendChild(nav);
};

tc('article','tc', document);
</script>
