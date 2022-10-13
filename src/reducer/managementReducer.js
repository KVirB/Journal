import { letterSpacing } from "@mui/system";
import { getTeachersManagements } from "../BD/tables";
import { getTeacherProfile } from "../BD/tables";

const SET_TEACHERS_MANAGEMENTS = "SET_TEACHERS_MANAGEMENTS";
const CLEAR_TEACHERS_MANAGEMENTS = "CLEAR_TEACHERS_MANAGEMENTS";
const SET_TEACHER_PROFILE = "SET_TEACHER_PROFILE";

let initialState = {
  teachers: [],
  teacherProf: [],
};

const managementReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export const setTeachersManagements = (teachers) => ({
  type: SET_TEACHERS_MANAGEMENTS,
  teachers: teachers,
});
export const clearTeachersManagement = () => ({
  type: CLEAR_TEACHERS_MANAGEMENTS,
});

export const setTeacherProfile = (teacherProf) => ({
  type: SET_TEACHER_PROFILE,
  teacherProf: teacherProf,
});

export const getTeacherProfileThunk = (idFromSource) => {
  console.log(idFromSource + " reducer");
  return (dispatch) => {
    getTeacherProfile(idFromSource).then((data) => {
      dispatch(setTeacherProfile(data));
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
