---
title: Data Permissions
permalink: /data-permissions
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

There are a number of factors that determine both if and how often you can access weather observation data for a particular weather station.







Data permissio



are based on the types of weather stations, the WeatherLink subscription level, and the number of weather stations associated with the WeatherLink account that is connected to the API Key.

For example, if you own a WeatherLink Live with a Pro+ subscription and another WeatherLink Live is shared with you at a Basic subscription level you will be able to submit API requests to the Current Conditions API endpoint at 130 requests per hour. This value is derived from the sum of 120 requests per hour for the owned station and 10 requests per hour for the shared station.

## WeatherLink Live

Relationship with the Weather Station|Subscription Level|Current Conditions API Requests Per Hour|Historic Data API Requests Per Hour
-|-|-|-
Owned or Shared |Pro+  |120  |100
Owned or Shared |Pro   |25   |100
Owned or Shared |Basic |10   | 0
Saved           |Pro+  |120* |100*
Saved           |Pro   |25*  |100*
Saved           |Basic |0    |0

\* Only data from the Primary Integrated Sensor Suite will be accessible.

## EnviroMonitor / Vantage Connect

Relationship with the Weather Station|Subscription Level|Current Conditions API Requests Per Hour|Historic Data API Requests Per Hour
-|-|-|-
Owned or Shared |Pro+  |25   |100
Owned or Shared |Pro   |25   |100
Shared          |Basic |10   | 0
Saved           |Pro+  |25*  |100*
Saved           |Pro   |25*  |100*
Saved           |Basic |0    |0

\* Only data from the Integerated Sensor Suite will be accessible.

## WeatherLink IP / WeatherLink Network Annual Subscription

Relationship with the Weather Station|Subscription Level|Current Conditions API Requests Per Hour|Historic Data API Requests Per Hour
-|-|-|-
Owned or Shared |Pro+  |120  |100
Owned or Shared |Pro   |25   |100
Owned or Shared |Basic |10   | 0
Saved           |Pro+  |120* |100*
Saved           |Pro   |25*  |100*
Saved           |Basic |0    |0

\* Only data from the Integrated Sensor Suite will be accessible.
