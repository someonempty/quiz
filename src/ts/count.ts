
export const CountBlock = (questionIndex:number, selectedCountButton:any) => {

    const countBlock = document.createElement('div');
    
    countBlock.classList.add('count-block');

    countBlock.innerText = questionIndex.toString() + '/' + selectedCountButton;
    
    if (questionIndex == selectedCountButton) {
        alert('You won, congratulations!');
    }
    return countBlock;
}