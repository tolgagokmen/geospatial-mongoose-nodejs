# GEOSPATIAL MONGOOSE
[![[Dependencies status]](https://david-dm.org/franciscop/server/status.svg)](https://david-dm.org/franciscop/server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



A simple way to store and find location using `NodeJS`, `MongoDB`, `Express`

## Feature
* Add new location
* Find nearest locations

## Usage
1. Install packages
```sh
    $ yarn install
```
2. Connect database
```sh
    Change your MongoDB URI in "config/vars.config.js"
```
3. Run project
```sh
    $ yarn start
```

## API Documentation
#### [✔] Add new location
> **POST** `domain`/api/v1.0/locations

Body Parameters
```sh
    {
    	"longitude": 106.6462473,
    	"latitude": 10.7835932,
    	"name": "Viva Star Coffee"
    }
```
#### [✔] Find locations
> **GET** `domain`/api/v1.0/locations?longitude=106.6755828&latitude=10.8079706&limit=10&distance=1000

Query Parameters

| Name | Type | Description |
| ---- |:----:| ----------- |
| longitude | Number (Float) | Location `longitude` |
| latitude | Number (Float) | Location `latitude` |
| limit | Number (Int) | Default = `10` |
| distance | Number | Default = `8000`(meter) |

## AUTHOR
Hoang Trung Hieu

* Email: [info@hieuht.com](mailto:info@hieuht.com)
* Facebook: [https://www.facebook.com/trunghieuhth](https://www.facebook.com/trunghieuhth)
* Twitter: [https://www.twitter.com/trunghieuhth](https://www.twitter.com/trunghieuhth)