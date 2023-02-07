import { QuestionBlock } from "./question";
import { createCountBlock } from "./count";
import { Life } from "./lifes";
import { AnswersBlock } from "./answers";
import { selectedCountButton } from "./pageOne";

export let questionIndex: number = 0;
export let answerIndex: number = 0;
export let lifes: number = 3;
const gamePage: HTMLElement = document.querySelector('.game-page')!;
const lifesBlock = document.createElement('div');
lifesBlock.classList.add('lifes-block');
const countAndLifesBlock = document.createElement('div');
countAndLifesBlock.classList.add('count-and-lifes-block');

const questionBlockRender = (dataBase:any) => {
    gamePage.innerHTML = '';
    gamePage.appendChild(QuestionBlock(dataBase, questionIndex));
}

const changeQuestionIndex = () => {
    questionIndex += 1;
}

const countAndLifesBlockRender = () => {
    countAndLifesBlock.innerHTML = '';
    gamePage.appendChild(countAndLifesBlock);
    countAndLifesBlock.appendChild(createCountBlock(questionIndex, selectedCountButton));
    countAndLifesBlock.appendChild(lifesBlock);
}

const losingLife = () => {
    lifes -= 1;
    Life();
    return lifes;
}

export const heartsRender = () => {
    lifesBlock.appendChild(Life());
    return lifesBlock;
}

const answersBlockRender = (dataBase:any) => {
    gamePage.appendChild(AnswersBlock(dataBase, answerIndex, lifes, changeQuestionIndex, changeAnswersIndex, losingLife, dataBase));
}

const changeAnswersIndex = () => {
    answerIndex += 1;
}

heartsRender();

export const createSecondPage = async (dataBase: any) => {
    
    questionBlockRender(dataBase);
    countAndLifesBlockRender();
    answersBlockRender(dataBase);
}