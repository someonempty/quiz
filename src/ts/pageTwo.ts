import { createQuestionBlock } from "./question";
import { createLifesBlock } from "./lifes";
import { createAnswersBlock } from "./answers";
import { fetching } from "./fetching";
import { selectedTopics } from "./pageOne";
import { selectedDifficultyButton } from "./pageOne";
import { selectedCountButton } from "./pageOne";

export let questionIndex:number = 0;
// let answerIndex:number = 0;
const changeQuestionIndex = () => {
    questionIndex += 1;
}

// const changeAnswerIndex = () => {
//     answerIndex += 1;
// }
// getDataBase();


export const createSecondPage = async () => {
    const dataBase = await fetching(selectedTopics, selectedCountButton, selectedDifficultyButton);
    console.log(dataBase);
    createQuestionBlock(dataBase);
    createLifesBlock();
    createAnswersBlock(dataBase, changeQuestionIndex);
}