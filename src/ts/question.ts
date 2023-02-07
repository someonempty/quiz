
export const QuestionBlock = (questions:any, questionIndex:number) => {

   const questionBlock = document.createElement('div');

   questionBlock.innerText = questions[questionIndex].question;

   questionBlock.classList.add('question-block');

   return questionBlock;
} 
