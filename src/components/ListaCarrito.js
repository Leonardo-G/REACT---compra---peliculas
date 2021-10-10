import React from 'react'
import { ListaPelicula } from './ListaPelicula'

export const ListaCarrito = ({carrito, setOpen}) => {
    return (
        <>
            <div className="fondoCarrito"></div>
            <div className="listaCarrito">
                <ion-icon 
                    name="close-circle-outline"    
                    class="cerrarLista"
                    onClick={() => setOpen(open => !open)}
                ></ion-icon>
                <ul>
                    {carrito.map( pelicula => (
                        <ListaPelicula key={ pelicula.id } {...pelicula} />
                    ))}
                </ul>
            </div>
        </>
    )
}
