var peso = parseInt(prompt("Dime tu peso", "50"));
var talla = parseInt(prompt("Dime tu talla en metros", "150"));
// la formula para hallar IMC= PESO/TALLA *TALLA
function imc (peso,talla){
    var nuevaTalla= talla/100;
    var formula= peso/(nuevaTalla*nuevaTalla);
    alert("Hola! Tu indice de masa corporal es: " + formula);
}
imc(peso,talla)
