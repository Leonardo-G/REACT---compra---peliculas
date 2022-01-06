import React, { useEffect, useState } from 'react';
import { BotonCarrito } from './components/BotonCarrito';
import { NoEncontrado } from './components/error/NoEncontrado';
import { FormularioBusqueda } from './components/formularioBusqueda/FormularioBusqueda';
import { ListaCarrito } from './components/ListaCarrito';
import { Pelicula } from './components/Pelicula';
import { Spinner } from './components/spinner/Spinner';
import datos from "./data/peliculas.json"

export const App = () => {
    
    const arrayCarrito = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];

    const [peliculasCatalogo, setPeliculasCatalogo] = useState(datos);
    const [carrito, setCarrito] = useState(arrayCarrito);
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect( () => {
        localStorage.setItem("arrayPeliculas", JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = (id) => {
        const pelicualAgregada = peliculasCatalogo.filter( pelicula => pelicula.id === id)[0];
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
            <FormularioBusqueda peliculasCatalogo={peliculasCatalogo} handleChangeBusqueda={handleChangeBusqueda} objBusqueda={objBusqueda} setPeliculasCatalogo={setPeliculasCatalogo} setLoad={setLoad}/>
            <div className="catalogo">
                {load && 
                    <Spinner />
                }
                <div className="pelicula">
                    { peliculasCatalogo.map(pelicula => (
                        <Pelicula key={pelicula.id} pelicula={pelicula} agregarCarrito={agregarCarrito}/>
                    ))}
                    { (carrito.length > 0) && <BotonCarrito carrito={carrito} setOpen={setOpen} />}
                </div>
                {
                    !peliculasCatalogo.length &&
                    <NoEncontrado />
                }
            </div>
            <div className="temaCarrito"> { listaCarrito } </div>
        </>
    )
}
