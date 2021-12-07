import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import dataLessonReducer from "./reducer/dataLessonReducer";
import fioReducer from "./reducer/fioReducer";
import marksReducer from "./reducer/marksReducer";
import headerReducer from "./reducer/headerReducer";
import journalsiteReducer from "./reducer/journalsiteReducer";

let reducers = combineReducers({
  marksPage: marksReducer,
  fioPage: fioReducer,
  journalsitePage: journalsiteReducer,
  dataLessonPage: dataLessonReducer,
  disciplinePage: headerReducer,
  groupPage: headerReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
