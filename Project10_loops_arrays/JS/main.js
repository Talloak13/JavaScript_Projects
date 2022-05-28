function Call_Loop() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}

function constant_function() {
    const Musical_Instument = { type:"guitar", brand:"Fender", color:"black"};
    Musical_Instument.color = "blue";
    Musical_Instument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instument.type + " was " + Musical_Instument.price;
}

var Z = 13;
document.write(Z);
{
    let Z = 22;
    document.write("<br>" + Z);
}
document.write("<br>" + Z);

function return_function(name){
    return "Hello " + name;    
}
document.getElementById("Return").innerHTML = return_function("Nick");

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return"The car is a " + this.year + this.color + this.make +this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 13; i++) {
  if (i === 5) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;

let texts = "";
for (let f = 0; f < 13; f++) {
  if (f === 5) { break; }
  texts += "The number is " + f + "<br>";
}
document.getElementById("break").innerHTML = texts;