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

    const { setFieldValue } = useFormikContext();

    const isCheckboxChecked = (index) => {
        console.log("In checkbox component: ", index)
        setIsChecked(index)
    }


    // const handleChange = (event) => {
    //     console.log(event.target)
    //     const { checked } = event.target;
    //     console.log("in handle change (checked)", checked)
    //     console.log(event.target.value)
    //     name = event.target.value;
    //     console.log("in handle change (field.value)", field.value)
    //     console.log("name: ", name)
    //     setFieldValue(name, checked)
    // };

    // const configCheckbox = {
    //     ...field,
    //     onChange: handleChange
    // };

    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }




    return (
        <FormControl {...configFormControl}>
            <FormLabel component="legend">{question.questionText}</FormLabel>
            <FormGroup>
                {
                    questionOptions.map((option, index) =>
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    // {...configCheckbox}
                                    name={question.ans}
                                    // checked={isChecked == index}
                                    onClick={() => isCheckboxChecked(index)}
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

