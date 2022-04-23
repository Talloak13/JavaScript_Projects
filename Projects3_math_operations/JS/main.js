function addition_Function() {
    var addition = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + addition;
}

function subtraction_Function() {
    var subtraction = 3 - 3;
    document.getElementById("Math2").innerHTML = "3 - 3 = " + subtraction;
}

function multiplication_Function() {
    var multiply = 3 * 3;
    document.getElementById("Math3").innerHTML = "3 * 3 = " + multiply;
}

function division_Function() {
    var divise = 3 / 3;
    document.getElementById("Math4").innerHTML = "3 / 3 = " + divise;
}

function complex_Function() {
    var complex = (3 + 3) * 5 / 10 - 2;
    document.getElementById("Math5").innerHTML = "3 plus 3, multiplied by 5, divided by 10 and then subtracted by 2 equals " + complex;
}

function modulus_Function() {
    var modulus = 13 % 2;
    document.getElementById("Math6").innerHTML = "When you divide 13 by 2 you have a remainder of: " + modulus;
}

function negation_Function() {
    var x = 13;
    document.getElementById("Math7").innerHTML = -x;
}
function random_Function() {
    var random = Math.random() * 20;
    document.getElementById("Math8").innerHTML = random;
}

function round_Function() {
    var round = Math.round(13.3);
    document.getElementById("Math9").innerHTML = "13.3 is rounded down to " + round;
}

var y = 8; // These numbers are displayed at the top of the page because I did not define them into a certain paragraph tag//
y++;
document.write(y);

var w = 8;
w--;
document.write(w);