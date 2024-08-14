
type WeatherAPI = {
    name: string,
    main: {
        temp: number,
        temp_max: number,
        temp_min: number,
    }
}

export {
    type WeatherAPI
}