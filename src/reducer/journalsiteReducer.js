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

export const setJournalsite = (id, update) => ({
  type: SET_JOURNALSITE,
  journalsite: { id },
  update: update,
});

export const getJournalsiteThunk = (id) => {
  return (dispatch) => {
    getJournalsite(id).then((data) => {
      dispatch(setJournalsite(id, data));
    });
  };
};

export default journalsiteReducer;
