import { createSecondPage } from "./pageTwo";

export const Answer = (dataBase:any, lifes:number, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function, onStopGame:Function, correctAnswer:any) => {

    let answer = document.createElement('button');
        answer.classList.add('answer');

        answer.addEventListener('click', (e) => {
            console.log(lifes);
            if (answer.innerHTML != correctAnswer) {
                onLosingLife();
                if (lifes == 1) {
                    onStopGame();
                }
            }
            e.stopPropagation();
            onChangeQuestionIndex();
            onChangeAnswersIndex();
            createSecondPage(dataBase);
            
        })

        
        return answer;
}