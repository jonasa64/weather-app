

function handleHttpErrors(res){
    if(!res.ok){
        throw{message:res.statusText,status:res.status};
    }

  return res.json();
}


class ApiFacade {
    makeFetchOptions = (type) =>{
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

  return {
      method:type,
      headers
  }
    }

 
     fetch5DayWeather = cityName => {
        const options = this.makeFetchOptions("GET")
       return fetch('', options).then(handleHttpErrors)
     }     
      
     fetch1DayWeather = cityName => {
        const options = this.makeFetchOptions("GET")
       return fetch('', options).then(handleHttpErrors)
    }



}


const facade = new ApiFacade();
export default facade