import { getDiscipline } from "../BD/tables";
import { getGroup } from "../BD/tables";

const SET_DISCIPLINE = "SET_DISCIPLINE";
const SET_GROUP = "SET_GROUP";
const CLEAR_GROUP = "CLEAR_GROUP";

let initialState = {
  discipline: [],
  group: [],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISCIPLINE:
      return {
        ...state,
        discipline: [...action.discipline],
      };
    case SET_GROUP:
      return {
        ...state,
        group: [...action.group],
      };
    case CLEAR_GROUP:
      return {
        ...state,
        group: [],
      };
    default:
      return state;
  }
};

export const setDiscipline = (discipline) => ({
  type: SET_DISCIPLINE,
  discipline,
});

export const setGroup = (group) => ({
  type: SET_GROUP,
  group,
});

export const clearGroup = () => ({
  type: CLEAR_GROUP,
});

export const getGroupThunk = (disciplineId) => {
  return (dispatch) => {
    getGroup(disciplineId).then((data) => {
      dispatch(setGroup(data));
    });
  };
};

export const getDisciplineThunk = () => {
  return (dispatch) => {
    getDiscipline().then((data) => {
      dispatch(setDiscipline(data));
    });
  };
};

export default headerReducer;
