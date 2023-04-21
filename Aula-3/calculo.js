let button = document.getElementById("calcular");

button.addEventListener("click", calcular);
button.addEventListener("mouseover", mudaCor);

let elementoResultado = document.getElementById("resultado")

function calcular(){
    let nomeCachorro = document.getElementById("nome").value;

    elementoResultado.innerHTML = `${nomeCachorro} deve comer 100g por dia`
}

function mudaCor(){
    button.style.backgroundColor= "lightblue";

}
