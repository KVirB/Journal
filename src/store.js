import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import headerReducer from "./reducer/headerReducer";
import journalsiteReducer from "./reducer/journalsiteReducer";
import teacherReducer from "./reducer/teacherReducer";
import btnReducer from "./reducer/btnReducer";
import typeReducer from "./reducer/typeReducer";

let reducers = combineReducers({
  journalsitePage: journalsiteReducer,
  disciplinePage: headerReducer,
  groupPage: headerReducer,
  typeClassPage: headerReducer,
  teacherPage: teacherReducer,
  btnPage: btnReducer,
  typePage: typeReducer,
  form: formReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === "SET_JOURNALSITE") {
//     const { routing } = state;
//     state = { routing };
//   }
//   return reducers(state, action);
// };

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
