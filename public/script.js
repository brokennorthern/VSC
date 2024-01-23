
let submitActive = false;
let currHighlight = null;

function highlightButton(buttonId){

    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.classList.remove('highlight'));

    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('highlight');
    document.getElementById("errormessage").classList.add("hiding");

    currHighlight = buttonId.match(/[0-9]+/g);
    submitActive = true;


}

function submitButton(pollId){

    if(!submitActive){
        const errorMessage = document.getElementById('error');
        document.getElementById("errormessage").classList.remove("hiding");
    }

    if (submitActive){

        const allButtons = document.querySelectorAll('button');
        allButtons.forEach(button => button.classList.remove('highlight'));
        
        var aForm = document.createElement('form');
        aForm.action = "/results/" + pollId;
        aForm.method = 'POST';
        var input1 = document.createElement('input');
        var input2 = document.createElement('input');
        input1.type = 'hidden';
        input1.name = 'pollID';
        input1.value = pollId;
        input2.type = 'hidden';
        input2.name = 'voteID';
        input2.value = currHighlight;
        aForm.appendChild(input1);
        aForm.appendChild(input2);

        document.getElementById('hiddenform').appendChild(aForm);
        aForm.submit();
        
    }



    
    
}