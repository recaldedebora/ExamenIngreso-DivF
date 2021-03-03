/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata
 con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y Mujer que tenga pami y sea joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, 
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	let seguir;

	let contadorMayoresOSDE=0;

	let mujerJovenPAMI;
	let nombreMujerPPAMI;

	let precioSinDescuento;
	let contadorPasajeros=0;

	let contadorPAMI=0;
	let descuentoMas50PAMI;

	do{

		nombre = prompt("Ingrese su nombre");

		obraSocial = prompt("Indique su obra Social: PAMI, OSDE , otras");
  		while ( obraSocial != "PAMI" && obraSocial != "tOSDE" && obraSocial != "otras"){
		  obraSocial = prompt("Error. Indique su obra Social: PAMI, OSDE , otras")
		  }

		edad = parseInt(prompt("Indique su edad "));
  		while ( edad < 0 || isNaN(edad)){
  		edad = parseInt(prompt("Error. Indique su edad"));
		}

		sexo = prompt("Indique sexo : femenino / masculino / no binario ");
  		while ( sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
  		sexo = prompt("Error. Indique sexo : femenino / masculino / no binario");
  		}

		temperatura = parseInt(prompt("Indique su temperatura "));
		while ( temperatura < 0 || isNaN(temperatura)){
		temperatura = parseInt(prompt("Error. Indique su temperatura"));
		}

		




		seguir = ("Desea registrar un nuevo pasajero?")
	}while(seguir == "s");

}
