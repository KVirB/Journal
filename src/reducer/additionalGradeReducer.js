import {
  getAdditionalGrade,
  getTypeGrade,
  postAdditionalGrade,
  patchAdditionalGrade,
} from "../BD/tables";

const SET_ADDITIONAL_GRADE = "SET_ADDITIONAL_GRADE";
const SET_TYPE_GRADE = "SET_TYPE_GRADE";
const SET_IS_LOAD_TRUE = "SET_IS_LOAD_TRUE";
const SET_IS_LOAD_FALSE = "SET_IS_LOAD_FALSE";

let initialState = {
  additionalGrades: [],
  typeGrades: [],
  isLoad: false,
};

const additionalGradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDITIONAL_GRADE:
      return {
        ...state,
        additionalGrades: [...action.additionalGrades],
      };
    case SET_TYPE_GRADE:
      return {
        ...state,
        typeGrades: [...action.typeGrades],
      };
    case SET_IS_LOAD_TRUE:
      return {
        ...state,
        isLoad: true,
      };
    case SET_IS_LOAD_FALSE:
      return {
        ...state,
        isLoad: false,
      };
    default:
      return state;
  }
};

export const setAdditionalGrade = (additionalGrades) => ({
  type: SET_ADDITIONAL_GRADE,
  additionalGrades: additionalGrades,
});
export const setIsLoadTrue = () => ({
  type: SET_IS_LOAD_TRUE,
});

export const setIsLoadFalse = () => ({
  type: SET_IS_LOAD_TRUE,
});

export const setTypeGrade = (typeGrades) => ({
  type: SET_TYPE_GRADE,
  typeGrades: typeGrades,
});

export const getAdditionalGradeThunk = (group, discipline_id) => {
  return (dispatch) => {
    getAdditionalGrade(group, discipline_id).then((data) => {
      dispatch(setAdditionalGrade(data));
    });
  };
};

export const getTypeGradeThunk = () => {
  return (dispatch) => {
    getTypeGrade().then((data) => {
      dispatch(setTypeGrade(data));
    });
  };
};

export const getAdditionalGradeAdd = (
  student,
  discipline,
  typeGrade,
  date,
  theme,
  grade
) => {
  return (dispatch) => {
    postAdditionalGrade(student, discipline, typeGrade, date, theme, grade);
    dispatch(
      getAdditionalGradeThunk(
        localStorage.getItem("groupName"),
        localStorage.getItem("disciplineId")
      )
    );
  };
};

export const getAdditionalGradeEdit = (id, field, value) => {
  return (dispatch) => {
    patchAdditionalGrade(id, field, value);
  };
};

export default additionalGradeReducer;