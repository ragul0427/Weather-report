import axios from'axios'
import { useState,useEffect } from 'react'
import React from 'react'
  function Weatherreport()
  {
  
    const [post,setPost]=useState("null")
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${post}&appid=de2ce82f7489dbceb4a6ced0106966e5`

  useEffect(()=>{
    axios.post(baseURL).then((response)=>{
    setPost(response.data);
  })
})
const myfun=(event)=>
    {
      event.preventDefault();
      
      document.getElementById("name").innerHTML="CityName:"+post.name;
      document.getElementById("weather").innerHTML="Weather Status:"+post.weather[0].main;
      document.getElementById("description").innerHTML="Description:"+post.weather[0].description;
      document.getElementById("temp").innerHTML="Temperature:"+post.main.temp;
      document.getElementById("sunrise").innerHTML="Sunrise:"+post.sys.sunrise;
      document.getElementById("sunset").innerHTML="Sunset:"+post.sys.sunset;

      const images=document.querySelectorAll("img");
      images.forEach((image)=>{
        image.classList.add('active')
      });  
    }
  
    return(
      <div className='box'>
      <div className='innerbox'>
        <div className='header'>
    <span>
      <img src={require('./weather/rainy1.jfif')} alt='cant found' className='active'/>
      <h1>Weather Report </h1>
      <img src={require('./weather/sun2.png')} alt='cant found' className='active'/>
      </span>
      </div>
    <div className='form_controller'>
      <form onSubmit={myfun}> 
        <input type="text" id="t1" placeholder="Enter city name here" onChange={(e)=>setPost(e.target.value)}/><br></br>
        <input type="submit" value="Weather Report" className='btn'/>
      </form>
      </div>
      <div className='id-results'> 
   <div id='box'>

    <div id='name'></div>
    <div id='notfound'></div>
      <img src={require('./weather/city.jpg')} alt='cant find'/>
      </div>
      <div id='box'>
      <div id='weather'></div>
        <img src={require('./weather/weather.png')} alt='cant find'/>
        </div>
        <div id='box'>
        <div id='description'></div>
          <img src={require('./weather/climate.png')} alt='cant find'/>
        </div>

        <div id='box'>
          <div id='temp'></div>
          <img src={require('./weather/temp.png')} alt='cant find' id='img2'/>
        </div>

          <div id='box'>
          <div id='sunrise'></div>
            <img src={require('./weather/sunrise.jfif')} alt='cant find'/>
          </div>

          <div id='box'>
          <div id='sunset'></div>
            <img src={require('./weather/sunset.jfif')} alt='cant find'/>
          </div>
    </div>
    <span><p>All rights reserved&copy; 2023</p></span>
    </div>
    </div>
    )
  }

  export default Weatherreport
