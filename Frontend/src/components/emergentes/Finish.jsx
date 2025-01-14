import React, { useState, useEffect } from 'react';
import '../../styles/modal.css'; // Asegúrate de tener este archivo CSS
import Check from '../../styles/images/check.png';

const Finish = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto'; // Restaura al desmontar
    };
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose(); // Llama a la función pasada para cerrar el modal desde el padre
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay active">
          <div className="modal-content">
            <img src={Check} alt="Alert" width="40px" />
            <h1>¡PQRS enviada con éxito!</h1>
            <p>Muchas gracias por tu solicitud. La investigaremos a fondo y, en un plazo máximo de 15 días, te estaremos dando una respuesta.</p>
            <button onClick={handleCloseModal}>Aceptar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Finish;