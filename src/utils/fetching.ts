
import { Data } from "../pages/pageTwo";

export let dataBase:Data;

export const fetching = async (selectedCountButton: number, selectedDifficultyButton: string, selectedTopics: string[]) => {
    dataBase = await fetch(`https://the-trivia-api.com/api/questions?limit=${selectedCountButton}&difficulty=${selectedDifficultyButton}&categories=${selectedTopics}`)
        .then(res => res.json())
    return dataBase
}