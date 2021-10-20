import React, { useEffect, useState } from 'react';
import { BotonCarrito } from './components/BotonCarrito';
import { FormularioBusqueda } from './components/formularioBusqueda/FormularioBusqueda';
import { ListaCarrito } from './components/ListaCarrito';
import { Pelicula } from './components/Pelicula';
import peliculas from "./data/peliculas";

export const App = () => {

    const arrayCarrito = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];


    const [peliculasCatalogo, setPeliculasCatalogo] = useState(peliculas);
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

    //Busqueda
    const [objBusqueda, setObjBusqueda] = useState({
        genero: "",
        year: ""
    })

    const handleChangeBusqueda = (e) => {
        setObjBusqueda({
            ...objBusqueda,
            [e.target.name] : e.target.value
        })
    } 

    return (
        <>
            <FormularioBusqueda handleChangeBusqueda={handleChangeBusqueda} objBusqueda={objBusqueda} setPeliculasCatalogo={setPeliculasCatalogo}/>
            <div className="catalogo">
                <div className="pelicula">
                    {peliculasCatalogo.map(pelicula => (
                        <Pelicula key={pelicula.id} pelicula={pelicula} agregarCarrito={agregarCarrito}/>
                    ))}
                    { (carrito.length > 0) && <BotonCarrito carrito={carrito} setOpen={setOpen} />}
                </div>
            </div>
            <div className="temaCarrito"> { listaCarrito } </div>
        </>
    )
}
