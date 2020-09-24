---
title: Data Permissions
permalink: /data-permissions
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

There are a number of factors that determine both if and how often you can access weather observation data for a particular weather station. These factors include:

* The type of weather station. Is it WeatherLink Live or EnviroMonitor?
* The type of weather observation data being requested. Are you requesting current conditions or historic data?
* Your relationship with the weather station. Does the station belong to your WeatherLink account or was it shared with you?
* What subscription level is your association with the weather station? Is it Basic, Pro or Pro+ access?

The following tables illustrate the combinations of these factors and how they translate to what data can be accessed via the WeatherLink v2 API.

Permission descriptions like "Most recent 5 minute record" means that data will be from the most recent time when the minute of the hour was divisible by 5. For example, an API query at 10:08 AM will return the data record from 10:05 AM and querying the API again at 10:12 AM will return the record from 10:10 AM.

## AirLink

<table>
  <thead>
    <tr>
      <th>Relationship with the Weather Station</th>
      <th>Subscription Level</th>
      <th>Current Conditions Permission</th>
      <th>Historic Data Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Owned</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Shared</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic *</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Self Upgrade</td>
      <td>Pro+</td>
      <td>Most recent record, but limited to just the Primary AirLink</td>
      <td>Yes, but limited to just the Primary AirLink</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record, but limited to just the Primary AirLink</td>
      <td>Yes, but limited to just the Primary AirLink</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

<i>* Basic shares must be created by the owner of the weather station.</i>

## WeatherLink Live

<table>
  <thead>
    <tr>
      <th>Relationship with the Weather Station</th>
      <th>Subscription Level</th>
      <th>Current Conditions Permission</th>
      <th>Historic Data Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Owned</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Shared</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic *</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Self Upgrade</td>
      <td>Pro+</td>
      <td>Most recent record, but limited to just the Primary ISS and Barometer</td>
      <td>Yes, but limited to just the Primary ISS and Barometer</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record, but limited to just the Primary ISS and Barometer</td>
      <td>Yes, but limited to just the Primary ISS and Barometer</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

<i>* Basic shares must be created by the owner of the weather station.</i>

## EnviroMonitor

<table>
  <thead>
    <tr>
      <th>Relationship with the Weather Station</th>
      <th>Subscription Level</th>
      <th>ISS Current Conditions Permission</th>
      <th>ISS Historic Data Permission</th>
      <th>Node Sensor Current Conditions Permission</th>
      <th>Node Sensor Historic Data Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Owned</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
    <tr>
      <td rowspan="3">Shared</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic *</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Self Upgrade</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

<i>* Basic shares must be created by the owner of the weather station.</i>

## Vantage Connect

<table>
  <thead>
    <tr>
      <th>Relationship with the Weather Station</th>
      <th>Subscription Level</th>
      <th>Current Conditions Permission</th>
      <th>Historic Data Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Owned</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
    <tr>
      <td rowspan="3">Shared</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic *</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Self Upgrade</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

<i>* Basic shares must be created by the owner of the weather station.</i>

## WeatherLinkIP / WeatherLink Network Annual Subscription

<table>
  <thead>
    <tr>
      <th>Relationship with the Weather Station</th>
      <th>Subscription Level</th>
      <th>Current Conditions Permission</th>
      <th>Historic Data Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Owned</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Shared</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic *</td>
      <td>Most recent 15 minute record</td>
      <td>No</td>
    </tr>
    <tr>
      <td rowspan="3">Self Upgrade</td>
      <td>Pro+</td>
      <td>Most recent record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>Most recent 5 minute record</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>Not applicable</td>
      <td>Not applicable</td>
    </tr>
  </tbody>
</table>

<i>* Basic shares must be created by the owner of the weather station.</i>
