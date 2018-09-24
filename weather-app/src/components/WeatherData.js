import React from 'react';
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weathers'

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={SUN} 
        />
        <WeatherExtraInfo 
            humidity={25} 
            wind={'10 m/s'} 
        />
    </div>
);

export default WeatherData;