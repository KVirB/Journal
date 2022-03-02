import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { getJournalsite, patchJournalsite } from "../BD/tables";

const SET_JOURNALSITE = "SET_JOURNALSITE";
const CLEAR_JOURNALSITE = "CLEAR_JOURNALSITE";
const SET_JOURNALSITE_MARK = "SET_JOURNALSITE_MARK";
const TOGGLE_JOURNALSITE_PRESENCE = "TOGGLE_JOURNALSITE_PRESENCE";
const SET_JOURNAL_HEADER = "SET_JOURNAL_HEADER";
const CLEAR_JOURNALHEADER = "CLEAR_JOURNALHEADER";
const SET_CLOSED_TRUE = "SET_CLOSED_TRUE";
const SET_CLOSED_FALSE = "SET_CLOSED_FALSE";
const SET_JOURNAL_CONTENT = "SET_JOURNAL_CONTENT";
const SET_JH = "SET_JH";
const CLEAR_JH = "CLEAR_JH";
// const SET_TP = "SET_TP";
const CLEAR_TP = "CLEAR_TP";
const SET_SB = "SET_SB";
const CLEAR_SB = "CLEAR_SB";
const SET_PRESENT = "SET_PRESENT";
const CLEAR_PRESENT = "CLEAR_PRESENT";
let initialState = {
  id: null,
  journalsite: [],
  journalHeader: [],
  journalContent: [],
  update: false,
  closed: false,
  jh: [],
  // typeClass: [
  //   {
  //     id: 1,
  //     typeClass: "Лекция",
  //   },
  //   {
  //     id: 2,
  //     typeClass: "Лабораторная работа",
  //   },
  //   {
  //     id: 3,
  //     typeClass: "Практическая работа",
  //   },
  // ],
  // tp: [],
  subGroup: [
    {
      id: 1,
      subGroup: "Все",
    },
    {
      id: 2,
      subGroup: "1",
    },
    {
      id: 3,
      subGroup: "2",
    },
    {
      id: 4,
      subGroup: "3",
    },
    {
      id: 5,
      subGroup: "4",
    },
  ],
  sb: [],
  present: [],
};

const journalsiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESENT:
      let newJournalsitePresent = [...state.journalsite];
      let presenT = [...state.present];
      let counter = 0;
      newJournalsitePresent[0].journalHeaders.map((header, i) => {
        header.journalContents.map((content, i) => {
          if (content.presence === true) {
            counter = counter + 1;
          }
        });
        (async () => {
          presenT.push(counter);
        })();
        counter = 0;
        console.log(presenT + "karaul");
      });
      return {
        ...state,
        present: presenT,
      };
    case CLEAR_PRESENT:
      return {
        ...state,
        present: [],
      };

    case SET_JH:
      let newJournalsite = [...state.journalsite];
      let jH = [...state.jh];
      let count = 0;
      console.log(JSON.stringify([...state.jh]));
      newJournalsite[0].journalHeaders.map((header) => {
        header.journalContents.map((content) => {
          if (content.presence === true) {
            count = count + 1;
          }
        });

        (async () => {
          const obj = {
            id: header.id,
            typeClass: header.typeClass.name,
            content: header.journalContents,
            data: header.dateOfLesson,
            subGroup: header.subGroup,
            counter: count,
          };
          if (
            (header.typeClass.id === Number(action.typeClass) &&
              header.subGroup === Number(action.subGroup)) ||
            (header.typeClass.id === Number(action.typeClass) &&
              action.subGroup === "Все")
          ) {
            jH.push(obj);
          }
        })();
        count = 0;
      });
      return {
        ...state,
        jh: jH,
      };
    case CLEAR_JH:
      return {
        ...state,
        jh: [],
      };
    // case SET_TP:
    //   let newTypeClass = [...state.typeClass];
    //   let tP = [...state.tp];
    //   newTypeClass.map((item) => {
    //     tP.push(item);
    //   });
    //   return {
    //     ...state,
    //     tp: tP,
    //   };
    case CLEAR_TP:
      return {
        ...state,
        tp: [],
      };
    case SET_SB:
      let newSubGroup = [...state.subGroup];
      let sB = [...state.sb];
      newSubGroup.map((item) => {
        sB.push(item);
      });
      return {
        ...state,
        sb: sB,
      };
    case CLEAR_SB:
      return {
        ...state,
        sb: [],
      };

    case SET_JOURNAL_CONTENT:
      let newJSite = [...state.journalsite];
      let jContent = [...state.journalContent];
      newJSite[0].journalHeaders.map((header) => {
        header.journalContents
          .sort((a, b) => a.id - b.id)
          .map((content) => {
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
        journalsite: [...action.journalsite],
        update: true,
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
      if (localStorage.getItem("journalsite") !== null) {
        let newJournalsite = JSON.parse(localStorage.getItem("journalsite"));
        let jHeader = [...state.journalHeader];
        newJournalsite[0].journalHeaders.map((header) => {
          const obj = { id: header.id, content: header.journalContents };
          jHeader.push(obj);
        });
        return {
          ...state,
          journalHeader: jHeader,
        };
      } else {
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
      }

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
export const setPresent = (present) => ({
  type: SET_PRESENT,
  present,
});
export const setJH = (typeClass, subGroup, jh) => ({
  type: SET_JH,
  typeClass,
  subGroup,
  jh,
});
// export const setTP = (tp) => ({
//   type: SET_TP,
//   tp,
// });
export const clearTP = () => ({
  type: CLEAR_TP,
});
export const clearPresent = () => ({
  type: CLEAR_PRESENT,
});
export const setSB = (sb) => ({
  type: SET_SB,
  sb,
});
export const clearSB = () => ({
  type: CLEAR_SB,
});
export const clearJH = () => ({
  type: CLEAR_JH,
});
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
