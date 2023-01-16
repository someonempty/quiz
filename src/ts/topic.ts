const topics:HTMLElement = document.querySelector('.topics')!;

export const createTopic = (title:any) => {
    const topic = document.createElement('div');
    const topicTitle = document.createElement('span');

    topics.appendChild(topic);
    topic.appendChild(topicTitle);

    topicTitle.innerHTML = title;

    topic.addEventListener('click', () => {
        topic.classList.toggle('topic-active');
    })

    topic.classList.add('topic');
    topicTitle.classList.add('topic-title');

    return topic;
}