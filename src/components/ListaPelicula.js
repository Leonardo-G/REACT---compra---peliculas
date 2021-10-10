import React from 'react'

export const ListaPelicula = ({id, img, nombre, precio, eliminarCarrito}) => {
    return (
        <li className="listaCarrito__pelicula">
            <img className="imgCarrito" src={ img } alt={ nombre }/>
            <h3> { nombre }</h3>
            <p className="precioCarrito">{ precio }</p>
            <div className="eliminar">
                <ion-icon 
                    name="close-outline" 
                    class="eliminarPelicula"
                    onClick={ () => eliminarCarrito(id) }
                ></ion-icon>
            </div>
        </li>
    )
}
