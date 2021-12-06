import { getJournalsite } from "../BD/tables";

const SET_JOURNALSITE = "SET_JOURNALSITE";

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
    default:
      return state;
  }
};

export const setJournalsite = (journalsite, update) => ({
  type: SET_JOURNALSITE,
  journalsite,
  update: update,
});

export const getJournalsiteThunk = () => {
  return (dispatch) => {
    getJournalsite().then((data) => {
      dispatch(setJournalsite(data));
    });
  };
};

export default journalsiteReducer;
