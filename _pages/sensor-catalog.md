---
title: Sensor Catalog
permalink: /sensor-catalog
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

The Sensor Catalog is an API endpoint that returns a list of all sensor definitions supported in WeatherLink. These sensor definitions describe the data fields that can be found in weather observation data records.

Because the Sensor Catalog is a comprehensive list of all sensor types the JSON in the API response is a large document over 1 MB in size. We ask that API users only download this JSON document periodically and parse and cache the information since changes to the Sensor Catalog are infrequent.

