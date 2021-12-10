import { getJournalsite } from "../BD/tables";

const SET_JOURNALSITE = "SET_JOURNALSITE";
const CLEAR_JOURNALSITE = "CLEAR_JOURNALSITE";
const SET_JOURNALSITE_MARK = "SET_JOURNALSITE_MARK";
const TOGGLE_JOURNALSITE_PRESENCE = "TOGGLE_JOURNALSITE_PRESENCE";

let initialState = {
  id: null,
  journalsite: [],
  update: true,
};

const journalsiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOURNALSITE:
      return {
        ...state,
        update: true,
        journalsite: [...action.journalsite],
      };
    // ------добавлено-----------

    case SET_JOURNALSITE_MARK:
      var newJournalsiteMark = [...state.journalsite];
      newJournalsiteMark[0].journalHeaders.forEach((lesson) => {
        if (lesson.id === action.lesson_id) {
          lesson.journalContents.forEach((line) => {
            if (line.id === action.line_id) line.grade = action.grade;
          });
        }
      });
      return {
        ...state,
        journalsite: newJournalsiteMark,
      };

    case TOGGLE_JOURNALSITE_PRESENCE:
      var newJournalsitePresence = [...state.journalsite];
      console.log(state);
      newJournalsitePresence[0].journalHeaders.forEach((lesson) => {
        if (lesson.id === action.lesson_id) {
          lesson.journalContents.forEach((line) => {
            if (line.id === action.line_id) line.presence = !line.presence;
          });
        }
      });
      return {
        ...state,
        journalsite: newJournalsitePresence,
      };

    // ------добавлено-----------
    case CLEAR_JOURNALSITE:
      return initialState;
    default:
      return state;
  }
};

export const toggleJournalSitePresence = (lesson_id, line_id) => ({
  type: TOGGLE_JOURNALSITE_PRESENCE,
  lesson_id,
  line_id,
});

export const setJournalSiteMark = (lesson_id, line_id, grade) => ({
  type: TOGGLE_JOURNALSITE_PRESENCE,
  lesson_id,
  line_id,
  grade,
});

export const setJournalsite = (journalsite, update) => ({
  type: SET_JOURNALSITE,
  journalsite,
  update: update,
});

export const clearJournalsite = () => ({
  type: CLEAR_JOURNALSITE,
});

export const getJournalsiteThunk = (groupId, disciplineId) => {
  return (dispatch) => {
    getJournalsite(groupId, disciplineId).then((data) => {
      console.log(data);
      dispatch(setJournalsite(data));
    });
  };
};

export default journalsiteReducer;
