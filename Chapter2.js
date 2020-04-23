// loop and print 1 through 100
for (let i = 1; i <= 100; i++) {
    // if i is divisible by both 3 and 5
    if((i % 3 == 0) && (i % 5 == 0)) {
        document.write("Hee Haw!" + "<br>");
    }
    // else if i is divisible by 3
    else if (i % 3 == 0) {
        document.write("Hee!" + "<br>");
    }
    // else if i is divisible by 5
    else if (i % 5 == 0) {
        document.write("Haw!" + "<br>");
    }
    // else just print the number
    else {
        document.write(i + "<br>");
    }

}