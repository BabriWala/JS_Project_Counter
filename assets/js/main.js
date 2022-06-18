const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const mainContent = document.querySelector('.main__content');



btnIncrease.addEventListener('click', () => {
    const contentTxt = mainContent.innerText;
    // console.log(contentTxt);
    const strToNumber = parseInt(contentTxt);
    // console.log(strToNumber);
    const numberIncrease = strToNumber + 1;
    // console.log(numberIncrease);
    mainContent.innerText = numberIncrease;

    color(strToNumber + 1);
})

btnReset.addEventListener('click', () => {
    mainContent.innerText = 0;
    mainContent.style.color = 'rgba(0,0,0,.7)';
})

btnDecrease.addEventListener('click', () => {
    const contentTxt = mainContent.innerText;
    // console.log(contentTxt);
    const strToNumber = parseInt(contentTxt);
    // console.log(strToNumber);
    const numberDecrease = strToNumber - 1;
    // console.log(numberDecrease);
    mainContent.innerText = numberDecrease;

    color(strToNumber - 1)
})

function color(calculation) {
    if ((calculation) < 0) {
        mainContent.style.color = 'red';
    } else if (calculation) {
        mainContent.style.color = 'green';
    } else {
        mainContent.style.color = 'rgba(0,0,0,.7)';
    }
}

