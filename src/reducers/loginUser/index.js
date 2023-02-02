export const ISLOGIN = "ISLOGIN";
export const ISLOGOUT = "ISLOGOUT";
export const ISREGISTER = "ISREGISTER";
const initialState = {
  isLoading: false,
  userName: false,
  isSuccess: false,
  isError: false,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISLOGIN:
      return {
        ...state,

        isLoading: action.payload.isLoading,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError,
        userName: action.payload.userName,
      };
    case ISLOGOUT:
      return {
        ...state,

        isLoading: action.payload.isLoading,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError,
        userName: action.payload.userName,
      };
    case ISREGISTER:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isSuccess: action.payload.isSuccess,
        isError: action.payload.isError,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};
export default LoginReducer;
