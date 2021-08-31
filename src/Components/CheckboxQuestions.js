import { React, useState } from 'react'
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
import { ErrorMessage, useField } from 'formik';

const CheckboxQuestions = ({ questions, question, ...props }) => {
    const [field, meta] = useField(props);
    // console.log(field)
    const questionOptions = question.answerOptions;
    // console.log('question options', questionOptions)
    const toggle = (event) => {
        console.log(event.target.value)
    };

    const [isChecked, setIsChecked] = useState();
    const isCheckboxChecked = (index) => {
        console.log("In checkbox component: ", index)
        setIsChecked(index)
    }

    return (
        <div className="form-control">
            <div className="answer-section">
                <label >{question.questionText}</label>
                {
                    questionOptions.map(
                        (choice, index) => <FormControlLabel
                            key={choice}
                            control={
                                <Checkbox
                                    className="form-options"
                                    type="checkbox"
                                    value={choice}
                                    name={question.ans}
                                    checked={isChecked == index}
                                    onClick={() => isCheckboxChecked(index)}

                                    {...props}
                                />
                            }
                            label={choice}
                            {...field}
                        />
                    )
                }

                <ErrorMessage component="div" name={field.name} className="error" />
            </div>

            <div className='question-count'>
                <p>Question {question.questionId} out of {questions.length}</p>
            </div>

        </div>

    )
}

export default CheckboxQuestions
