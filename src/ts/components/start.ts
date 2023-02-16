import { getDataBase } from "../functions/getDataBase";
import { dataBase } from "../functions/getDataBase";

export const StartButton = (onCreateSecondPage:Function, onHideFirstPage:Function) => {
    const startButton = document.createElement('button');
    startButton.classList.add('start-button');
    startButton.innerText = 'Start';

    startButton.onclick = async () => {
        onHideFirstPage();
        await getDataBase();
        await console.log(dataBase);
        onCreateSecondPage(dataBase);
    }

    return startButton;
}