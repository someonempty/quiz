const main:HTMLElement = document.querySelector('main')!;
const gamePage:HTMLElement = document.querySelector('.game-page')!;
import { createQuestionBlock } from './question';
import { createLifesBlock } from './lifes';
import { createAnswersBlock } from './answers';
 
 export const createStartButton = () => {
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.innerText = 'Start';

    main.appendChild(startButton);

    startButton.onclick = () => {
        main.style.display = 'none';
        gamePage.style.display = 'flex';
        
        createQuestionBlock();
        createLifesBlock();
        createAnswersBlock();
    }

    return startButton;
}