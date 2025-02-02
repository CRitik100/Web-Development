document.addEventListener('DOMContentLoaded',()=>{
    const cityName = "Varanasi";
    const apiKey ="9b69d8dbb1bb684792b5f76ef855884e";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    async function getWeather() {
        try{
            const response = await fetch(api); 
            const parsedResponse = await response.json();
            return parsedResponse;
        }
        catch (error) {
            console.error("An Error Occured : ", error.message);
            throw error;
        }
    }

    getWeather().then(data =>{
        const city = data.name;
        const temp = Math.round(data.main.temp-273.15);
        const temp_max = Math.round(data.main.temp_max-273.15);
        const temp_min = Math.round(data.main.temp_min-273.15);
        const weather = data.weather[0].main;
        console.log(data);

        document.querySelector('.location').textContent = city;
        document.querySelector('.deg').textContent = temp;
        document.querySelector('.condition').textContent = weather;
        document.querySelector('.maxValue').textContent = temp_max;
        document.querySelector('.minValue').textContent = temp_min;


    });
});
