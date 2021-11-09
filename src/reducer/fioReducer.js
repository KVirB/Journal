import { getFio } from '../BD/tables';

const SET_FIO = 'SET_FIO';

let initialState = { 
    fio: []
};


const fioReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FIO:
           return {...state, fio: [...state.fio, ...action.fio]}
        default:
            return state;

    }

}

export const setFio = (fio) => ({type:SET_FIO, fio});

export const getFioThunk = () => {
    return (dispatch) => {
    getFio().then(data => 
        { 
            dispatch(setFio(data));
        }
    );
    }
}

export default fioReducer;