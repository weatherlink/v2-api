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

The WeatherLink v2 API accepts 2 kinds of identifiers as the Station ID parameter in API requests. The first is a unique integer ID that can be retrieved from an API call to the `/stations` API endpoint. The second kind of identifier allowed is a UUID that can also be retrieved using an API call to the `/stations` endpoint. However, the UUID value can also be retrieved from the WeatherLink.com web site. It can be found in the URL shown in your browser address bar when viewing the particular station in question.

[Back to the top](#top)

<a name="is-station-id-a-device-id"></a>
## Is a Station ID the same as the Device ID or DID?

The 2 forms of Station ID the WeatherLink v2 API accepts are not the same as the Device ID or DID.

In the past a single Device ID could be used to easily identify a weather station connected to a WeatherLink IP or Vantage Connect. However, in the world of EnviroMonitor every Node and Gateway are assigned Device ID numbers as well. Therefore, Device ID is no longer a nice and simple option to serve as the unique and single ID for the entirety of a weather station.

[Back to the top](#top)

<a name="how-to-find-my-station-id"></a>
## How do I find my Station ID?

You can get the Station IDs for the weather stations you have access to by calling the `/stations` API endpoint. This is discussed on the [API Use Cases](api-use-cases) page. Alternatively, if you wish to use the UUID form of Station ID you can retrieve it from the URL shown in your browser address bar when viewing the particular station in question on WeatherLink.com.

[Back to the top](#top)
