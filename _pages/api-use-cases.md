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

- [Getting the list of stations](#getting-stations)
- [What data fields are supported for a specific sensor](#sensor-type)
- [Identifying a type of data record](#data-structure-type)

<a name="getting-stations"></a>
## Getting the list of stations

The get the list of stations your API Key has access to you can make an API call to the `/stations` API endpoint. More information is available in the [API Reference](api-reference).

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

[Back to the top](#top)

<a name="sensor-type"></a>
## What data fields are supported for a specific sensor

When you query the `/sensors` API endpoint or the weather observation data endpoints you will see a sensor type is included in the response for each sensor. The sensor type is used to identify the type of sensor in the [Sensor Catalog](sensor-catalog). The Sensor Catalog lists all supported sensors in WeatherLink and includes information about the sensor, like manufacturer, but also includes the list of data fields from the sensor that are available via the WeatherLink v2 API.

Here is a snippet of the Sensor Catalog showing the entry for the Davis Instruments #6440 Soil Moisture Sensor. It shows that this particular sensor reports a single data field that will be named `moist_soil_last` and that the data field is a floating point number and reports data in units of centibars.

```json
{
    "sensor_type": 108,
    "manufacturer": "Davis Instruments",
    "product_name": "Soil Moisture Sensor",
    "product_number": "6440",
    "category": "Soil Moisture",
    "data_structure": {
        "moist_soil_last": {
            "type": "float",
            "units": "centibars"
        }
    }
}
```

Please see the [Sensor Catalog](sensor-catalog) and [API Reference](api-reference) for more examples and details.

[Back to the top](#top)

<a name="data-structure-type"></a>
## Identifying a type of data record

a

[Back to the top](#top)
