import React from "react";
import { Link } from "react-router-dom";
import "./style/ArtItem.css"
const ArtItem = (props) => {
  return (
    <>
      <Link to={`/articulo/${props.articulo._id}`}>
        <img src={props.articulo.img} alt="" />
      </Link>
      <div className="text-articulo">
        <h2>{props.articulo.titulo}</h2>
      </div>
    </>
  );
};

export default ArtItem
