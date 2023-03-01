import { fetching } from "../utils/fetching";
import { dataBase } from "../utils/fetching";
import { selectedTopics } from "../pages/pageOne";
import { selectedDifficultyButton } from "../pages/pageOne";
import { selectedCountButton } from "../pages/pageOne";

export const StartButton = (onCreateSecondPage:Function, onHideFirstPage:Function) => {
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.innerText = 'Start';

    startButton.onclick = async () => {
        if (!selectedTopics || !selectedDifficultyButton || !selectedCountButton) {
            startButton.disabled;
        } else {
                onHideFirstPage();
                await fetching(selectedCountButton, selectedDifficultyButton, selectedTopics);
                await console.log(dataBase);
                onCreateSecondPage(dataBase);
        }
    }

    return startButton;
}