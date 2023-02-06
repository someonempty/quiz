import { createQuestionBlock } from "./question";
import { createCountBlock } from "./count";
import { createLifesBlock } from "./lifes";
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

    return lifes;
}



export const createSecondPage = async (dataBase:any) => {
    createQuestionBlock(dataBase);
    createCountBlock(questionIndex);

    if (lifes < 3) {
        createLifesBlock(lifes);
    }
    else {
        createLifesBlock(lifes--);
    }
    
    await createAnswersBlock(dataBase, changeQuestionIndex, changeAnswersIndex, losingLife);
}