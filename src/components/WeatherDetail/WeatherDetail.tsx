import { Weather } from "../../types/apiTypes"

type WeatherDetailProps = {
    weather: Weather
}

const WeatherDetail = ( {weather}: WeatherDetailProps ) => {
    return(
        <div
            className="text-black bg-white rounded-2xl text-center px-4"
        >
            <h2>Clima de: {weather.name}</h2>
            <p
                className="text-8xl font-black m-0"
            >{parseInt(Math.round(weather.main.temp).toString())}&deg;C</p>
            <div
                className="flex justify-center gap-20"
            >
                <p
                    className="font-black"
                >Min: <span className="font-normal">{parseInt(Math.round(weather.main.temp_min).toString())}&deg;C</span></p>
                <p
                    className="font-black"
                >Max: <span className="font-normal">{parseInt(Math.round(weather.main.temp_max).toString())}&deg;C</span></p>
            </div>
        </div>
    )
}

export {
    WeatherDetail
}