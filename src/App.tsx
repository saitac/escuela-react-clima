import Form from "./components/Form/Form"
import useWeather from "./hooks/useWeather"

function App() {

  const { fetchWeather } = useWeather()

  return (
      <section>
        <h1 className="text-center text-white text-5xl m-20">Buscador de Clima</h1>
        <div className="m-auto w-8/12 flex flex-row gap-10">
          <div
           className="basis-1/2"
          >
            <Form
              fetchWeather = {fetchWeather}
            />
          </div>
          
          <p className="text-white basis-1/4">Parrafo 2</p>
        </div>
      </section>
  )
}

export default App
