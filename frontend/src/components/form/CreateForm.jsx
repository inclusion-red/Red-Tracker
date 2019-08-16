import React, { useState } from 'react';
import Formfield from './FormFields/InputField.jsx';
import CheckBox from './FormFields/CheckBox.jsx';

function CreateForm() {

  const [Formfields, setFormField] = useState([]);
  const [save, setSave] = useState(false);

  // function addTextField() {
  //   setFormField(Formfields.concat(<Formfield key={Formfields.length} save={save}/>));
  // }
  // function addCheckBox() {
  //   setFormField(Formfields.concat(<CheckBox key={Formfields.length} save={save}/>));
  // }

  function addTextField() {
    setFormField(Formfields.concat('textBox'));
  }
  function addCheckBox() {
    setFormField(Formfields.concat('checkBox'));
  }


  function plzsave() {
    console.log("WHY!!!!!");
    setSave(true);
  }
 
  let updatedFormFields = Formfields.map((formfield,index) =>{
    if (formfield === 'textBox'){
      return <Formfield key={index} save={save}/>
    }else{
      return <CheckBox key={index} save={save}/>
    }
  });

  return (
    <div className="container is-small">
      <div className="buttons are-large is-centered">
        <span className="button is-success" onClick={addTextField}>TextField</span>
        <span className="button is-info" onClick={addCheckBox}>Multiple Choice</span>
        <span className="button is-danger">Drop Down</span>
      </div>
      <form>
        {updatedFormFields}
        <input className="button" onClick={plzsave} value="Submit Form"></input>
      </form>
    </div>
  )
}

export default CreateForm
