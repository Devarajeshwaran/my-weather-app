import React from 'react';
import { connect } from 'react-redux';
import weatherImage from './WeatherImage';


let CityWeather = ({ weather, coordinates, temperature_details, place_name, country_name, unit}) => (
    <div>
        <ul>
            { place_name && country_name ?
                <li>
                    Location: {place_name}, {country_name}
                </li>
                : null
            }
            { weather.description ? 
                <li>
                    Current Weather: {weather.description}
                    <img src={weatherImage[weather.description]}></img>
                </li>
                : null
            }

            {temperature_details.feels_like && unit ?
                <li>
                    Feels Like: {temperature_details.feels_like} <sup>o</sup>{unit}
                </li>
                : null
            }

            {temperature_details.temp_max && unit ?
                <li>
                    Maximum Temperature: {temperature_details.temp_max} <sup>o</sup>{unit}
                </li>
                : null
            }

            {temperature_details.temp_min && unit ?
                <li>
                    Minimum Temperature: {temperature_details.temp_min} <sup>o</sup>{unit}
                </li>
                : null
            }

        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    weather: state.weather,
    coordinates: state.coord,
    temperature_details: state.main,
    place_name: state.name,
    country_name: state.sys.country,
    unit: state.unit,
});

CityWeather = connect(mapStateToProps,null)(CityWeather);

export default CityWeather;