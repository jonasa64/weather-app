import React from "react";
import useIcon from "../hooks/useIcon";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'

const DisplayWeather = ({data, setCity, setSubmitted}) => {
    const {weather, main, name} = data[0];
    const rangeId = weather.map(item => item.id)[0];
    const {icon} = useIcon(rangeId);

    const formatTemp = temp => Math.floor(temp);

    return (
        <div className="card mt-4">
            <h1 className="card-title text-center">Current weather for {name}</h1>
            <div className="card-body">
                <h5 className="text-center">
                    <i className={`wi ${icon} display-1`}/>
                </h5>

                {weather.map((weather, index) => (
                    <div key={index}>
                        <p className="card-text text-center display-3">{weather.description}</p>
                    </div>
                ))}

                <h3 className="py-2 text-center text-secondary">Current temperatur { formatTemp(main.temp)} <i
                    className="wi wi-celsius"/></h3>
                <p className="text-center"><span className="px-4"> Min temperatur {formatTemp(main.temp_min)} <i
                    className="wi wi-celsius"/> </span> <span
                    className="px-4">Max temperatur {formatTemp(main.temp_max)} <i className="wi wi-celsius"/></span>
                </p>
            </div>
        </div>
    )
}

export default DisplayWeather;