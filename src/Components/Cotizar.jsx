import React from 'react';

export default function Cotizar({ calcularCotizacion, precioEstimado, mostrarGuardar, guardarCotizacion }) {

  return (
    <>
      <div className="center separador">
        <button className="button button-outline" onClick={calcularCotizacion}>
          Cotizar
        </button>
      </div>
      <div className="center separador">
        <p className="importe">
          Precio estimado: $ <span id="valorPoliza">{precioEstimado}</span>
          {mostrarGuardar ? (
            <span className="guardar" title="Guardar en historial" onClick={guardarCotizacion}>💾</span>
          ) : null}
        </p>
      </div>
    </>
  );
}
