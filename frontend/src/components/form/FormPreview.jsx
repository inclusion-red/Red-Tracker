import React, { useState } from 'react';
import Formfield from './FormFields/InputField.jsx';
import CheckBox from './FormFields/CheckBox.jsx';

function FormPreview() {

    const [Formfields, setFormField] = useState([]);

    function addTextField() {
        setFormField(Formfields.concat(<Formfield />));
    }
    function addCheckBox() {
        setFormField(Formfields.concat(<CheckBox />));
    }

    function handleSubmit(e) {
        console.log(e);
    }

    return (
        <div className="container is-small">
            <div className="buttons are-large is-centered">
                <span className="button is-success" onClick={addTextField}>TextField</span>
                <span className="button is-info" onClick={addCheckBox}>Multiple Choice</span>
                <span className="button is-danger">Drop Down</span>
            </div>
            <form>
                {Formfields}
                <input class="button" type="submit" onClick={handleSubmit} value="Submit Form"></input>
            </form>
        </div>
    )
}

export default FormPreview
