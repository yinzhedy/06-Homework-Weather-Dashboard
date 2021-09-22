var cityName = document.getElementById("city-name-input");
var searchButton = document.getElementById("search-button");
const apiKey = "8e6bbf77ae628080f9111805bc8624fb";
var todayTempDisplay = document.getElementById("today-temp");
var todayWindDisplay = document.getElementById("today-wind");
var todayHumidityDisplay = document.getElementById("today-humidity");
var todayUvDisplay = document.getElementById("today-uv-index");

searchButton.addEventListener("click", function() {
    var city = cityName.value;
    console.log(city);
    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ apiKey;
    fetch(weatherApiUrl)
    .then(function(response) {
        response.json()
        .then(function(data){
            var temp = "Temperature:" + (Math.floor((data.main.temp - 273)* (9/5) + 32)) + " Degrees Fahrenheit"
            var wind = "Wind Speed:" + data.wind.speed + " MPH";
            var humidity = "Humidity:" + data.main.humidity + "%";
            var uvIndex = "UV Index:" + data.main.uvi;
            console.log(temp);
            console.log(data);
            console.log(humidity);
            console.log(uvIndex);
            localStorage.setItem("dataTemp", temp);
            localStorage.setItem("dataWindSpeed", wind);
            localStorage.setItem("dataHumidity", humidity);
            localStorage.setItem("dataUvIndex", uvIndex);
        });
    })
    displayTodaysWeather();
    return;
})

function displayTodaysWeather() {
    var wind = localStorage.getItem("data", wind);
    console.log(wind);
    todayWindDisplay.textContent = wind;
}