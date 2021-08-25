import React, { useState, useEffect } from 'react'
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';

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
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    //move to next question when user answers
    const handleAnswerButtonClick = (answered) => {
        if (answered === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    }


    return (
        <Formik
            initialValues={
                {
                    // answers: ''
                }}
            onSubmit={values => {
                console.log("On submit: ", values)
                sendDataToDatabase(values);
            }}
        >
            {showScore ? (
                <div className='score-section'>You answered {score} out of {questions.length}</div>
            ) : (
                <Form >
                    <div className="form-control" >
                        <div className="question-section">
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'></div>

                            {
                                questions.map(((question, index) => {
                                    {
                                        {
                                            switch (question.format) {
                                                case 'text':
                                                    return <TextQuestions
                                                        key={index}
                                                        question={question}
                                                        label={question.questionText}
                                                        type={question.format}
                                                        name={question.ans}
                                                        className='question-text'
                                                    />
                                                case 'checkbox':
                                                    return <CheckboxQuestions
                                                        key={index}
                                                        question={question}
                                                        label={question.questionText}
                                                        type={question.format}
                                                        name={question.ans}
                                                        className='question-text'
                                                    />;
                                                case 'textfield':
                                                    return <TextFieldQuestions
                                                        key={index}
                                                        question={question}
                                                        label={question.questionText}
                                                        type={question.format}
                                                        name={question.ans}
                                                        className='question-text' />;
                                                default:
                                                    return null;
                                            }
                                        }
                                    }
                                }))
                            }
                        </div>
                    </div>
                    <button className="button" type="submit">Submit</button>
                </Form>
            )}
        </Formik >
    )
}

export default Questions