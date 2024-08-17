import axios from "axios";
import { ClsBusqueda } from "../clases/clases";
//import { z } from "zod";
import { useMemo, useState } from "react";
import { Weather } from "../types/apiTypes";

//import { object, string, number, parse } from "valibot"

// Type Guard
// const isWeatherResponse = (weather: unknown): weather is WeatherAPI => {
//     return(
//         Boolean(weather) && 
//         typeof weather === 'object' &&
//         typeof (weather as WeatherAPI).name === 'string' &&
//         typeof (weather as WeatherAPI).main.temp === 'number' &&
//         typeof (weather as WeatherAPI).main.temp_max === 'number' &&
//         typeof (weather as WeatherAPI).main.temp_min === 'number'
//     )
// }

// zod
// const Weather = z.object({
//     name: z.string(),
//     main: z.object({
//         temp: z.number(),
//         temp_max: z.number(),
//         temp_min: z.number()
//     })
// });

// export type Weather = z.infer<typeof Weather>

// valibot
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_max: number(),
//         temp_min: number()
//     })
// })

const initialWeatherState = {
    name: "",
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
    }
}

const useWeather = () => {

    const [weather, setWeather] = useState<Weather>(initialWeatherState);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchWeather = async (busqueda: ClsBusqueda) => {
        const appId: string = import.meta.env.VITE_API_KEY;
        setLoading(true);
        setWeather(initialWeatherState);
        setNotFound(false);

        try {
            const geoUrilatlong: string = `https://api.openweathermap.org/geo/1.0/direct?q=${busqueda.ciudad},${busqueda.pais.codigo}&appid=${appId}`;  
            
            const {data} = await axios.get(geoUrilatlong);

            if (data[0]) {
                const geoUriWeather: string = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${appId}&units=metric`;
                
                // Castear el type
                // const {data: weatherResult} = await axios.get<WeatherAPI>(geoUriWeather);
                
                // Type Guards
                // const {data: weatherResult} = await axios.get(geoUriWeather);
                
                // const result = isWeatherResponse(weatherResult);
                // if ( result ) {
                //     console.log(weatherResult.name);
                // } else {
                //     console.log("Respuesta mal formada")
                // }

                const {data: weatherResult} = await axios.get(geoUriWeather);

                const result = Weather.safeParse(weatherResult);
                if ( result.success ) {
                    setWeather(result.data);
                }

                // const {data: weatherResult} = await axios.get(geoUriWeather);
                // const result = parse(WeatherSchema, weatherResult);
                // console.log(result.name);

            } else {
                setNotFound(true);
            }
            
        } catch (error) {
            console.log(error)            
        } finally {
            setLoading(false);
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather]);

    return {
        weather,
        loading,
        notFound,   
        fetchWeather,
        hasWeatherData
    }
}

export default useWeather