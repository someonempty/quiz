// -----------------------------------------------Импортирую компоненты-----------------------------------------------

import { QuestionBlock } from "./question";
import { CountBlock } from "./count";
import { Life } from "./lifes";
import { AnswersBlock } from "./answers";
import { selectedCountButton } from "./pageOne";
import { LifesBlock } from "./lifesBlock";
import { CountAndLifesBlock } from "./countAndLifesBlock";


// -----------------------------------------------Получаю дом элемент(ы)-----------------------------------------------
const gamePage: HTMLElement = document.querySelector('.game-page')!;
let countAndLifesBlock = CountAndLifesBlock();
let lifesBlock = LifesBlock();

// -----------------------------------------------Общие переменные-----------------------------------------------

export let questionIndex: number = 0;
export let answerIndex: number = 0;
export let lifes: number = 3;

// -----------------------------------------------Рендеры компонентов-----------------------------------------------

const questionBlockRender = (dataBase:any) => {
    gamePage.innerHTML = '';
    gamePage.appendChild(QuestionBlock(dataBase, questionIndex));
}

const heartsRender = () => {
    return Life();
}

const countAndLifesBlockRender = () => {
    countAndLifesBlock.innerHTML = '';
    countAndLifesBlock.appendChild(CountBlock(questionIndex, selectedCountButton));
    countAndLifesBlock.appendChild(lifesBlock);
    lifesBlock.appendChild(heartsRender());
    gamePage.appendChild(countAndLifesBlock);
}

const answersBlockRender = (dataBase:any) => {
    gamePage.appendChild(AnswersBlock(dataBase, answerIndex, lifes, changeQuestionIndex, changeAnswersIndex, losingLife, dataBase));
}

// -----------------------------------------------Вспомогательные функции-----------------------------------------------

const changeAnswersIndex = () => {
    answerIndex += 1;
}

const changeQuestionIndex = () => {
    questionIndex += 1;
}

const losingLife = () => {
    lifes -= 1;
    return lifes;
}

// -----------------------------------------------Фунция создания второй страницы-----------------------------------------------

export const createSecondPage = async (dataBase: any) => {
    questionBlockRender(dataBase);
    countAndLifesBlockRender();
    answersBlockRender(dataBase);
}