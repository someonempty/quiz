import { countAndLifesBlock } from "./countAndLifes";
import { gamePage } from "./countAndLifes";

export const createLifesBlock = () => {

    // countAndLifesBlock.innerHTML = '';

    const lifesBlock = document.createElement('div');
    const lifeOne = document.createElement('div');
    const lifeTwo = document.createElement('div');
    const lifeThree = document.createElement('div');

    lifesBlock.classList.add('lifes-block');
    lifeOne.classList.add('life');
    lifeTwo.classList.add('life');
    lifeThree.classList.add('life');

    gamePage.appendChild(countAndLifesBlock);
    countAndLifesBlock.appendChild(lifesBlock);
    lifesBlock.appendChild(lifeOne);
    lifesBlock.appendChild(lifeTwo);
    lifesBlock.appendChild(lifeThree);

    return lifesBlock;
}
