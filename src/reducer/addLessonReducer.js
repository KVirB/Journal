import { setLessons } from "../BD/table.js";

const SET_LESSON = "SET_LESSON";

let initialState = {
  id: [],
  lessons: [],
  updateAdd: false,
};

const addLessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LESSON:
      return {
        ...state,
        ...action.add,
        updateAdd: true,
      };
    default:
      return state;
  }
};

export const setLessonData = (lessons, id, updateAdd) => ({
  type: SET_LESSON,
  add: { lessons, id },
  updateAdd: updateAdd,
});

export const lessonsThunk = (lessons, id) => {
  return (dispatch) => {
    setLessons(lessons, id).then((data) => {
      dispatch(setLessonData(lessons, id));
    });
  };
};

export default addLessonsReducer;
