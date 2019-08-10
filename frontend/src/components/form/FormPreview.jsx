import React, { useState } from 'react';
import formGenerator from './formGenerator.jsx'

function FormPreview() {

    const [Formfields, setFormField] = useState([]);

    function addTextField(){
        let form = new formGenerator();  
        setFormField(Formfields.concat(form.textField()));
    }
    function handleSubmit(e){
        console.log(e);
    }

    return (
        <div className="container is-small">
            <div className="buttons are-large is-centered">
                <span className="button is-success" onClick={addTextField}>TextField</span>
                <span className="button is-info">Checklist</span>
                <span className="button is-danger">Drop Down</span>
            </div>
            <form>
            {Formfields}
            <a class="Submit" onClick={handleSubmit}>Button</a>
            </form>
           
        </div>
    )
}

export default FormPreview
