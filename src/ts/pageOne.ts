import '../style.scss'
import { createTopic } from "./topic";
import { createSettingsBlock } from "./settings";
import { createStartButton } from "./start";
import { createSecondPage } from './pageTwo';

const topics:HTMLElement = document.querySelector('.topics')!;
export let selectedTopics:any = [];
export let selectedDifficultyButton:string;
export let selectedCountButton:string;

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

export const createFirstPage = () => {
    const topicRender = () => {
        topicsArray.forEach(topic => {
            topics.appendChild(createTopic(topic.title, topic.data))
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
    
    topicRender();
    createSettingsBlock(checkDifficulty, checkCount);
    createStartButton(createSecondPage);
}