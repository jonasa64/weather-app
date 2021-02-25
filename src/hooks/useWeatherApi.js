import API_KEY from '../cofig/kyes';
import {useState, useEffect} from 'react'

const useWeatherApi = (cityName) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('')

    useEffect(async () => {
        const response =  await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        const responseData = await response.json()
        if(responseData.statusCode === 200){
            setData(responseData)
        }else {
            setError('failed to fetch data')
        }
        }, [cityName])

    return {data, error}
}

export default useWeatherApi;