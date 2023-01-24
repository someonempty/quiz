import '../style.scss'
import {createTopic} from './topic'
import { createSettingsBlock } from './settings';
import { createStartButton } from './start';


const topics:HTMLElement = document.querySelector('.topics')!;

export const topicsArray = [
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
        topics.appendChild(createTopic(topic.title, topic.data))
    })
}

topicRender();
createSettingsBlock();
createStartButton();