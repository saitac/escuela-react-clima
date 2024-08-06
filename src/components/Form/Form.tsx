//import "./Form.module.css"

import { ClsPais } from "../../clases/clases"
import { paises } from "../../data/countries"

const Form = () => {
    return(
        <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <label 
                    className="text-white"
                    htmlFor="city"
                >Ciudad:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                />
            </div>
            <div className="flex flex-col gap-8">
                <label 
                    className="text-white"
                    htmlFor="country"
                >País:</label>
                <select>
                    <option value="">-- Seleccione un País --</option>
                    {
                        paises.map( (p: ClsPais) => (
                            <option
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
                className="text-white bg-blue-700 hover:bg-blue-800"
                type="submit"
                value="Consultar Clima"
            ></input>
        </form>
    )
}

export default Form