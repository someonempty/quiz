import { questionIndex } from "./pageTwo";

const gamePage: HTMLElement = document.querySelector('.game-page')!;

export const createQuestionBlock = (questions:any) => {

   const questionBlock = document.createElement('div');

   gamePage.innerHTML = '';

   questionBlock.innerText = questions[questionIndex].question;

   questionBlock.classList.add('question-block');

   gamePage.appendChild(questionBlock);

   return questionBlock;
}
