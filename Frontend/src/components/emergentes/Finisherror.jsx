import React, { useState, useEffect } from 'react';
import '../../styles/modal.css';
import Check from '../../styles/images/check.png';

const Finisherror = ({ onClose }) => {
  const [isModalOpenerror, setIsModalerrorOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isModalOpenerror ? 'hidden' : 'auto';

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto'; // Restaura al desmontar
    };
  }, [isModalOpenerror]);

  const handleCloseModal = () => {
    setIsModalerrorOpen(false);
    onClose(); // Llama a la función pasada para cerrar el modal desde el padre
  };

  return (
    <>
      {isModalOpenerror && (
        <div className="modal-overlay active">
          <div className="modal-content">
            <img src={Check} alt="Alert" width="40px" />
            <h1>¡ERROR AL ENVIAR PQR!</h1>
            <p>Comunica este error al vendedor.</p>
            <button onClick={handleCloseModal}>Aceptar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Finisherror;