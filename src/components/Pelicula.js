import React from 'react'

export const Pelicula = ({pelicula, agregarCarrito}) => {
    const {id, img, nombre, year, minutos, precio } = pelicula;


    return (
        <div className="pelicula__seccion">
            <div className="bloque">
                <img src={img} alt={nombre}/>
                <div className="descripcion">
                    <div>
                        <h3 className="tituloBloque">{ nombre }</h3> 
                        <p className="descripcion__year">{ year }</p>
                    </div>
                    <div className="minutos">
                        <p>{ minutos }</p>
                    </div>
                </div>
            </div>
            <div className="hover">
                <div className="hover__fondo">
                    <h3 className="fondoTitulo">{ nombre }</h3>
                </div>
                <div className="hover__descripcion">
                    <p className="precio">{ precio }</p>
                    <button
                        onClick={ e => agregarCarrito(id)}
                        className="descripcon--btn btn"
                    >Agregar Pelicula</button>
                </div>
            </div>
        </div>
    )
}
