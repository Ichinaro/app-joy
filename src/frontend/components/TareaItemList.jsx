import React from "react";
import { Link } from "react-router-dom";
import TareaItem from "./TareaItem"
import Filtro from "./Filtro"
import { connect } from "react-redux";
import NotResult from "../images/not-result.png"

const TareaItemList = (props) => {
  const data = props.tareas;
  const { query, setQuery, filteredData } = Filtro(data);
  if (filteredData.length === 0) {
    return (
      <React.Fragment>
        <div className="buscar">
          <label>Buscar</label>
          <input
            type="text"
            className="buscar-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div className="buscar-notfound">
          <img src={NotResult} alt="" />
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="buscar">
        <label>Buscar</label>
        <input
          type="text"
          className="buscar-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="container-tareas-items">
        {filteredData.map((articulo) => {
          return (
            <li className="container-tareas-item" key={articulo._id}>
              <Link to={`/tarea/${articulo._id}`}>
                <TareaItem data={articulo}/>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas
  };
};

export default connect(mapStateToProps, null)(TareaItemList);