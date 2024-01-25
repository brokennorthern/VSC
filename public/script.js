/* Keeping track of the current highlighted button and if the submit button is active.
Since there's no way to 'unclick' an option, after one is clicked, there will
always be a valid submission for the submit function. You could remove the submitActive
variable and just check to see if the currHighlight is still null. Will be updated in the future
when it can be properly tested afterwards*/
let submitActive = false;
let currHighlight = null;

/* Function that takes in the pressed button id and adds it to the highlight class, removing 
all others from the class. Also handles re-hiding the error message once an option has been selected*/
function highlightButton(buttonId){

    /* Get buttons and remove all from the highlight class. Stops whatever WAS highlighted from being highlighted*/
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => button.classList.remove('highlight'));

    /* Add the current selected button to a highlight class, adding effects around the button on the page.*/
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('highlight');

    /* If the error message has been made visible, re-add it to the hiding class to remove it from the page again. */
    document.getElementById("errormessage").classList.add("hiding");

    /* Could have just used a number for the button id, meaning I wouldn't need to process 
    out the letters, but buttons were easier to identify with names instead of just numbers  */
    currHighlight = buttonId.match(/[0-9]+/g);

    /* Set active to true, allowing the submit button to be used for its main function */
    submitActive = true;
}

/* Takes in the value of the current poll, so it can be sent back via POST to the database*/
function submitButton(pollId){

    /* Checks to see if the submitActive has been changed. If it's still false, unhide the error message */
    if(!submitActive){
        const errorMessage = document.getElementById('error');
        document.getElementById("errormessage").classList.remove("hiding");
    }
    
    /* If the submitActive has been toggled to true, execute the POST, creating a form and sending it
    to the database. This is also responsble for telling the server which page to send us to next.  */
    if (submitActive){

        /* Remove all the buttons from the highlight class. This may be archaeic as it was put in to
        test the basic functionality of the submit button. I need to test this, but I think this can
        likely be removed, since when the submit button is pressed, the page is navigated away from. */
        const allButtons = document.querySelectorAll('button');
        allButtons.forEach(button => button.classList.remove('highlight'));
        
        /* Create the form, inputs, assign names and values, append it to the form, then submit it as a POST
        to the server to interact with the database. */
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