import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import Location from './Location'
import WeaterData from './WeatherData'
import './style.css'

import {
    SUN,
    WINDY,
} from './../../constants/weathers'

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
