
export const SettingsBlock = (onCheckDifficulty:Function, onCheckCount:Function) => {

    const settings = document.createElement('div');

    const easyInput = document.createElement('input');
    const mediumInput = document.createElement('input');
    const hardInput = document.createElement('input');
    const fifteenQuestion = document.createElement('input');
    const thirtyQuestion = document.createElement('input');
    const fiftyQuestion = document.createElement('input');

    const difficulty = document.createElement('span');
    const count = document.createElement('span');
    const easyInputCustom = document.createElement('span');
    const mediumInputCustom = document.createElement('span');
    const hardInputCustom = document.createElement('span');
    const fifteenQuestionCustom = document.createElement('span');
    const thirtyQuestionCustom = document.createElement('span');
    const fiftyQuestionCustom = document.createElement('span');

    easyInput.type = 'radio';
    mediumInput.type = 'radio';
    hardInput.type = 'radio';
    fifteenQuestion.type = 'radio';
    thirtyQuestion.type = 'radio';
    fiftyQuestion.type = 'radio';

    easyInput.name = 'difficulty';
    mediumInput.name = 'difficulty';
    hardInput.name = 'difficulty';
    fifteenQuestion.name = 'count';
    thirtyQuestion.name = 'count';
    fiftyQuestion.name = 'count';

    easyInput.value = 'easy';
    mediumInput.value = 'medium';
    hardInput.value = 'hard';
    fifteenQuestion.value = '15';
    thirtyQuestion.value = '30';
    fiftyQuestion.value = '50';

    const easyLabel = document.createElement('label');
    const mediumLabel = document.createElement('label');
    const hardLabel = document.createElement('label');
    const fifteenQuestionLabel = document.createElement('label');
    const thirtyQuestionLabel = document.createElement('label');
    const fiftyQuestionLabel = document.createElement('label');

    settings.classList.add('settings');
    difficulty.classList.add('difficulty');
    easyInput.classList.add('easy');
    easyInputCustom.classList.add('difficulty-button');
    mediumInput.classList.add('medium');
    mediumInputCustom.classList.add('difficulty-button');
    hardInput.classList.add('hard');
    hardInputCustom.classList.add('difficulty-button');
    count.classList.add('count');
    fifteenQuestion.classList.add('fifteenQuestion');
    fifteenQuestionCustom.classList.add('count-button');
    thirtyQuestion.classList.add('thirtyQuestion');
    thirtyQuestionCustom.classList.add('count-button');
    fiftyQuestion.classList.add('fiftyQuestion');
    fiftyQuestionCustom.classList.add('count-button');

    settings.appendChild(difficulty);
    settings.appendChild(easyLabel);
    settings.appendChild(mediumLabel);
    settings.appendChild(hardLabel);
    settings.appendChild(count);
    settings.appendChild(fifteenQuestionLabel);
    settings.appendChild(thirtyQuestionLabel);
    settings.appendChild(fiftyQuestionLabel);
    easyLabel.appendChild(easyInput);
    easyLabel.appendChild(easyInputCustom);
    mediumLabel.appendChild(mediumInput);
    mediumLabel.appendChild(mediumInputCustom);
    hardLabel.appendChild(hardInput);
    hardLabel.appendChild(hardInputCustom);
    fifteenQuestionLabel.appendChild(fifteenQuestion);
    fifteenQuestionLabel.appendChild(fifteenQuestionCustom);
    thirtyQuestionLabel.appendChild(thirtyQuestion);
    thirtyQuestionLabel.appendChild(thirtyQuestionCustom);
    fiftyQuestionLabel.appendChild(fiftyQuestion);
    fiftyQuestionLabel.appendChild(fiftyQuestionCustom);

    difficulty.innerText = 'Difficulty:';
    count.innerText = 'Count:';
    easyInputCustom.innerText = 'Easy';
    mediumInputCustom.innerText = 'Medium';
    hardInputCustom.innerText = 'Hard';
    fifteenQuestionCustom.innerText = '15';
    thirtyQuestionCustom.innerText = '30';
    fiftyQuestionCustom.innerText = '50';

    easyInput.addEventListener('click', () => {
        onCheckDifficulty();
    });

    mediumInput.addEventListener('click', () => {
        onCheckDifficulty();
    });

    hardInput.addEventListener('click', () => {
        onCheckDifficulty();
    });

    fifteenQuestion.addEventListener('click', () => {
        onCheckCount();
    });

    thirtyQuestion.addEventListener('click', () => {
        onCheckCount();
    });

    fiftyQuestion.addEventListener('click', () => {
        onCheckCount();
    });

    return settings;
}