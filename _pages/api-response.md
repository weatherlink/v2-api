---
title: API Response
permalink: /api-response
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
---

The WeatherLink v2 API response format is JSON.

## Sample Responses

Below is a sample response JSON document for WeatherLink Live current conditions data.

```json
{
    "station_id": 374964,
    "sensors": [
        {
            "lsid": 5271270,
            "data": [
                {
                    "ip_v4_netmask": "255.255.255.0",
                    "battery_voltage": 70,
                    "wifi_rssi": -70,
                    "network_error": 2,
                    "ip_v4_gateway": "192.168.0.1",
                    "rapid_records_sent": 138,
                    "firmware_version": 1559767913,
                    "uptime": 5376092,
                    "touchpad_wakeups": 27,
                    "ip_v4_address": "192.168.0.103",
                    "bootloader_version": 1550707628,
                    "local_api_queries": 4,
                    "rx_bytes": 342707,
                    "health_version": 1,
                    "radio_version": 621020416,
                    "espressif_version": 1534381024,
                    "ip_address_type": 1,
                    "link_uptime": 774880,
                    "network_type": 1,
                    "input_voltage": 4686,
                    "tx_bytes": 3823085,
                    "ts": 1565656200
                }
            ],
            "sensor_type": 504,
            "data_structure_type": 15
        },
        {
            "lsid": 5271273,
            "sensor_type": 45,
            "data_structure_type": 10,
            "data": [{
                "ts": 1558741927,
                "tx_id": 1,
                "wind_speed_hi_last_2_min": 5,
                "hum": 42.7,
                "wind_dir_at_hi_speed_last_10_min": 260,
                "wind_chill": 73.3,
                "rain_rate_hi_last_15_min_clicks": 0,
                "thw_index": 72.2,
                "wind_dir_scalar_avg_last_10_min": 221,
                "rain_size": 1,
                "uv_index": 2.3,
                "wind_speed_last": 4,
                "rainfall_last_60_min_clicks": 0,
                "wet_bulb": 55.8,
                "rainfall_monthly_clicks": 117,
                "wind_speed_avg_last_10_min": 3.56,
                "wind_dir_at_hi_speed_last_2_min": 225,
                "rainfall_daily_in": 0,
                "wind_dir_last": 195,
                "rainfall_daily_mm": 0,
                "rain_storm_last_clicks": 22,
                "rain_storm_last_start_at": 1558428061,
                "rain_rate_hi_clicks": 0,
                "rainfall_last_15_min_in": 0,
                "rainfall_daily_clicks": 0,
                "dew_point": 49.3,
                "rainfall_last_15_min_mm": 0,
                "rain_rate_hi_in": 0,
                "rain_storm_clicks": 0,
                "rain_rate_hi_mm": 0,
                "rainfall_year_clicks": 117,
                "rain_storm_in": 0,
                "rain_storm_last_end_at": 1558576860,
                "rain_storm_mm": 0,
                "wind_dir_scalar_avg_last_2_min": 222,
                "heat_index": 72.2,
                "rainfall_last_24_hr_in": 0,
                "rainfall_last_60_min_mm": 0,
                "rainfall_last_60_min_in": 0,
                "rain_storm_start_time": null,
                "rainfall_last_24_hr_mm": 0,
                "rainfall_year_in": 1.17,
                "wind_speed_hi_last_10_min": 6,
                "rainfall_last_15_min_clicks": 0,
                "rainfall_year_mm": 29.718,
                "wind_dir_scalar_avg_last_1_min": 214,
                "temp": 73.3,
                "wind_speed_avg_last_2_min": 3.18,
                "solar_rad": 598,
                "rainfall_monthly_mm": 29.718,
                "rain_storm_last_mm": 5.588,
                "wind_speed_avg_last_1_min": 3.37,
                "thsw_index": 72.6,
                "rainfall_monthly_in": 1.17,
                "rain_rate_last_mm": 0,
                "rain_rate_last_clicks": 0,
                "rainfall_last_24_hr_clicks": 0,
                "rain_storm_last_in": 0.22,
                "rain_rate_last_in": 0,
                "rain_rate_hi_last_15_min_mm": 0,
                "rain_rate_hi_last_15_min_in": 0
            }]
        },
        {
            "lsid": 5271271,
            "sensor_type": 242,
            "data_structure_type": 12,
            "data": [{
                "ts": 1558741927,
                "bar_absolute": 29.515,
                "bar_sea_level": 29.61,
                "bar_offset": -0.001,
                "bar_trend": -0.063
            }]
        },
        {
            "lsid": 5271399,
            "sensor_type": 37,
            "data_structure_type": 10,
            "data": [{
                "ts": 1558741927,
                "tx_id": 2,
                "wind_speed_hi_last_2_min": 3.93,
                "hum": 53.7,
                "wind_dir_at_hi_speed_last_10_min": 266,
                "wind_chill": 73.6,
                "rain_rate_hi_last_15_min_clicks": 0,
                "thw_index": 73.5,
                "wind_dir_scalar_avg_last_10_min": 242,
                "rain_size": 1,
                "uv_index": null,
                "wind_speed_last": 3.37,
                "rainfall_last_60_min_clicks": 0,
                "wet_bulb": 60.6,
                "rainfall_monthly_clicks": 238,
                "wind_speed_avg_last_10_min": 2.81,
                "wind_dir_at_hi_speed_last_2_min": 223,
                "rainfall_daily_in": 0,
                "wind_dir_last": 233,
                "rainfall_daily_mm": 0,
                "rain_storm_last_clicks": 22,
                "rain_storm_last_start_at": 1558428661,
                "rain_rate_hi_clicks": 0,
                "rainfall_last_15_min_in": 0,
                "rainfall_daily_clicks": 0,
                "dew_point": 55.8,
                "rainfall_last_15_min_mm": 0,
                "rain_rate_hi_in": 0,
                "rain_storm_clicks": 0,
                "rain_rate_hi_mm": 0,
                "rainfall_year_clicks": 238,
                "rain_storm_in": 0,
                "rain_storm_last_end_at": 1558555260,
                "rain_storm_mm": 0,
                "wind_dir_scalar_avg_last_2_min": 237,
                "heat_index": 73.5,
                "rainfall_last_24_hr_in": 0,
                "rainfall_last_60_min_mm": 0,
                "rainfall_last_60_min_in": 0,
                "rain_storm_start_time": null,
                "rainfall_last_24_hr_mm": 0,
                "rainfall_year_in": 2.38,
                "wind_speed_hi_last_10_min": 5.37,
                "rainfall_last_15_min_clicks": 0,
                "rainfall_year_mm": 60.452,
                "wind_dir_scalar_avg_last_1_min": 231,
                "temp": 73.6,
                "wind_speed_avg_last_2_min": 2.56,
                "solar_rad": null,
                "rainfall_monthly_mm": 60.452,
                "rain_storm_last_mm": 5.588,
                "wind_speed_avg_last_1_min": 2.75,
                "thsw_index": null,
                "rainfall_monthly_in": 2.38,
                "rain_rate_last_mm": 0,
                "rain_rate_last_clicks": 0,
                "rainfall_last_24_hr_clicks": 0,
                "rain_storm_last_in": 0.22,
                "rain_rate_last_in": 0,
                "rain_rate_hi_last_15_min_mm": 0,
                "rain_rate_hi_last_15_min_in": 0
            }]
        }
    ],
    "generated_at": 1558741957
}
```

And here is a sample JSON response for EnviroMonitor historic data. Note the sample data is truncated to only show 1 data record for each sensor. Othwerwise the JSON document is just too big to show here.

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
                    "moist_soil_last": 0,
                    "ts": 1561964700
                },
                ...
            ]
        },
        {
            "lsid": 5307508,
            "sensor_type": 24,
            "data_structure_type": 7,
            "data": [
                {
                    "iss_reception": 100,
                    "wind_speed_avg": 0,
                    "uv_dose": 0,
                    "wind_speed_hi": 1,
                    "wind_dir_of_hi": 9,
                    "wind_chill": 55.4,
                    "solar_rad_hi": 0,
                    "deg_days_heat": 0.033333328,
                    "thw_index": 55.140003,
                    "bar": 30.079,
                    "hum_out": 82,
                    "uv_index_hi": 0,
                    "temp_out": 55.4,
                    "temp_out_lo": 55.3,
                    "wet_bulb": 52.09369,
                    "temp_out_hi": 55.4,
                    "solar_rad_avg": 0,
                    "bar_alt": 30.079,
                    "arch_int": 300,
                    "wind_run": 0,
                    "solar_energy": 0,
                    "dew_point_out": 49.99538,
                    "rain_rate_hi_clicks": 0,
                    "wind_dir_of_prevail": 9,
                    "et": 0,
                    "air_density": 0.07541041,
                    "rainfall_in": 0,
                    "heat_index_out": 55.140003,
                    "thsw_index": 53,
                    "rainfall_mm": 0,
                    "night_cloud_cover": 0.77692354,
                    "deg_days_cool": 0,
                    "rain_rate_hi_in": 0,
                    "uv_index_avg": 0,
                    "wind_num_samples": 117,
                    "emc": 16.958,
                    "rain_rate_hi_mm": 0,
                    "rev_type": 2,
                    "rainfall_clicks": 0,
                    "ts": 1561964700,
                    "abs_press": 29.647081
                },
                ...
            ]
        },
        {
            "lsid": 5307479,
            "data": [
                {
                    "mcc_nmc": 310260,
                    "noise_floor_rssi": -114,
                    "access_technology": 2,
                    "lead_acid_battery_voltage": 7063,
                    "bluetooth_firmware_version": null,
                    "location_area_code": 40481,
                    "beacon_interval": 2097,
                    "link_layer_packets_received": 317,
                    "solar_panel_voltage": 19055,
                    "rank": 256,
                    "creg_cgreg": 85,
                    "health_version": 1,
                    "false_wakeup_rssi": -82,
                    "inside_box_temp": 110.791245,
                    "cell_id": 164140046,
                    "power_percentage_tx": 0,
                    "rssi": 15,
                    "last_rx_rssi": -82,
                    "power_percentage_mcu": 6,
                    "application_firmware_version": 1559080571,
                    "false_wakeup_count": 15,
                    "etx": 0,
                    "rpl_mode": 0,
                    "uptime": 533115,
                    "number_of_neighbors": 2,
                    "last_parent_rtt_ping": 0,
                    "platform_id": 2,
                    "cme": 0,
                    "power_percentage_rx": 1,
                    "rpl_parent_node_id": null,
                    "ts": 1565657100
                },
                ...
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
                    "bar_trend_3_hr": 0,
                    "pressure_last": 30.079,
                    "ts": 1561964700
                },
                ...
            ]
        }
    ],
    "generated_at": 1562182504
}
```

## Weather Observation Data API Response Structure

API responses for weather observation data follow the same format regardless of the type of weather station.

A weather observation data response is composed of the following components:

* `station_id` - The unique ID of the weather station. This metadata API endpoint `/stations` can be used to retrieve the station ID numbers for your stations.
* `sensors` - A list of sensors associated with the station. The list of sensors will contain the observation data, this is further explained below.
* `generated_at` - A Unix timestamp for when the API response was generated.

Here's a truncated section of the sample JSON highlighting these fields:

```json
{
    "station_id": 374964,
    "sensors": [...],
    "generated_at": 1558741957
}
```

Each sensor listed in the `sensors` section contains the following information:

* `lsid` - The Logical Sensor ID. This is a unique ID for the sensor. The metadata API endpoint `/sensors` can be used to retrieve all sensor IDs for your stations.
* `sensor_type` - The sensor type can be used to cross reference with the [Sensor Catalog](sensor-catalog) to find documentation on the field names and data types for all data fields supported by each type of sensor.
* `data_structure_type` - The data structure type is used to further specify the nature of a weather observation data record when the sensor supports generating multiple types of data records. Please see the [Data Structure Types](data-structure-types) page for more details.
* `data` - An array of weather observation data records. For current conditions weather observation data the array will contain zero or one record. For historic weather observation data the array may contain zero, one, or many records depending on the requested time window for data.

Additionally, each weather observation data record in the `data` array will contain a `ts` field in addition to the weather observation data fields. The `ts` field is the Unix timestamp of the data record.

WeatherLink Live devices will also include an additional field in the weather observation data record named `tx_id`. This field is specific to WeatherLink Live devices. This is the transmitter ID the sensor is currently configured for. The transmitter ID is not stored historically so you will see whatever value it is currently configured for, even if you are querying for historic data.

Here are some truncated samples showing the differences between the current conditions and historic data JSON structures.

### Current Conditions Data

```json
{
    "station_id": 374964,
    "sensors": [
        {
            "lsid": 5271273,
            "sensor_type": 45,
            "data_structure_type": 10,
            "data": [
                {             
                    "ts": 1558741927,
                    "tx_id": 1,
                    "wind_speed_hi_last_2_min": 5,
                    "hum": 42.7,
                    "wind_dir_at_hi_speed_last_10_min": 260,
                    "wind_chill": 73.3,
                    ...
                }
            ]
        },
        ...
    ],
    "generated_at": 1558741957
}
```

### Historic Data

```json
{
    "station_id": 374964,
    "sensors": [
        {
            "lsid": 5271273,
            "sensor_type": 45,
            "data_structure_type": 11
            "data": [
                {
                    "ts": 1557997200,
                    "tx_id": 1,
                    "wind_speed_avg": 3.56,
                    "dew_point_hi_at": 1557990015,
                    "uv_dose": 0,
                    "wind_chill_last": 51.8,
                    ...
                },
                ...
            ]
        },
        ...
    ],
    "generated_at": 1558932381
}
```

