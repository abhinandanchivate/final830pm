import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, USER_LOADED } from "../types";

const initialState = {
  loading: true,
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return { ...state, user: payload };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
