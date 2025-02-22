
function checkEvenOdd() {
    let number = prompt("Enter a number:");
    number = Number(number); 

    if (isNaN(number)) {
        alert("Please enter a valid number.");
    } else if (number % 2 === 0) {
        alert(number + " is even.");
    } else {
        alert(number + " is odd.");
    }
}


function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    alert("Check the console for numbers 1 to 10.");
}
