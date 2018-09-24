import React from 'react';
import PropTypes from 'prop-types'
import Location from './Location'
import WeaterData from './WeatherData'


const WeatherLocation = () => (
   <div>
       <Location city={'Pereira'}></Location>
       <WeaterData></WeaterData>
   </div>
);



export default WeatherLocation;
