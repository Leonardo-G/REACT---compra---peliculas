import React, { useState } from 'react'

export const BotonCarrito = ({carrito}) => {

    const [open, setOpen] = useState(false)

    const handleOpen = (e) => {
        setOpen(!open)
    }

    return (
        <div className="kart" onClick={handleOpen}>
            <svg className="w-6 h-6 color-kart" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <div className="kart-number">
                <p className="number">{ carrito.length }</p>
            </div>
        </div>
    )
}
