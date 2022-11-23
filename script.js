let weather = {
    "apiKey" : "ab4911e07e44d1a97863f99a12884c0a",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey
    )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {    //function to display the weather
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h"; 
        document.querySelector(".temp").innerText = temp + "°C";
    },

    search: function() {    //function to search 
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", ()=>{  //function for clicking on the search button.
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (event)=> {  //function for clicking the enter key.
    if(event.key == "Enter") { 
        weather.search();
    }

})