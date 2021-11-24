import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";


// Cargar todas las personas
export const peopleStartLoading = () =>{
    
    return async( dispatch ) => {
        
        try {
            const resp = await fetchSinToken('all'); 
            const body = await resp.json(); 
            dispatch( eventLoaded(body) ); 

        } catch (error) {
            console.log(error)
        }
    }
}
const eventLoaded = ( people ) => ({
    type: types.loadingPerson,
    payload: people
}); 
// Agregar una persona
export const startAddNewPeople = ( person ) => {

    return async(dispatch) => {

        try {

            await fetchSinToken('new', person, 'POST');
            const resp = await fetchSinToken('all'); 
            const body = await resp.json(); 
            const realId = body.length-1;
            dispatch( addNewPerson(body[realId].id, person) )
            
        } catch (error) {
            console.log(error)
        }

    }
}
const addNewPerson = ( id, person ) => ({
    type: types.createPerson,
    payload: { 
        id, 
        ...person
    }
})

// Eliminar una persona 
export const startDeletePerson = ( id ) => {

    return async (dispatch) => {

        try {
            await fetchSinToken( id, {}, 'DELETE'); 
            dispatch(deletePerson( id ))

        } catch (error) {
            console.log(error)
        }
    }

}
const deletePerson = ( id ) => ({ 
    type: types.deletePerson,
    payload: id
})
// Actualizar persona
export const startEditPerson = (person) => {
    return async( dispatch ) => {
        try {
            await fetchSinToken( person.id, person, 'PUT'); 
            dispatch( editPerson( person ) ); 

        } catch (error) {
            console.log(error); 
        }
    }
}
const editPerson = ( person )=> ({
    type: types.editPerson,
    payload: person
})
// Seleccionar una persona
export const activePerson = ( person ) => ({
    type: types.selectPerson,
    payload: person
}); 
// Seleccionar una persona
export const noActivePerson = ( ) => ({
    type: types.clearActivePerson
}); 