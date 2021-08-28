async function getWeather(){
    const weatherDoc = document.querySelector(".mainWeather");
    const currentWeather = document.querySelector(".currentWeather");
    const feelsLike = document.querySelector(".feelsLike");
    const skyStatus = document.querySelector(".skyStatus");
    const areaName = document.querySelector(".areaName");
    const locInput = document.querySelector("input").value;
    
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locInput},us&appid=c36691fa57bef872f4657628bc9a37c9&units=imperial`);
    const jsonWeather = await weatherData.json();
    console.log(jsonWeather);

    areaName.innerHTML = jsonWeather.name
    currentWeather.innerHTML = `${jsonWeather.main.temp.toFixed(1)}°`;
    feelsLike.innerHTML = `Feels Like: ${jsonWeather.main.feels_like.toFixed(1)}°`;
    //skyStatus.innerHTML = jsonWeather.weather[0].description.replace(/^\w/, (c) => c.toUpperCase());
    skyStatus.src = `http://openweathermap.org/img/wn/${jsonWeather.weather[0].icon}@2x.png`

    weatherDoc.append(areaName);
    weatherDoc.append(skyStatus);
    weatherDoc.append(currentWeather);
    weatherDoc.append(feelsLike);
    
}

const getButton = document.querySelector(".button");

getButton.addEventListener("click", () => getWeather());