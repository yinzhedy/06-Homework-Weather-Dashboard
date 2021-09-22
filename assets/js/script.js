var cityName = document.getElementById("city-name-input");
var searchButton = document.getElementById("search-button");
const apiKey = "8e6bbf77ae628080f9111805bc8624fb";

searchButton.addEventListener("click", function() {
    var city = cityName.value;
    console.log(city);
    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ apiKey;
    fetch(weatherApiUrl)
    .then(function(response) {
        response.json()
        .then(function(data){
            console.log(data)
        });
    })
})
