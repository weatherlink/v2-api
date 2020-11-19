---
title: Authentication
permalink: /authentication
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

The WeatherLink v2 API uses an API Key, an API Secret, a request timestamp, and a calculated API Signature for authenticating API requests.

## API Key

The API Key is a unique ID that identifies the API user making the API call. The API Key must be passed as a query parameter in all API requests.

The API Key is passed in the API request as a query parameter named `api-key`.

## API Secret

The API Secret is a secret value that is used to calculate a signature for each API request.

**The API Secret must be protected and must never be passed as a parameter to the API.**

If your API Secret is compromised it will allow others to access the API while pretending to be you. If this occurs please go back to the Account page at <a href="https://www.weatherlink.com/account">https://www.weatherlink.com/account</a> and click the `Generate v2 Key` button again. This will delete the old API Secret and create a new API Secret. You will then need to update your code to use the new API Secret. 

Please note that the API Key will not be changed and can not be deleted when generating a new API Secret.

## API Request Timestamp

The API request timestamp is the Unix timestamp at the time the API request is being generated. The purpose of the timestamp is to prevent request replay attacks.

The API Request Timestamp is passed in the API request as a query parameter named `t`.

## API Signature

The API Signature is a calculated value used to prevent API request parameter tampering. The API Signature process takes all of the request parameters and the API Secret and computes a fingerprint-like value that represents the request. If someone else intercepts the request parameters and attempts to alter them the API Signature will no longer match and the API servers will reject the altered request.

The API Signature is passed in the API request as a query parameter named `api-signature`.

## Live Code Examples

We have created some API Signature Calculation live code examples similar to Example #1 below. The live code sample is available in different programming languages.

* [C#](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-C-Sharp)
* [Java](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Java)
* [Node.js](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Nodejs)
* [PHP](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-PHP)
* [Python 2](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Python-2)
* [Python 3](https://repl.it/@WeatherLink/v2-API-Signature-Calculation-in-Python-3)

## Walkthrough Examples

<div class="notice--warning">
<h4>Please Note:</h4>
  <p>The old Walkthrough Examples have been replaced by the new <a href="tutorial">Tutorial</a> documentation page.</p>
</div>
