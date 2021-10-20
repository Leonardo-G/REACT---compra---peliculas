import React, { useEffect } from 'react'
import peliculas from "../../data/peliculas.json";
import { getYears, searchGenero, valuesArray } from '../../helpers/helpers';
import { Pelicula } from '../Pelicula';

export const FormularioBusqueda = ({handleChangeBusqueda, objBusqueda, setPeliculasCatalogo}) => {

    //Valores devueltos del helper
    const years = getYears()
    const generosPeliculas = valuesArray(peliculas);

    const busquedaYear = (pelicula) => {
        if(objBusqueda.year){
            return pelicula.year >= objBusqueda.year
        }
        return pelicula
    }

    const busquedaGenero = (pelicula) => {
        if(objBusqueda.genero){
            return pelicula.genero === objBusqueda.genero
        }
        return pelicula
    }

    const handleSearch = (e) => {
        e.preventDefault();

        //Buscamos el genero y el "year",
        fetch("https://peliculas-9b08e-default-rtdb.firebaseio.com/.json")
        .then(resp => resp.json())
        .then(resultado => {
            const busqueda = resultado.filter( busquedaYear ).filter( busquedaGenero )
            setPeliculasCatalogo(busqueda)
        });  
    }
    
    return (
        <form 
            className="buscarPelicula"
            onSubmit={handleSearch}
        >
            <div>
                <label htmlFor="genero">Buscar Pelicula</label>
                <select 
                    name="genero"
                    value={objBusqueda.genero}
                    onChange={handleChangeBusqueda}    
                >
                    <option value="">Seleccionar Género</option>
                    { generosPeliculas.map( (genero) => (
                    <option key={ genero }> { genero } </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="year">Desde</label>
                <select name="year" value={objBusqueda.year} onChange={handleChangeBusqueda} >
                    <option value="" selected disabled>Seleccione un año</option>
                    {years.map(year => (
                        <option key={year} value={year}> {year} </option>
                    ))}
                </select>
            </div>
            <input 
                type="submit"
                value="buscar"
                className="btn"
            />
        </form>
    )
}