var X = "\"Hello, World!\"" + "I hope you\'re having a nice day", Y = "Woot!"

window.alert (X);

document.write (Y);

document.write (X+Y); // This is an expression inside a statement

function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
let text = "Holy Cow!";
let result = text.fontcolor("green"); //Not completely sure why this still works but I tried other ways and I couldn't get the text green using JavaScript
document.getElementById("demo1").innerHTML = result;

function myFunction() {
    var sentance = "I am learning";
    sentance += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentance;
}