const SET_BTN_FALSE = "SET_BTN_FALSE";
const SET_BTN_TRUE = "SET_BTN_TRUE";

let initialState = {
  disabled: true,
};

const btnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BTN_TRUE:
      return {
        ...state,
        disabled: true,
      };
    case SET_BTN_FALSE:
      return {
        ...state,
        disabled: false,
      };
    default:
      return state;
  }
};

export const setBtnTrue = () => ({
  type: SET_BTN_TRUE,
});
export const setBtnFalse = () => ({
  type: SET_BTN_FALSE,
});

export default btnReducer;
