const topics:HTMLElement = document.querySelector('.topics')!;
let selectedTopics:any = [];

export const createTopic = (title:any) => {

    const topic = document.createElement('div');
    const topicTitle = document.createElement('span');

    topics.appendChild(topic);
    topic.appendChild(topicTitle);

    topicTitle.innerHTML = title;

    topic.addEventListener('click', () => {
        topic.classList.toggle('topic-active');
        if (topic.classList.contains('topic-active')) {
            selectedTopics.push(topic.innerText);
            console.log(selectedTopics);
        }
            
    })

    topic.classList.add('topic');
    topicTitle.classList.add('topic-title');

    return topic;
}