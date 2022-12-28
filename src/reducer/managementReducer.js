import {
  getTeachersManagements,
  getTeacherManagementById,
  getTeacherManagementByDepartment,
} from "../BD/tables";
import { getTeacherProfile } from "../BD/tables";

const SET_TEACHERS_MANAGEMENTS = "SET_TEACHERS_MANAGEMENTS";
const CLEAR_TEACHERS_MANAGEMENTS = "CLEAR_TEACHERS_MANAGEMENTS";
const SET_TEACHER_PROFILE = "SET_TEACHER_PROFILE";
const SET_TEACHERS_SEARCH = "SET_TEACHERS_SEARCH";
const SET_TEACHER_ICON = "SET_TEACHER_ICON";
const CLEAR_TEACHER_PROF = "CLEAR_TEACHER_PROF";

let initialState = {
  teachers: [],
  teacherProf: [],
  teachersSearch: [],
  teacherIcon: [],
};

const managementReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_TEACHER_PROF:
      return { ...state, teacherProf: [] };
    case SET_TEACHERS_SEARCH:
      return {
        ...state,
        teachersSearch: [...action.teachersSearch],
      };
    case SET_TEACHERS_MANAGEMENTS:
      return {
        ...state,
        teachers: [...action.teachers],
      };
    case CLEAR_TEACHERS_MANAGEMENTS:
      return {
        ...state,
        teachers: [],
      };

    case SET_TEACHER_PROFILE:
      return {
        ...state,
        teacherProf: [...action.teacherProf],
      };
    case SET_TEACHER_ICON:
      return {
        ...state,
        teacherIcon: [...action.teacherIcon],
      };
    default:
      return state;
  }
};

export const clearTeacherProf = () => ({
  type: CLEAR_TEACHER_PROF,
});

export const setTeachersManagements = (teachers) => ({
  type: SET_TEACHERS_MANAGEMENTS,
  teachers: teachers,
});
export const setTeachersSearch = (teachersSearch) => ({
  type: SET_TEACHERS_SEARCH,
  teachersSearch: teachersSearch,
});
export const clearTeachersManagement = () => ({
  type: CLEAR_TEACHERS_MANAGEMENTS,
});

export const setTeacherProfile = (teacherProf) => ({
  type: SET_TEACHER_PROFILE,
  teacherProf: teacherProf,
});

export const setIconProfile = (teacherIcon) => ({
  type: SET_TEACHER_ICON,
  teacherIcon: teacherIcon,
});

export const getTeacherProfileThunk = (idFromSource) => {
  return (dispatch) => {
    getTeacherProfile(idFromSource).then((data) => {
      dispatch(setTeacherProfile(data));
    });
  };
};
export const getTeacherIconThunk = (idFromSource) => {
  return (dispatch) => {
    getTeacherProfile(idFromSource).then((data) => {
      dispatch(setIconProfile(data));
    });
  };
};
export const getTeacherManagementByIdThunk = (id) => {
  return (dispatch) => {
    getTeacherManagementById(id).then((data) => {
      dispatch(setTeachersManagements(data));
    });
  };
};
export const getTeacherManagementByDepartmentThunk = (department_id) => {
  return (dispatch) => {
    getTeacherManagementByDepartment(department_id).then((data) => {
      dispatch(setTeachersManagements(data));
    });
  };
};
export const getTeachersSearchThunk = () => {
  return (dispatch) => {
    getTeachersManagements().then((data) => {
      dispatch(setTeachersSearch(data));
    });
  };
};
export const getTeacherManagement = () => {
  return (dispatch) => {
    getTeachersManagements().then((data) => {
      dispatch(setTeachersManagements(data));
    });
  };
};

export default managementReducer;
