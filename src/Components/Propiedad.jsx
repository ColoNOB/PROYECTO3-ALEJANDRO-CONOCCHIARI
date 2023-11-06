import React from 'react';

export default function Propiedad({ data, selectedPropiedad, setSelectedPropiedad }) {

  return (
    <>
      <h2 className="center separador">Completa los datos solicitados</h2>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select id="propiedad" value={selectedPropiedad} onChange={(e) => setSelectedPropiedad(e.target.value)}>
        <option value="" disabled>...</option>
        {data
          .filter((item) => item.categoria === 'propiedad')
          .map((item) => (
            <option key={item.tipo} value={item.tipo}>
              {item.tipo}
            </option>
          ))}
      </select>
    </>
  );
}
