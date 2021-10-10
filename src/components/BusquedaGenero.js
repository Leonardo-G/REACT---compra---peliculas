import React from 'react'
import peliculas from "../data/peliculas.json";

export const BusquedaGenero = () => {

    let generos = [];
    for(let i = 0; i < peliculas.length; i++){
        if(!peliculas[i].genero2){
            continue;
        }
        
        generos = [...generos, peliculas[i].genero, peliculas[i].genero2]
    }
    
    const generosPeliculas = [...new Set(generos)];
    
    return (
        <div>
            <label htmlFor="genero">Buscar Pelicula</label>
            <select name="genero">
                <option value="">Seleccionar Género</option>
                { generosPeliculas.map( (genero) => (
                   <option key={ genero } value={ genero }> { genero } </option>
                ))}
            </select>
        </div>
    )
}

