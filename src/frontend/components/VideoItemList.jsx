import React from "react";
import VideoItem from "./VideoItem"
import Filtro from "./Filtro"
import { connect } from "react-redux";
import NotResult from "../images/not-result.png"
import "./style/ArtItemList.css"

const VideoItemList = (props) => {
  const data = props.videos;
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
      <ul className="contenedor-articulos">
        {filteredData.map((articulo) => {
          return (
            <li className="articulo" key={articulo._id}>
              <div className="artItem">
                <VideoItem articulo={articulo} />
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps, null)(VideoItemList);