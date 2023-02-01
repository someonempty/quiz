
const main: HTMLElement = document.querySelector('main')!;
const gamePage: HTMLElement = document.querySelector('.game-page')!;

export const createStartButton = (onCreateSecondPage:Function) => {
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.innerText = 'Start';

    main.appendChild(startButton);

    startButton.onclick = async () => {
        main.style.display = 'none';
        gamePage.style.display = 'flex';
        onCreateSecondPage();
    }

    return startButton;
}