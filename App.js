import React, {Component} from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9d3221eea82df792852a7272ce12430d";

class App extends Component {

  state = {
    temperature: '',
    city: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async(e) => {
    e.preventDefault();


    // API calls return data object we can start going down the object chain from there.
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if( city && country) {
    this.setState({ // Only run the code when both left and right of && is true. Force user to put in input
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: "" 
    })
  }
}
  render() {
    return (
      <div>
      <Titles />
      <Form getWeather={this.getWeather}/>    
      <Weather temperature = {this.state.temperature}
               city = {this.state.city}
               country = {this.state.country}
               humidity = {this.state.humidity}
               description = {this.state.description}
               error={this.state.error}        
  
      /> 
      </div>

    );
  }

}
export default App

