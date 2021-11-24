import { types } from "../types/types";

const initialState = {
    activePerson: false,
    people: []
}

export const peopleReducer = ( state = initialState , action ) => {

    switch ( action.type ) {
        case types.selectPerson:
            return {
                ...state, 
                activePerson: action.payload 
            }
        case types.clearActivePerson:
            return {
                ...state,
                activePerson: false
            }
        case types.createPerson:
            return {
                ...state, 
                people: [ 
                    ...state.people,
                    action.payload 
                ]
            }
        case types.deletePerson:
            return {
                ...state,
                people: state.people.filter( 
                    people => ( people.id !== action.payload)
                )
            }
        case types.editPerson: 
            return {
                ...state,
                people: state.people.map( 
                    p => ( p.id === action.payload.id)
                    ? action.payload
                    : p
                )
            }
        case types.loadingPerson:
            return {
                ...state,
                people: action.payload 
            }
        default:
            return state
    }

}