---
title: Data Permissions
permalink: /data-permissions
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

There are a number of factors that determine both if and how often you can access weather observation data for a particular weather station. These factors include:

* The type of weather station. Is it WeatherLink Live or EnviroMonitor?
* The type of weather observation data being requested. Are you requesting current conditions or historic data?
* Your relationship with the weather station. Does the station belong to your WeatherLink account or was it shared with you?
* What subscription level is your association with the weather station, do you have Basic, Pro or Pro+ access?

The following tables illustrate the combinations of these factors and how they translate to what data can be access via the WeatherLink v2 API.

## WeatherLink Live

|Relationship with the Weather Station |Subscription Level |Current Conditions Permission |Historic Data Permission
|-|-|-|-
|Owned |Pro+ |Most recent record |Yes
|Owned |Pro |Most recent 5 minute record |Yes
|Owned |Basic |Most recent 15 minute record |No
|Shared |Pro+ |Most recent record |Yes
|Shared |Pro |Most recent 5 minute record |Yes
|Shared |Basic |Most recent 15 minute record |No
|Self Upgrade |Pro+ |Most recent record, but limited to just the Primary ISS and Barometer |Yes, but limited to just the Primary ISS and Barometer
|Self Upgrade |Pro |Most recent 5 minute record, but limited to just the Primary ISS and Barometer |Yes, but limited to just the Primary ISS and Barometer
|Self Upgrade |Basic |Not applicable |Not applicable

## EnviroMonitor

|Relationship with the Weather Station |Subscription Level |ISS Current Conditions Permission |ISS Historic Data Permission |Node Sensor Current Conditions Permission |Node Sensor Historic Data Permission
|-|-|-|-|-|-
|Owned |Pro+ |Most recent record |Yes |Most recent record |Yes
|Owned |Pro |Most recent record |Yes |Most recent record |Yes
|Owned |Basic |Not applicable |Not applicable |Not applicable |Not applicable
|Shared |Pro+ |Most recent record |Yes |Most recent record |Yes
|Shared |Pro |Most recent record |Yes |Most recent record |Yes
|Shared |Basic |Most recent 15 minute record |No |Most recent 15 minute record |No
|Self Upgrade |Pro+ |Most recent record |Yes |No |No
|Self Upgrade |Pro |Most recent record |Yes |No |No
|Self Upgrade |Basic |Not applicable |Not applicable |Not applicable |Not applicable


<!--
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
-->
