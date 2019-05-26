---
title: API Response
permalink: /api-response
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/images/landing.jpg
sidebar:
  nav: "navMain"
---

The WeatherLink v2 API response format is JSON.

## Sample Response

Below is a sample response JSON document for WeatherLink Live current conditions data.

```json
{
    "station_id": 374964,
    "sensors": [
        {
            "lsid": 5271273,
            "sensor_type": 45,
            "data_structure_type": 10,
            "ts": 1558741927,
            "data": {
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
            }
        },
        {
            "lsid": 5271271,
            "sensor_type": 242,
            "data_structure_type": 12,
            "ts": 1558741927,
            "data": {
                "bar_absolute": 29.515,
                "bar_sea_level": 29.61,
                "bar_offset": -0.001,
                "bar_trend": -0.063
            }
        },
        {
            "lsid": 5271399,
            "sensor_type": 37,
            "data_structure_type": 10,
            "ts": 1558741927,
            "data": {
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
            }
        }
    ],
    "generated_at": 1558741957
}
```

## Weather Observation API Response Structure

API responses for weather observation data follows the same format regardless of the type of weather station. The response is composed of the following components:

* `station_id` - The unique ID of the weather station. This metadata API endpoint `/stations` can be used to retrieve the station ID numbers for your stations.
* `sensors` - A list of sensors associated with the station.
* `generated_at` - A Unix timestamp for when the API response was generated.

Each sensor listed in the `sensors` section contains the following information:

* `lsid` - The Logical Sensor ID. This is a unique ID for the sensor. The metadata API endpoint `/sensors` can be used to retrieve all sensor IDs for your stations.
* `sensor_type` - The sensor type can be used to cross reference with 
* `data_structure_type` - 
* 
* 
  
  
