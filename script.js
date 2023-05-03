// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'e182faa7a1msh6f5e54a71a9e19dp1291bejsn1f18d3099eb7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	try {
		
		fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
				cloud_pct.innerHTML = response.cloud_pct
				temp.innerHTML = response.temp
				temp2.innerHTML = response.temp
				feels_like.innerHTML = response.feels_like
				humidity.innerHTML = response.humidity
				humidity2.innerHTML = response.humidity
				min_temp.innerHTML = response.min_temp
				max_temp.innerHTML = response.max_temp
				wind_speed.innerHTML = response.wind_speed
				wind_speed2.innerHTML = response.wind_speed
				sunrise.innerHTML = response.sunrise
				sunset.innerHTML = response.sunset
			})

	} catch (error) {
		console.error(error);
	}
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Bhubaneswar")
