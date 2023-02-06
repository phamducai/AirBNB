import { auth } from "services/auth";
import { LOGIN_ACTION } from "./types/AuthType";
// /api/auth/signin .loginacttion

export const LoginAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await auth.signin(data);
      if (result.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          payload: result.data.content,
        });
        console.log(result.data.content.token);
      }
      localStorage.setItem("token", result.data.content.token);
      console.log("dmm", result.data.content.token);
    } catch (error) {
      throw error;
    }
  };
};

// /api/auth/signup

export const RegisterAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await auth.signup(data);

      if (result.data.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          payload: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};
