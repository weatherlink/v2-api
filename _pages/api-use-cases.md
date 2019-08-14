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

When you query weather observation data the API response will include a `data_structure_type` field that identifies the type of the data record. Here's a truncated response from the `/current` Current Conditions API endpoint for an EnviroMonitor weather station, showing two data sensors and one health sensor.

```json
{
    "station_id": 379012,
    "sensors": [
        {
            "lsid": 5307568,
            "sensor_type": 108,
            "data_structure_type": 9,
            "data": [
                {
                    "ts": 1562187900,
                    "moist_soil_last": 3.3
                }
            ]
        },
        {
            "lsid": 5307508,
            "sensor_type": 24,
            "data_structure_type": 6,
            "data": [
                {
                    "ts": 1562188200,
                    "temp_out": 77.3,
                    "hum_out": 45,
                    ...
                }
            ]
        },
        {
            "lsid": 5307479,
            "data": [
                {
                    "mcc_nmc": 310260,
                    "noise_floor_rssi": -113,
                    "access_technology": 2,
                    "lead_acid_battery_voltage": 7073,
                    "bluetooth_firmware_version": null,
                    "location_area_code": 40481,
                    "beacon_interval": 2097,
                    "link_layer_packets_received": 336,
                    "solar_panel_voltage": 19362,
                    "rank": 256,
                    "creg_cgreg": 85,
                    "health_version": 1,
                    "false_wakeup_rssi": -99,
                    "inside_box_temp": 110.59625,
                    "cell_id": 164121796,
                    "power_percentage_tx": 0,
                    "rssi": 14,
                    "last_rx_rssi": -76,
                    "power_percentage_mcu": 6,
                    "application_firmware_version": 1559080571,
                    "false_wakeup_count": 40,
                    "etx": 0,
                    "rpl_mode": 0,
                    "uptime": 528615,
                    "number_of_neighbors": 2,
                    "last_parent_rtt_ping": 0,
                    "platform_id": 2,
                    "cme": 0,
                    "power_percentage_rx": 1,
                    "rpl_parent_node_id": null,
                    "ts": 1565652600
                }
            ],
            "sensor_type": 502,
            "data_structure_type": 14
        },
        {
            "lsid": 5307480,
            "sensor_type": 3,
            "data_structure_type": 9,
            "data": [
                {
                    "ts": 1562188200,
                    "bar_trend_3_hr": 0,
                    "pressure_last": 29.944
                }
            ]
        }
    ],
    "generated_at": 1562188310
}
```

In this example there are 3 sensors.

Sensor Type|Sensor Description|Data Structure Type
-----------|------------------|-------------------
108|Davis Instruments #6440 Soil Moisture Sensor|9
24|Vantage Pro2 Plus #6327C Cabled Integrated Sensor Suite|6
3|Barometer|9

You can reference the [Data Structure Types](data-structure-types) documentation for the full list of all supported data structure types but here are the values for EnviroMonitor for quick reference.

Data Structure Type|Record Type
-|-
6|ISS Current Conditions Record
7|ISS Archive Record
8|~~ISS High/Low Record~~ *(deprecated)*
9|non-ISS Record
14|Health Record

Based on this information we see that data from the soil moisture sensor and barometer are non-ISS records. That means these sensors are not part of the Vantage Pro2 Plus Integrated Sensor Suite. Additionally, we see the data structure type of 6 for the data from the Vantage Pro2 Plus which tells us this data record is an ISS current conditions record.

[Back to the top](#top)
