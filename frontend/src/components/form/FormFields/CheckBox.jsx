import React, { useState, useEffect } from 'react';
import QuestionFrom from './QuestionForm';
import CheckBoxIndex from './CheckBoxIndex';

function CheckBox() {

    //temp state untill validation is done
    
    const [choices, setChoices] = useState([]);
    
     function addChoice() {
         setChoices(choices.concat(<CheckBoxIndex/>));
     }
    return (

        <div className="container">
            <QuestionFrom />
            <div class="columns">
            {choices}
            </div>
            <span className="button is-success" onClick={addChoice}>add Choice</span>
        </div>
    )
}

export default CheckBox
