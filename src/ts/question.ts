import { fetching } from "./fetching";
import { selectedTopics } from "./topic";
import { selectedCountButton } from "./settings";
import { selectedDifficultyButton } from "./settings";
 
 const gamePage:HTMLElement = document.querySelector('.game-page')!;

 export const createQuestionBlock = async () => {
    const questionBlock = document.createElement('div');

    questionBlock.classList.add('question-block');

    const questions = await fetching(selectedTopics, +selectedCountButton, selectedDifficultyButton);

    console.log(questions);
    
    questions.forEach((element: { question: string; }) => {
      questionBlock.innerText = element.question;
    });
    
    gamePage.appendChild(questionBlock);

    return questionBlock;
 }
