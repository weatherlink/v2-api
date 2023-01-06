---
title: Data Structure Types
permalink: /data-structure-types
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

Sensors can produce multiple kinds of data records. For example, a WeatherLink Live with an Integrated Sensor Suite (ISS) like a Vantage Pro2 Plus will produce both current condition as well as historic "archive" data records.

In this example the Vantage Pro2 Plus would be listed in an API weather observation data response as sensor data with `sensor_type` 45 but the sensor type does not say if the data is current conditions data or historic data. This is where the `data_structure_type` field will be of use. You can use the table below to determine what kind of data the sensor data record represents.

## WeatherLink Console

Data Structure Type|Record Type
-|-
19|Barometer Current Conditions Record
20|Barometer Archive Record
21|Internal Temperature/Humidity Current Conditions Record
22|Internal Temperature/Humidity Archive Record
23|ISS Current Conditions Record
24|ISS Archive Record
25|Leaf/Soil Current Conditions Record
26|Leaf/Soil Archive Record
27|Health Record

## AirLink

Data Structure Type|Record Type
-|-
16|Current Conditions Record
17|Archive Record
18|Health Record

## WeatherLink Live

Data Structure Type|Record Type
-|-
10|ISS Current Conditions Record
11|ISS Archive Record
12|non-ISS Current Conditions Record
13|non-ISS Archive Record
15|Health Record

## EnviroMonitor

Data Structure Type|Record Type
-|-
6|ISS Current Conditions Record
7|ISS Archive Record
8|~~ISS High/Low Record~~ *(deprecated)*
9|non-ISS Record
14|Health Record

## WeatherLinkIP / Vantage Connect / WeatherLink Network Annual Subscription

Data Structure Type|Record Type
-|-
1|Current Conditions Record - Revision A
2|Current Conditions Record - Revision B
3|Archive Record - Revision A
4|Archive Record - Revision B
5|~~High/Low Record~~ *(deprecated)*

