import { getTeachersManagements } from "../BD/tables";

const SET_TEACHERS_MANAGEMENTS = "SET_TEACHERS_MANAGEMENTS";

let initialState = {
  teachers: [],
};

const managementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEACHERS_MANAGEMENTS:
      return {
        ...state,
        teachers: [...action.teachers],
      };
    default:
      return state;
  }
};

export const setTeachersManagements = (teachers) => ({
  type: SET_TEACHERS_MANAGEMENTS,
  teachers: teachers,
});
export const getTeacherManagement = () => {
  return (dispatch) => {
    getTeachersManagements().then((data) => {
      dispatch(setTeachersManagements(data));
    });
  };
};

export default managementReducer;
