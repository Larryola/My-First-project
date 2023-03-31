const emailInput=document.querySelector("email-input")
const formInput =document.querySelector("#form-input")
const testResult=document.querySelector("#text-result")


formInput.addEventListener("submit", function(event){

    event.preventDefault();

    const string = emailInput.value;
    const stringLength = string.length;
    const wordCount =string.split(' ').filter(Boolean).length;
    const reverseString =string.split(' ').reverse().join('');
    const upperCase = string.toUpperCase();
    const lowerCase = string.toLowerCase();

    const display= `
    <p> Number of a char: ${stringLength}</p>
    <p> word count: ${wordCount}</p>
    <p> Reversed string: ${reverseString}</p>
    <p> Uppercase: ${upperCase}</p>
    <p> LowerCase: ${lowerCase}</p>
    `

    display.innerHTML = testResult;
});


