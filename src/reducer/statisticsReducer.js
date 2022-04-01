import {
  getGeneralStatistics,
  getDisciplinesStatistic,
  getGroups,
} from "../BD/tables";

const SET_GENERALSTATISTICS = "SET_GENERALSTATISTICS";
const SET_GROUPS = "SET_GROUPS";
const SET_DISCIPLINESTATISTICS = "SET_DISCIPLINESTATISTICS";
const SET_LOADER_TRUE = "SET_LOADER_TRUE";
const SET_LOADER_FALSE = "SET_LOADER_FALSE";
const CLEAR_GROUPS = "CLEAR_GROUPS";
let initialState = {
  generalStatistics: [],
  groups: [],
  disciplinesStatistic: [],
  isLoading: false,
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LOADER_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_GENERALSTATISTICS:
      return {
        ...state,
        generalStatistics: [...action.generalStatistics],
      };
    case SET_DISCIPLINESTATISTICS:
      return {
        ...state,
        disciplinesStatistic: [...action.disciplinesStatistic],
      };
    case SET_GROUPS:
      return {
        ...state,
        groups: [...action.groups],
      };
    default:
      return state;
  }
};

export const setGroups = (groups) => ({
  type: SET_GROUPS,
  groups,
});

export const setDisciplinesStatistics = (disciplinesStatistic) => ({
  type: SET_DISCIPLINESTATISTICS,
  disciplinesStatistic,
});

export const setLoaderFalse = () => ({
  type: SET_LOADER_FALSE,
});

export const setLoaderTrue = () => ({
  type: SET_LOADER_TRUE,
});

export const setGeneralStatistics = (generalStatistics) => ({
  type: SET_GENERALSTATISTICS,
  generalStatistics,
});

export const getGroupsThunk = () => {
  return (dispatch) => {
    getGroups().then((data) => {
      dispatch(setGroups(data));
    });
  };
};

export const getDisciplinesStatisticThunk = (groupsId) => {
  return (dispatch) => {
    getDisciplinesStatistic(groupsId).then((data) => {
      dispatch(setDisciplinesStatistics(data));
    });
  };
};

export const getGeneralStatisticsThunk = () => {
  return (dispatch) => {
    dispatch(setLoaderTrue());
    getGeneralStatistics()
      .then((data) => {
        dispatch(setGeneralStatistics(data));
        dispatch(setLoaderFalse());
      })
      .catch((e) => {
        dispatch(setLoaderFalse());
        console.log(e);
      });
  };
};

export default statisticsReducer;
