import React from 'react';
import { FaSun, FaCloud, FaCloudSun, FaCloudShowersHeavy, FaCloudRain, FaSnowflake, FaSmog, FaBolt, FaThermometerEmpty } from 'react-icons/fa';

const WeatherIcon = ({ condition }) => {
    const getWeatherIcon = () => {
        switch (condition.toLowerCase()) {
            case 'hot':
                return <FaSun />;
            case 'sunny':
                return <FaSun />;
            case 'heavy rainy':
                return <FaCloudShowersHeavy />;
            case 'light rain':
                return <FaCloudRain />;
            case 'light showers':
                return <FaCloudRain />;
            case 'partly cloudy':
                return <FaCloudSun />;
            case 'very cloudy':
                return <FaCloud />;
            case 'cold':
                return <FaThermometerEmpty />;
            case 'fog':
                return <FaSmog />;
            case 'snowy':
                return <FaSnowflake />;
            case 'smoke':
                return <FaSmog />;
            case 'thunderstorm':
                return <FaBolt />;
            default:
                return null;
        }
    };

    return (
        <div>
            {getWeatherIcon()}
        </div>
    );
};

export default WeatherIcon;
