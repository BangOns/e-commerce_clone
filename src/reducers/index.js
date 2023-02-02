import { combineReducers } from "redux";
import LoginReducer from "./loginUser";
import ProductReducer from "./Product";
import CollectionReducer from "./Collection";
export default combineReducers({
  LoginReducer,
  ProductReducer,
  CollectionReducer,
});
