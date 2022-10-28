
// pseudocode: //
// creating a pop-up confirmation upon submission of a comment on the blog page:
// create a variable to store our form in
// create variables for the input elements so we can clear them upon submit
// create a listener to know when the user has submitted a comment
// preventDefault() so the browser doesn't refresh upon submit
// create a div with a p that will be displayed upon submit
// style the div?
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
    const comment = textareaElement.value;
    // only do the following if there are values in the inputs
    if (name && email && comment) {
        // create the popup
        const popUp = document.createElement("div");
        //create the text inside the popup
        popUp.innerHTML = "Thank you for your comment!"
        formElement.append(popUp);

        //clear the input and textarea values back to an empty string upon submitting a comment
        textareaElement.value = "";
        textInputElement.value = "";
        emailInputElement.value = "";
    }
});