---
title: Data Structure Types
permalink: /data-structure-types
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

Sensors can produce multiple kinds of data records. For example, a WeatherLink Live with an Integrated Sensor Suite (ISS) like a Vantage Pro2 Plus will produce both current condition as well as historic "archive" data records.

In this example the Vantage Pro2 Plus would be listed in an API weather observation data response as sensor data with `sensor_type` 45 but the sensor type does not say if the data is current conditions data or historic data. This is where the `data_structure_type` field will be of use. You can use the table below to determine what kind of data the sensor data record represents.

## WeatherLink Live
Record Type|Data Structure Type
-|-
WeatherLink Live ISS Current Conditions Record|10
WeatherLink Live ISS Archive Record|11
WeatherLink Live non-ISS Current Conditions Record|12
WeatherLink Live non-ISS Archive Record|13

## EnviroMonitor
Record Type|Data Structure Type
-|-
EnviroMonitor ISS Current Conditions Record|6
EnviroMonitor ISS Archive Record|7
EnviroMonitor ISS High/Low Record|8
EnviroMonitor non-ISS Archive Record|9

## WeatherLink IP / Vantage Connect
Record Type|Data Structure Type
-|-
WeatherLink IP/Vantage Connect Current Conditions Record - Revision A|1
WeatherLink IP/Vantage Connect Current Conditions Record - Revision B|2
WeatherLink IP/Vantage Connect Archive Record - Revision A|3
WeatherLink IP/Vantage Connect Archive Record - Revision B|4
WeatherLink IP/Vantage Connect High/Low Record|5
