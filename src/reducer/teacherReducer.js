import {
  getTeacher,
  postProfileImage,
  patchTeacherContacts,
} from "../BD/tables";

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

export const setProfileImageThunk = (image_name, image, idFromSource) => {
  return (dispatch) => {
    postProfileImage(image_name, image, idFromSource);
  };
};
export const patchTeacherContactsThunk = (
  mobile_phone_number,
  iternal_number,
  email,
  idFromSource
) => {
  return (dispatch) => {
    patchTeacherContacts(
      mobile_phone_number,
      iternal_number,
      email,
      idFromSource
    );
  };
};
export default teacherReducer;
