import { fetching } from "./fetching";
import { selectedTopics } from "./pageOne";
import { selectedDifficultyButton } from "./pageOne";
import { selectedCountButton } from "./pageOne";

export let dataBase:any;

export const getDataBase = async () => {
    
    dataBase = await fetching(selectedTopics, selectedCountButton, selectedDifficultyButton);
    return dataBase;
}