import { Topic } from '../components/topic';
import { SettingsBlock } from "../components/settings";
import { StartButton } from "../components/start";
import { createSecondPage } from './pageTwo';

const gamePage: HTMLElement = document.querySelector('.game-page')!;
const main: HTMLElement = document.querySelector('main')!;
const topics:HTMLElement = document.querySelector('.topics')!;

export let selectedTopics:any = [];
export let selectedDifficultyButton:string;
export let selectedCountButton:number;

const topicsArray = [
    {title: 'General', data: 'General'}, 
    {title: 'Geography', data: 'Geography'}, 
    {title: 'Sport', data: 'Sport'},
    {title: 'History', data: 'History'}, 
    {title: 'Arts', data: 'Arts'},
    {title: 'Films', data: 'Film'}, 
    {title: 'Science', data: 'Science'}, 
    {title: 'Food', data: 'Food'}
];

const topicRender = () => {
  topicsArray.forEach(topic => {
      topics.appendChild(Topic(topic.title, topic.data, selectedTopics))
  })
}

function checkDifficulty() {
  const radios:any = document.querySelectorAll('input[name="difficulty"]');
  for (const r of radios) {
      if (r.checked) {
        selectedDifficultyButton = r.value;
        console.log(selectedDifficultyButton)
      }
    }
}

function checkCount() {
  const counts:any = document.querySelectorAll('input[name="count"]');
  for (const c of counts) {
      if (c.checked) {
        selectedCountButton = c.value;
        console.log(selectedCountButton);
      }
    }
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