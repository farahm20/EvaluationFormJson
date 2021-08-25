import React from 'react'
import { TextField } from "@material-ui/core";
import { useField } from 'formik';


const TextQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="answer-section">
            <TextField
                label={question.questionText}
                key={question.questionId}
                name={question.ans}
                {...field}
                {...props}
            />
        </div>
    )
}

export default TextQuestions
