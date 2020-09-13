import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
    /*
        highcolor and lowcolor are the values for 'g' in rgb 
        used for the linear-gradient. 
    */
    let highcolor = 0;
    let lowcolor = 0;
    let red = 0;
    let blue = 0;

    if (temp >= 15) { // for hot climate climate ranging from 15 to 45
        highcolor = (1 - ((temp - 15) / 30)) * 255;
        red = 255;
        blue = 0;
    } else {  // for cold climate ranging from -20 to 15
        highcolor = (1 - ((temp + 20) / 35)) * 255;
        blue = 255;
        red = 0;
    }
    lowcolor = highcolor - 200;


    const Card = styled.div`
        margin: 0 auto;
        height: 260px;
        width: 220px;
        background: linear-gradient(
            to top,
            rgb(${red}, ${highcolor}, ${blue}),  
            rgb(${red}, ${Math.abs(lowcolor)}, ${blue})    
        );
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
        margin-left: 50px;
    `;

    return (
        <motion.div initial={{ scale: 0 }} animate={ {scale: 1} }>
            <Card>
                <Location getWeather={getWeather} city={city} country={country}/>
                <Icon condition={condition} />
                <Condition temp={temp} condition={condition} />
            </Card>
        </motion.div>
    );
}

export default WeatherCard;