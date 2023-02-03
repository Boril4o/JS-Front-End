import { useState } from 'react';
import React from 'react';
import './index.css';
import Question from './Question';
import Answer from './Answer';
import questionsJson from './questions.json';

export default function Main() {
    const [question, setQuestion] = useState(getNextQuestion());
    const [answers, setAnswers] = useState(question.answers.map(x => <Answer key={x.answerId} text={x.answer} />));
    const [isClicked, setClicked] = useState(false);

    function handleQuestionClick(e) {
        if (isClicked) {
            return;
        }

        if (e.target.nodeName === 'BUTTON') {
           const answer = question.answers.filter(x => !x.isWrong)[0];
           const clickedAnswer = question.answers.filter(x => x.answer === e.target.textContent)[0];

           let isWrong = answer.answerId !== clickedAnswer.answerId;

           let newAnswers = question.answers.map(x => {
            if (x.answerId === clickedAnswer.answerId) {
                return <Answer key={x.answerId} text={x.answer} isWrong={isWrong}/>;
            }

            return <Answer key={x.answerId} text={x.answer} />;
            });

            setAnswers(newAnswers);
            setClicked(true);
        }
    }

    function handleNextClicked() {
        const nexQuestion = getNextQuestion(question.id);
        setQuestion(nexQuestion);
        setAnswers(nexQuestion.answers.map(x => <Answer key={x.answerId} text={x.answer} />));
        setClicked(false);
    }

    return (
        <div className='main-container'>
            <section className='question-container'>
                <Question question={question.question} />
            </section>
            <section className='answers-container' onClick={handleQuestionClick}>
                {answers}
            </section>
            <section className='next-container'>
                <button onClick={handleNextClicked}>Next</button>
            </section>
        </div>
    );
}


function getNextQuestion(previousQuestionId) {
    let question = {};

    if (previousQuestionId === undefined) {
        let nextQuestionId = Math.floor(Math.random() * questionsJson.questions.length + 1);
        question = questionsJson.questions.filter(x => x.id === nextQuestionId)[0];
        return question;
    }

    while (true) {
        let nextQuestionId = Math.floor(Math.random() * questionsJson.questions.length + 1);
        if (previousQuestionId !== nextQuestionId) {
            question = questionsJson.questions.filter(x => x.id === nextQuestionId)[0];
            return question;
        }
    }
}