import React, {useState, useEffect} from 'react'
import useForm from '../../customHooks/useForm';

function QuestionForm() {

    const { inputs, handleInputChange, handleSubmit } = useForm();
    const [qrows, UseQrows] = useState(0);

    useEffect(() => {
        const questionArea = document.getElementById("question");
        const questionRowCount = questionArea ? questionArea.value.split(/\r?\n/).length : 0;
        console.log(questionArea.value);
        UseQrows(questionRowCount + .5);
    });

    return (
        <div className="field">
            <div className="control">
                <textarea className="textarea has-background-primary" id='question' rows={qrows} placeholder="Question" name="question" value={inputs.question} onChange={handleInputChange}></textarea>
            </div>
        </div>
    )
}

export default QuestionForm
