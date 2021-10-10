import React from 'react'

export const BusquedaYear = () => {

    const year = new Date().getFullYear();
    const currentYear = new Date().getFullYear() - 5;
    
    let years = [];
    for(let i = year; i > currentYear; i--){
        years = [...years, i];
    }

    return (
        <div>
            <label htmlFor="year">Desde</label>
            <select name="year">
                <option value="">Seleccione un año</option>
                {years.map(year => (
                    <option key={year} value={year}> {year} </option>
                ))}
            </select>
        </div>
    )
}
