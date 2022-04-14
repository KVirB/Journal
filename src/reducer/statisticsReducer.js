import { act } from "@testing-library/react";
import {
  getGeneralStatistics,
  getDisciplinesStatistic,
  getGroups,
  getStudents,
  getDisciplineByStudentStatistic,
  getExcel,
  getGeneralGroupStatistics,
} from "../BD/tables";
const SET_GENERALGROUPSTATISTICS = "SET_GENERALGROUPSTATISTICS";
const SET_HEIGHT = "SET_HEIGHT";
const SET_GENERALSTATISTICS = "SET_GENERALSTATISTICS";
const SET_STUDENT = "SET_STUDENT";
const SET_GROUPS = "SET_GROUPS";
const SET_DISCIPLINEBYSTUDENTSTATISTIC = "SET_DISCIPLINEBYSTUDENTSTATISTIC";
const SET_DISCIPLINESTATISTICS = "SET_DISCIPLINESTATISTICS";
const SET_LOADER_TRUE = "SET_LOADER_TRUE";
const SET_LOADER_FALSE = "SET_LOADER_FALSE";
const CLEAR_GROUPS = "CLEAR_GROUPS";
let initialState = {
  generalStatistics: [],
  groups: [],
  students: [],
  disciplinesStatistic: [],
  disciplineByStudentStatistic: [],
  generalGroupStatistic: [],
  isLoading: false,
  height: null,
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEIGHT: {
      return {
        ...state,
        height: ([...state.generalGroupStatistic].length / 5) * 600,
      };
    }
    case SET_GENERALGROUPSTATISTICS: {
      return {
        ...state,
        generalGroupStatistic: [...action.generalGroupStatistic],
      };
    }
    case SET_STUDENT: {
      return {
        ...state,
        students: [...action.students],
      };
    }
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
    case SET_DISCIPLINEBYSTUDENTSTATISTIC:
      // let NEWdisciplineByStudentStatistic = [
      //   {
      //     ...action.disciplineByStudentStatistic,
      //   },
      // ];
      // let stat = [];
      // let data = [];
      // NEWdisciplineByStudentStatistic.map((statistic, i) => {
      //   (async () => {
      //     data.push(statistic.studentPerformanceDTO.overallGPA);
      //     data.push(statistic.totalNumberPasses);
      //     data.push(statistic.totalNumberLates);

      //     const obj = {
      //       name:
      //         statistic.studentPerformanceDTO.studentDTO.surname +
      //         " " +
      //         statistic.studentPerformanceDTO.studentDTO.name,
      //       data: data,
      //     };
      //     stat.push(obj);
      //   })();
      // });

      return {
        ...state,
        disciplineByStudentStatistic: [
          { ...action.disciplineByStudentStatistic },
        ],
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

export const setStudents = (students) => ({
  type: SET_STUDENT,
  students,
});

export const setHeight = (height) => ({
  type: SET_HEIGHT,
  height,
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

export const setGeneralGroupStatistics = (generalGroupStatistic, height) => ({
  type: SET_GENERALGROUPSTATISTICS,
  generalGroupStatistic,
  height,
});

export const setDisciplineByStudentStatistic = (
  disciplineByStudentStatistic
) => ({
  type: SET_DISCIPLINEBYSTUDENTSTATISTIC,
  disciplineByStudentStatistic,
});

export const getStudentsThunk = (groupsId) => {
  return (dispatch) => {
    getStudents(groupsId).then((data) => {
      dispatch(setStudents(data));
    });
  };
};

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

export const getStatisticByDisciplineStudentThunk = (
  disciplineId,
  studentId
) => {
  return (dispatch) => {
    dispatch(setLoaderTrue());
    getDisciplineByStudentStatistic(disciplineId, studentId)
      .then((data) => {
        dispatch(setDisciplineByStudentStatistic(data));
        dispatch(setLoaderFalse());
      })
      .catch((e) => {
        dispatch(setLoaderFalse());
        console.log(e);
      });
  };
};

export const getGeneralStatisticsThunk = (groupsId, disciplineId) => {
  return (dispatch) => {
    dispatch(setLoaderTrue());
    getGeneralStatistics(groupsId, disciplineId)
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

export const getGeneralGroupStatisticsThunk = (groupsId) => {
  return (dispatch) => {
    dispatch(setLoaderTrue());
    getGeneralGroupStatistics(groupsId)
      .then((data) => {
        dispatch(setGeneralGroupStatistics(data));
        dispatch(setHeight());
        dispatch(setLoaderFalse());
      })
      .catch((e) => {
        dispatch(setLoaderFalse());
        console.log(e);
      });
  };
};

export const getExcelThunk = (groupsId) => {
  return (dispatch) => {
    getExcel(groupsId);
  };
};

export default statisticsReducer;
