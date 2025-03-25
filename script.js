const apiKey = "f05821cb294cb5b77fc3451200d75426";

async function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
        document.getElementById("condition").innerText = `🌤 Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

        const iconCode = data.weather[0].icon;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}.png`;

    } catch (error) {
        alert("Error fetching weather data.");
        console.error(error);
    }
}
