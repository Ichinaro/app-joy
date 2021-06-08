import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Perfil from "../pages/Perfil";
import Videos from "../pages/Videos";
import Video from "../pages/Video";
import Articulos from "../pages/Articulos";
import Articulo from "../pages/Articulo";
import Tareas from "../pages/Tareas";
import Tarea from "../pages/Tarea";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={isLogged ? Perfil : Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/videos" component={isLogged ? Videos : Login} />
        <Route exact path="/video/:id" component={isLogged ? Video : Login} />
        <Route exact path="/articulos" component={isLogged ? Articulos : Login} />
        <Route exact path="/articulo/:id" component={isLogged ? Articulo : Login} />
        <Route exact path="/tareas" component={isLogged ? Tareas : Login} />
        <Route exact path="/tarea/:id" component={isLogged ? Tarea : Login} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
