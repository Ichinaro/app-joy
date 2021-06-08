import React from "react";
//import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import ArtItemList from "../components/ArtItemList"
import "./style/Videos.css"

const Articulos = () => {

  return (
    <div className="pag-videos">
      <Banner title={"ARTÍCULOS"}/>
      <ArtItemList/>
    </div>
    
  );
};

export default Articulos;