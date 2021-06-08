import React from "react";
import { Link } from "react-router-dom";
import "./style/ConfOpcion.css";

const ConfOpcion = () => {
  return (
    <>
      <div className="opciones">
        <Link to="/Videos" className="opcion">
          <div className="opcion-txt">
            <h3>VIDEOS</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fab fa-youtube" />
          </div>
        </Link>
        <Link to="/articulos" className="opcion">
          <div className="opcion-txt">
            <h3>LECTURA</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-book-open" />
          </div>
        </Link>
        <Link to="/tareas" className="opcion">
          <div className="opcion-txt">
            <h3>TAREAS</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-edit" />
          </div>
        </Link>
        <Link to="/" className="opcion">
          <div className="opcion-txt">
            <h3>MATERIAL</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-download" />
          </div>
        </Link>
        <Link to="/" className="opcion">
          <div className="opcion-txt">
            <h3>CONFIGURAR</h3>
            <p>Programación</p>
          </div>
          <div className="opcion-img">
            <i className="ico fas fa-user-cog"></i>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ConfOpcion;
