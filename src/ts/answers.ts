
export  const answerss = (answers:any, answerIndex:number) => {
    const answer = document.createElement('div');
    

    let answersArray:any = [];
    answers[answerIndex].forEach((element:any) => {
        
        answersArray.push(element.correctAnswer, element.incorrectAnswers[0], element.incorrectAnswers[1], element.incorrectAnswers[2]);
        console.log(answersArray);
    });


    answersArray.forEach((element:any) => {
    
        answer.classList.add('answer');
        answer.innerText = element;
        console.log(answer);

    });
    return answer;

}