import { React, state } from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Field, ErrorMessage, FieldArray, useField } from 'formik';

const useStyles = makeStyles({
    label: {
        color: 'black',
    },

    checkboxOptions: {
        flexDirection: 'row',
        color: 'red',
    },

    checkboxBox: {
        marginLeft: '0px',
        borderStyle: 'solid 2px',
        padding: '1px 14px 1px 1px',
        borderRadius: '4px',
        backgroundColor: 'rgb(194 14 9 / 10%)',
        boxShadow: 'rgb(194 14 9 / 60%) 0px 0px 0px 1px inset',
        color: 'rgb(194, 14, 9)',
        maxWidth: '100%',
        minWidth: '75px',
        minHeight: '40px',
        outline: '0px',
        transitionDuration: '0.1s',
        transitionProperty: 'background-color, color, border-color, opacity, box-shadow',
        transitionTimingFunction: 'ease-out',
        cursor: 'pointer',
        opacity: 1,
    },
    checkboxSmallBox: {
        color: 'red',
    }

});

const CheckboxQuestions = ({ questions, question, name, ...props }) => {

    const classes = useStyles();
    const questionOptions = question.answerOptions;
    const [field, meta] = useField(name);


    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = false;
    }
    {
        return (
            <div className="question-container">

                <FormControl  {...configFormControl}>
                    <FormLabel component="legend"
                        className={classes.label}
                    >{question.questionText}</FormLabel>

                    {/* <FieldArray name="answer.selected">
                        {(arrayHelpers) => {
                            return questionOptions.map((option, index) => (
                                <div key={index}>
                                    <Field
                                        name={question.name}
                                        value={option}
                                        type="checkbox"
                                        as={Checkbox}
                                        // checked={ }
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                arrayHelpers.push({
                                                    name: e.target.value
                                                });
                                            }
                                        }}
                                    />
                                    {option}

                                </div>
                            ));
                        }}
                    </FieldArray> */}
                    <FormGroup className={classes.checkboxOptions} name="answerOptions.selected">
                        {
                            questionOptions.map((option, index) =>
                                <FormControlLabel
                                    className={classes.checkboxBox}
                                    key={index}
                                    control={
                                        <Checkbox
                                            className={classes.checkboxSmallBox}
                                            name={question.name}
                                            value={option}
                                            {...props}
                                        />
                                    }
                                    label={option}
                                    {...field}
                                />
                            )}
                        <ErrorMessage component="div" name={field.name} className="error" />
                    </FormGroup>
                </FormControl>

                <div className='button-section'>
                    <button className='okay-button'>OK</button>
                </div>
                <div className='question-count'>
                    <p>Question {question.questionId} out of {questions.length}</p>
                </div>
            </div>
        )
    }
}


export default CheckboxQuestions
