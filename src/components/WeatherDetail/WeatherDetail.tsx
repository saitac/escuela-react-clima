import { Weather } from "../../types/apiTypes"

type WeatherDetailProps = {
    weather: Weather
}

const WeatherDetail = ( {weather}: WeatherDetailProps ) => {
    return(
        <>
            <p>{weather.name}</p>
        </>
    )
}

export {
    WeatherDetail
}