import { getGeneralStatistics } from "../BD/tables";

const SET_GENERALSTATISTICS = "SET_GENERALSTATISTICS";

let initialState = {
  generalStatistics: [],
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENERALSTATISTICS:
      return {
        ...state,
        generalStatistics: [...action.generalStatistics],
      };
    default:
      return state;
  }
};

export const setGeneralStatistics = (generalStatistics) => ({
  type: SET_GENERALSTATISTICS,
  generalStatistics,
});

export const getGeneralStatisticsThunk = () => {
  return (dispatch) => {
    getGeneralStatistics().then((data) => {
      dispatch(setGeneralStatistics(data));
    });
  };
};

export default statisticsReducer;
