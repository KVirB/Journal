import { getJournalsite, patchJournalsite } from "../BD/tables";

const SET_JOURNALSITE = "SET_JOURNALSITE";
const CLEAR_JOURNALSITE = "CLEAR_JOURNALSITE";
const SET_JOURNALSITE_MARK = "SET_JOURNALSITE_MARK";
const TOGGLE_JOURNALSITE_PRESENCE = "TOGGLE_JOURNALSITE_PRESENCE";
const SET_JOURNAL_HEADER = "SET_JOURNAL_HEADER";
const CLEAR_JOURNALHEADER = "CLEAR_JOURNALHEADER";
const SET_JOURNALHEADERPATCH = "SET_JOURNALHEADERPATCH";
const SET_CLOSED_TRUE = "SET_CLOSED_TRUE";
const SET_CLOSED_FALSE = "SET_CLOSED_FALSE";
const SET_JOURNAL_CONTENT = "SET_JOURNAL_CONTENT";
let initialState = {
  id: null,
  journalsite: [],
  journalHeader: [],
  journalContent: [],
  update: true,
  closed: false,
};

const journalsiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOURNAL_CONTENT:
      let newJSite = [...state.journalsite];
      let jContent = [...state.journalContent];
      newJSite[0].journalHeaders.map((header) => {
        header.journalContents
          .sort((a, b) => a.id - b.id)
          .map((content) => {
            console.log("content", content);
            jContent.push(content);
          });
      });
      return {
        ...state,
        journalContent: jContent,
      };
    case SET_JOURNALSITE:
      return {
        ...state,
        update: true,
        journalsite: [...action.journalsite],
      };
    case SET_CLOSED_TRUE:
      return {
        ...state,
        closed: true,
      };
    case SET_CLOSED_FALSE:
      return {
        ...state,
        closed: false,
      };

    case SET_JOURNAL_HEADER:
      let newJournalsite = [...state.journalsite];
      let jHeader = [...state.journalHeader];
      newJournalsite[0].journalHeaders.map((header) => {
        const obj = { id: header.id, content: header.journalContents };
        jHeader.push(obj);
      });
      return {
        ...state,
        journalHeader: jHeader,
      };
    case SET_JOURNALSITE_MARK:
      let newJournalsiteMark = [...state.journalsite];
      newJournalsiteMark[0].journalHeaders.forEach((lesson) => {
        if (lesson.id === action.lesson_id) {
          lesson.journalContents.forEach((line) => {
            if (line.id === action.line_id) {
              line.grade = action.grade;
            }
          });
        }
      });

      return {
        ...state,
        journalsite: newJournalsiteMark,
      };
    case TOGGLE_JOURNALSITE_PRESENCE:
      let newJournalsitePresence = [...state.journalsite];
      console.log(state);
      newJournalsitePresence[0].journalHeaders.forEach((lesson) => {
        if (lesson.id === action.lesson_id) {
          lesson.journalContents.forEach((line) => {
            if (line.id === action.line_id) {
              line.presence = !line.presence;
              if (!line.presence) {
                line.grade = null;
              }
            }
          });
        }
      });

      return {
        ...state,
        journalsite: newJournalsitePresence,
      };

    case CLEAR_JOURNALSITE:
      return initialState;
    case CLEAR_JOURNALHEADER:
      return {
        ...state,
        journalHeader: [],
      };
    default:
      return state;
  }
};

export const toggleJournalSitePresence = (lesson_id, line_id) => ({
  type: TOGGLE_JOURNALSITE_PRESENCE,
  lesson_id,
  line_id,
});
export const setClosedFalse = () => ({
  type: SET_CLOSED_FALSE,
});
export const setClosedTrue = () => ({
  type: SET_CLOSED_TRUE,
});
export const setJournalSiteMark = (lesson_id, line_id, grade) => ({
  type: SET_JOURNALSITE_MARK,
  lesson_id,
  line_id,
  grade,
});

export function arrrarrr(obj) {}

export const setJournalHeader = (journalHeader) => ({
  type: SET_JOURNAL_HEADER,
  journalHeader,
});

export const setJournalContent = (journalContent) => ({
  type: SET_JOURNAL_CONTENT,
  journalContent,
});

export const setJournalsite = (journalsite, update) => ({
  type: SET_JOURNALSITE,
  journalsite,
  update: update,
});

export const clearJournalsite = () => ({
  type: CLEAR_JOURNALSITE,
});
export const clearJournalHeader = () => ({
  type: CLEAR_JOURNALHEADER,
});

export const getJournalsiteThunk = (groupId, disciplineId) => {
  return (dispatch) => {
    getJournalsite(groupId, disciplineId).then((data) => {
      console.log(data);
      dispatch(setJournalsite(data));
    });
  };
};

export const getJournalHeaderThunk = (journalHeader) => {
  return (dispatch) => {
    patchJournalsite(journalHeader);
    // .then((data) => {
    //   console.log(data);
    //   dispatch(setJournalHeader(data));
    // })
    // .catch((error) => alert(error));
  };
};

export default journalsiteReducer;
