//import "./Form.module.css"

import { useState } from "react"
import { ClsBusqueda, ClsPais } from "../../clases/clases"
import { paises } from "../../data/countries"

const Form = () => {

    const [busqueda, setBusqueda] = useState(new ClsBusqueda());

    const onChangeCountryHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        
        const pindex: number = paises.findIndex((p: ClsPais) => p.codigo === e.target.value);

        setBusqueda({
            ...busqueda,
            pais: paises[pindex]
        })

    }

    const onChangecityHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda({
            ...busqueda,
            ciudad: e.target.value
        })
    }

    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("OK");
    }

    return(
        <form 
            onSubmit={(e)=>onSubmitHandle(e)}
            className="flex flex-col gap-8">
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