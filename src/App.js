import React, { Component } from 'react'
import FormComp from './Components/FormComp'
import Weather from './Components/Weather';
import './index.css'


//API link
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
const apiKey = "98e689a1b4a71c0554783a432fc71cd7";
export default class App extends Component {
  state = {
    temp:"",
    city:"",
    country:"",
    humidity:'',
    desc:"",
    error:""
  }

getWeather= async (e) => {
  e.preventDefault();
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;
  const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
  const data=await api.json();
  console.log(data)
if(country&&city){
  this.setState({
    temp:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    desc:data.weather[0].description,
    error:""
  })
}
else{this.setState({
temp:"",
city:"",
country:"",
humidity:'',
desc:"",
error:"Please Enter Your City"})}
}

render(){
return(
  <div className="wrapper">
<div className="form-container">
  <FormComp getWeather={this.getWeather}/>
<Weather
temp={this.state.temp}
city={this.state.city}
country={this.state.country}
humidity={this.state.humidity}
desc={this.state.desc}
error={this.state.error}
/>
</div>
</div>
)

}
}