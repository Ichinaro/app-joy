import React from "react";
//import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import VideoItemList from "../components/VideoItemList"
import "./style/Videos.css"

const Videos = () => {

  return (
    <div className="pag-videos">
        <Banner title={"VIDEOS"}/>
        <VideoItemList/>
    </div>
    
  );
};

export default Videos;