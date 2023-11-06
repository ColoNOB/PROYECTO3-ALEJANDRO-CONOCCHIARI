import React from 'react';

export default function Ubicacion({ data, selectedUbicacion, setSelectedUbicacion }) {
  return (
    <>
      <label htmlFor="ubicacion">Selecciona su ubicación</label>
      <select id="ubicacion" value={selectedUbicacion} onChange={(e) => setSelectedUbicacion(e.target.value)}>
        <option value="" disabled>...</option>
        {data
          .filter((item) => item.categoria === 'ubicacion')
          .map((item) => (
            <option key={item.tipo} value={item.tipo}>
              {item.tipo}
            </option>
          ))}
      </select>
    </>
  );
}
