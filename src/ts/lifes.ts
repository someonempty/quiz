const gamePage:HTMLElement = document.querySelector('.game-page')!;

export const createLifesBlock = () => {
    const lifesBlock = document.createElement('div');

    lifesBlock.classList.add('lifes-block');

    gamePage.appendChild(lifesBlock);
}