import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import headerReducer from "./reducer/headerReducer";
import journalsiteReducer from "./reducer/journalsiteReducer";
import teacherReducer from "./reducer/teacherReducer";

let reducers = combineReducers({
  journalsitePage: journalsiteReducer,
  disciplinePage: headerReducer,
  groupPage: headerReducer,
  teacherPage: teacherReducer,
  form: formReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === "SET_JOURNALSITE") {
//     const { routing } = state;
//     state = { routing };
//   }
//   return reducers(state, action);
// };

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
