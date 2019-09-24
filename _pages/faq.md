---
title: FAQ
permalink: /faq
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

<a name="top"></a>

Here are some common questions we receive regarding the WeatherLink v2 API.

- [What is a Station ID?](#what-is-a-station-id)
- [Is a Station ID the same as the Device ID or DID?](#is-station-id-a-device-id)
- [How do I find my Station ID?](#how-to-find-my-station-id)

<a name="what-is-a-station-id"></a>
## What is a Station ID?

Each weather station reporting data to the WeatherLink service has a unique integer ID called the Station ID.

[Back to the top](#top)

<a name="is-station-id-a-device-id"></a>
## Is a Station ID the same as the Device ID or DID?

The Station ID is not the same as the Device ID or DID that is on the weather station.

In the past a single Device ID could be used to easily identify a weather station connected to a WeatherLink IP or Vantage Connect. However, in EnviroMonitor weather stations every Node and Gateway are assigned Device ID numbers as well. Therefore, Device ID is no longer a nice and simple option to serve as the unique and single ID for the entirety of a weather station and was superseded by a new single identifier called Station ID. This Station ID is used throughout the WeatherLink v2 API to identify which weather station's data is being access by the API request.

[Back to the top](#top)

<a name="how-to-find-my-station-id"></a>
## How do I find my Station ID?

You can get the Station IDs for the weather stations you have access to by calling the `/stations` API endpoint. This is discussed on the [API Use Cases](api-use-cases) page.

[Back to the top](#top)
