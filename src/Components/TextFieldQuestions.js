import React from 'react'
import { TextField } from "@material-ui/core";
import { useField } from 'formik';

const TextFieldQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="answer-section">
            <TextField
                label={question.questionText}
                multiline
                // rowsMax={8}
                name={question.ans}
                {...field}
                {...props}
            />
        </div>
    )
}

export default TextFieldQuestions
