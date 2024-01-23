

function highlightButton(buttonId){
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.classList.remove('highlight'));

    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('highlight');
}