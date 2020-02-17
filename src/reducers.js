import {
    ADD_MANTRA
} from './actions';


// an empty array goes here 

export function mantras(state=[
    'What you seek is seeking you.', 
    'You were born with wings, why prefer to crawl through life?', 
    'Set your life on fire. Seek those who fan your flames.'
    ], action) {
    const newState = [ ...state ];
    switch (action.type) {
        case ADD_MANTRA:
            newState.push(action.payload.mantras);
            break;
        default:
            break;
    }
    return newState;
}