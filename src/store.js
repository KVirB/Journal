import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import headerReducer from "./reducer/headerReducer";
import journalsiteReducer from "./reducer/journalsiteReducer";

let reducers = combineReducers({
  journalsitePage: journalsiteReducer,
  disciplinePage: headerReducer,
  groupPage: headerReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
