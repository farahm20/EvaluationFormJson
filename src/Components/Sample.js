import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import validationSchema from '../Validation/Validation';
import TextQuestions from './TextQuestions'
import CheckboxQuestions from './CheckboxQuestions'
import TextFieldQuestions from './TextFieldQuestions'
import PrimaryButton from './PrimaryButton';
import CheckBoxSample from './CheckBoxSample'


const sendDataToDatabase = async (value) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
    };
    const response = await fetch('http://localhost:8000/answers', requestOptions);
    const data = await response.json()
    // this.data({ postId: data.id })
}

//function with switch statement. recieves the question object and current question index
const theSwitchStatment = (questions, index, values) => {
    // console.log("Values in switch statment: ", values)
    if (questions.length > 0) {
        {
            switch (questions[index].format) {
                case 'text':
                    return <TextFieldQuestions
                        key={index}
                        question={questions[index]}
                        label={questions[index].questionText}
                        type={questions[index].format}
                        name={questions[index].name}
                    />
                case 'checkbox':
                    return <CheckBoxSample
                        key={index}
                        question={questions[index]}
                        label={questions[index].questionText}
                        type={questions[index].format}
                        name={questions[index].name}
                        answercheck={questions[index].answer}
                        values={values}
                    />;
                case 'textfield':
                    return <TextFieldQuestions
                        key={index}
                        question={questions[index]}
                        label={questions[index].questionText}
                        type={questions[index].format}
                        name={questions[index].name}
                    />;
                default:
                    return null;
            }
        }
    } else {
        console.log("Empty array")
    }
}

const Sample = () => {
    const [questions, setQuestions] = useState(null)
    const [formValues, setFormValues] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/questions')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setQuestions(data);
            });
    }, [])//dependency array

    //manages the next question index via the next button. 
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //manages the label of the buttons 
    const [buttonlabel, setButtonLabel] = useState('OK');
    //manages the type of buttons.  
    const [buttonType, setButtonType] = useState();
    //Changes the question index .Recieves the question object
    const handleNextButtonClick = (questions) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            console.log("HandlenextButton - nextQuestion: ", nextQuestion)
            setCurrentQuestion(nextQuestion);
            setButtonLabel('Ok');
            setButtonType('ok');
        } else {
            setButtonLabel('Submit');
            setButtonType('submit');
        }
    };


    const handlePreviousButtonClick = (questions) => {
        console.log("Inside previous - current question ", currentQuestion)
        if (currentQuestion > 0) {
            const previousQuestion = currentQuestion - 1;
            console.log("Inside previous - current question ", previousQuestion)
            if (previousQuestion < questions.length) {
                console.log("HandlenextButton - nextQuestion: ", previousQuestion)
                setCurrentQuestion(previousQuestion);
                // setPreviousQuestion(previousQuestion)
            }
        }
    };

    const handleNextArrowButtonClick = (questions) => {
        console.log("Inside next - current question ", currentQuestion)
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            console.log("Inside next - current question ", nextQuestion)
            setCurrentQuestion(nextQuestion);
            // setNextQuestion(nextQuestion)
        }
    };

    const initialValues = {
        // isInitialValid: false,
        // FirstName: 'Enter your first name...',
        // OverallExperience: '',
        // TherapistMatchesYourPreferences: '',
        // OverallExperience: 'Enter your answer...',
    }

    const onSubmit = (values, submitProps) => {
        console.log("Values on Submit: ", values)
        console.log('submitProps', submitProps)
        setFormValues(values)
        sendDataToDatabase(values);
        console.log('submitProps', submitProps)
        submitProps.setSubmitting(false)
        submitProps.resetForm()
        alert('Your form is submmitted succesfully.')

    };

    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            handleNextButtonClick
        // validateOnChange={false}
        >
            {({ dirty, isValid, errors, values }) => (
                <Form>
                    <div className="question-section">
                        <div>
                            {questions && (theSwitchStatment(questions, currentQuestion, values))}
                        </div>
                        <div className='button-section'>
                            <PrimaryButton
                                onClick={() => handleNextButtonClick(questions)}
                                count={currentQuestion}
                                length={questions && questions.length}
                                label={buttonlabel}
                                type={buttonType}
                            />
                        </div>
                        <div>
                            <PrimaryButton
                                onClick={() => handlePreviousButtonClick(questions)}
                                count={currentQuestion}
                                length={questions && questions.length}
                                label={'<'}
                            />
                            <PrimaryButton
                                onClick={() => handleNextArrowButtonClick(questions)}
                                count={currentQuestion}
                                length={questions && questions.length}
                                label={'>'}
                            />
                        </div>
                    </div>
                    {/* <button className="button" type="submit">Submit</button> */}

                </Form>
            )}
        </Formik >
    )

}

export default Sample
//disable submit button
// disabled={!(formik.isValid && formik.dirty)}

//CHECK TRAVERSY FOR MUI SUCCESS PAGE.