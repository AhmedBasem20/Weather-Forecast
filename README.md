﻿# Weather Forecast

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

* [Description](#description)
* [Setting Environment](#setting-environment)
* [Development Strategy](#development-strategy)
* [Notes](#notes)


### Description
Weather Forecast is an asynchronous web app that uses Web API and user data to dynamically update the UI with the weather information.

### Setting Environment
To run this project successfully the following packages are required:
```npm  install express```
```npm install cors```
```npm install body-parser```
and then running the server
```node server.js```
now the project would be available at this URL ```localhost:8000```

### Development Strategy
Getting [OpenWeatherMap](https://openweathermap.org/) API credentials, this API includes some data about the weather, I used three of them: temprature, city and country.
Clicking generate button will cause the following:
* fetch the data from our API
* combine the API data, current date, user feelings in one object and store it in the server using ```post request```
* store the data on server endpoint object
* get the data again from the server endpoint to the client side using ```get request``` and update the UI with the weather information.


### Notes

We could update the UI directly with the weather information that we already had after fetching the API and get rid of the server side, but this project aims to practise the post and get requests and retrieving data from the server.
