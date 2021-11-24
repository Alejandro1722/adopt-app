import React from 'react'; 
import { Provider } from 'react-redux';

import { DataTable } from './components/table/DataTable';
import { store } from './store/store';

export const AdoptApp = () => {

    return (
        <Provider store={ store }>
            <h1>Adopt App</h1>
            <hr/>
            <DataTable/>
        </Provider>
    )
}
