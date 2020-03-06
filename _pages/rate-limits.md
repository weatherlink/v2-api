---
title: Rate Limits
permalink: /rate-limits
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

<div class="notice--info">
<h4>API General Availability and Enforcement of Rate Limits:</h4>
<p>The WeatherLink v2 API Rate will be released for general availability on 2020-03-11; at which time the rate limits documented below will be enforced. If you have any questions or concerns please contact the API developers through the API [Support Chat Room](support).</p>
</div>

The WeatherLink v2 API is a shared resource between all API users. In an effort to maintain API availability for all users and protect the API from abuse, either accidental or intentional, all API requests will be rate limited by the API Key.

By default, all API users will have the following rate limits:

* 300 API calls per hour
* 25 API calls per second

This is more than enough for 95% percent of all WeatherLink users to access meta-data, current conditions data, and historic data for all of their weather stations.

Higher rate limits will be granted for large scale WeatherLink customers.

