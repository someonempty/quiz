import { Topic } from '../components/topic';
import { SettingsBlock } from "../components/settings";
import { StartButton } from "../components/start";
import { createSecondPage } from './pageTwo';

const gamePage: HTMLElement = document.querySelector('.game-page')!;
const main: HTMLElement = document.querySelector('main')!;
const topics:HTMLElement = document.querySelector('.topics')!;

export let selectedTopics:string[] = [];
export let selectedDifficultyButton:string;
export let selectedCountButton:number;

const topicsArray = [
  {title: 'General'}, 
  {title: 'Geography'}, 
  {title: 'Sport'},
  {title: 'History'}, 
  {title: 'Arts'},
  {title: 'Film'}, 
  {title: 'Science'},
  {title: 'Food'}
];

const topicRender = () => {
  topicsArray.forEach(topic => {
      topics.appendChild(Topic(topic.title, selectedTopics))
  })
}

function checkDifficulty() {
  const radios:NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="difficulty"]');
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedDifficultyButton = radio.value;
    }
  })
}

function checkCount() {
  const counts:NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="count"]');
  counts.forEach((count) => {
    if (count.checked) {
      selectedCountButton = +count.value;
    }
  })
}


function hideFirstPage ()  {
main.style.display = 'none';
  gamePage.style.display = 'flex';
}

export const createFirstPage = () => {
    
    topicRender();
    main.appendChild(SettingsBlock(checkDifficulty, checkCount)) ;
    main.appendChild(StartButton(createSecondPage, hideFirstPage)); 
}