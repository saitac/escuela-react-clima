interface IntPais {
    codigo: string
    nombre: string
}

interface IntBusqueda {
    ciudad: string
    pais: IntPais
}

export {
    type IntPais,
    type IntBusqueda
}