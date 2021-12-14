import { getTeacher } from "../BD/tables";

const SET_TEACHER = "SET_TEACHER";
const CLEAR_TEACHER = "CLEAR_TEACHER";

let initialState = {
  teacher: [],
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEACHER:
      return {
        ...state,
        teacher: [...action.teacher],
      };
    case CLEAR_TEACHER:
      return initialState;
    default:
      return state;
  }
};

export const setTeacher = (teacher) => ({
  type: SET_TEACHER,
  teacher,
});

export const clearGroup = () => ({
  type: CLEAR_TEACHER,
});

export const getTeacherThunk = (surname, id) => {
  return (dispatch) => {
    getTeacher(surname, id).then((data) => {
      dispatch(setTeacher(data));
    });
  };
};

export default teacherReducer;
