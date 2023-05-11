function somme() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
var a = 162;
var b = 66;
var c = 200;

alert("La valeur de a = " + a + "\n" +
    "La valeur de b = " + b + "\n" +
    "La valeur de c = " + c + "\n" +
    "La somme de a+b+c = " + somme(a, b, c));

