import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import { ErrorMessage, useField } from 'formik';


const TextQuestions = ({ questions, question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-control">
            <div className="answer-section">
                <TextField
                    label={question.questionText}
                    // key={question.questionId}
                    name={question.format}
                    {...field}
                    {...props}
                />
            </div>
            <ErrorMessage component="div" name={field.name} className="error" />
            <div className='question-count'>
                <p>Question {question.questionId} out of {questions.length}</p>
            </div>
        </div>
    )
}

export default TextQuestions
