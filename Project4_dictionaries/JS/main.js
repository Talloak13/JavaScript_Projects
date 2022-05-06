function my_Dictionary() {
    var Food = {
        Type:"Fruit and Vegetables",
        Species:"Apple",
        Color:"Red",
        Size:"Small",
        Flavor:"Sweet",
    };
    delete Food.Size;
    document.getElementById("Dictionary").innerHTML = Food.Color;
}