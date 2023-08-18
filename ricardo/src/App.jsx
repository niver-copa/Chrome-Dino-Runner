import React, { useState, useEffect } from 'react';
import RicardoZarateVarela from "./components/json/RicardoZarateVarela.json";
import foto from "./assets/foto.png";

const JsonDisplay = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(RicardoZarateVarela); 
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center m-5' style={{ minHeight: '100vh' }}>
      <div className="card">
        
        <div className='d-flex justify-content-center align-items-center m-4'>
        <img src={foto} className="card-img-top" alt="Mi Imagen"  style={{ maxWidth: '50%' }} />
        </div>
        <div className="card-body">
          {jsonData && (
            <>
              <div className="card-title">{jsonData.miNombre}</div>
              <div className="card-text">Edad: {jsonData.miEdad}</div>
              <div className="card-text">Dirección: {jsonData.miDireccion}</div>
              <div className="card-text">Teléfono: {jsonData.miTelefono}</div>
              <div className="card-text">Email: {jsonData.miEmail}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JsonDisplay;
