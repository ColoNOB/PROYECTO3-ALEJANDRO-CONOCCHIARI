import React, { useState } from 'react';
import data from '../Data/datos.json';
import Header from './Header';
import Propiedad from './Propiedad';
import Ubicacion from './Ubicacion';
import MetrosCuadrados from './MetrosCuadrados';
import Cotizar from './Cotizar';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cotizador() {
  const [selectedPropiedad, setSelectedPropiedad] = useState('');
  const [selectedUbicacion, setSelectedUbicacion] = useState('');
  const [metrosCuadrados, setMetrosCuadrados] = useState(20);
  const [precioEstimado, setPrecioEstimado] = useState(0);
  const [mostrarGuardar, setMostrarGuardar] = useState(false);
  const [cotizacionActual, setCotizacionActual] = useState(null);
  const [cotizaciones, setCotizaciones] = useState(() => {
    const cotizacionesAlmacenadas = localStorage.getItem('cotizaciones');
    return cotizacionesAlmacenadas ? JSON.parse(cotizacionesAlmacenadas) : [];
  });

  const mensaje = () => {
    toast('Cotización guardada', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      style: {
        background: "CornflowerBlue",
        color: "White",
      }
    });
  }

  const alerta = (titulo, mensaje, icono)=> {
    Swal.fire({
        icon: icono || '', 
        title: titulo || '',
        text: mensaje,
        showConfirmButton: false,
        timer: 3500,
        width: '240px'
      })
  }

  const calcularCotizacion = () => {
    const propiedad = data.find(item => item.categoria === 'propiedad' && item.tipo === selectedPropiedad);
    const ubicacion = data.find(item => item.categoria === 'ubicacion' && item.tipo === selectedUbicacion);

    if (propiedad && ubicacion) {
      const factorPropiedad = propiedad.factor;
      const factorUbicacion = ubicacion.factor;
      const resultado = factorPropiedad * factorUbicacion * metrosCuadrados;
      setPrecioEstimado(resultado.toFixed(2));
      setMostrarGuardar(true);

      setCotizacionActual({
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: selectedPropiedad,
        ubicacion: selectedUbicacion,
        metrosCuadrados,
        poliza: resultado.toFixed(2),
      });

      alerta('', 'Cotización realizada con éxito.', 'success')
    } else {
      alerta('', 'Debes completar todos los datos en pantalla..', 'warning');
    }
  };

  const guardarCotizacion = () => {
    if (cotizacionActual) {
      const nuevasCotizaciones = [...cotizaciones, cotizacionActual];
      setCotizaciones(nuevasCotizaciones);
      localStorage.setItem('cotizaciones', JSON.stringify(nuevasCotizaciones));
      mensaje();

      setCotizacionActual(null);
    }
  };

  return (
    <div>
      <Header />
      <div className=" center div-cotizador">
        <Propiedad
          data={data}
          selectedPropiedad={selectedPropiedad}
          setSelectedPropiedad={setSelectedPropiedad}
        />
        <Ubicacion
          data={data}
          selectedUbicacion={selectedUbicacion}
          setSelectedUbicacion={setSelectedUbicacion}
        />
        <MetrosCuadrados
          metrosCuadrados={metrosCuadrados}
          setMetrosCuadrados={setMetrosCuadrados}
        />
        <Cotizar
          calcularCotizacion={calcularCotizacion}
          precioEstimado={precioEstimado}
          mostrarGuardar={mostrarGuardar}
          guardarCotizacion={guardarCotizacion}
        />
        <ToastContainer />
        </div>
    </div>
  );
}
