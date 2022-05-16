function full_Sentence() {
    var part_1 = "I think ";
    var part_2 = "that I have ";
    var part_3 = "made this into ";
    var part_4 = "a complete sentence!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 54869.1626659948496513;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}