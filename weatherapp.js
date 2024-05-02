const apikey="dbbc37487a61cac8431ef41ed448accf";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
         
    }else{

        var data=await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"; 
    
        if(data.weather[0].main=="clouds"){
            weatherIcon.src="images/clouds.png";
        
        elseif(data.weather[0].main=="clear")
        {
            weatherIcon.src="images/clear.png";

        }
        elseif(data.weather[0].main=="rain")
        {
            weatherIcon.src="images/rain.png";

        }
        elseif(data.weather[0].main=="drizzle")
        {
            weatherIcon.src="images/drizzle.png";

        }
        elseif(data.weather[0].main=="mist")
        {
            weatherIcon.src="images/mist.png";

        }
    }
    
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";


        }
    }
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
 
