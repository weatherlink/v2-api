---
title: Rate Limits
permalink: /rate-limits
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

The WeatherLink v2 API is a shared resource between all API users. In an effort to maintain API availability for all users and protect the API from abuse, either accidental or intentional, all API requests will be rate limited by the API Key.

Rate limits are dynamically calculated based on the types of weather stations, the WeatherLink subscription level, and the number of weather stations associated with the WeatherLink account that is connected to the API Key.

For example, if you own a WeatherLink Live with a Pro+ subscription and another WeatherLink Live is shared with you at a Basic subscription level you will be able to submit API requests to the Current Conditions API endpoint at 130 requests per hour. This value is derived from the sum of 120 requests per hour for the owned station and 10 requests per hour for the shared station.

## WeatherLink Live

Relationship with the Weather Station|Subscription Level|Current Conditions API Requests Per Hour|Historic Data API Requests Per Hour
-|-|-|-
Owned or Shared|Pro+|120|100
Owned or Shared|Pro|25|100
Owned or Shared|Basic|10|0
Saved|Pro+|120*|100
Saved|Pro|25*|100
Saved|Basic|0|0

\* Only data from the Primary Sensor Suite will be accessible.
