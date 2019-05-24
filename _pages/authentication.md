---
title: Authentication
permalink: /authentication
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

# Authentication Overview

The WeatherLink v2 API uses an API Key, API Secret, a request timestamp, and a calculated API Signature for authenticating API requests.

During the beta test phase of the v2 API selected beta testers will be provided with an API Key and API Secret.

After the beta test phase WeatherLink users will be able to generate their own API Key and API Secret on the WeatherLink web site.

## API Key

The API Key is a unique ID that identifies the API user making the API call. The API Key must be passed as a query parameter in all API requests. The API Key is passed in the API request as a query parameter named `api-key`.

## API Secret

The API Secret is a secret value that is used to calculate a signature for each API request. The API Secret must be protected and must never be passed as a parameter to the API. If your API Secret is compromised it will allow others to access the API while pretending to be you. If your API Secret is compromised please contact the Davis Instruments/WeatherLink engineering team through the <a href="https://gitter.im/WeatherLink/v2-api" target="_blank">Gitter chat room</a>.

## API Request Timestamp

The API request timestamp is the Unix timestamp at the time the API request is being generated. The purpose of the timestamp is to prevent request replay attacks. The API Request Timestamp is passed in the API request as a query parameter named `t`.

## API Signature

The API Signature is a calculated value used to prevent API parameter tampering. The API Signature process takes all of the request parameters and the API Secret and computes a unique value that represents the request. If someone else intercepts the request parameters and attempts to alter them the API Signature will no longer match and the API will reject the altered request. The API Signature is passed in the API request as a query parameter named `api-signature`.

The explain how the API Signature calculation process works we will walk through an example. In this example we will calculate an the API Signature for an API request for Current Conditions data at the `/current` API path and we will use the fictitious API Key `987654321` and the fictitious API Secret `ABC123`.

