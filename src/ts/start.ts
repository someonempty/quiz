import { fetching } from "./fetching";
import { selectedTopics } from "./pageOne";
import { selectedDifficultyButton } from "./pageOne";
import { selectedCountButton } from "./pageOne";

const main: HTMLElement = document.querySelector('main')!;
const gamePage: HTMLElement = document.querySelector('.game-page')!;

export const createStartButton = () => {
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.innerText = 'Start';

    main.appendChild(startButton);

    startButton.onclick = async () => {
        main.style.display = 'none';
        gamePage.style.display = 'flex';

        const questions = await fetching(selectedTopics, selectedCountButton, selectedDifficultyButton);
        console.log(questions);
    }

    return startButton;
}