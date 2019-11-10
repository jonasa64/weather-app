import React,{Component} from 'react'
class WeatherCity extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div>
               {console.log(this.props.city)} 
            </div>
         );
    }
}
 
export default WeatherCity;