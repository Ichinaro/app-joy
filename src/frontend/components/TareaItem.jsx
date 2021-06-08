import React from "react";
import perfilBanner from "../images/perfilBanner.png"
const TareaItem = (props) => {
  const {data} = props
  return (
    <>
        <div className="img-tarea">
            <img src={perfilBanner} alt="" />
        </div>
        <div className="info-tarea">
            <div className="info-tarea-header">
                <h3>TAREA {data.titulo}</h3>
                <p>{data.fecha}</p>
            </div>
            <p>{data.subTitulo}</p>
        </div>
    </>
  );
};

export default TareaItem