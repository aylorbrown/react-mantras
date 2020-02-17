export const ADD_MANTRA = 'ADD_MANTRA';

export function actionAddMantra(mantras) {
    return ({
        type: ADD_MANTRA, 
        payload: {
            mantras
        }
    })
}