let numA = 2000;
let numB = 300;
let numC = 40;

let resultado = numA > numB ? "e o maior" :
    "e menor"
if (numA > numB && numA > numC) {
    console.log(numA + "e o maior")
    if (numA % 2 != 0) {
        console.log(numA + "e par")
    }
}
else if (numB > numA && numB > numC) {
    console.log(numB = "e o maior")
} else {
    console.log(numC + "e o maior")
}

//imprimir na tela todos os numeros pares de 0 a 20
for (let i = 0; i<20; i++){
    if(i%2==0){
        console.log(i);
    }
}