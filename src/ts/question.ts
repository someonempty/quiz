import { fetching } from "./fetching";
import { selectedTopics } from "./topic";
import { selectedCountButton } from "./settings";
import { selectedDifficultyButton } from "./settings";
import { createAnswersBlock } from "./answers";
import { createLifesBlock } from "./lifes";

const gamePage: HTMLElement = document.querySelector('.game-page')!;
export let questions: any;

export const createQuestionBlock = async () => {
   const questionBlock = document.createElement('div');

   questionBlock.classList.add('question-block');

   questions = await fetching(selectedTopics, selectedCountButton, selectedDifficultyButton);
   console.log(questions);

   questionBlock.innerText = questions[0].question;

   gamePage.appendChild(questionBlock);

   createLifesBlock();

   createAnswersBlock(questions);

   return questionBlock;
}
