import  {useState, useEffect} from 'react';

const useIcon = (rangeId) => {
    const [icon, setIcon] = useState('')
    useEffect(() => {
        switch (true) {
            case rangeId => 200 && rangeId <= 232:
                setIcon('wi-thunderstorm');
                break
            case rangeId => 300 && rangeId <= 321:
                setIcon('wi-sleet');
                break;
            case rangeId >= 500 && rangeId <= 521:
                setIcon('wi-storm-showers')
                break;
            case rangeId >= 600 && rangeId <= 622:
                setIcon('"wi-snow')
                break;
            case rangeId >= 701 && rangeId <= 781:
                setIcon('wi-fog')
                break;
            case rangeId === 800:
                setIcon('wi-day-sunny')
                break;
            case rangeId >= 801 && rangeId <= 804:
                setIcon('wi-day-fog');
                break;
            default:
                setIcon('')
        }
    }, [rangeId])

    return {icon}
}

export default useIcon;