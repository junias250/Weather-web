const apiKey = "9b2ea9d63b7c538cefb4edfdd03fc4ea";

async function updateWeather() {
	const city = document.getElementById("cityInput").value;

	if (!city) {
		alert("Please enter a city name.");
		return;
	}

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.cod === "404") {
			alert("City not found. Please try again.");
			return;
		}

	    document.getElementById("city").innerText = data.name;
	    document.getElementById("temp").innerText = data.main.temp;
	    document.getElementById("condition").innerText = data.weather[0].descrition;

	    const timezoneOffset = data.timezone;
	    const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
        document.getElementById("datetime").innerText = localTime.toLocaleString();
    } catch (error) {
    	console.error("Error fetching weather data:", error);
    }
}