---
title: Demo Mode
permalink: /demo-mode
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

Demo mode allows you to access meta-data and weather observation data from a preselected weather station for demonstration purposes.

The demo station is the default Davis Instruments weather station located at the Davis Instruments office. The station consists of a Vantage Pro2 Plus Integrated Sensor Suite uploading data to WeatherLink.com via an EnviroMonitor gateway device. The station is also paired with an AirLink air quality sensor.

The Station IDs for this demo station are:

* Station ID (integer version): 2
* Station ID (UUID version): 9722cfc3-a4ef-47b9-befb-72f52592d6ed

Before using the demo station please take some time to go through the [Tutorial](tutorial) to learn how to use the WeatherLink v2 API and how to use your API Key and API Secret to authenticate your API calls with the WeatherLink v2 API.

To use the demo station you need to include the `demo=true` query parameter as part of your API call to the WeatherLink v2 API. For example, to include the demo station in an API call that retrieves a list of all stations available to your API key you would need to use the following URL.

```
https://api.weatherlink.com/v2/stations?api-key={YOUR API KEY}&demo=true
```

The JSON response for the API call will contain a list of all stations that are accessible by the API Key as well as the demo station.

In order to retreive weather observation data for the demo station you will need to reference the demo Station ID in your API call and include the `demo=true` parameter.

To retrieve current conditions the URL will be:

```
https://api.weatherlink.com/v2/current/2?api-key={YOUR API KEY}&demo=true
```

To retrieve historic data the URL will be:

```
https://api.weatherlink.com/v2/historic/2?api-key={YOUR API KEY}&start-timestamp={start-timestamp}&end-timestamp={end-timestamp}&demo=true
```

For information on the extra parameters required to retrieve historic observation records please read through the [Tutorial](tutorial).