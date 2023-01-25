
export const fetching = async (categories:any, limit:any, difficulty:any) => {
    const res = await fetch(`https://the-trivia-api.com/api/questions?limit=${limit}&difficulty=${difficulty}&categories=${categories}`)
    .then(res => res.json())
    return res
}