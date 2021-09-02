import { React, useState } from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel
} from "@material-ui/core";
import { useFormikContext, ErrorMessage, useField } from 'formik';

const CheckboxQuestions = ({ questions, question, name, ...props }) => {
    // const [field, meta] = useField(props);
    const questionOptions = question.answerOptions;

    const [field, meta] = useField(name);
    const [isChecked, setIsChecked] = useState();

    // const { setFieldValue } = useFormikContext();

    const isCheckboxChecked = (index) => {
        console.log("In checkbox component: ", index)
        setIsChecked(index)
    }

    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }

    return (
        <FormControl className="form-control" {...configFormControl}>
            <FormLabel component="legend">{question.questionText}</FormLabel>
            <FormGroup >
                {
                    questionOptions.map((option, index) =>
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    className="answer-section"
                                    name={question.name}
                                    onClick={() => isCheckboxChecked(index)}
                                    // checked={isChecked === index}
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
    )
}

export default CheckboxQuestions