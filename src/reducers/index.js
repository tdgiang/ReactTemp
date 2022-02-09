import userReducer from "./userReducer";
import ModalLoadingReducer from "./ModalLoading";
import { combineReducers } from "redux";

// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  ModalLoadingReducer,
});

export default rootReducer;
