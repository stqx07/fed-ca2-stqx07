let weather = {
  apiKey: "8a12115ef309a6276f39aea8801f1bc0",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=8a12115ef309a6276f39aea8801f1bc0"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
