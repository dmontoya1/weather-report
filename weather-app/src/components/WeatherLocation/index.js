import React from 'react';
// import PropTypes from 'prop-types'
import Location from './Location'
import WeaterData from './WeatherData'
import './style.css'


const WeatherLocation = () => (
   <div className="weatherLocationCont">
       <Location city={'Pereira'}></Location>
       <WeaterData></WeaterData>
   </div>
);



export default WeatherLocation;
