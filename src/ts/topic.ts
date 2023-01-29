

const topics:HTMLElement = document.querySelector('.topics')!;
export let selectedTopics:any = [];

export const createTopic = (title:string, data:string) => {

    const topic = document.createElement('div');
    const topicTitle = document.createElement('span');

    topics.appendChild(topic);
    topic.appendChild(topicTitle);
    topicTitle.innerHTML = title;

    topic.setAttribute("data-value", data);

    topic.addEventListener('click', () => {
        topic.classList.toggle('topic-active');
        if (topic.classList.contains('topic-active')) {
            selectedTopics.push(topic.dataset.value?.toString());
        }
    })

    topic.classList.add('topic');
    topicTitle.classList.add('topic-title');


    return topic;
}