import React, { useState } from 'react';
import { BotonCarrito } from './components/BotonCarrito';
import { ListaCarrito } from './components/ListaCarrito';
import { Pelicula } from './components/Pelicula';
import peliculas from "./data/peliculas"

export const App = () => {

    const [carrito, setCarrito] = useState([]);
    const [open, setOpen] = useState(false)


    const agregarCarrito = (id) => {
        const pelicualAgregada = peliculas.filter( pelicula => pelicula.id === id)[0];
        setCarrito([...carrito, pelicualAgregada])
    }

    const listaCarrito = open && <ListaCarrito carrito={carrito} setOpen={ setOpen }/>

    return (
        <>
            <div className="catalogo">
                <div className="pelicula">
                    {peliculas.map(pelicula => (
                        <Pelicula key={pelicula.id} pelicula={pelicula} agregarCarrito={agregarCarrito}/>
                    ))}
                    { (carrito.length > 0) && <BotonCarrito carrito={carrito} setOpen={setOpen} />}
                </div>
            </div>
            <div className="temaCarrito"> { listaCarrito } </div>
        </>
    )
}
