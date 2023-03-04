import { combineReducers } from "redux";
import publicReducer from "./features/public";

const rootReducer = combineReducers({
  public: publicReducer,
});

export default rootReducer;
