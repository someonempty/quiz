
const main: HTMLElement = document.querySelector('main')!;

export const createSettingsBlock = () => {

    let selectedDifficultyButton;
    let selectedCountButton;

    const settings = document.createElement('div');

    const easy = document.createElement('input');
    const medium = document.createElement('input');
    const hard = document.createElement('input');
    const fifteen = document.createElement('input');
    const thirty = document.createElement('input');
    const fifty = document.createElement('input');

    const difficulty = document.createElement('span');
    const count = document.createElement('span');
    const easyCustom = document.createElement('span');
    const mediumCustom = document.createElement('span');
    const hardCustom = document.createElement('span');
    const fifteenCustom = document.createElement('span');
    const thirtyCustom = document.createElement('span');
    const fiftyCustom = document.createElement('span');

    easy.type = 'radio';
    medium.type = 'radio';
    hard.type = 'radio';
    fifteen.type = 'radio';
    thirty.type = 'radio';
    fifty.type = 'radio';

    easy.name = 'difficulty';
    medium.name = 'difficulty';
    hard.name = 'difficulty';
    fifteen.name = 'count';
    thirty.name = 'count';
    fifty.name = 'count';

    easy.value = 'easy';
    medium.value = 'medium';
    hard.value = 'hard';
    fifteen.value = 'fifteen';
    thirty.value = 'thirty';
    fifty.value = 'fifty';

    const easyLabel = document.createElement('label');
    const mediumLabel = document.createElement('label');
    const hardLabel = document.createElement('label');
    const fifteenLabel = document.createElement('label');
    const thirtyLabel = document.createElement('label');
    const fiftyLabel = document.createElement('label');

    settings.classList.add('settings');
    difficulty.classList.add('difficulty');
    easy.classList.add('easy');
    easyCustom.classList.add('difficulty-button');
    medium.classList.add('medium');
    mediumCustom.classList.add('difficulty-button');
    hard.classList.add('hard');
    hardCustom.classList.add('difficulty-button');
    count.classList.add('count');
    fifteen.classList.add('fifteen');
    fifteenCustom.classList.add('count-button');
    thirty.classList.add('thirty');
    thirtyCustom.classList.add('count-button');
    fifty.classList.add('fifty');
    fiftyCustom.classList.add('count-button');

    main.appendChild(settings);
    settings.appendChild(difficulty);
    settings.appendChild(easyLabel);
    settings.appendChild(mediumLabel);
    settings.appendChild(hardLabel);
    settings.appendChild(count);
    settings.appendChild(fifteenLabel);
    settings.appendChild(thirtyLabel);
    settings.appendChild(fiftyLabel);
    easyLabel.appendChild(easy);
    easyLabel.appendChild(easyCustom);
    mediumLabel.appendChild(medium);
    mediumLabel.appendChild(mediumCustom);
    hardLabel.appendChild(hard);
    hardLabel.appendChild(hardCustom);
    fifteenLabel.appendChild(fifteen);
    fifteenLabel.appendChild(fifteenCustom);
    thirtyLabel.appendChild(thirty);
    thirtyLabel.appendChild(thirtyCustom);
    fiftyLabel.appendChild(fifty);
    fiftyLabel.appendChild(fiftyCustom);

    difficulty.innerText = 'Difficulty:';
    count.innerText = 'Count:';
    easyCustom.innerText = 'Easy';
    mediumCustom.innerText = 'Medium';
    hardCustom.innerText = 'Hard';
    fifteenCustom.innerText = '15';
    thirtyCustom.innerText = '30';
    fiftyCustom.innerText = '50';

    const radios:any = document.querySelectorAll('input[name="difficulty"]');
    const counts:any = document.querySelectorAll('input[name="count"]');

    function checkDifficulty() {
        for (const r of radios) {
            if (r.checked) {
              selectedDifficultyButton = r.value;
              console.log(selectedDifficultyButton);
            }
          }
    }

    function checkCount() {
        for (const c of counts) {
            if (c.checked) {
              selectedCountButton = c.value;
              console.log(selectedCountButton);
            }
          }
    }

    easy.addEventListener('click', () => {
        checkDifficulty();
    });

    medium.addEventListener('click', () => {
        checkDifficulty();
    });

    hard.addEventListener('click', () => {
        checkDifficulty();
    });

    fifteen.addEventListener('click', () => {
        checkCount();
    });

    thirty.addEventListener('click', () => {
        checkCount();
    });

    fifty.addEventListener('click', () => {
        checkCount();
    });


    return settings;
}