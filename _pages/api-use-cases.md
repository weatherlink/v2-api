---
title: API Use Cases
permalink: /api-use-cases
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

<a name="top"></a>

Here are some common use cases on how to use the WeatherLink v2 API.

- <a href="#getting-the-list-of-stations">Getting the list of stations</a>
- <a href="#using-the-sensor-type">Using the sensor type</a>
- <a href="#using-the-data-structure-type">Using the data structure type</a>

<a name="getting-the-list-of-stations"></a>
## Getting the list of stations

The get the list of stations your API Key has access to you can make an API call to the `/stations` API endpoint. More information is available in the <a href="api-reference">API Reference</a>.

Here is a quick example of the API response for the `/stations` API endpoint.

```json
{
  "stations": [
    {
      "station_id": 6974,
      "station_name": "Private - BL Orchard Range Test x39",
      "gateway_id": 8388665,
      "gateway_id_hex": "001D0A800039",
      "product_number": "6800",
      "username": "testuser",
      "user_email": "example@example.com",
      "company_name": "Example Company",
      "active": true,
      "private": true,
      "recording_interval": 5,
      "firmware_version": 1470358845,
      "imei": "351579055911216",
      "meid": "A1000045841C5D",
      "registered_date": 1467345143,
      "subscription_end_date": 1498881143,
      "time_zone": "America/Los_Angeles",
      "city": "Manteca",
      "region": "CA",
      "country": "USA",
      "latitude": 37.77104,
      "longitude": -121.25094,
      "elevation": 19
    },
    {
      "station_id": 7327,
      "station_name": "Hayward Mesh 15min x4F",
      "gateway_id": 8388687,
      "gateway_id_hex": "001D0A80004F",
      "product_number": "6801",
      "username": "anothertestuser",
      "user_email": "example2@example.com",
      "company_name": "",
      "active": true,
      "private": true,
      "recording_interval": 15,
      "firmware_version": 1494962930,
      "imei": "351579055911216",
      "meid": "A1000045841C5D",
      "registered_date": 1467345143,
      "subscription_end_date": 1498881143,
      "time_zone": "America/Los_Angeles",
      "city": "Hayward",
      "region": "CA",
      "country": "USA",
      "latitude": 37.535952,
      "longitude": -122.124794,
      "elevation": 20.0344
    }
  ],
  "generated_at": 1509055056
}
```

<a href="#top">Back to the top</a>

<a href="#using-the-sensor-type">Using the sensor type</a>
## Using the sensor type

a

<a href="#top">Back to the top</a>

<a href="#using-the-data-structure-type">Using the data structure type</a>
## Using the data structure type

a

<a href="#top">Back to the top</a>
