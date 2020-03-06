---
title: Sensor Catalog
permalink: /sensor-catalog
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

The Sensor Catalog is an API endpoint, `/sensor-catalog`, that returns a list of all sensor definitions supported in WeatherLink. These sensor definitions describe the data fields that can be found in weather observation data records.

Because the Sensor Catalog is a comprehensive list of all sensor types the JSON in the API response is a large document over 2 MB in size. We ask that API users only download this JSON document periodically and cache the information since changes to the Sensor Catalog are infrequent.

## Sensor Catalog Data Structure

The Sensor Catalog JSON document looks like this following:

```json
{
    "sensor_types": [...],
    "generated_at": 1558978867
}
```

The `sensor_types` field is an array of JSON objects, each containing metadata information about a type of sensor. To illustrate we will look at the sensor type definition for a Vantage Pro2 Plus Integrated Sensor Suite. Because this sensor type can produce a number of different weather observation data structures there is a `data_structures` section which lists each possible type of weather observation data structure that could be generated. The [Data Structure Types](data-structure-types) page contains more information on the possible types of data structures supported in WeatherLink.

Continuing with this example of a Vantage Pro2 Plus let us assume it is connected to a WeatherLink Live to report data to the WeatherLink service. When you make an API request to the `/current` API endpoint for current conditions data the API response will contain a data structure for this ISS that corresponds to the type 10 data structure shown below. Similarly, an API request to the `/historic` API endpoint for historic "archive" data will result in an API response containing data for this ISS in the type 11 data structure.

In each data structure type is a `data_structure` JSON object that lists each data field in the weather observation data record and includes the data type (integer, floating point number, etc.) and unit type (degrees Fahrenheit, inches of mercury, etc.) information for the data fields.

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

For a second example here is a portion of the Sensor Catalog showing the entry for the Sentek Drill & Drop 6cm Soil Moisture Probe. It shows that this particular sensor reports 6 soil moisture readings and 6 temperature readings. It also shows that these readings are floating point numbers and reported in percentages and degrees Fahrenheit, respectively. This example also shows how the sensor catalog contains sensor depth information, if it is available, for soil moisture probes that support multiple sensor depths. The depth information is can be found under the sensor's `configuration` field. There you will find a `depth_unit` representing inches or millimeters as well as the depth of each sensor ring.

Note that the Sentek sensor does not have multiple data structures like the Vantage Pro2 Plus example above. This is due to the fact that this sensor only returns one kind of data structure.

```json
{
    "sensor_type": 115,
    "manufacturer": "Sentek",
    "product_name": "Drill & Drop 60 cm (24\"); 6 sensors",
    "product_number": "00620",
    "category": "Soil Moisture",
    "configuration": {
        "depth_unit": "in",
        "depths": {
            "ring1": 4,
            "ring2": 8,
            "ring3": 12,
            "ring4": 16,
            "ring5": 20,
            "ring6": 24
        }
    },
    "data_structure": {
        "moist_soil_last_1": {
            "type": "float",
            "units": "percent"
        },
        "moist_soil_last_2": {
            "type": "float",
            "units": "percent"
        },
        "moist_soil_last_3": {
            "type": "float",
            "units": "percent"
        },
        "moist_soil_last_4": {
            "type": "float",
            "units": "percent"
        },
        "moist_soil_last_5": {
            "type": "float",
            "units": "percent"
        },
        "moist_soil_last_6": {
            "type": "float",
            "units": "percent"
        },
        "temp_last_1": {
            "type": "float",
            "units": "degrees Fahrenheit"
        },
        "temp_last_2": {
            "type": "float",
            "units": "degrees Fahrenheit"
        },
        "temp_last_3": {
            "type": "float",
            "units": "degrees Fahrenheit"
        },
        "temp_last_4": {
            "type": "float",
            "units": "degrees Fahrenheit"
        },
        "temp_last_5": {
            "type": "float",
            "units": "degrees Fahrenheit"
        },
        "temp_last_6": {
            "type": "float",
            "units": "degrees Fahrenheit"
        }
    }
}
```
A third example shows a Health Record for a WeatherLink Live. It shows that many data points are version numbers, counts or other values without units of measurement. Where applicable, it shows values with units such as millivolts or seconds.

This sensor also only returns one kind of data structure.

```json
{
	"sensor_type": 504,
	"manufacturer": "",
	"product_name": "`WeatherLink LIVE Health",
	"product_number": "",
	"category": "Health",
	"data_structures": [
		{
			"data_structure_type": "15",
			"description": "WeatherLink Live Health Record",
			"data_structure": {
				"health_version": {
					"type": "integer",
					"units": "none"
				},
				"ww_fw_version": {
					"type": "long",
					"units": "none"
				},
				"bluetooth_version": {
					"type": "long",
					"units": "none"
				},
				"radio_version": {
					"type": "long",
					"units": "none"
				},
				"espressif_version": {
					"type": "long",
					"units": "none"
				},
				"battery_voltage": {
					"type": "integer",
					"units": "millivolts"
				},
				"input_voltage": {
					"type": "integer",
					"units": "millivolts"
				},
				"uptime": {
					"type": "long",
					"units": "seconds"
				},
				"bgn": {
					"type": "integer",
					"units": "none"
				},
				"network_type": {
					"type": "integer",
					"units": "1 = WiFi; 2 = Ethernet"
				},
				"ip_address_type": {
					"type": "integer",
					"units": "1 = Dynamic; 2 = Secondary; 3 = Public"
				},
				"ipv4_address": {
					"type": "long",
					"units": "none"
				},
				"ipv4_gateway": {
					"type": "long",
					"units": "none"
				},
				"ipv4_netmask": {
					"type": "long",
					"units": "none"
				},
				"dns_used": {
					"type": "integer",
					"units": "1 = Primary, 2 = Secondary; 3 = Public"
				},
				"rx_bytes": {
					"type": "long",
					"units": "none"
				},
				"tx_bytes": {
					"type": "long",
					"units": "none"
				},
				"local_api_queries": {
					"type": "long",
					"units": "none"
				},
				"rapid_records_sent": {
					"type": "long",
					"units": "none"
				},
				"wifi_rssi": {
					"type": "integer",
					"units": "received signal strength indicator"
				},
				"link_uptime": {
					"type": "long",
					"units": "seconds"
				},
				"network_error": {
					"type": "integer",
					"units": "none"
				},
				"touchpad_wakeups": {
					"type": "integer",
					"units": "none"
				},
				"bootloader_version": {
					"type": "long",
					"units": "none"
				}
			}
		}
	]
}
```
