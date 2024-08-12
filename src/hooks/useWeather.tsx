import axios from "axios";
import { ClsBusqueda } from "../clases/clases";


const useWeather = () => {

    const fetchWeather = async (busqueda: ClsBusqueda) => {

        try {
            
            const appId: string = "33b410e319f9291a0e8216b756b8a8dc";
            const geoUri: string = `http://api.openweathermap.org/geo/1.0/direct?q=${busqueda.ciudad},${busqueda.pais.codigo}&appid=${appId}`;
            
            console.log(geoUri);
            
            const data = await axios.get(geoUri);

            console.log(data);
            
        } catch (error) {
            console.log(error)            
        }
        
        
        // console.log("Consultando....");

        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        // 



    }

    return {

        fetchWeather
    }
}

export default useWeather