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

The WeatherLink v2 API uses an API Key, API Secret, and a calculated API Signature for authenticating API requests.

During the beta test phase of the v2 API selected beta testers will be provided with an API Key and API Secret.

After the beta test phase WeatherLink users will be able to generate their own API Key and API Secret on the WeatherLink web site.

## API Key

The API Key is a unique ID that identifies the API user making the API call. The API Key must be passed as a query parameter in all API requests.

## API Secret

The API Secret is a secret value that is used to calculate a signature for each API request. The API Secret must be protected and will never be passed as a parameter to the API. If your API Secret is compromised it will allow others to access the API while pretending to be you. If your API Secret is compromised please contact the Davis Instruments/WeatherLink engineering team through the <a href="https://gitter.im/WeatherLink/v2-api" target="_blank">Gitter chat room</a>.

## API Signature

aa

