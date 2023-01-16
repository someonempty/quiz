 const gamePage:HTMLElement = document.querySelector('.game-page')!;

 export const createQustionBlock = () => {
    const questionBlock = document.createElement('div');

    questionBlock.classList.add('question-block');
    
    gamePage.appendChild(questionBlock);
 }