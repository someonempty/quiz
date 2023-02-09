import { createSecondPage } from "./pageTwo";

export const AnswersBlock = (answers:any, answerIndex:number, lifes:number, onChangeQuestionIndex:Function, onChangeAnswersIndex:Function, onLosingLife:Function, onGetDataBase:Function, onStopGame:Function) => {
    let answersArray:any = [];
    const answersBlock = document.createElement('div');
    // const firstAnswer = document.createElement('button');
    // const secondAnswer = document.createElement('button');
    // const thirdAnswer = document.createElement('button');
    // const fourthAnswer = document.createElement('button');

    answersBlock.classList.add('answers-block');

        // answers.forEach((element:any) => {
        
        //     answersArray.push(element.correctAnswer, element.incorrectAnswers[0], element.incorrectAnswers[1], element.incorrectAnswers[2]);
        //     console.log(answersArray);
        // });

        const someRender = () => {
            answersArray = [];
            answersArray.push(answers[answerIndex].correctAnswer, answers[answerIndex].incorrectAnswers[0], answers[answerIndex].incorrectAnswers[1], answers[answerIndex].incorrectAnswers[2]); 
           
            answersArray.forEach((element:any) => {
                const answer = document.createElement('button');
                answer.classList.add('answer');
                answer.innerText = element;
                answersBlock.appendChild(answer);
                answer.addEventListener('click', () => {
                    onLosingLife();
                    onChangeQuestionIndex();
                    onChangeAnswersIndex();
                    createSecondPage(onGetDataBase);
                })
            });
            console.log(answersArray);
        }
       

   someRender();

    // firstAnswer.classList.add('first-answer');
    // secondAnswer.classList.add('second-answer');
    // thirdAnswer.classList.add('third-answer');
    // fourthAnswer.classList.add('fourth-answer');
    
    // firstAnswer.innerText = answers[answerIndex].incorrectAnswers[0];
    // secondAnswer.innerText = answers[answerIndex].incorrectAnswers[1];
    // thirdAnswer.innerText = answers[answerIndex].incorrectAnswers[2];
    // fourthAnswer.innerText = answers[answerIndex].correctAnswer;

    // firstAnswer.addEventListener('click', () => {
    //     onLosingLife();
    //     onChangeQuestionIndex();
    //     onChangeAnswersIndex();
    //     createSecondPage(onGetDataBase);
    // })

    // secondAnswer.addEventListener('click', () => {
    //     onLosingLife();
    //     onChangeQuestionIndex();
    //     onChangeAnswersIndex();
    //     createSecondPage(onGetDataBase);
    // })

    // thirdAnswer.addEventListener('click', () => {
    //     onLosingLife();
    //     onChangeQuestionIndex();
    //     onChangeAnswersIndex();
    //     createSecondPage(onGetDataBase);
    // })

    // fourthAnswer.addEventListener('click', () => {
    //     onChangeQuestionIndex();
    //     onChangeAnswersIndex();
    //     createSecondPage(onGetDataBase);
    // })

    // answersBlock.appendChild(firstAnswer);
    // answersBlock.appendChild(secondAnswer);
    // answersBlock.appendChild(thirdAnswer);
    // answersBlock.appendChild(fourthAnswer);
    
    
    if (!lifes) {
        onStopGame();
    }

    return answersBlock;
}