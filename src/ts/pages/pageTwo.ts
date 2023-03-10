// -----------------------------------------------Импортирую компоненты-----------------------------------------------
import { QuestionBlock } from "../components/question";
import { CountBlock } from "../components/countBlock";
import { Life } from "../components/life";
import { selectedCountButton } from "./pageOne";
import { LifesBlock } from "../components/lifesBlock";
import { CountAndLifesBlock } from "../components/countAndLifesBlock";
import { Answer } from "../components/Answer";

export type Data = [{
    category: string, 
    correctAnswer: string,
    difficulty: string,
    id: string,
    incorrectAnswers: string [],
    isNiche: boolean,
    question: string,
    regions: [],
    tags: string [],
    type: string
}];

// -----------------------------------------------Общие переменные-----------------------------------------------
export let questionIndex: number = 1;
export let answerIndex: number = 0;
export let lifes: number = 3;

// -----------------------------------------------Получаю дом элемент(ы)-----------------------------------------------
const gamePage: HTMLElement = document.querySelector('.game-page')!;
let countAndLifesBlock = CountAndLifesBlock();
let lifesBlock = LifesBlock();

// -----------------------------------------------Рендеры компонентов-----------------------------------------------
const questionBlockRender = (dataBase:Data) => {
    gamePage.innerHTML = '';
    gamePage.appendChild(QuestionBlock(dataBase, questionIndex));
}

const heartsRender = () => {
    lifesBlock.innerHTML = ''
    for (let i = 0; i < lifes; i++) {
        lifesBlock.appendChild(Life());
    }
}

const countAndLifesBlockRender = () => {
    countAndLifesBlock.innerHTML = '';
    countAndLifesBlock.appendChild(CountBlock(questionIndex, selectedCountButton));
    countAndLifesBlock.appendChild(lifesBlock);
    gamePage.appendChild(countAndLifesBlock);
}

export const answersRender= (dataBase: Data) => {
    let answersArray:Array<string> = [];
    let correctAnswer:string;
    answersArray.push(dataBase[answerIndex].correctAnswer, dataBase[answerIndex].incorrectAnswers[0], dataBase[answerIndex].incorrectAnswers[1], dataBase[answerIndex].incorrectAnswers[2]);
    shuffle(answersArray); 
    correctAnswer = dataBase[answerIndex].correctAnswer;
    let answersBlock = document.createElement('div');
    answersBlock.classList.add('answers-block');

    for (let i = 0; i < answersArray.length; i++) {
        let answer = Answer(dataBase , changeQuestionIndex, changeAnswersIndex, losingLife, correctAnswer);
        
        answer.innerHTML = answersArray[i];
        
        answersBlock.appendChild(answer);
    }

gamePage.appendChild(answersBlock);
}

// -----------------------------------------------Вспомогательные функции-----------------------------------------------
function changeAnswersIndex() {
    answerIndex += 1;
}

function changeQuestionIndex() {
    questionIndex += 1;
}

function losingLife() {
    lifes -= 1;
    if (lifes === 0) {
        stopGame();
    }
    return lifes;
}

function stopGame() {
  
        setTimeout(() => {
            alert('You have lost!');
            gamePage.style.display='none';
        }, 100)
}

function shuffle(array:string[]) {
    array.sort(() => Math.random() - 0.5);
  }

// -----------------------------------------------Функция создания второй страницы-----------------------------------------------
export const createSecondPage = async (dataBase: Data) => {
    heartsRender();
    questionBlockRender(dataBase);
    countAndLifesBlockRender();
    answersRender(dataBase);
}
