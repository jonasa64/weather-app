import React, {useState, useEffect} from 'react'
import useWeatherApi from "../hooks/useWeatherApi";
import DisplayWeather from "./DisplayWeather";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputCityName = () => {
    const [city, setCity] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const {data, error} = useWeatherApi(city, isSubmitted);


    useEffect(() => {
        const handleKeydown = event => {
            const {keyCode, target} = event;
            if (keyCode === 13) {
                setIsSubmitted(true);
                setCity(target.value.trim())
                setIsSubmitted(false)
                setCity('')
            }
        }

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [setCity])

    return (
        <div className="form-group mt-4">
            <label htmlFor="name">Enter city name</label>
            <input className="form-control" id="name" type="text" name="city" value={city}
                   onChange={event => setCity(event.target.value)}/>
            {error.length > 0 && <div className="alert alert-danger mt-4">{error}</div>}
            {data.length > 0 && <DisplayWeather data={data}/>}
        </div>

    )
}

export default InputCityName;