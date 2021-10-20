import React from 'react'
import peliculas from "../../data/peliculas.json";
import { getYears, valuesArray } from '../../helpers/helpers';

export const FormularioBusqueda = ({handleChangeBusqueda, objBusqueda, setPeliculasCatalogo}) => {

    //Valores devueltos del helper
    const years = getYears()
    const generosPeliculas = valuesArray(peliculas);

    const handleSearch = (e) => {
        e.preventDefault();
        
        //Buscamos el genero y el "year",.
        const busqueda = peliculas.filter(pelicula => pelicula.genero === objBusqueda.genero);
        const yearBusqueda = busqueda.filter(pelicula => pelicula.year >= objBusqueda.year) || busqueda;


        setPeliculasCatalogo(yearBusqueda)
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
                <select name="year" onChange={handleChangeBusqueda}>
                    <option value="">Seleccione un año</option>
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