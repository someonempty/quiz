
const gamePage: HTMLElement = document.querySelector('.game-page')!;
export let answers: { incorrectAnswers: string; }[];

export const createAnswersBlock = (answers: any) => {
    const answersBlock = document.createElement('div');
    const firstAnswer = document.createElement('button');
    const secondAnswer = document.createElement('button');
    const thirdAnswer = document.createElement('button');
    const fourthAnswer = document.createElement('button');

    answersBlock.classList.add('answers-block');
    firstAnswer.classList.add('first-answer');
    secondAnswer.classList.add('second-answer');
    thirdAnswer.classList.add('third-answer');
    fourthAnswer.classList.add('fourth-answer');

    firstAnswer.innerText = answers[0].incorrectAnswers[0];
    secondAnswer.innerText = answers[0].incorrectAnswers[1];
    thirdAnswer.innerText = answers[0].incorrectAnswers[2];
    fourthAnswer.innerText = answers[0].correctAnswer;

    gamePage.appendChild(answersBlock);
    answersBlock.appendChild(firstAnswer);
    answersBlock.appendChild(secondAnswer);
    answersBlock.appendChild(thirdAnswer);
    answersBlock.appendChild(fourthAnswer);

    return answersBlock;
}