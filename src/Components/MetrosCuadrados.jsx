import React from 'react';

export default function MetrosCuadrados({ metrosCuadrados, setMetrosCuadrados }) {
  return (
    <>
      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        value={metrosCuadrados}
        min="20"
        max="500"
        required
        onChange={(e) => setMetrosCuadrados(parseInt(e.target.value, 10))}
      />
    </>
  );
}
