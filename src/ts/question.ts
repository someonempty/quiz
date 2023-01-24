 const gamePage:HTMLElement = document.querySelector('.game-page')!;
 import { questions } from "./fetching";

 export const createQustionBlock = () => {
    const questionBlock = document.createElement('div');

   console.log(questions)
    questionBlock.classList.add('question-block');
    
    gamePage.appendChild(questionBlock);

    return questionBlock;
 }
