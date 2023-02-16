import { fetching } from "./fetching";
import { selectedTopics } from "../pages/pageOne";
import { selectedDifficultyButton } from "../pages/pageOne";
import { selectedCountButton } from "../pages/pageOne";
import { Data } from "../pages/pageTwo";

export let dataBase:Data;

export const getDataBase = async () => {
    
    dataBase = await fetching(selectedTopics, selectedCountButton, selectedDifficultyButton);
    return dataBase;
}


