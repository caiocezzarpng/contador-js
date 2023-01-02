function pegarValores() {
  let inicio = Number(document.getElementById("inicio").value);

  let fim = Number(document.getElementById("fim").value);

  let passo = Number(document.getElementById("passo").value);

  var verifica = checarSeOsCamposEstaoVazios(inicio, fim, passo);

  if (verifica == false) {
    alert('[ERROR] Faltam Dados"');
    return 0;
  } else {
    limpar();
    contar(inicio, fim, passo);
  }
}

function checarSeOsCamposEstaoVazios(inicio, fim, passo) {
  if (inicio == 0 || fim == 0 || passo == 0) {
    return false;
  } else {
    return true;
  }
}

function contar(inicio, fim, passo) {
  if (inicio < fim) {
    for (inicio; inicio <= fim; inicio += passo) {
      imprimirValor(inicio);
    }
  } else {
    for (inicio; inicio >= fim; inicio -= passo) {
      imprimirValor(inicio);
    }
  }
  res.innerHTML += "\u{1F3C1}";
}

function imprimirValor(inicio) {
  let res = document.querySelector("div#resultado");
  res.innerHTML += inicio + "\u{1F449}";
}

function limpar() {
  res = document.getElementById("resultado");
  res.innerHTML = "";
}
