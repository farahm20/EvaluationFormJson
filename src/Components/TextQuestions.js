import React from 'react';
import {
    FormLabel,
    TextField
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useField } from 'formik';

const useStyles = makeStyles({
    root: {
        color: 'black',
    },
    textInput: {
        color: 'red',
    }
});

const TextQuestions = ({ questions, answercheck, question, ...props }) => {

    const classes = useStyles();

    const [field, meta] = useField(props);
    return (
        <div className="question-container">
            <div className="answer-section">
                <FormLabel
                    component="legend"
                    className={classes.root}
                >{question.questionText}</FormLabel>

                <TextField
                    className={classes.textInput}
                    // label={question.questionText}
                    // key={question.questionId}
                    name={question.name}
                    answercheck={question.toString()}
                    {...field}
                // {...props}
                />

                <>
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) :
                        answercheck = true}</>

                <div className='button-section'>
                    <button className='okay-button'>OK</button>
                </div>
            </div>
            <div className='question-count'>
                <p>Question {question.questionId} out of {questions.length}</p>
            </div>

        </div>

    )
}

export default TextQuestions
