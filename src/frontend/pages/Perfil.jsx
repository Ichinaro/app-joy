import React from "react";
import { connect } from "react-redux";
import PerfilBadge from "../components/PerfilBadge";
import AlumnOpcion from "../components/AlumnOpcion";
import "./style/Perfil.css"

const Perfil = (props) => {
    const {user} = props
    return(
      <React.Fragment>
        <div className="container-perfil">
            <div className="pi">
              <PerfilBadge user={user}/>
            </div>
            <div className="bod">
              <AlumnOpcion/>
            </div>
        </div>
      </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  
  export default connect(mapStateToProps, null)(Perfil);