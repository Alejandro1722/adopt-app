import React from 'react';
import { useSelector } from 'react-redux';

import { DeletePersonBtn } from '../ui/DeletePersonBtn';
import { EditPersonBtn } from '../ui/EditPersonBtn';

export const DataTableScreen = ({ id, fullname, birthday, person, adopt }) => {

    const { people } = useSelector( state => state.pe );

    return (
        <>  
            <tbody>
                <tr>
                <th scope="row">{ id }</th>
                <td>{ fullname }</td>
                <td>{ birthday }</td>
                <td>{ person }</td>
                <td>{ adopt }</td>
                <td className="ms-2"><EditPersonBtn values={{ id, fullname, birthday, person, adopt }} />
                    <DeletePersonBtn values={{ id }}/>
                </td>
                </tr>
            </tbody>     
        </>
    )
}
