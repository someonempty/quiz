import { createQuestionBlock } from "./question";
import { createLifesBlock } from "./countAndLifes";
import { createAnswersBlock } from "./answers";

export let questionIndex:number = 0;
export let answerIndex:number = 0;
export let lifes:number = 3;

const changeQuestionIndex = () => {
    questionIndex += 1;
}

const changeAnswersIndex = () => {
    answerIndex += 1;
}

const losingLife = () => {
    lifes -= 1;
}


export const createSecondPage = (dataBase:any) => {
    createQuestionBlock(dataBase);
    createLifesBlock(questionIndex);
    createAnswersBlock(dataBase, changeQuestionIndex, changeAnswersIndex, losingLife);
}