import { fetching } from "./fetching";
import { selectedTopics } from "./pageOne";
import { selectedDifficultyButton } from "./pageOne";
import { selectedCountButton } from "./pageOne";
import { Data } from "./pageTwo";

export let dataBase:Data;

export const getDataBase = async () => {
    
    dataBase = await fetching(selectedTopics, selectedCountButton, selectedDifficultyButton);
    return dataBase;
}


