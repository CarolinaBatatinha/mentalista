var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  var elementoResultado = document.getElementById("resultado");
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Aaaaah, miserááávi! Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "ErRRrrrooou! O número secreto era  " + numeroSecreto + ".";
  }
}
