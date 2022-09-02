import { baseRout } from "../BD/tables";

const SET_TOKEN = "SET_TOKEN";

let initialState = {
  token: [],
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: [...action.token],
      };
    default:
      return state;
  }
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const getTokenThunk = (access_token) => {
  return (dispatch) => {
    baseRout(access_token).then((data) => {
      dispatch(setToken(data));
    });
  };
};

export default tokenReducer;
