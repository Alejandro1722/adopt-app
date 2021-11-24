import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startDeletePerson } from '../../actions/people';

export const DeletePersonBtn = ( {values} ) => {

    const dispatch = useDispatch();

    const { id } = values; 

    const handleDeletePerson = ()=> {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch( startDeletePerson(id) )
            }
          })
    }
 
    return (
        <button 
            type="button" 
            className="btn btn-outline-danger ms-2"
            onClick={ handleDeletePerson }
        >
            
                Delete
        </button>
    )
}
