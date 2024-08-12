//import "./Form.module.css"

import { ChangeEvent, FormEvent, useState } from "react"
import { ClsBusqueda, ClsPais } from "../../clases/clases"
import { paises } from "../../data/countries"
import Alert from "../Alert";

type FormProps = {
    fetchWeather: (busqueda: ClsBusqueda) => Promise<void>
}

const Form = ( {fetchWeather}: FormProps ) => {

    const [busqueda, setBusqueda] = useState(new ClsBusqueda());
    const [alert, setAlert] = useState("")

    const onChangeCountryHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        
        const pindex: number = paises.findIndex((p: ClsPais) => p.codigo === e.target.value);

        setBusqueda({
            ...busqueda,
            pais: paises[pindex]
        })

    }

    const onChangecityHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setBusqueda({
            ...busqueda,
            ciudad: e.target.value
        })
    }

    const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( !(busqueda.ciudad && busqueda.pais.codigo) ) {
            setAlert("Todos los datos son obligatorios!");
            return
        }
        setAlert("");
        fetchWeather(busqueda);
    }

    return(
        <form 
            onSubmit={(e)=>onSubmitHandle(e)}
            className="flex flex-col gap-8">
            {alert && <Alert>{alert}</Alert>}
            <div className="flex flex-col gap-8">
                <label 
                    className="text-white"
                    htmlFor="city"
                >Ciudad:</label>
                <input
                    className="p-4 bg-transparent border-solid border-2 rounded-2xl border-white text-white text-3xl font-normal placeholder:text-white"
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={busqueda.ciudad}
                    onChange={(e)=>onChangecityHandle(e)}
                />
            </div>
            <div className="flex flex-col gap-8">
                <label 
                    className="text-white"
                    htmlFor="country"
                >País:</label>
                <select
                    id="country"
                    value={busqueda.pais.codigo}
                    className="p-4 bg-transparent border-solid border-2 rounded-2xl border-white text-white text-3xl font-normal placeholder:text-white"
                    onChange={e => onChangeCountryHandle(e)}
                >
                    <option 
                        className="text-black"
                        value=""
                    >-- Seleccione un País --</option>
                    {
                        paises.map( (p: ClsPais) => (
                            <option
                                className="text-black"
                                key={p.codigo}
                                value={p.codigo}
                            >
                                {p.nombre}
                            </option>
                        ) )
                    }
                </select>
            </div>
            <input
                className="text-white bg-orange-400 hover:bg-orange-500 rounded-2xl hover:cursor-pointer border-none font-bold text-2xl uppercase p-4"
                type="submit"
                value="Consultar Clima"
            ></input>
        </form>
    )
}

export default Form