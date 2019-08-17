import React, {useState, useEffect} from 'react'
import useForm from '../../customHooks/useForm';
import {test} from '../../../util/dbApi/dbApi';
import PropTypes from 'prop-types';
import {formFieldContext} from '../formFieldContext';


function QuestionForm(props) {

  const { inputs, handleInputChange } = useForm();
  const [qrows, UseQrows] = useState(0);

  useEffect(() => {
    const questionArea = document.getElementById("question");
    const questionRowCount = questionArea ? questionArea.value.split(/\r?\n/).length : 0;
    UseQrows(questionRowCount + .5);
  });

  useEffect(() =>{
    if(props.answerTag === 'input' && props.save === true){
      let userData={
        "active": true,
        "title": "tempForm",
        "formfields": [
          {
            "tag": "input",
            "question": inputs.question,
            "class": "",
            "other_setting": null
          },
        ]
      }
      test(userData);
    }
  })
 
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
