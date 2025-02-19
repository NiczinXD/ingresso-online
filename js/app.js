const qtdPista = document.getElementById("qtd-pista");
const qtdSuperior = document.getElementById("qtd-superior");
const qtdInferior = document.getElementById("qtd-inferior");
const tipoIngresso = document.getElementById("tipo-ingresso");
const qtdInput = document.getElementById("qtd");

function comprar() {
    const tipo = tipoIngresso.value;
    const quantidade = parseInt(qtdInput.value);

    if(quantidade <= 0) {
        alert("A quantidade de ingressos deve ser maior que zero.");
        return;
    }

    if(tipo === "pista") {
        if(quantidade > parseInt(qtdPista.innerText)) {
            alert("Não há ingressos suficientes. Tente novamente mais tarde");
            return;
        }
        qtdPista.innerText = parseInt(qtdPista.innerText) - quantidade;
    } else if(tipo === "superior") {
        if(quantidade > parseInt(qtdSuperior.innerText)) {
            alert("Não há ingressos suficientes.");
            return;
        }
        qtdSuperior.innerText = parseInt(qtdSuperior.innerText) - quantidade;
    } else if(tipo === "inferior") {
        if(quantidade > parseInt(qtdInferior.innerText)) {
            alert("Não há ingressos suficientes.");
            return;
        }
        qtdInferior.innerText = parseInt(qtdInferior.innerText) - quantidade;
    }

    alert(`${quantidade} ingresso(s) no lugar '${tipo}' comprado(s) com sucesso.`);
    qtdInput.value = "";
}