import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Historial() {
    
    const [cotizaciones, setCotizaciones] = useState('');

    useEffect(() => {
        const cotizacionesAlmacenadas = localStorage.getItem('cotizaciones');

        if (cotizacionesAlmacenadas) {
            const cotizacionesParseadas = JSON.parse(cotizacionesAlmacenadas);
            setCotizaciones(cotizacionesParseadas);
        }
    }, []);

    return (
        <div>
            <h1 className="center separador">Ver Historial 📋</h1>
            <div className=" center div-cotizador">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cotizaciones && cotizaciones.length > 0 ? (
                            cotizaciones.map((cotizacion, index) => (
                                <tr key={index}>
                                <td>{cotizacion.fechaCotizacion}</td>
                                <td>{cotizacion.propiedad}</td>
                                <td>{cotizacion.ubicacion}</td>
                                <td>{cotizacion.metrosCuadrados}</td>
                                <td>{cotizacion.poliza}</td>
                            </tr>
                            ))   
                        ) : (
                            <tr>
                                <td colSpan="5">No hay cotizaciones registradas</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="center separador">
                    <Link to="/"><button className="button button-outline">VOLVER</button></Link>
                </div>
            </div>
        </div>
    );
}
