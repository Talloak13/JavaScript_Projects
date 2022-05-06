document.write(typeof "Numbers");
document.write("12" + 345);
document.write(4E322);
document.write(-5E322);
document.write(15>5)
function my_Function() {
    document.getElementById("Non").innerHTML = 0/0;
}
function string_Function() {
    document.getElementById("Non2").innerHTML = isNaN("Superman");
}
function number_Function() {
    document.getElementById("Non3").innerHTML = isNaN("88");
}
console.log(3+3)
console.log(3>5)
document.write(3==3)
document.write(3==4)
A = 4;
B = 4;
document.write(A===B);
C = 5;
D = 6;
document.write(C===D)
E = 7;
F = "8";
document.write(E===F)
G = "9";
H = "10";
document.write(G===H)
document.write(9>6 && 7>3)
document.write(1>6 && 7>3)
document.write(3>1 || 6>2)
document.write(3>11 || 6>12)
function not_Function() {
    document.getElementById("Not").innerHTML = !(22>11);
}
function not2_Function() {
    document.getElementById("Not2").innerHTML = !(7>13);
}