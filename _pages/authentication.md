---
title: Authentication
permalink: /authentication
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

The WeatherLink v2 API uses an API Key and an API Secret for authenticating API requests.

## API Key

The API Key is a unique ID that identifies the API user making the API call. The API Key must be passed as a query parameter in all API requests.

The API Key is passed in the API request as a query parameter named `api-key`.

## API Secret

The API Secret is a secret value that is passed as a header named `X-Api-Secret` (case insensitive).

If your API Secret is compromised it will allow others to access the API while pretending to be you. If this occurs please go back to the Account page at <a href="https://www.weatherlink.com/account">https://www.weatherlink.com/account</a> and click the `Generate v2 Key` button again. This will delete the old API Secret and create a new API Secret. You will then need to update your code to use the new API Secret. 

Please note that the API Key will not be changed and can not be deleted when generating a new API Secret.
