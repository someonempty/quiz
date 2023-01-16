const gamePage:HTMLElement = document.querySelector('.game-page')!;

export const createAnswersBlock = () => {
    const answersBlock = document.createElement('div');

    answersBlock.classList.add('answers-block');

    gamePage.appendChild(answersBlock);

    return answersBlock;
}