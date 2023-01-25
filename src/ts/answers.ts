import { fetching } from "./fetching";
import { selectedTopics } from "./topic";
import { selectedCountButton } from "./settings";
import { selectedDifficultyButton } from "./settings";

const gamePage:HTMLElement = document.querySelector('.game-page')!;

export const createAnswersBlock = async () => {
    const answersBlock = document.createElement('div');
    const firstAnswer = document.createElement('button');
    const secondAnswer = document.createElement('button');
    const thirdAnswer = document.createElement('button');

    answersBlock.classList.add('answers-block');
    firstAnswer.classList.add('first-answer');
    secondAnswer.classList.add('second-answer');
    thirdAnswer.classList.add('third-answer');

    const answers = await fetching(selectedTopics, +selectedCountButton, selectedDifficultyButton);

    answers.forEach((element: { incorrectAnswers: string; }) => {
        firstAnswer.innerText = element.incorrectAnswers;
        secondAnswer.innerText = element.incorrectAnswers;
        thirdAnswer.innerText = element.incorrectAnswers;
      });
      

    gamePage.appendChild(answersBlock);
    answersBlock.appendChild(firstAnswer);
    answersBlock.appendChild(secondAnswer);
    answersBlock.appendChild(thirdAnswer);

    return answersBlock;
}