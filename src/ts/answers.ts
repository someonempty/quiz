
const gamePage: HTMLElement = document.querySelector('.game-page')!;
export let answers: { incorrectAnswers: string; }[];

export const createAnswersBlock = () => {
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

    // firstAnswer.innerText = answers.incorrectAnswers[0];
    // secondAnswer.innerText = answers.incorrectAnswers[1];
    // thirdAnswer.innerText = answers.incorrectAnswers[2];
    // fourthAnswer.innerText = answers.correctAnswer;

    // firstAnswer.addEventListener('click', () => {
    //     console.log('click');
    //     onChangeQuestionIndex();
    // })

    gamePage.appendChild(answersBlock);
    answersBlock.appendChild(firstAnswer);
    answersBlock.appendChild(secondAnswer);
    answersBlock.appendChild(thirdAnswer);
    answersBlock.appendChild(fourthAnswer);

    return answersBlock;
}