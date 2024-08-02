import { IntPais } from "../interfaces/interfaces";

class ClsPais implements IntPais {

    codigo: string;
    nombre: string;

    constructor(codigo: string = "", nombre: string = "") {
        this.codigo = codigo
        this.nombre = nombre
    }

}

export {
    ClsPais
}