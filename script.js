const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");


//after writing addEventListner:

async function checkWeather(city){
    const api_key="be247cb7771b6bc23b7408c81f16de27";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(url).then(response=>response.json());

    console.log(weather_data);
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;

    description.innerHTML=`${weather_data.weather[0].description}`;


    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`
    
}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value)
})