import React from 'react'
import CreateForm from './CreateForm'
import { StateProvider } from './stateProvider';

function formWrapper() {
    const initialState = {
        newFormFields: []
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addField':

                return {
                    newFormFields: state.newFormFields.concat(action.newFormField)
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>

            <div>
                <CreateForm />
            </div>
        </StateProvider>
    )
}

export default formWrapper
