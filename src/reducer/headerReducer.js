import { getDiscipline } from '../BD/tables';

const SET_DISCIPLINE = 'SET_DISCIPLINE';

let initialState = { 
    discipline: []
};


const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DISCIPLINE:
           return {...state, discipline: [...state.discipline, ...action.discipline]}
        default:
            return state;

    }

}

export const setDiscipline = (discipline) => ({type:SET_DISCIPLINE, discipline});

export const getDisciplineThunk = () => {
    return (dispatch) => {
    getDiscipline().then(data => 
        { 
            dispatch(setDiscipline(data));
        }
    );
    }
}

export default headerReducer;