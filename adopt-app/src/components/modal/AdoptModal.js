import React, { useEffect, useState } from 'react'; 
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import { noActivePerson, startAddNewPeople, startEditPerson } from '../../actions/people';
import { closeModal } from '../../actions/ui';
import { customStyles } from '../../helpers/modalStyles';


Modal.setAppElement('#root');

const initialState = { 
    fullname: 'Alejandro Vásquez O.', 
    birthday: '1995-11-22', 
    person: 'N/A', 
    adopt: 'N/A', 
}
export const AdoptModal = () => {

    const dispatch = useDispatch();

    const { modal } = useSelector( state => state.ui );

    const { activePerson, people } = useSelector( state => state.pe );

    const [ formValues, setFormValues ] = useState(initialState); 

    const { fullname, birthday, person, adopt } = formValues; 

    useEffect(() => {
        if ( activePerson ) {
            setFormValues( activePerson ); 
        } else {
            setFormValues( initialState ); 
        }

    }, [activePerson, setFormValues])


    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues, 
            [target.name]: target.value
        });
    }
    
    const handleCloseModal = () => {
        dispatch( closeModal() )
        dispatch( noActivePerson() ); 
    }
    
    const handleSubmitNewPerson = (e) => {
        e.preventDefault(); 

        if( activePerson ){
            dispatch( startEditPerson(formValues) ); 
        }else {
            dispatch( startAddNewPeople(formValues) ); 
        }

        handleCloseModal(); 
    }


    return (
        <Modal
            isOpen={ modal }
            // onAfterOpen={afterOpenModal}
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            contentLabel="Example Modal"
        >

                
            <div 
                className="main-modal"
            >
                <div className="title-modal">
                    <h1>{ (activePerson) ? 'Edit person' : 'New person' }</h1>  
                </div>
                <button
                    className="btn btn-outline-danger btn-block ms-3 mt-2"
                    onClick={ handleCloseModal }
                >
                    <i className="fas fa-times"></i>
                </button>
                
                <hr />
            </div>

            <form 
                className="container"
                onSubmit={ handleSubmitNewPerson }
            >

                <div className="form-group mt-3">
                    <label className="mb-2">FullName: </label>
                    <input 
                        type="text"
                        className="form-control" 
                        name="fullname"  
                        onChange={ handleInputChange }
                        value={ fullname }
                    />
                </div>

                <div className="form-group mt-3">
                    <label className="mb-2">Birthday: </label>
                    <input 
                        type="date"
                        className="form-control" 
                        name="birthday" 
                        onChange={ handleInputChange }
                        value={ birthday }
                    />
                </div>

                <div className="form-group mt-3">
                    <label className="mb-2">Mother/Father: </label>
                    <select 
                        className="form-control" 
                        name="person" 
                        onChange={ handleInputChange } 
                        value={ person }        
                    >
                        <option value={ "N/A" }>-- N/A --</option>
                        {
                            people.map( people =>( 
                                <option 
                                    value={ people.fullname } 
                                    key={ people.id } >{ people.id }. {people.fullname}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group mt-3">
                    <label className="mb-2">Adopt: </label>
                    <select 
                        type="text" 
                        className="form-control" 
                        name="adopt" 
                        onChange={ handleInputChange }
                        value={ adopt }
                    >
                        <option value={ "N/A" } >-- N/A --</option>
                        {
                            people.map( people =>( 
                                <option 
                                    value={ people.fullname } 
                                    key={ people.id } >{ people.id }. {people.fullname}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-3"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button> 
            </form>    
        </Modal>
    )
}
