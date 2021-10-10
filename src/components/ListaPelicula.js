import React from 'react'

export const ListaPelicula = ({img, nombre, precio}) => {
    return (
        <li className="listaCarrito__pelicula">
            <img className="imgCarrito" src={ img } alt={ nombre }/>
            <h3> { nombre }</h3>
            <p className="precioCarrito">{ precio }</p>
            <div className="eliminar">
                <ion-icon name="close-outline" class="eliminarPelicula"></ion-icon>
            </div>
        </li>
    )
}
