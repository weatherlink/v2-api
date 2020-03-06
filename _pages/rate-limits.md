---
title: Rate Limits
permalink: /rate-limits
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

<div class="notice--warning">
<h4>Beta Test:</h4>
<p>Rate limits are not currently enforced during the beta test. An announcement will be made prior to the launch of rate limit enforcement.</p>
</div>

The WeatherLink v2 API is a shared resource between all API users. In an effort to maintain API availability for all users and protect the API from abuse, either accidental or intentional, all API requests will be rate limited by the API Key.

By default, all API users will have the following rate limits:

* 300 API calls per hour
* 25 API calls per second

This is more than enough for 95% percent of all WeatherLink users to access meta-data, current conditions data, and historic data for all of their weather stations.

Higher rate limits will be granted for large scale WeatherLink customers.

