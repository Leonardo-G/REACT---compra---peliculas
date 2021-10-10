import React, { useEffect, useState } from 'react';
import { BotonCarrito } from './components/BotonCarrito';
import { FormularioBusqueda } from './components/FormularioBusqueda';
import { ListaCarrito } from './components/ListaCarrito';
import { Pelicula } from './components/Pelicula';
import peliculas from "./data/peliculas"

export const App = () => {

    const arrayCarrito = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];


    const [carrito, setCarrito] = useState(arrayCarrito);
    const [open, setOpen] = useState(false)

    useEffect( () => {
        localStorage.setItem("arrayPeliculas", JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = (id) => {
        const pelicualAgregada = peliculas.filter( pelicula => pelicula.id === id)[0];
        setCarrito([...carrito, pelicualAgregada])
    }

    const eliminarCarrito = (id) => {
        const eliminarPelicula = carrito.filter( pelicula => pelicula.id !== id);
        setCarrito([...eliminarPelicula]);
    }

    const listaCarrito = open && <ListaCarrito carrito={carrito} setOpen={ setOpen } eliminarCarrito={ eliminarCarrito }/>

    return (
        <>
            <FormularioBusqueda />
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
