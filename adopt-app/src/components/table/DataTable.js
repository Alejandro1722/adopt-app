import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { peopleStartLoading } from '../../actions/people';
import { AdoptModal } from '../modal/AdoptModal';
import { CreatePersonBtn } from '../ui/CreatePersonBtn';
import { DataTableScreen } from './DataTableScreen';

export const DataTable = () => {

    const dispatch = useDispatch();

    const { people } = useSelector( state => state.pe );

    const peopleById = people.sort((a, b) => a.id - b.id );

    useEffect(() => {
        dispatch( peopleStartLoading() )
    }, [dispatch])

    return (
        <>
            <div className="creation">
                <CreatePersonBtn/>
            </div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Fullname</th>
                <th scope="col">Birthday</th>
                <th scope="col">Father/Mother</th>
                <th scope="col">Child</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
                {
                    peopleById.map( people => (
                        <DataTableScreen
                            key={ people.id }
                            { ...people }
                        />
                    ))
                }
            </table>
            <AdoptModal/> 
        </>
    )
}
