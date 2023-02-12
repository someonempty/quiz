
export const Topic = (title:string, data:string, selectedTopics: any) => {

    const topic = document.createElement('div');
    const topicTitle = document.createElement('span');

    topic.appendChild(topicTitle);

    topicTitle.innerHTML = title;

    topic.setAttribute("data-value", data);

    topic.addEventListener('click', () => {
        topic.classList.toggle('topic-active');
        if (topic.classList.contains('topic-active')) {
            selectedTopics.push(topic.dataset.value);
            console.log(selectedTopics);
        } else {
            selectedTopics.pop();
            console.log(selectedTopics);
        }
    })

    topic.classList.add('topic');
    topicTitle.classList.add('topic-title');

    return topic;
}