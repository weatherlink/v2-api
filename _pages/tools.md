---
title: Tools
permalink: /tools
classes: wide
header:
  overlay_color: "#000000"
  overlay_filter: "0.0"
  overlay_image: /assets/vendor/weatherlink/images/landing.jpg
---

# Postman

Postman is a great cross platform tool for testing API calls and the installer is available at: [https://www.getpostman.com/downloads/](https://www.getpostman.com/downloads/)

We have created two files you can import into Postman that will allow you to quickly test the WeatherLink v2 API.

## Step 1

Download the [WeatherLink v2 API Postman collection](/v2-api/resources/WeatherLink_v2_API.postman_collection.json) JSON file. This file contains the information about the different API endpoints like `/stations` and `/current` and the various parameters that are required or optional.

## Step 2

Download the [WeatherLink v2 API Postman environment](/v2-api/resources/WeatherLink_v2_API.postman_environment.json) JSON file. This file contains the information about your WeatherLink v2 API Key and Secret. This is just a blank template file that you <b><i>MUST</i></b> edit in order for everything to function properly.

After downloading the environment file open and edit it with your favorite basic text editor application. Locate and replace the following placeholders:

- ENTER_YOUR_WEATHERLINK_v2_API_KEY_HERE - replace this with your API Key
- ENTER_YOUR_WEATHERLINK_v2_API_SECRET_HERE - replace this with your API Secret

Save the environment file after replacing the API Key and Secret placeholders.

## Step 3

Install and/or start Postman. From the menu select File > Import and browse for the Postman collection file you downloaded in Step 1. Then select File > Import again and browse for the Postman environment file you downloaded and edited.

After importing both files you will see a collection on the left hand side of Postman named "WeatherLink v2 API". This is the collection of URLs for testing the API. Additionally, the collection import file also contains a small block of JavaScript code that calculates the API Signature and API Timestamp variables dynamically. More on this will be discussed later.

To use the environment settings that include your API Key and Secret look near the top right corner in Postman. There will be a drop down list that might say "No Environment" if this is a fresh installation of Postman. Click that list and choose the "WeatherLink v2 API" entry to change the Postman environment to use your API Key and Secret.

## Step 4

Under the Collections section expand the WeatherLink v2 API and expand the Metadata folder. Select the "Stations - Get All" item to see the details screen about this API call. On the details page you will see the special placeholders like `{{V2_API_KEY}}`. These are placeholders that tell Postman to refer to the environment variables you imported. If you ever need to change your API Key or Secret do not change the placeholders. Instead edit the environment to have the new values.

In addition to the API Key and API Secret environment variables there are additional environment variables that are calculated on the fly when you make a test call the the API from Postman. These additional environment variables are `V2_API_SIGNATURE` and `V2_API_TIMESTAMP`. Do not edit these values as they are automatically calculated and updated for each API call. The code that calculates these additional environment variables is a small block of JavaScript code embedded in the collection that automatically runs when you click the Send button to test an API call.

Now it's time to send a test API call. With the "Stations - Get All" detail screen open click the Send button in the upper right corner of Postman.

If you entered the API Key and Secret correctly into the environment then the API call will return with the proper JSON response containing the list of stations your API Key has access to.

The metadata portion of the API supports:

- WeatherLinkIP and other data loggers
- Vantage Connect
- EnviroMonitor
- WeatherLink Live

## Step 5

Since the WeatherLink v2 API is still in a beta test phase and only supports fetching weather data for EnviroMonitor and WeatherLink Live devices you will need to select an appropriate station ID to complete this next step.

From the JSON response copy one of the station ID numbers and then select "Current Conditions Data" from the "Weather Data" folder under the "WeatherLink v2 API" collection on the left hand side of Postman. On the "Current Conditions Data" details screen enter the station ID into the "Value" field for the `station-id` in the Path Variables section. Then click the Send button to send the API call to get current conditions.

