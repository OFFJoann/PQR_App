import React, { useState, useEffect } from 'react';
import '../../styles/modal.css'; // Asegúrate de tener este archivo CSS
import Alert from '../../styles/images/alert.png';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Desactiva el scroll
    } else {
      document.body.style.overflow = 'auto'; // Restaura el scroll
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto'; // Asegúrate de restaurar al desmontar
    };
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay active">
          <div className="modal-content">
            <img src={Alert} alt="Alert" width="30px" />
            <p>La solicitud que va a realizar enviara un correo al area de servicio al cliente de la empresa.</p>
            <button onClick={handleCloseModal}>Aceptar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;