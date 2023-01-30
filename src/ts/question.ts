
const gamePage: HTMLElement = document.querySelector('.game-page')!;

export const createQuestionBlock = () => {

   const questionBlock = document.createElement('div');

   gamePage.innerHTML = '';

   questionBlock.classList.add('question-block');

   gamePage.appendChild(questionBlock);

   return questionBlock;
}
