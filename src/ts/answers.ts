import { createSecondPage } from "./pageTwo";
import { dataBase } from "./getDataBase";
import { answerIndex } from "./pageTwo";
import { lifes } from "./pageTwo";

const gamePage: HTMLElement = document.querySelector('.game-page')!;
export let answers: { incorrectAnswers: string; }[];

export const createAnswersBlock = (answers:any, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function) => {
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
        console.log('click');
        firstAnswer.classList.toggle('first-answer-active');
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(dataBase);
        onLosingLife();
        console.log(lifes);
    })

    secondAnswer.addEventListener('click', () => {
        console.log('click');
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(dataBase);
        onLosingLife();
        console.log(lifes);
    })

    if (!lifes) {
        alert('you have lost');
    }

    thirdAnswer.addEventListener('click', () => {
        console.log('click');
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(dataBase);
        onLosingLife();
        console.log(lifes);
    })

    fourthAnswer.addEventListener('click', () => {
        console.log('click');
        onChangeQuestionIndex();
        onChangeAnswersIndex();
        createSecondPage(dataBase);
    })


    gamePage.appendChild(answersBlock);
    answersBlock.appendChild(firstAnswer);
    answersBlock.appendChild(secondAnswer);
    answersBlock.appendChild(thirdAnswer);
    answersBlock.appendChild(fourthAnswer);

    return answersBlock;
}