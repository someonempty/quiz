
export const CountBlock = (questionIndex:number, selectedCountButton:number) => {

    const countBlock = document.createElement('div');
    
    countBlock.classList.add('count-block');

    countBlock.innerText = questionIndex.toString() + '/' + selectedCountButton;
    
    if (questionIndex == selectedCountButton) {
        setTimeout(() => {
            alert('You won, congratulations!');
        }, 100)
    }
    return countBlock;
}