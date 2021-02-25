import React, {useState} from 'react'
import facade from '../api/ApiFacade'

const InputCityName = () => {
    const [city, SetCity] = useState('')
   const onKeyDownHandler = (e) => {
        if(e.keyCode === 13 && e.shiftKey == false){
            console.log("you pressed enter");
        }
    }
    return (
        <div>
            <input type="text" name="city" value={city} onChange={() => SetCity(e.target.value)} onKeyDown={(e) => onKeyDownHandler(e)}/>
        </div>
        
    )
}

export default InputCityName;