import React, { useState } from "react";
import Finish from "./emergentes/Finish";
import { EnviarDatos } from "../services/api";
import Finisherror from "./emergentes/Finisherror";

const Form4 = () => {
  const [dataForm4, setdataForm4] = useState({
    nombre: '',
    centro_comercial: '',
    descipcion: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenerror, setModalOpenerror] = useState(false);

  const handleChangeform4 = (e) => {
    const { name, value } = e.target;
    setdataForm4((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitform4 = async (e) => {
    e.preventDefault();

    console.log(dataForm4)

    const { customHeader, ...data } = dataForm4;
    const headers = customHeader ? { 'Custom-Header': customHeader } : {};

    try {
      const response = await EnviarDatos(data, headers);
      console.log("Datos enviados", response)
      setModalOpen(true);
    } catch (error) {
      console.error('Error:', error.message);
      setModalOpenerror(true);
    }

  };

  return (
    <div>
      <form className="formulario">
        <div className='container_title_form'>
          <label className='Title_form' htmlFor="Form1">INFORMACIÓN DE PQR</label>
        </div>
        <div className="form-groupll">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={dataForm4.nombre}
            onChange={handleChangeform4}
            autoComplete="off"
            required
            maxLength={30}
            min={5}
          />
        </div>
        <div className="form-groupll">
          <label htmlFor="centro_comercial">Centro Comercial:</label>
          <input
            type="text"
            id="centro_comercial"
            name="centro_comercial"
            value={dataForm4.centro_comercial}
            onChange={handleChangeform4}
            autoComplete="off"
            required
            maxLength={30}
            minLength={5}
          />
        </div>


      </form>
      <form className="formulario" onSubmit={handleSubmitform4}>
        <div className="form-groupll_descripcion">
          <label htmlFor="descipcion">Descripción:</label>
          <textarea
            id="descipcion"
            name="descipcion"
            rows="5"
            value={dataForm4.descipcion}
            onChange={handleChangeform4}
            autoComplete="off"
            required
          ></textarea>
        </div>
        <div className='button-container'>
          <button type='submit' className='sig_btn'>Enviar correo</button>

        </div>
      </form>
      {modalOpen && <Finish onClose={() => setModalOpen(false)} />}
      {modalOpenerror && <Finisherror onClose={() => setModalOpenerror(false)} />}

    </div>
  )
}

export default Form4