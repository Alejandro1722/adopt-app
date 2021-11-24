import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../../actions/ui';

export const CreatePersonBtn = () => {

    const dispatch = useDispatch();

    const handleOpenModal = ()=> {
        dispatch( openModal() ); 
    }

    return (
        <button 
            type="button create-btn" 
            className="btn btn-outline-success"
            onClick={ handleOpenModal }
        >
                Create
        </button>
    )
}
