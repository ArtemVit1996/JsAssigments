// Grab the button and call the function when the button gets clicked
document.getElementById("btn").addEventListener("click", heehaw);

// function loops from 1 to user input
function heehaw() {
    // grab user input when called
    let number = document.getElementById("num").value.trim();
    // grab the div
    let div = document.getElementById("result");
    // check if the input is valid
    if (number === "" || isNaN(number) || number < 1) {
        div.innerHTML = ""; // clears the error so id does not keep repeating
         div.innerHTML += "<h2>Input must be a number!</h2>";
    }
    else {
        div.innerHTML = ""; // clears the error and old loop
        for (let i = 1; i <= number; i++) {
            // if i is divisible by both 3 and 5
            if((i % 3 == 0) && (i % 5 == 0)) {
                div.innerHTML += "<h3>Hee Haw!</h3>";
            }
            // else if i is divisible by 3
            else if (i % 3 == 0) {
                div.innerHTML += "<h3>Hee!</h3>";
            }
            // else if i is divisible by 5
            else if (i % 5 == 0) {
                div.innerHTML += "<h3>Haw!</h3>";
            }
            // else just print the number
            else {
                div.innerHTML += "<h3>" + i + "</h3>";
            }
        }
    }
}
