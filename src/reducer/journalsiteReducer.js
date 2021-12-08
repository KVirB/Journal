import { getJournalsite } from "../BD/tables";

const SET_JOURNALSITE = "SET_JOURNALSITE";
const CLEAR_JOURNALSITE = "CLEAR_JOURNALSITE";
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
        journalsite: [...state.journalsite, ...action.journalsite],
      };
    case CLEAR_JOURNALSITE:
      return initialState;
    default:
      return state;
  }
};

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
      dispatch(setJournalsite(data));
    });
  };
};

export default journalsiteReducer;
