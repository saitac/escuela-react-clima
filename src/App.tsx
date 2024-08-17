import Alert from "./components/Alert";
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner";
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather();

  return (
      <section>

        {/*

        <h1 className="text-center text-white text-5xl m-20">Buscador de Clima</h1>
        <div className="m-auto w-8/12 flex flex-row gap-10">
          <div
           className="basis-1/2"
          >
            <Form
              fetchWeather = {fetchWeather}
            />
          </div>
          {loading && <Spinner/>}
          {hasWeatherData && 
            <WeatherDetail weather={weather}/>
          }
          
        </div>




        */}

        <h1 className="text-center text-white text-5xl m-20">Buscador de Clima</h1>
        <div className="m-auto w-8/12 flex flex-row gap-10">
          <div
           className="basis-1/2"
          >
            <Form
              fetchWeather = {fetchWeather}
            />
          </div>
          {loading && <Spinner/>}
          {hasWeatherData && <WeatherDetail weather={weather}/>}
          {notFound && <Alert>Ciudad no encontrada!</Alert>}
          
        </div>

      </section>
  )
}

export default App
