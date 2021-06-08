import React from "react";
import { Link } from "react-router-dom";
import "./style/ArtItem.css"
const VideoItem = (props) => {
  return (
    <>
      <Link to={`/video/${props.articulo._id}`}>
        <img src={props.articulo.img} alt="" />
      </Link>
      <div className="text-articulo">
        <h2>{props.articulo.titulo}</h2>
        <h3>{props.articulo.subTitulo}</h3>
      </div>
    </>
  );
};

export default VideoItem