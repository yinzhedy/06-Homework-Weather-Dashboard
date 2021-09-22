const apiKey = "8e6bbf77ae628080f9111805bc8624fb";
var momentTodaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var cityName = document.getElementById("city-name-input");
var searchButton = document.getElementById("search-button");
var todayLocationAndDateDisplay = document.getElementById("location-and-date");
var todayTempDisplay = document.getElementById("today-temp");
var todayWindDisplay = document.getElementById("today-wind");
var todayHumidityDisplay = document.getElementById("today-humidity");
var todayUvDisplay = document.getElementById("today-uv-index");
var fiveDayCardTemps = document.getElementsByClassName("temp");
var fiveDayCardWind = document.getElementsByClassName("wind");
var fiveDayCardHumidity = document.getElementsByClassName("humidity");

searchButton.addEventListener("click", function () {
  var city = cityName.value;
  console.log(city);
  var weatherApiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;
  fetch(weatherApiUrl).then(function (response) {
    response.json().then(function (data) {
      var temp =
        "Temperature:" +
        Math.floor((data.main.temp - 273) * (9 / 5) + 32) +
        " °F";
      var wind = "Wind Speed:" + data.wind.speed + " MPH";
      var humidity = "Humidity:" + data.main.humidity + "%";
      var uvIndex = "UV Index:" + data.main.uvi;
      var locationAndDate =
        " City : " + city + " Date & Time: " + momentTodaysDate;
      console.log(data);
      console.log(temp);
      console.log(wind);
      console.log(humidity);
      console.log(uvIndex);
      console.log(locationAndDate);
      localStorage.setItem("dataTemp", temp);
      localStorage.setItem("dataWindSpeed", wind);
      localStorage.setItem("dataHumidity", humidity);
      localStorage.setItem("dataUvIndex", uvIndex);
      localStorage.setItem("locationAndDate", locationAndDate);
    });
  });
  displayTodaysWeather();
  fetchFiveDayForecast(city);
  return;
});

function displayTodaysWeather() {
  var temp = localStorage.getItem("dataTemp", temp);
  var wind = localStorage.getItem("dataWindSpeed", wind);
  var humidity = localStorage.getItem("dataHumidity", humidity);
  var uvIndex = localStorage.getItem("dataUvIndex", uvIndex);
  var locationAndDate = localStorage.getItem(
    "locationAndDate",
    locationAndDate
  );
  console.log(temp);
  console.log(wind);
  console.log(humidity);
  console.log(uvIndex);
  todayLocationAndDateDisplay.textContent = locationAndDate;
  todayTempDisplay.textContent = temp;
  todayWindDisplay.textContent = wind;
  todayHumidityDisplay.textContent = humidity;
  todayUvDisplay.textContent = uvIndex;
  return;
}

function fetchFiveDayForecast() {
  var forecastApiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    apiKey;
  var city = cityName.value;
  fetch(forecastApiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      fiveDayCardTemps.textContent =
        "Temp:" + Math.floor((data.main.temp[i] - 273) * (9 / 5) + 32) + " °F";
      fiveDayCardWind.textContent =
        "Wind Speed:" + data.wind.speed + " MPH";
      fiveDayCardHumidity.textContent =
        "Humidity:" + data.main.humidity + "%";
    });
  });
}
