function VerifRandom(min, max) {

    var r = parseInt(Math.random() * (max - min) + min);
    var i = 1;
    //alert(r);
    var N = Number(prompt("Entrez un entier"));
    while (N != r) {
        if (N > r) {
            N = Number(prompt("Entrez un entier plus petit"));
            i = i + 1;
        }
        else {
            N = Number(prompt("Entrez un entier plus grand"));
            i = i + 1;
        }
        alert("Le nombre est trouvé après " + i + " coups");
    }
}
VerifRandom(1, 10);
