import { selectedCountButton } from "./pageOne";
// import { lifes } from "./pageTwo";

const gamePage:HTMLElement = document.querySelector('.game-page')!;

export const createLifesBlock = (questionIndex:number) => {
    const countAndLifesBlock = document.createElement('div');
    const countBlock = document.createElement('div');
    const lifesBlock = document.createElement('div');
    const lifeOne = document.createElement('div');
    const lifeTwo = document.createElement('div');
    const lifeThree = document.createElement('div');

    countAndLifesBlock.classList.add('count-and-lifes-block');
    countBlock.classList.add('count-block');
    lifesBlock.classList.add('lifes-block');
    lifeOne.classList.add('life');
    lifeTwo.classList.add('life');
    lifeThree.classList.add('life');
    
    countBlock.innerText = questionIndex.toString() + '/' + selectedCountButton;

    gamePage.appendChild(countAndLifesBlock);
    countAndLifesBlock.appendChild(countBlock);
    countAndLifesBlock.appendChild(lifesBlock);
    lifesBlock.appendChild(lifeOne);
    lifesBlock.appendChild(lifeTwo);
    lifesBlock.appendChild(lifeThree);
}