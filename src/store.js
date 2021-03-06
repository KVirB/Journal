import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import headerReducer from "./reducer/headerReducer";
import journalsiteReducer from "./reducer/journalsiteReducer";
import teacherReducer from "./reducer/teacherReducer";
import btnReducer from "./reducer/btnReducer";
import typeReducer from "./reducer/typeReducer";
import statisticsReducer from "./reducer/statisticsReducer";

let reducers = combineReducers({
  journalsitePage: journalsiteReducer,
  disciplinePage: headerReducer,
  groupPage: headerReducer,
  courseSpecPage: headerReducer,
  typeClassPage: headerReducer,
  teacherPage: teacherReducer,
  btnPage: btnReducer,
  typePage: typeReducer,
  generalStatisticPage: statisticsReducer,
  form: formReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === "SET_JOURNALSITE") {
//     const { routing } = state;
//     state = { routing };
//   }
//   return reducers(state, action);
// };

let store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
