function sortearNumero() {
    var min = parseInt(document.getElementById("min").value) || 1;
    var max = parseInt(document.getElementById("max").value) || 99;
    var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = numeroSorteado;
}