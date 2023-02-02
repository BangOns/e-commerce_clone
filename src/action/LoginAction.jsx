import { ISLOGIN, ISLOGOUT, ISREGISTER } from "../reducers/loginUser";
import axios from "axios";
export const userLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: ISLOGIN,
      payload: {
        isLoading: true,
        isSuccess: false,
        isError: false,
        userName: false,
      },
    });
    axios
      .get("http://localhost:3004/profile")
      .then((response) => {
        let fill = (user) => user.name === data.name;
        let user = response.data.some(fill);
        let res = response.data.find((state) => {
          return state.name === data.name;
        });
        if (user) {
          dispatch({
            type: ISLOGIN,
            payload: {
              isLoading: false,
              isSuccess: true,
              isError: false,
              userName: res,
            },
          });
        } else {
          dispatch({
            type: ISLOGIN,
            payload: {
              isLoading: false,
              isSuccess: false,
              isError: "user tidak ditemukan",
              userName: false,
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ISLOGIN,
          payload: {
            isLoading: false,
            isSuccess: false,
            isError: error.message,
            userName: false,
          },
        });
      });
  };
};
export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: ISLOGOUT,
      payload: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        userName: false,
      },
    });
  };
};

export const AddUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: ISREGISTER,
      payload: {
        isLoading: true,
        isSuccess: false,
        isError: false,
        userName: false,
      },
    });
    axios
      .post("http://localhost:3004/profile", data)
      .then((response) => {
        console.log("register succses");
        dispatch({
          type: ISREGISTER,
          payload: {
            isLoading: false,
            isSuccess: true,
            isError: false,
            userName: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ISREGISTER,
          payload: {
            isLoading: false,
            isSuccess: false,
            isError: error.message,
            userName: false,
          },
        });
      });
  };
};
