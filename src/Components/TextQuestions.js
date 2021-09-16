import React from 'react';
import {
    FormLabel,
    TextField
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Formik, useField } from 'formik';

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
                    name={question.name}
                    onBlur={Formik.handleBlur}
                    answercheck={question.toString()}
                    onChange={Formik.handleChange}
                    {...field}
                // {...props}
                />

                <>
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) :
                        null}
                    {/* answercheck = true} */}
                </>

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
