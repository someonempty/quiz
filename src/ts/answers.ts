import { createSecondPage } from "./pageTwo";

export const AnswersBlock = (answers:any, answerIndex:number, lifes:number, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function, onGetDataBase:Function) => {
    const answersBlock = document.createElement('div');
    const firstAnswer = document.createElement('button');
    const secondAnswer = document.createElement('button');
    const thirdAnswer = document.createElement('button');
    const fourthAnswer = document.createElement('button');

    answersBlock.classList.add('answers-block');
    firstAnswer.classList.add('first-answer');
    secondAnswer.classList.add('second-answer');
    thirdAnswer.classList.add('third-answer');
    fourthAnswer.classList.add('fourth-answer');

    firstAnswer.innerText = answers[answerIndex].incorrectAnswers[0];
    secondAnswer.innerText = answers[answerIndex].incorrectAnswers[1];
    thirdAnswer.innerText = answers[answerIndex].incorrectAnswers[2];
    fourthAnswer.innerText = answers[answerIndex].correctAnswer;

    firstAnswer.addEventListener('click', () => {
        onLosingLife();
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(onGetDataBase);
    })

    secondAnswer.addEventListener('click', () => {
        onLosingLife();
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(onGetDataBase);
    })

    if (!lifes) {
        alert('you have lost');
    }

    thirdAnswer.addEventListener('click', () => {
        onLosingLife();
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(onGetDataBase);
    })

    fourthAnswer.addEventListener('click', () => {
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(onGetDataBase);
    })

    answersBlock.appendChild(firstAnswer);
    answersBlock.appendChild(secondAnswer);
    answersBlock.appendChild(thirdAnswer);
    answersBlock.appendChild(fourthAnswer);

    return answersBlock;
}