---
title: Size Limits
permalink: /size-limits
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

API requests for historic data require a starting Unix timestamp and ending Unix timestamp to define the time window of the data being requested. The size of the time window is currently limited to 86,400 seconds, 24 hours, to prevent the API servers from being overwhelmed by many large requests at the same time.
