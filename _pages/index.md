---
title: Introduction
permalink: /
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

The WeatherLink v2 API can be used to access weather station metadata and weather observation data for WeatherLink.com connected weather stations that you have access to.

In order to access a station via the WeatherLink v2 API the station must meet one of the following criteria:

1. You own the station under your WeatherLink account.
1. You don't own the station but it was shared to your WeatherLink account. If the station was shared as a Basic level share then the share must have been made by the station owner.
1. You don't own the station but it is a publicly visible station on WeatherLink.com and you purchased a Pro or Pro+ upgrade and applied it to that station to give yourself increased access to the station's data. 

<!--
<div class="notice--success">
<h4>API Update</h4>
<p>The WeatherLink v2 API now supports the <a href="https://www.davisinstruments.com/product/airlink-professional-air-quality-sensor/">AirLink</a> air quality sensor.</p>
</div>
-->

<div class="notice--success">
<h4>Please Note:</h4>
<p>The WeatherLink v2 API supports all types of Davis Instruments weather stations that upload data to WeatherLink.com.</p>
<p>The older <a href="https://www.weatherlink.com/static/docs/APIdocumentation.pdf">WeatherLink v1 API</a> that supports only data uploaded from Vantage Connect, WeatherLinkIP, and WeatherLink Network Annual Subscription connected stations will continue to function and support these older device types.</p>
<p>Please be aware that the WeatherLink v2 API is not a one-to-one correlation with the v1 API. The focus of the v2 API is on the raw data from the weather station as it is reported to the WeatherLink.com service. The v1 API was more focused on mixing different kinds of data together to form a report.</p>
</div>

<!--
<div class="notice--success">
<h4>API General Availability and Enforcement of Rate Limits:</h4>
<p>The WeatherLink v2 API Rate will be released for general availability on 2020-03-11; at which time the documented <a href="rate-limits">rate limits</a> will be enforced. If you have any questions or concerns please contact the API developers through the API <a href="support">Support Chat Room</a>.</p>
</div>
-->

<!--
<div class="notice--warning">
<h4>Please Note:</h4>
<p>The WeatherLink v2 API is intended for use with the WeatherLink Live and EnviroMonitor weather station solutions.</p>
<p>If you are looking for an API intended for use with the WeatherLinkIP, the Serial/USB Data Logger with the WeatherLink Computer Software, or the Vantage Connect weather station solutions please see the <a href="https://www.weatherlink.com/static/docs/APIdocumentation.pdf">WeatherLink v1 API documentation</a>.</p>
</div>
-->

