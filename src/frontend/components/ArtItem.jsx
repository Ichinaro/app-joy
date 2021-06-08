import React from "react";
import { Link } from "react-router-dom";
import "./style/ArtItem.css"
const ArtItem = (props) => {
  return (
    <>
      <Link to={`/articulo/${props.articulo._id}`}>
        <img src={props.articulo.url} alt="" />
      </Link>
      <div className="text-articulo">
        <h2>{props.articulo.titulo}</h2>
        <h3>{props.articulo.subTitulo}</h3>
      </div>
    </>
  );
};

export default ArtItem