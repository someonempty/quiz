export let questions:any = [];

export const fetching = (categories:any, limit:any, difficulty:any) => {
    fetch(`https://the-trivia-api.com/api/questions?limit=${limit}&difficulty=${difficulty}&categories=${categories}`)
    .then(res => res.json())
    .then(data => questions.push(data))
}