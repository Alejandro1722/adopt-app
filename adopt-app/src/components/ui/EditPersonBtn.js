import React from 'react'
import { useDispatch } from 'react-redux';
import { activePerson } from '../../actions/people';
import { openModal } from '../../actions/ui';

export const EditPersonBtn = ({values}) => {

    const dispatch = useDispatch();

    const { id, fullname, birthday, person, adopt } = values; 

    const handleEditPerson = ()=> {
        dispatch( openModal() ); 

        dispatch( activePerson({ 
            id, fullname, birthday, person, adopt 
        }))
    }

    return (
        <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={ handleEditPerson }
        >
                Edit
        </button>
    )
}
