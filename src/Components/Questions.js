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

const Questions = () => {
    const questions = Render();
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [showAnswer, answered] = useState(false);

    const initialValues = {
        // FirstName: "",
        // LastName: "",
        // TherapistName: "",
        // SatisfiedByTherapist: [],
    }

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
            }}
        >

            <Form>
                {/* <div className="form-control" > */}
                <div className="question-section">
                    {
                        questions.map(((question) => {
                            {
                                {
                                    switch (question.format) {
                                        case 'text':
                                            return <TextQuestions
                                                key={question.questionId}
                                                question={question}
                                                label={question.questionText}
                                                type={question.format}
                                                name={question.name}
                                                questions={questions}
                                                className='question-text'
                                            />
                                        case 'checkbox':
                                            return <CheckboxQuestions
                                                key={question.questionId}
                                                question={question}
                                                label={question.questionText}
                                                type={question.format}
                                                name={question.name}
                                                questions={questions}
                                                className='question-text'
                                            />;
                                        case 'textfield':
                                            return <TextFieldQuestions
                                                key={question.questionId}
                                                question={question}
                                                label={question.questionText}
                                                type={question.format}
                                                name={question.name}
                                                questions={questions}
                                                className='question-text' />;
                                        default:
                                            return null;
                                    }
                                }
                            }
                        }))
                    }
                </div>
                <button className="button" type="submit">Submit</button>
            </Form>

        </Formik >
    )
}

export default Questions