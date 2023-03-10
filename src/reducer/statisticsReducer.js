import { height } from "@mui/system";
import { act } from "@testing-library/react";
import {
  getGeneralStatistics,
  getDisciplinesStatistic,
  getGroups,
  getStudents,
  getDisciplineByStudentStatistic,
  getExcel,
  getGeneralGroupStatistics,
  getFacultys,
  getExcelFaculty,
  getStudentsStatisticByPeriod,
} from "../BD/tables";
const CLEAR_GRAPHSTUDENTBYPERIOD = "CLEAR_GRAPHSTUDENTBYPERIOD";
const SET_DATABYSTUDENTSTATISTICPERIOD = "SET_DATABYSTUDENTSTATISTICPERIOD";
const SET_STUDENTSTATISTICBYPERIOD = "SET_STUDENTSTATISTICBYPERIOD";
const SET_SECONDDATE = "SET_SECONDDATE";
const SET_FIRSTDATE = "SET_FIRSTDATE";
const SET_FACULTY = "SET_FACULTY";
const SET_GENERALGROUPSTATISTICS = "SET_GENERALGROUPSTATISTICS";
const SET_HEIGHT = "SET_HEIGHT";
const SET_HEIGHTGROUPDISCIPLINE = "SET_HEIGHTGROUPDISCIPLINE";
const SET_GENERALSTATISTICS = "SET_GENERALSTATISTICS";
const SET_STUDENT = "SET_STUDENT";
const SET_GROUPS = "SET_GROUPS";
const SET_DISCIPLINEBYSTUDENTSTATISTIC = "SET_DISCIPLINEBYSTUDENTSTATISTIC";
const SET_DISCIPLINESTATISTICS = "SET_DISCIPLINESTATISTICS";
const SET_LOADER_TRUE = "SET_LOADER_TRUE";
const SET_LOADER_FALSE = "SET_LOADER_FALSE";
const CLEAR_GROUPS = "CLEAR_GROUPS";
const CLEAR_DISCIPLINEBYSTUDENTSTATISTIC = "CLEAR_DISCIPLINEBYSTUDENTSTATISTIC";
const SET_DATABYSTUDENTSTATISTIC = "SET_DATABYSTUDENTSTATISTIC";
const CLEAR_DISCIPLINESTATISTIC = "CLEAR_DISCIPLINESTATISTIC";
let initialState = {
  generalStatistics: [],
  groups: [],
  students: [],
  disciplinesStatistic: [],
  disciplineByStudentStatistic: [],
  dataByStudentStatistic: [],
  dataByStudentStatisticPeriod: [],
  generalGroupStatistic: [],
  studentStatisticByPeriod: [],
  isLoading: null,
  height: null,
  faculty: [],
  firstDate: null,
  secondDate: null,
  secondDateDisabled: true,
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DISCIPLINESTATISTIC: {
      return {
        ...state,
        disciplinesStatistic: [],
      };
    }
    case CLEAR_GRAPHSTUDENTBYPERIOD: {
      return {
        ...state,
        dataByStudentStatisticPeriod: [],
        studentStatisticByPeriod: [],
      };
    }
    case SET_STUDENTSTATISTICBYPERIOD: {
      return {
        ...state,
        studentStatisticByPeriod: [{ ...action.studentStatisticByPeriod }],
      };
    }
    case SET_DATABYSTUDENTSTATISTICPERIOD: {
      let newStudentStatisticByPeriod = [...state.studentStatisticByPeriod];
      let newData = [];
      newStudentStatisticByPeriod.forEach((statistic, i) => {
        newData.push(statistic.studentPerformanceDTO.overallGPA);
        newData.push(statistic.totalNumberLates);
        newData.push(statistic.totalNumberPasses);
      });
      return {
        ...state,
        dataByStudentStatisticPeriod: newData,
      };
    }
    case SET_DATABYSTUDENTSTATISTIC: {
      let newDisciplineByStudentStatistic = [
        ...state.disciplineByStudentStatistic,
      ];
      let newData = [];
      newDisciplineByStudentStatistic.forEach((statistic, i) => {
        newData.push(statistic.studentPerformanceDTO.overallGPA);
        newData.push(statistic.totalNumberLates);
        newData.push(statistic.totalNumberPasses);
      });
      return {
        ...state,
        dataByStudentStatistic: newData,
      };
    }
    case CLEAR_DISCIPLINEBYSTUDENTSTATISTIC: {
      return {
        ...state,
        dataByStudentStatistic: [],
        disciplineByStudentStatistic: [],
      };
    }
    case SET_SECONDDATE: {
      return {
        ...state,
        secondDate: action.secondDate,
      };
    }
    case SET_FIRSTDATE: {
      return {
        ...state,
        firstDate: action.firstDate,
        secondDateDisabled: false,
      };
    }
    case SET_FACULTY: {
      return {
        ...state,
        faculty: [...action.faculty],
      };
    }
    case SET_HEIGHTGROUPDISCIPLINE: {
      return {
        ...state,
        height: ([...state.generalStatistics].length / 5) * 600,
      };
    }
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

export const clearDisciplineStatistic = () => ({
  type: CLEAR_DISCIPLINESTATISTIC,
});

export const clearGraphStudentByPeriod = () => ({
  type: CLEAR_GRAPHSTUDENTBYPERIOD,
});

export const setStudentStatisticByPeriod = (studentStatisticByPeriod) => ({
  type: SET_STUDENTSTATISTICBYPERIOD,
  studentStatisticByPeriod,
});

export const setDataByStudentStatistic = () => ({
  type: SET_DATABYSTUDENTSTATISTIC,
});

export const setDataByStudentStatisticPeriod = () => ({
  type: SET_DATABYSTUDENTSTATISTICPERIOD,
});

export const clearDisciplineByStudentStatistic = () => ({
  type: CLEAR_DISCIPLINEBYSTUDENTSTATISTIC,
});

export const setSecondDate = (secondDate) => ({
  type: SET_SECONDDATE,
  secondDate,
});
export const setFirstDate = (firstDate) => ({
  type: SET_FIRSTDATE,
  firstDate,
});

export const setFaculty = (faculty) => ({
  type: SET_FACULTY,
  faculty,
});

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

export const setHeightGroupDiscipline = (height) => ({
  type: SET_HEIGHTGROUPDISCIPLINE,
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

export const getFacultyThunk = () => {
  return (dispatch) => {
    getFacultys().then((data) => {
      dispatch(setFaculty(data));
    });
  };
};

export const getStudentStatisticByPeriodThunk = (
  groupsId,
  firstDate,
  secondDate
) => {
  return (dispatch) => {
    dispatch(setLoaderTrue());
    getStudentsStatisticByPeriod(groupsId, firstDate, secondDate)
      .then((data) => {
        dispatch(setStudentStatisticByPeriod(data));
        dispatch(setDataByStudentStatisticPeriod());
        dispatch(setLoaderFalse());
      })
      .catch((e) => {
        dispatch(setLoaderFalse());
        console.log(e);
      });
  };
};

export const getStudentsThunk = (groupsId) => {
  return (dispatch) => {
    getStudents(groupsId).then((data) => {
      dispatch(clearDisciplineByStudentStatistic());
      dispatch(setStudents(data));
    });
  };
};

export const getGroupsThunk = (role) => {
  return (dispatch) => {
    getGroups(role).then((data) => {
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
        dispatch(setDataByStudentStatistic());
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
        dispatch(setHeightGroupDiscipline());
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

export const getExcelThunk = (groupsId, firstDate, secondDate, role) => {
  return (dispatch) => {
    getExcel(groupsId, firstDate, secondDate, role);
  };
};

export const getExcelFacultyThunk = (facultyId, firstDate, secondDate) => {
  return (dispatch) => {
    dispatch(setLoaderTrue());
    getExcelFaculty(facultyId, firstDate, secondDate).then((data) => {
      dispatch(setLoaderFalse());
    });
  };
};

export default statisticsReducer;
