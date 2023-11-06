import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className="historial">
        <Link to="/historial">
          <span title="Ver Historial">📋</span>
        </Link>
      </div>
      <h1 className="center separador">Seguros del hogar 🏡</h1>
    </div>
  );
}
