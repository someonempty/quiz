
export const Topic = (title:string, selectedTopics: string[]) => {

    const topic = document.createElement('div');
    const topicTitle = document.createElement('span');

    topicTitle.innerText = title;

    topic.appendChild(topicTitle);

    topic.addEventListener('click', () => {
        topic.classList.toggle('topic-active');
        if (topic.classList.contains('topic-active')) {
            selectedTopics.push(title);
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