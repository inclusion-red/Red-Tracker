import React, {useState, useEffect} from 'react'
import useForm from '../../customHooks/useForm';
import {test} from '../../../util/dbApi/dbApi';
import PropTypes from 'prop-types';
import  { useStateValue } from '../stateProvider';


function QuestionForm(props) {

  const { inputs, handleInputChange } = useForm();
  const [qrows, UseQrows] = useState(0);

  const [{ newFormFields }, dispatch] = useStateValue();
  console.log(newFormFields)


  useEffect(() => {
    const questionArea = document.getElementById("question");
    const questionRowCount = questionArea ? questionArea.value.split(/\r?\n/).length : 0;
    UseQrows(questionRowCount + .5);
  });

  useEffect(() => {
    if(props.save){
      dispatch({
        type: 'addField',
        newFormField: {
          "tag": "input",
            "question": inputs.question,
            "class": "",
            "other_setting": null
        }
      })
    }
  },[props.save])
 
  return (

    <div className="field">
      <div className="control">
        <textarea className="textarea has-background-primary" id='question' rows={qrows} placeholder="Question" name="question" value={inputs.question} onChange={handleInputChange}></textarea>
      </div>
    </div>
  )
}

QuestionForm.propTypes =  {
  answerTag: PropTypes.string,
  save: PropTypes.string
}

export default QuestionForm
