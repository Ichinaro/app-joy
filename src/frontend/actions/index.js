import axios from "axios";

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload, //El payload recive la Props [event.target.name]: event.target.value de los input
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload, //El payload recive la Props con un objeto vacio para reiniciar el estado
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload, //El payload recive la Props email: ,name: ,password: de form
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("/auth/sign-up", payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: "/auth/sign-in/",
      method: "post",
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        //elementos a guardar en la cookie de nuestro navegador
        document.cookie = `email=${data.user.email}`;
        document.cookie = `nombre=${data.user.nombre}`;
        document.cookie = `apellidos=${data.user.apellidos}`;
        document.cookie = `curso=${data.user.curso}`;
        document.cookie = `id=${data.user.id}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};