import React,{useState, useEffect}from 'react';
// import useForm from '../../customHooks/useForm';
import QuestionForm from './QuestionForm';
import PropTypes from 'prop-types';
import { useStateValue } from '../stateProvider';

function InputField(props) {

  const [arows, UseArows] = useState(0);

  const [{ newFormFields }, dispatch] = useStateValue();
  console.log(newFormFields)
  console.log(dispatch)
  useEffect(() => {
    const answerArea = document.getElementById("answer");
    const ansRowCount = answerArea ? answerArea.value.split("\n").length : 0;
    UseArows( ansRowCount + .5);
  });
  
  useEffect(() => {
    if(props.save){
      dispatch({
        type: 'addField',
        newFormField: 1
      })
    }
  })
 



  
  return (
            
              <>
                <QuestionForm save={props.save} answerTag={'input'}/>
                <div className="field">
                  <div className="control">
                    <textarea className="textarea" id='answer' rows={arows} placeholder="Answer"></textarea>
                  </div>
                </div>
              </>
              
  )

}
InputField.propTypes = {
  save: PropTypes.bool
}

export default InputField
