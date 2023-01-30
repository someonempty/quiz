import { createQuestionBlock } from "./question";
import { createLifesBlock } from "./lifes";
import { createAnswersBlock } from "./answers";

export const createSecondPage = () => {
    createQuestionBlock();
    createLifesBlock();
    createAnswersBlock();
}

