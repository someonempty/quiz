
export const fetching = async (categories: string[], limit: number, difficulty: string) => {
    const res = await fetch(`https://the-trivia-api.com/api/questions?limit=${limit}&difficulty=${difficulty}&categories=${categories}`)
        .then(res => res.json())
    return res
}