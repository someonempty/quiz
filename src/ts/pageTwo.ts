import { createQuestionBlock } from "./question";
import { createLifesBlock } from "./lifes";
import { createAnswersBlock } from "./answers";
// import { fetching } from "./fetching";
// import { selectedTopics } from "./pageOne";
// import { selectedDifficultyButton } from "./pageOne";
// import { selectedCountButton } from "./pageOne";

export let questionIndex:number = 0;
export let answerIndex:number = 0;

const changeQuestionIndex = () => {
    questionIndex += 1;
}

const changeAnswersIndex = () => {
    answerIndex += 1;
}

export const createSecondPage = (dataBase:any) => {

    createQuestionBlock(dataBase);
    createLifesBlock();
    createAnswersBlock(dataBase, changeQuestionIndex, changeAnswersIndex);
}