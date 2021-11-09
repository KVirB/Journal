import { getMarks } from '../BD/tables';

const SET_MARKS = 'SET_MARKS';

let initialState = { 
    marks: []
};


const marksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MARKS:
           return {...state, marks: [...state.marks, ...action.marks]}
        default:
            return state;

    }

}

export const setMarks = (marks) => ({type:SET_MARKS, marks});

export const getMarksThunk = () => {
    return (dispatch) => {
    getMarks().then(data => 
        { 
            dispatch(setMarks(data));
        }
    );
    }
}

export default marksReducer;