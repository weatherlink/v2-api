---
title: Sensor Catalog
permalink: /sensor-catalog
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

The Sensor Catalog is an API endpoint, `/sensor-catalog`, that returns a list of all sensor definitions supported in WeatherLink. These sensor definitions describe the data fields that can be found in weather observation data records.

Because the Sensor Catalog is a comprehensive list of all sensor types the JSON in the API response is a large document over 1 MB in size. We ask that API users only download this JSON document periodically and cache the information since changes to the Sensor Catalog are infrequent.

## Sensor Catalog Data Structure

The Sensor Catalog JSON document looks like this following:

```json
{
    "sensor_types": [...],
    "generated_at": 1558978867
}
```

The `sensor_types` field is an array of JSON objects, each containing metadata information about a type of sensor. To illustrate we will look at the sensor type definition for a Vantage Pro2 Plus Integrated Sensor Suite.

```json
{
    "sensor_type": 45,
    "manufacturer": "Davis Instruments",
    "product_name": "Vantage Pro2 Plus, includes UV & Solar Radiation Sensors",
    "product_number": "6162",
    "category": "ISS",
    "data_structures": [
        {
            "data_structure_type": "1",
            "description": "WeatherLink IP/Vantage Connect Current Conditions Record - Revision A",
            "data_structure": {
                "bar": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                "temp_in": {
                    "type": "float",
                    "units": "degrees Fahrenheit"
                },
                ...
            }
        },
        {
            "data_structure_type": "2",
            "description": "WeatherLink IP/Vantage Connect Current Conditions Record - Revision B",
            "data_structure": {
                "bar_trend": {
                    "type": "integer",
                    "units": "change in inches of mercury"
                },
                "bar": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                ...
            }
        },
        {
            "data_structure_type": "3",
            "description": "WeatherLink IP/Vantage Connect Archive Record - Revision A",
            "data_structure": {
                "arch_int": {
                    "type": "integer",
                    "units": "seconds"
                },
                "rev_type": {
                    "type": "integer",
                    "units": "revision type: 1=A; 2=B"
                },
                "temp_out": {
                    "type": "float",
                    "units": "degrees Fahrenheit"
                },
                ...
            }
        },
        {
            "data_structure_type": "4",
            "description": "WeatherLink IP/Vantage Connect Archive Record - Revision B",
            "data_structure": {
                "arch_int": {
                    "type": "integer",
                    "units": "seconds"
                },
                "rev_type": {
                    "type": "integer",
                    "units": "revision type: 1=A; 2=B"
                },
                "temp_out": {
                    "type": "float",
                    "units": "degrees Fahrenheit"
                },
                ...
            }
        },
        {
            "data_structure_type": "5",
            "description": "WeatherLink IP/Vantage Connect High/Low Record",
            "data_structure": {
                "bar_day_lo": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                "bar_day_hi": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                ...
            }
        },
        {
            "data_structure_type": "6",
            "description": "EnviroMonitor ISS Current Conditions Record",
            "data_structure": {
                "bar": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                "bar_absolute": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                ...
            }
        },
        {
            "data_structure_type": "7",
            "description": "EnviroMonitor ISS Archive Record",
            "data_structure": {
                "arch_int": {
                    "type": "integer",
                    "units": "seconds"
                },
                "rev_type": {
                    "type": "integer",
                    "units": "revision type: 1=A; 2=B"
                },
                "temp_out": {
                    "type": "float",
                    "units": "degrees Fahrenheit"
                },
                ...
            }
        },
        {
            "data_structure_type": "8",
            "description": "EnviroMonitor ISS Hi/Low Record",
            "data_structure": {
                "bar_day_hi": {
                    "type": "float",
                    "units": "inches of mercury"
                },
                "bar_day_hi_at": {
                    "type": "integer",
                    "units": "seconds"
                },
                ...
            }
        },
        {
            "data_structure_type": "10",
            "description": "WeatherLink Live ISS Current Conditions Record",
            "data_structure": {
                "temp": {
                    "type": "float",
                    "units": "degrees Fahrenheit"
                },
                "hum": {
                    "type": "float",
                    "units": "percent relative humidity"
                },
                ...
            }
        },
        {
            "data_structure_type": "11",
            "description": "WeatherLink Live ISS Archive Record",
            "data_structure": {
                "arch_int": {
                    "type": "integer",
                    "units": "seconds"
                },
                "temp_last": {
                    "type": "float",
                    "units": "degrees Fahrenheit"
                },
                ...
            }
        }
    ]
}
```
