import Form from "./components/Form/Form"
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, fetchWeather, hasWeatherData } = useWeather();

  return (
      <section>

        {/*<div className="text-white flex flex-row gap-10">
          <div className="bg-amber-800 basis-1/2">
            <p>1.1</p>
            <p>1.2</p>
          </div>
          <div className="bg-amber-800 basis-1/2">
            <p>3.1</p>
            <p>3.2</p>
            <p>3.1</p>
            <p>3.2</p>
          </div>
        </div>*/}

        <h1 className="text-center text-white text-5xl m-20">Buscador de Clima</h1>
        <div className="m-auto w-8/12 flex flex-row gap-10">
          <div
           className="basis-1/2"
          >
            <Form
              fetchWeather = {fetchWeather}
            />
          </div>

          {hasWeatherData && 
            <WeatherDetail weather={weather}/>
          }
          
        </div>

      </section>
  )
}

export default App
