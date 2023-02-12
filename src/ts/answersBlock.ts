import { createSecondPage } from "./pageTwo";
import { Data } from "./pageTwo";

export const Answer = (dataBase: Data, lifes:number, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function, correctAnswer:string) => {

    let answer = document.createElement('button');
        answer.classList.add('answer');

        answer.addEventListener('click', (e) => {
            console.log(lifes);
            if (answer.innerHTML != correctAnswer) {
                onLosingLife();
            }
            e.stopPropagation();
            onChangeQuestionIndex();
            onChangeAnswersIndex();
            createSecondPage(dataBase);
        })
        
        return answer;
}