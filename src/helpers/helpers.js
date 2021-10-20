//Funcion que devuelve 15 year a partir del year actual;

export const getYears = () => {
    const currentYear = new Date().getFullYear();
    const untilYear = new Date().getFullYear() - 5;

    let years = [];
    for(let i = currentYear; i > untilYear; i--){
        years = [...years, i];
    }

    return years
}

//Devolver un arreglo sin valores repetidos;

export const valuesArray = (array) => {

    let generos = [];
    for(let i = 0; i < array.length; i++){
        if(!array[i].genero2){
            continue;
        }
        generos = [...generos, array[i].genero, array[i].genero2];
    }
    
    return [...new Set(generos)]
}

export const searchGenero = (pelicula, objBusqueda) => {
    if(pelicula.genero){
        return pelicula.genero === objBusqueda.genero
    }

    return pelicula
}

export const searchYear = (pelicula, objBusqueda) => {
    if(pelicula.year === ""){
        return pelicula.year >= objBusqueda.year
    }

    return pelicula
}