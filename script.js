const apiKey = "7b53410c239e916a36a76d4803a7035e";

function getWeather() {
  console.log("Button clicked ✅");

  const city = document.getElementById("cityInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (city === "") {
    errorMsg.textContent = "Please enter a city name.";
    return;
  }

  errorMsg.textContent = "Loading...";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("API Response:", data);

      if (data.cod !== 200) {
        errorMsg.textContent = data.message;
        return;
      }

      errorMsg.textContent = "";

      document.getElementById("cityName").textContent =
        `${data.name}, ${data.sys.country}`;

      document.getElementById("temperature").textContent =
        `${data.main.temp} °C`;

      document.getElementById("condition").textContent =
        data.weather[0].description;

      document.getElementById("humidity").textContent =
        data.main.humidity;

      document.getElementById("wind").textContent =
        data.wind.speed;
    })
    .catch(err => {
      console.error(err);
      errorMsg.textContent = "Unable to fetch weather data";
    });
}
