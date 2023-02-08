
export const CountBlock = (questionIndex:number, selectedCountButton:any) => {

    const countBlock = document.createElement('div');
    
    countBlock.classList.add('count-block');

    countBlock.innerText = questionIndex.toString() + '/' + selectedCountButton;

    return countBlock;
}