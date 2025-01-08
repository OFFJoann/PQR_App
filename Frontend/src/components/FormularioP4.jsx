import React, { useState, useEffect } from "react";
import Finish from "./emergentes/Finish";
import { EnviarDatos } from "../services/api";
import Finisherror from "./emergentes/Finisherror";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form4 = () => {
  const [dataForm4, setdataForm4] = useState({
    nombre: '',
    cedula: '',
    correo: '',
    celular: '',
    centro_comercial: '',
    descipcion: '',
    tipo_queja: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenerror, setModalOpenerror] = useState(false);

  const asignarCentroComercial = (ruta) => {
    switch (ruta) {
      case "/pqr/050":
        return "Outlet Las Americas";
      case "/pqr/101":
        return "Speedo Unicentro Medellin";
      case "/pqr/102":
        return "Speedo Andino";
      case "/pqr/103":
        return "Speedo Unicentro Bogota";
      case "/pqr/104":
        return "Speedo Cabecera";
      case "/pqr/105":
        return "Speedo San Diego";
      case "/pqr/106":
        return "Speedo Tesoro";
      case "/pqr/108":
        return "Speedo Rodadero";
      case "/pqr/109":
        return "Speedo Cafam";
      case "/pqr/110":
        return "Speedo Buenavista";
      case "/pqr/111":
        return "Speedo Alamedas";
      case "/pqr/112":
        return "Speedo Mayorca";
      case "/pqr/115":
        return "Speedo Victoria Plaza";
      case "/pqr/116":
        return "Speedo Multicentro";
      case "/pqr/117":
        return "Speedo Salitre Plaza";
      case "/pqr/118":
        return "Speedo Gran Estación";
      case "/pqr/119":
        return "Speedo Chipichape";
      case "/pqr/120":
        return "Speedo Caribe Plaza";
      case "/pqr/121":
        return "Speedo Puerta del Norte";
      case "/pqr/122":
        return "Speedo Santafe";
      case "/pqr/123":
        return "Speedo Unicentro Cali";
      case "/pqr/124":
        return "Speedo Hayuelos";
      case "/pqr/126":
        return "Speedo Viva Envigado";
      case "/pqr/127":
        return "Speedo Arrecife";
      case "/pqr/128":
        return "Speedo Calima";
      case "/pqr/129":
        return "Speedo San Pedro Neiva";
      case "/pqr/130":
        return "Speedo Viva Villavicencio";
      case "/pqr/132":
        return "Speedo La 122";
      case "/pqr/133":
        return "Speedo Titan Plaza";
      case "/pqr/135":
        return "Speedo Viva Laureles";
      case "/pqr/136":
        return "Speedo Cable Plaza";
      case "/pqr/138":
        return "Speedo Caracoli";
      case "/pqr/139":
        return "Speedo Parque Arboleda";
      case "/pqr/140":
        return "Speedo Mall Plaza";
      case "/pqr/142":
        return "Speedo Plaza Central";
      case "/pqr/144":
        return "Speedo La Colina";
      case "/pqr/146":
        return "Speedo Multiplaza";
      case "/pqr/148":
        return "Speedo San Martin";
      case "/pqr/150":
        return "Speedo Llano Grande";
      case "/pqr/151":
        return "Speedo Fabricato";
      case "/pqr/152":
        return "Speedo Portal del Quindio";
      case "/pqr/301":
        return "O'neill Andino";
      case "/pqr/303":
        return "O'neill Tesoro";
      case "/pqr/305":
        return "O'neill Buenavista";
      case "/pqr":
        return "";
      default:
        return "Centro Comercial Desconocido";
    }
  };

  useEffect(() => {
    const rutaActual = window.location.pathname;
    setdataForm4((prevData) => ({
      ...prevData,
      centro_comercial: asignarCentroComercial(rutaActual),
    }));
  }, []);

  const handleChangeform4 = (e) => {
    const { name, value } = e.target || e;  
    setdataForm4((prevData) => ({
      ...prevData,
      [name]: value,
      celular: name === 'celular' ? value : prevData.celular,  
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setdataForm4({
      ...dataForm4,
      [name]: value,
    });
  };

  const handleSubmitform4 = async (e) => {
    e.preventDefault();

    const { customHeader, ...data } = dataForm4;
    const headers = customHeader ? { 'Custom-Header': customHeader } : {};

    try {
      const response = await EnviarDatos(data, headers);
      setdataForm4({
        nombre: '',
        cedula: '',
        correo: '',
        celular: '',
        centro_comercial: '',
        descipcion: '',
        tipo_queja: '',
      });
      setModalOpen(true);
      console.log(dataForm4)
      console.log(response)
    } catch (error) {
      console.error('Error:', error.message);
      setModalOpenerror(true);
    }

  };

  return (
    <div>
      <form className="formulario" >
        <div className='container_title_form'>
          <label className='Title_form' htmlFor="Form1">Información de PQRS</label>
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
          <label htmlFor="cedula">Número de documento:</label>
          <input
            placeholder="CC/CEX/TI"
            type="tel"
            id="cedula"
            name="cedula"
            value={dataForm4.cedula}
            onChange={handleChangeform4}
            required
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, '');
            }}
            maxLength="15"
            pattern="\d{15}"
            autoComplete="off"
          />
        </div>
        <div className="form-groupll">
          <label htmlFor="celular">Celular:</label>
          <PhoneInput
            country={'co'}
            id="celular"
            name="celular"
            enableSearch={true}
            value={dataForm4.celular}
            onChange={(value) => handleChangeform4({ target: { name: 'celular', value } })}
            required
            autoComplete="off"
          />

        </div>
        <div className="form-groupll">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="mail"
            id="correo"
            name="correo"
            value={dataForm4.correo}
            onChange={handleChangeform4}
            autoComplete="off"
            required
            maxLength={50}
            min={5}
          />
        </div>
        <div className="form-groupll">
          <label htmlFor="centro_comercial">Punto de venta:</label>
          <input
            type="text"
            id="centro_comercial"
            name="centro_comercial"
            value={dataForm4.centro_comercial}
            onChange={handleChangeform4}
            autoComplete="off"
            required
            maxLength={40}
            minLength={5}
          />
        </div>
        <div className="form-groupll">
          <label htmlFor="tipo_queja">Tipo de solicitud:</label>
          <select
            id="tipo_queja"
            name="tipo_queja"
            value={dataForm4.tipo_queja}
            onChange={handleSelectChange}
            required
            autoComplete="off"
          >
            <option value="" disabled hidden>Seleccione</option>
            <option value="Petición">Petición</option>
            <option value="Queja">Queja</option>
            <option value="Reclamación">Reclamación</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Denuncia">Denuncia</option>
            <option value="Felicitaciones">Felicitación</option>

          </select>
        </div>
      </form>
      <form className="formulario" onSubmit={handleSubmitform4}>
        <div className="form-groupll_descripcion">
          <label htmlFor="descipcion">Descripción de la solicitud:</label>
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
          <label>
            <input
              type="checkbox"
              name="tratamientoDatos"
              required
            />
            Acepto el <a href="https://www.speedocolombia.com/tratamiento-de-datos-personales" target="_blank" rel="noopener noreferrer">tratamiento de datos personales</a> y la <a href="https://www.speedocolombia.com/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">política de términos y condiciones</a>.
          </label>
          <button type='submit' className='sig_btn'>Enviar</button>

        </div>
      </form>
      {modalOpen && <Finish onClose={() => setModalOpen(false)} />}
      {modalOpenerror && <Finisherror onClose={() => setModalOpenerror(false)} />}

    </div>
  )
}

export default Form4;
