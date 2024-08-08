import { IntBusqueda, IntPais } from "../interfaces/interfaces";

class ClsPais implements IntPais {

    codigo: string;
    nombre: string;

    constructor(codigo: string = "", nombre: string = "") {
        this.codigo = codigo;
        this.nombre = nombre;
    }

}

class ClsBusqueda implements IntBusqueda {
    
    ciudad: string;
    pais: ClsPais;

    constructor(ciudad: string = "", pais: ClsPais = new ClsPais()) {
        this.ciudad = ciudad;
        this.pais = pais;
    }
}

export {
    ClsPais,
    ClsBusqueda
}