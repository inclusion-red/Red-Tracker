import React,{useState}from 'react';
import Formfield from './FormFields/InputField.jsx';
import CheckBox from './FormFields/CheckBox.jsx';
import { StateProvider } from './stateProvider';

function CreateForm() {

  const [Formfields, setFormField] = useState([]);
  const [save, setSave] = useState(false);
  // const questions=[];
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

  // const addField = (newField) =>{
  //   questions.push(newField);
  //   console.log(questions);
  // };

  // let userData={
  //   "active": true,
  //   "title": "",
  //   "formfields": [
  //     {
  //       "tag": "input",
  //       "question": inputs.question,
  //       "class": "",
  //       "other_setting": null
  //     },
  //   ]
  // }

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
  
  function plzsave() {
    
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
    <StateProvider initialState={initialState} reducer={reducer}>
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
    </StateProvider>

  )
}

export default CreateForm
