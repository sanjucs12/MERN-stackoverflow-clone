import * as api from "../api/api";
import { setCurrentUser } from "./currentUserAction";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    // console.log(data);
    dispatch({ type: "AUTH", data });
    alert("SIGNUP SUCCESSFULL");
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    alert("LOGIN SUCCESSFULL");
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
