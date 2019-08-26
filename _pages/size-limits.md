---
title: Size Limits
permalink: /size-limits
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

API requests for historic data requires a starting Unix timestamp parameter and ending Unix timestamp parameter to define the time window of the data being requested.

The size of the time window is currently limited to 86,400 seconds, the equivalent of 24 hours, to prevent the API servers from being overwhelmed by many large requests at the same time.
