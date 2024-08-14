import axios from "axios";
import { ClsBusqueda } from "../clases/clases";
import { WeatherAPI } from "../types/apiTypes";

// Type Guard
const isWeatherResponse = (weather: unknown): weather is WeatherAPI => {
    return(
        Boolean(weather) && 
        typeof weather === 'object' &&
        typeof (weather as WeatherAPI).name === 'string' &&
        typeof (weather as WeatherAPI).main.temp === 'number' &&
        typeof (weather as WeatherAPI).main.temp_max === 'number' &&
        typeof (weather as WeatherAPI).main.temp_min === 'number'
    )
}


const useWeather = () => {

    const fetchWeather = async (busqueda: ClsBusqueda) => {

        try {
            
            const appId: string = import.meta.env.VITE_API_KEY;
            const geoUrilatlong: string = `http://api.openweathermap.org/geo/1.0/direct?q=${busqueda.ciudad},${busqueda.pais.codigo}&appid=${appId}`;
            
            const {data} = await axios.get(geoUrilatlong);

            if (data[0]) {
                const geoUriWeather: string = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${appId}&units=metric`;
                
                // Castear el type
                // const {data: weatherResult} = await axios.get<WeatherAPI>(geoUriWeather);
                
                // Type Guards
                const {data: weatherResult} = await axios.get(geoUriWeather);
                
                const result = isWeatherResponse(weatherResult);
                if ( result ) {
                    console.log(weatherResult.name);
                } else {
                    console.log("Respuesta mal formada")
                }
            }

            
            
        } catch (error) {
            console.log(error)            
        }
        

    }

    return {

        fetchWeather
    }
}

export default useWeather