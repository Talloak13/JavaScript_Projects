function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function vehicleFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
function Person(Height, Weight, Age, Ethnicity) {
    this.Person_Height = Height;
    this.Person_Weight = Weight;
    this.Person_Age = Age;
    this.Person_Ethnicity = Ethnicity;
}
var Joe = new Person(6, 185, 22, "Native American");
var Carl = new Person(5, 220, 35, "Russian");
var Bob = new Person(6, 260, 18, "Norwegian");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Joe is " + Joe.Person_Age + " years old and weighs " + Joe.Person_Weight + 
    " pounds for a " + Joe.Person_Height + " foot tall person.";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}