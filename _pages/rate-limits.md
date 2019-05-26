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

The WeatherLink v2 API is a shared resource between all API users. In an effort to maintain API availability for all users and protect the API from accidental or itential abuse all API requests will be rate limited by the API Key.

Rate limits are dynamically calculated based on the types of weather stations and WeatherLink subscriptions associated with the WeatherLink account that is connected to the API Key.

## WeatherLink Live

Subscription Level|Current Conditions API Requests Per Hour|Historic Data API Requests Per Hour
-|-|-
Pro+|120|100
Pro|25|100
Basic|10|0
