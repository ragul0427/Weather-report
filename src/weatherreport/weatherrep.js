import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
function Weatherreport() {

  const [post, setPost] = useState("null")
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${post}&appid=de2ce82f7489dbceb4a6ced0106966e5`

  useEffect(() => {
    axios.post(baseURL).then((response) => {
      setPost(response.data);
    })
  })
  const myfun = (event) => {
    event.preventDefault();

    document.getElementById("name").innerHTML = "CityName:" + post.name;
    document.getElementById("weather").innerHTML = "Weather Status:" + post.weather[0].main;
    document.getElementById("description").innerHTML = "Description:" + post.weather[0].description;
    document.getElementById("temp").innerHTML = "Temperature:" + post.main.temp;
    document.getElementById("sunrise").innerHTML = "Sunrise:" + post.sys.sunrise;
    document.getElementById("sunset").innerHTML = "Sunset:" + post.sys.sunset;

    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.classList.add('active')
    });
  }

  return (
    <div className='innerbox'>
      <div className='header'>
        <h1>Weather Report </h1>
      </div>
      
        <form onSubmit={myfun}>
        <div className='form_controller'>
          <img src={require('./weather/rainy1.jfif')} alt='cant found' id='img1' className='active' />
          <input type="text" id="t1" placeholder='Enter city name here' onChange={(e) => setPost(e.target.value)} /><br></br>
          <img src={require('./weather/sun2.png')} alt='cant found' id='img2' className='active' />
          </div>
          <input type="submit" value="Weather Report" className='btn' />
        </form>
      <div className='id-results'>
        <div class='box'>
          <img src={require('./weather/city.jpg')} id="img3" alt='cant find'/>
          <div id='name'></div>
        </div>
        <div class='box'>
         
          <img src={require('./weather/weather.png')} id="img4" alt='cant find' />
          <div id='weather'></div>
        </div>
        <div class='box'>
        
          <img src={require('./weather/climate.png')} id="img5" alt='cant find' />
          <div id='description'></div>
        </div>

        <div class='box'>
          
          <img src={require('./weather/temp.png')} id="img6" alt='cant find' />
          <div id='temp'></div>
        </div>

        <div class='box'>
         
         <img src={require('./weather/sunrise.jfif')} id="img7" alt='cant find' />
         <div id='sunrise'></div>
        </div>

        <div class='box'>
        
          <img src={require('./weather/sunset.jfif')} id="img8" alt='cant find' />
          <div id='sunset'></div>
        </div>
      </div>
      <span><p>All rights reserved&copy; 2023</p></span>
    </div>
  )
}

export default Weatherreport




