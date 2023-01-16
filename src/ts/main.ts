import '../style.scss'
import {createTopic} from './topic'
import { createSettingsBlock } from './settings';
import { createStartButton } from './start';
import { createQustionBlock } from './question';
import { createLifesBlock } from './lifes';
import { createAnswersBlock } from './answers';

const topics:HTMLElement = document.querySelector('.topics')!;

export const topicsArray = [
    {title: 'General'}, 
    {title: 'Geography'}, 
    {title: 'Sport'}, 
    {title: 'History'}, 
    {title: 'Arts'}, 
    {title: 'Films'}, 
    {title: 'Science'}, 
    {title: 'Food'}
];


const topicRender = () => {
    topicsArray.forEach(topic => {
        topics.appendChild(createTopic(topic.title))
    })
}

topicRender();
createSettingsBlock();
createStartButton();
createQustionBlock();
createLifesBlock();
createAnswersBlock();