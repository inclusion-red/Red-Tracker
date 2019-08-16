import React,{useState, useEffect}from 'react';
import useForm from '../../customHooks/useForm';
import QuestionForm from './QuestionForm';

function InputField(props) {

  const [arows, UseArows] = useState(0);

  useEffect(() => {
    const answerArea = document.getElementById("answer");
    const ansRowCount = answerArea ? answerArea.value.split("\n").length : 0;
    UseArows( ansRowCount + .5);
  });
  
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

export default InputField
