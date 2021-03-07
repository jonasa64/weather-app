import React from "react";
import useIcon from "../hooks/useIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'

const DisplayWeather = ({data}) => {
    const {weather, main, wind, sys, name} = data[0];
    const rangeId = weather.map(item => item.id)[0];
    const {icon} = useIcon(rangeId);

    return (
        <div className="card mt-4">
            <h1 className="card-title text-center">Current weather for {name}</h1>
            <div className="card-body">
                <h5 className="text-center">
                    <i className={`wi ${icon} display-1`}/>
                </h5>

                {weather.map((weather, index) => (
                    <div key={index}>
                        <p className="card-text text-center">{weather.description}</p>
                    </div>
                ))}

                <h3 className="py-2 text-center text-secondary">Current temperatur {main.temp} deg</h3>
                <p className="text-center"><span className="px-4"> Min temperatur {main.temp_min} deg</span> <span
                    className="px-4">Max temperatur {main.temp_max} deg</span></p>
            </div>
        </div>
    )
}

export default DisplayWeather;