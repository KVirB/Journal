import { getJournalsite } from "../BD/tables";

const SET_JOURNALSITE = "SET_JOURNALSITE";

let initialState = {
  journalsite: [],
};

const journalsiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOURNALSITE:
      return {
        ...state,
        journalsite: [...state.journalsite, ...action.journalsite],
      };
    default:
      return state;
  }
};

export const setJournalsite = (journalsite) => ({
  type: SET_JOURNALSITE,
  journalsite,
});

export const getJournalsiteThunk = () => {
  return (dispatch) => {
    getJournalsite().then((data) => {
      dispatch(setJournalsite(data));
    });
  };
};

export default journalsiteReducer;
