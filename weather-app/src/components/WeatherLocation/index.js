import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import Location from './Location'
import WeaterData from './WeatherData'
import './style.css'

import {
    SUN,
    WINDY,
} from './../../constants/weathers'

const location = 'Pereira,CO';
const api_key = '2c071b4a9e0250add7197d5db4d80f0e';
const url_base_weather= 'http://api.openweathermap.org/data/2.5/weather';

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 18,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}
const data1 = {
    temperature: 12,
    weatherState: WINDY,
    humidity: 55,
    wind: '88 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Pereira',
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather);
        console.log("Actualizado");
        this.setState({
            data: data1,
        })
    }
    render () {
        const {city, data} = this.state; 
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeaterData data={data}></WeaterData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
};



export default WeatherLocation;
