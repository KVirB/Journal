import { getDataLesson } from '../BD/tables';

const SET_DATALESSON = 'SET_DATALESSON';

let initialState = { 
    dataLesson: []
};


const dataLessonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATALESSON:
           return {...state, dataLesson: [...state.dataLesson, ...action.dataLesson]}
        default:
            return state;

    }

}

export const setDataLesson = (dataLesson) => ({type:SET_DATALESSON, dataLesson});

export const getDataLessonThunk = () => {
    return (dispatch) => {
    getDataLesson().then(data => 
        { 
            dispatch(setDataLesson(data));
        }
    );
    }
}

export default dataLessonReducer;