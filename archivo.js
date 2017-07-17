var peso = parseInt(prompt("Dime tu peso en kilos", "50"));
var talla = parseInt(prompt("Dime tu talla en centimetros", "150"));

// la formula para hallar IMC= PESO/TALLA *TALLA
function calculoIMC(peso,talla){
	talla=talla/100;
	var IMC=peso/(talla*talla);
	var mensaje="";
	if ( IMC >= 18.5 && IMC <= 24.9)
		mensaje=" tu nivel es saludable";
	else if ( IMC < 18.5 )
		mensaje=" tu nivel es bajo..!";
	else
		mensaje=" tu nivel es alto..!";

	alert ( "Tu IMC es "+ IMC.toFixed(1) + mensaje );
}

calculoIMC(peso,talla);

