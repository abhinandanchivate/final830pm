import api from "../../utils/api";
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, USER_LOADED } from "../types";
import { setAlert } from "./alertAction";

// Logout
export const logout = () => ({ type: LOGOUT });

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
    }
  }
};

export const login = (payload) => async (dispatch) => {
  await api
    .post("/auth", payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      dispatch(loadUser());
    })
    .catch((err) => {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
      }
    });
};

export const register = (data) => async (dispatch) => {
  //1. rest call
  // depending on result we needvto update the store.
  await api
    .post("/users", data)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
      dispatch(loadUser());
    })
    .catch((err) => {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
      }
    });
};

// export : will give the access outside the file.
// const : const declarations
// register : name of the method/function.
// data : argument which will provide us the user details for registration
// dispatch : will help us to connect with thunk to sahre the data with reducer.
