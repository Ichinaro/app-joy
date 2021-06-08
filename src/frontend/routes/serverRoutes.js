//el enrutador del lado del servidor solicita un Arreglo de rutas

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

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: "/",
      component: isLogged ? Perfil : Login,
    },

    {
      exact: true,
      path: "/register",
      component: Register,
    },

    {
      exact: true,
      path: "/login",
      component: Login,
    },

    {
      exact: true,
      path: "/videos",
      component: isLogged ? Videos : Login,
    },

    {
      exact: true,
      path: "/video/:id",
      component: isLogged ? Video : Login,
    },

    {
      exact: true,
      path: "/articulos",
      component: isLogged ? Articulos : Login,
    },

    {
      exact: true,
      path: "/articulo/:id",
      component: isLogged ? Articulo : Login,
    },

    {
      exact: true,
      path: "/tareas",
      component: isLogged ? Tareas : Login,
    },

    {
      exact: true,
      path: "/tarea/:id",
      component: isLogged ? Tarea : Login,
    },

    {
      name: "NotFound",
      component: NotFound,
    },
  ];
};

export default serverRoutes;
