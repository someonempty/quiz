import { createSecondPage } from "./pageTwo";
import { Data } from "./pageTwo";

export const Answer = (dataBase: Data, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function, correctAnswer:string) => {

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
            createSecondPage(dataBase);
        })
        
        return answer;
}