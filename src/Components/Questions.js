import React, { useState, useEffect } from 'react'
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import validationSchema from '../Validation/Validation';
import TextQuestions from './TextQuestions'
import CheckboxQuestions from './CheckboxQuestions'
import TextFieldQuestions from './TextFieldQuestions'

function Render() {
    const [question, setQuestions] = useState([])
    useEffect(() => {
        const getQuestions = async () => {

            //Setting the state. 
            const questionFromServer = await fetchQuestions()
            setQuestions(questionFromServer)
        }
        getQuestions()
    }, [])//dependency array
    return question
}
const fetchQuestions = async () => {
    const res = await fetch('http://localhost:8000/questions') //can be replaced in future with any backend
    const data = await res.json()
    console.log("fetching questions", data) //setdata as a state
    return data
}

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


const theSwitchStatment = (index) => {
    const questions = Render();
    const questionArrayLength = questions.length;

    if (questions.length > 0) {
        console.log("print this", questions)
        {
            switch (questions[index].format) {
                case 'text':
                    return <TextQuestions
                        key={index}
                        question={questions[index]}
                        label={questions[index].questionText}
                        type={questions[index].format}
                        name={questions[index].name}
                    />
                case 'checkbox':
                    return <CheckboxQuestions
                        key={index}
                        question={questions[index]}
                        label={questions[index].questionText}
                        type={questions[index].format}
                        name={questions[index].name}
                        answercheck={questions[index].answer}
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

const Questions = () => {
    const questions = Render();
    console.log(questions)
    const length = questions.length;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [showAnswer, answered] = useState(false);

    const initialValues = {
        FirstName: '',
        OverallExperience: '',
        answerOptions: '',
        TherapistMatchesYourPreferences: '',
    }

    const handleAnswerOptionClick = (length) => {
        console.log(length)

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    return (
        <Formik
            initialValues={
                {
                    initialValues
                }}

            validationSchema={validationSchema}

            onSubmit={values => {
                console.log("On submit: ", values)
                sendDataToDatabase(values);
                alert('Your form is submmitted succesfully.')
                // resetForm();
                // setSubmitting(false);
            }}
        >
            <Form autoComplete="off">
                <div className="question-section">
                    <div>
                        {theSwitchStatment(currentQuestion)}
                    </div>
                    <div className='button-section'>
                        <button className='okay-button' onClick={() => handleAnswerOptionClick(length)}>Next</button>
                    </div>

                </div>
                <button className="button" type="submit">Submit</button>
            </Form>

        </Formik >
    )

}

export default Questions

// {theSwitchStatment(question, index)}