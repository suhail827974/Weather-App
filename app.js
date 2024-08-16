let inputCityName = document.getElementById('city_name');
let cityName = document.getElementById('name');
let btnSearch = document.getElementById('search')
let temprature = document.getElementById('temp')
let minTemprature = document.getElementById('minTemp')
let maxTemprature = document.getElementById('maxTemp')
let wind = document.getElementById('wind')
let humidity = document.getElementById('humidity')


btnSearch.addEventListener('click', async function(e){
    let city = inputCityName.value;
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`)
    let weather = await data.json();
    // console.log(weather);
    cityName.textContent = weather.name;
    temprature.textContent = weather.main.temp+" \u00B0C";
    minTemprature.textContent = weather.main.temp_min+" \u00B0C";
    maxTemprature.textContent = weather.main.temp_max+" \u00B0C";
    humidity.textContent = weather.main.humidity+" %";
    wind.textContent = weather.wind.speed+" m/s";
    inputCityName.value=''
})