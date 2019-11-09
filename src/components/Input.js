import React, {Component} from 'react'
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cityName : ''
         }

         this.handelChange = this.handelChange.bind(this)
         this.handelSubmit = this.handelSubmit.bind(this)
    }
    handelChange(event){
        this.setState({cityName: event.target.value})
    }

    handelSubmit(event){
        event.preventDefault()
        console.log(this.state.cityName);
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" value={this.state.cityName} placeholder="Enter City name" onChange={this.handelChange}/>
                    <input type="submit" value="Submit"/>
                </form>
               
            </div>
         );
    }
}
 
export default Input;