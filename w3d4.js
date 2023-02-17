function greetName() {
    let userInput = document.querySelector("#fName");
    let message = document.querySelector("#message");

    message.innerHTML = "Greetings !!!  " + userInput.value + "   ...Welcome on board...";

}


// Simple Interest Calculation...

function simpleInterest() {
    let principal = document.querySelector("#P");
    let rate = document.querySelector("#R");
    let time = document.querySelector("#T");

    let simpleInterestt = principal.value + rate.value + time.value;
    simpleInterestt.innerHTML = "The Simple Interest is " + simpleInterestt.value;
}