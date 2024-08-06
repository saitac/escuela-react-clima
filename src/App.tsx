import styles from "./App.module.css"
import Form from "./components/Form/Form"

function App() {
/*

<div className="w-6/12 m-4">
*/
  return (
      <section>
        <h1 className="text-center text-white text-5xl m-20">Buscador de Clima</h1>
        <div className="m-auto w-4/12">
          <Form/>
          <p className="text-white">Parrafo 2</p>
        </div>
      </section>
  )
}

export default App
