import { Data } from "./pageTwo";

export const QuestionBlock = (questions:Data, questionIndex:number) => {

   const questionBlock = document.createElement('div');

   questionBlock.innerText = questions[--questionIndex].question;

   questionBlock.classList.add('question-block');

   return questionBlock;
} 
