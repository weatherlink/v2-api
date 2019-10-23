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

The following tables illustrate the combinations of these factors and how they translate to what data can be accessed via the WeatherLink v2 API.

Permission descriptions like "Most recent 5 minute record" means that data will be from the most recent time when the minute of the hour was divisible by 5. For example, an API query at 10:08 AM will return the data record from 10:05 AM and querying the API again at 10:12 AM will return the record from 10:10 AM.

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
