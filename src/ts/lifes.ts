import { countAndLifesBlock } from "./count";
import { gamePage } from "./count";

export const createLifesBlock = (lifes:any) => {

    const lifesBlock = document.createElement('div');

    for (lifes; lifes > 0; lifes--) {
        const lifeOne = document.createElement('div');
        lifeOne.classList.add('life');
        lifesBlock.appendChild(lifeOne);
        console.log(lifes);
    }
        
    
    // const lifeTwo = document.createElement('div');
    // const lifeThree = document.createElement('div');

    lifesBlock.classList.add('lifes-block');
    
    // lifeTwo.classList.add('life');
    // lifeThree.classList.add('life');

    gamePage.appendChild(countAndLifesBlock);
    countAndLifesBlock.appendChild(lifesBlock);
    
    // lifesBlock.appendChild(lifeTwo);
    // lifesBlock.appendChild(lifeThree);

    return lifesBlock;
}
