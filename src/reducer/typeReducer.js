const SET_TYPE = "SET_TYPE";
const CLEAR_TYPE = "CLEAR_TYPE";

let initialState = {
  typeC: null,
};

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        typeC: action.typeC,
      };
    case CLEAR_TYPE:
      return {
        ...state,
        typeC: null,
      };
    default:
      return state;
  }
};

export const setType = (typeC) => ({
  type: SET_TYPE,
  typeC,
});
export const clearType = () => ({
  type: CLEAR_TYPE,
});

export default typeReducer;
