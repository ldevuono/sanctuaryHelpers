
// pseudocode: //
// creating a confirmation message upon submission of a message on the comment page:
// create a variable to store our form in
// create variables for the input elements so we can clear them upon submit
// create a listener to know when the user has submitted a message
// preventDefault() so the browser doesn't refresh upon submit
// create a div with a p that will be displayed upon submit
// clear the user inputs from the form upon submit

// actual code: //

// create a variable for the form element
const formElement = document.querySelector("form");
// create a variable for the input and textarea elements so I can clear them upon submit
const textInputElement = document.getElementById("name");
const emailInputElement = document.getElementById("email");
const textareaElement = document.getElementById("message");
// create an event listener 
formElement.addEventListener("submit", function (event) {
    // telling the page not to reload on submit
    event.preventDefault();
    //storing values from inputs in variables
    const name = textInputElement.value;
    const email = emailInputElement.value;
    const message = textareaElement.value;
    // only do the following if there are values in the inputs
    if (name && email && message) {
        // create the confirmation message
        const confirmation = document.createElement("div");
        //create the text inside the confirmation
        confirmation.innerHTML = "Thank you for your message!"
        formElement.append(confirmation);

        //clear the input and textarea values back to an empty string upon submitting a comment
        textareaElement.value = "";
        textInputElement.value = "";
        emailInputElement.value = "";
    }
});