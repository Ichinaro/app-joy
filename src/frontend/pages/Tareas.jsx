import React from "react";
import Banner from "../components/Banner"
import TareaItemList from "../components/TareaItemList";
import "./style/Tareas.css"

const Tareas = () => {

  return (
    <div className="pag-tareas">
      <Banner title={"TAREAS"}/>
      <TareaItemList/>
    </div>
    
  );
};

export default Tareas;