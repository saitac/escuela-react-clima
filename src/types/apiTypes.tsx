import {z} from "zod"


type WeatherAPI = {
    name: string,
    main: {
        temp: number,
        temp_max: number,
        temp_min: number,
    }
}

const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
});


type Weather = z.infer<typeof Weather>

export {
    type WeatherAPI,
    Weather
    
}