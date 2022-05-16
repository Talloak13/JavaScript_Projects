var X = 10;
function Add_numbers_1() {
    document.write(20 + X);
}
Add_numbers_1();

function Add_numbers_2() {
    var Y = 20;
    document.write(20 + Y);
}
Add_numbers_2();

function Add_numbers_3() {
    var Z = 5;
    console.log(15 + Z);
}
function Add_numbers_4() {
    console.log(Z + 75);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}