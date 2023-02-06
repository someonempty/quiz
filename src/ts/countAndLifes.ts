import { selectedCountButton } from "./pageOne";

export const gamePage:HTMLElement = document.querySelector('.game-page')!;
export const countAndLifesBlock = document.createElement('div');

export const createCountBlock = (questionIndex:number) => {

    countAndLifesBlock.innerHTML = '';

    const countBlock = document.createElement('div');
    
    countAndLifesBlock.classList.add('count-and-lifes-block');
    countBlock.classList.add('count-block');

    countBlock.innerText = questionIndex.toString() + '/' + selectedCountButton;

    gamePage.appendChild(countAndLifesBlock);
    countAndLifesBlock.appendChild(countBlock);

    return countBlock;
}