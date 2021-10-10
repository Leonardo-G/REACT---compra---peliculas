import React from 'react'
import { BusquedaGenero } from './BusquedaGenero'
import { BusquedaYear } from './BusquedaYear'

export const FormularioBusqueda = () => {
    return (
        <form className="buscarPelicula">
            <BusquedaGenero />
            <BusquedaYear />
        </form>
    )
}
