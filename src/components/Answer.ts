import { Data } from "../pages/pageTwo";

export const Answer = (dataBase: Data, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function, correctAnswer:string, onCreateSecondPage:Function) => {

    let answer = document.createElement('button');
        answer.classList.add('answer');

        answer.addEventListener('click', (e) => {
            e.stopPropagation();
            if (answer.innerText != correctAnswer) {
                onLosingLife();
                console.log(correctAnswer)
            }
            onChangeQuestionIndex();
            onChangeAnswersIndex();
            onCreateSecondPage(dataBase);
        })
        
        return answer;
}