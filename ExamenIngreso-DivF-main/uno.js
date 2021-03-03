/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto 
el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y 
el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/

function mostrar()
{
	let nombre;
	let tipo;
    let precio;
    let cantidad;
    let categoria;
	let fabricante;

	let contadorALCOHOL=0;
    let contadorIAC=0;
    let contadorQUAT=0;
    let acumuladorALCOHOL=0;
    let acumuladorIAC=0;
    let acumuladorQUAT=0;
    let promedioAALCOHOL;
    let promedioIAC;
	let promedioQUAT;
	
	let tipoMasCantidad;

	let flagDetergente=0;
	let detergentePrecioMenor200;
	let contadorDetergentePrecioMenor200;
	
	let flagProductos=0;
	let fabricanteProductoMasCaro;
	let categoriaProductoMasCaro;


	for (let i=0; i<5; i++){

		nombre = prompt("Ingrese nombre del producto");

        tipo = prompt("Ingrese tipo de producto: ALCOHOL / IAC / QUAT")
	    while(tipo != "alcohol" && tipo != "IAC" && tipo != "QUAT" ){
		tipo = prompt("Error. Ingrese tipo de producto: ALCOHOL / IAC / QUAT")
        }

    
        precio = parseFloat(prompt("Ingrese precio min 100 máx 300"));
	    while(precio <100 || precio > 300 || isNaN(precio)){ 
		precio = parseFloat(prompt("Error. Ingrese precio min 100 máx 300"));
		} 

		cantidad = parseInt(prompt("Ingrese cantidad máx 1000"));
	    while(!(cantidad >0 || cantidad <= 1000)){ 
		cantidad = parseInt(prompt("Error. Ingrese cantidad máx 1000"));
		}
		
		categoria = prompt("Ingrese categoria del producto: desinfectante / bactericida / detergente")
	    while(categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente" ){
		categoria = prompt("Error. Ingrese categoria del producto: desinfectante / bactericida / detergente")
        }

		fabricante = prompt("Ingrese fabricante del producto");


		switch(tipo){
            case "alcohol":
                acumuladorALCOHOL += cantidad;
                contadorALCOHOL++;
                 break;
    
    
            case "IAC":
                acumuladorIAC += cantidad;
                contadorIAC++;
                 break;
    
    
            case "QUAT":
                acumuladorQUAT += cantidad;
                contadorQUAT++;
                break;
    
		}

		if(categoria == "detergente"){
			flagDetergente++;
		}
		
		if(flagDetergente != 0 && precio > 0 && precio <= 200){
			contadorDetergentePrecioMenor200++;
        }



		if(flagProductos == 0 || masCaroProductos < importe){
			fabricanteProductoMasCaro = fabricante;
			categoriaProductoMasCaro = categoriaProductoMasCaro;
            flagProductos++;
        }

	}
	
	promedioAALCOHOL = acumuladorALCOHOL / contadorALCOHOL;

	promedioIAC =  acumuladorIAC / contadorIAC;

	promedioQUAT = acumuladorQUAT / contadorQUAT;	

	console.log("A- el promedio de ALCOHOL es: " + promedioAALCOHOL
	 + " el promedio de IAC es: " + promedioIAC + " el promedio de QUAT es: " + promedioQUAT);



	 if(contadorALCOHOL > contadorIAC  && contadorALCOHOL > contadorQUAT){
		tipoMasCantidad = "ALCOHOL";   
	}
	else if(contadorIAC >contadorQUAT && contadorIAC  >= contadorALCOHOL){
		tipoMasCantidad = "IAC";
	}
	else {
		tipoMasCantidad = "QUAT";
	}


	console.log("B-El tipo de producto con más cantidad es " + tipoMasCantidad);

	console.log("C-La cantidad de unidades de detergente con precios menos a 200 es : " + contadorDetergentePrecioMenor200);

	console.log("D-El fabricante del más caro de los productos es: " + fabricanteProductoMasCaro + " y la categoria es: " + categoriaProductoMasCaro);
}

/*
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/