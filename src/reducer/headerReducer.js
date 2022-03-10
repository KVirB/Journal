import { getDiscipline, getSubGroup } from "../BD/tables";
import { getGroup } from "../BD/tables";
import { getTypeClass } from "../BD/tables";

const SET_DISCIPLINE = "SET_DISCIPLINE";
const CLEAR_DISCIPLINE = "CLEAR_DISCIPLINE";
const SET_GROUP = "SET_GROUP";
const CLEAR_GROUP = "CLEAR_GROUP";
const SET_TYPECLASS = "SET_TYPECLASS";
const SET_SUBGROUP = "SET_SUBGROUP";
const CLEAR_TYPECLASS = "CLEAR_TYPECLASS";
const CLEAR_SUBGROUP = "CLEAR_SUBGROUP";
let initialState = {
  discipline: [],
  group: [],
  typeClass: [],
  subGroup: [],
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
    case SET_TYPECLASS:
      return {
        ...state,
        typeClass: [...action.typeClass],
      };
    case SET_SUBGROUP:
      return {
        ...state,
        subGroup: [...action.subGroup],
      };
    case CLEAR_GROUP:
      return {
        ...state,
        group: [],
      };
    case CLEAR_DISCIPLINE:
      return {
        ...state,
        discipline: [],
      };
    case CLEAR_TYPECLASS:
      return {
        ...state,
        typeClass: [],
      };
    case CLEAR_SUBGROUP:
      return {
        ...state,
        subGroup: [],
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
export const setTypeClass = (typeClass) => ({
  type: SET_TYPECLASS,
  typeClass,
});
export const setSubGroup = (subGroup) => ({
  type: SET_SUBGROUP,
  subGroup,
});
export const clearGroup = () => ({
  type: CLEAR_GROUP,
});
export const clearDiscipline = () => ({
  type: CLEAR_DISCIPLINE,
});
export const clearTypeClass = () => ({
  type: CLEAR_TYPECLASS,
});
export const clearSubGroup = () => ({
  type: CLEAR_SUBGROUP,
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

export const getTypeClassThunk = () => {
  return (dispatch) => {
    getTypeClass().then((data) => {
      dispatch(setTypeClass(data));
    });
  };
};
export const getSubGroupThunk = () => {
  return (dispatch) => {
    getSubGroup().then((data) => {
      dispatch(setSubGroup(data));
    });
  };
};

export default headerReducer;
