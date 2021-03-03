/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los que no tarbajan ni estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/

function mostrar()
{
let nombre;
let situacionLaboral;
let cantidadMaterias;
let sexo;
let nota;
let edad;

let flagEstudiantes=0;
let nombreMejorPromedioNTNE;
let promediomejorPromedioNTNE;

let masViejoEstudiante;
let nombreMasViejoEstudiante;

let contadorBuscando=0;
let contadorTrabajando=0;
let contadorEstudiante=0;
let acumNotaBuscando=0;
let acumNotaTrabajando=0;
let acumNotaEstudiando=0;
let promedioNotaBuscando;
let promedioNotaTrabajando;
let promedioNotaEstudiante;

let flagBuscando=0;
let menosMateriasBuscando;
let nombreMenosMateriasBuscando;
let edadMenosMateriasBuscando;
let flagTabajando =0;

do{

  nombre = prompt("Ingrese su nombre");

  situacionLaboral = prompt("Indique su situacion laboral: buscando , trabajando o estudiante");
  while ( situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "estudiante"){
  situacionLaboral = prompt("Error. Indique su situacion laboral: buscando , trabajando o estudiante");
  }

  

  cantidadMaterias = parseInt(prompt("Indique cantidad de materias  "));
  while ( cantidadMaterias < 1 || cantidadMaterias > 7 || isNaN(cantidadMaterias)){
  cantidadMaterias = parseInt(prompt("Error. Indique cantidad de materias "));
  }

  sexo = prompt("Indique sexo : femenino / masculino / no binario ");
  while ( sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
  sexo = prompt("Error. Indique sexo : femenino / masculino / no binario");
  }

  edad = parseInt(prompt("Indique su edad "));
  while ( edad < 0 || isNaN(edad)){
  edad = parseInt(prompt("Error. Indique su edad"));
  }

  nota = parseInt(prompt("Indique su nota "));
  while ( nota < 1 || nota > 10 || isNaN(nota)){
  nota = parseInt(prompt("Error. Indique su nota"));
  }

  switch(situacionLaboral){
    case "buscando":
      contadorBuscando++;
      acumNotaBuscando = acumNotaBuscando + nota;
      flagBuscando++;
      break;
    case "trabajando":
      contadorTrabajando++;
      acumNotaTrabajando = acumNotaTrabajando + nota;
      flagTabajando++;
      break;
    case "estudiante":
      contadorEstudiante++;
      acumNotaEstudiando = acumNotaEstudiando + nota;
      flagEstudiantes++;
      break;
  }

  if(flagEstudiantes !=0 && promediomejorPromedioNTNE < nota){
    promediomejorPromedioNTNE = nota;
    nombreMejorPromedioNTNE = nombre;
  }

  if(flagEstudiantes !=0 && masViejoEstudiante < nota){
    masViejoEstudiante = nota;
    nombreMasViejoEstudiante = nombre;
  }


  
  if(flagBuscando !=0 && menosMateriasBuscando > cantidadMaterias){
    menosMateriasBuscando = cantidadMaterias;
    nombreMenosMateriasBuscando = nombre;
    edadMenosMateriasBuscando = edad;
  }


  seguir= prompt("Desea realizar otro registro?");
}while(seguir== "s");

if(flagBuscando!=0){
promedioNotaBuscando = acumNotaBuscando / contadorBuscando;
}else{
  promedioNotaBuscando = "No hay alumnos buscando trabajo"
}


if(flagEstudiantes !=0){
promedioNotaEstudiante= acumNotaEstudiando / contadorEstudiante;
}else {
  promedioNotaEstudiante = "No hay alumnos solo estudiantes"
}

if (flagTabajando !=0){
  promedioNotaTrabajando = acumNotaTrabajando / contadorTrabajando;
}else {
  promedioNotaTrabajando = "No hay alumnos trabajando"
}


if(flagEstudiantes != 0){
console.log("A-El nombre del mejor promedio de los que no tarbajan ni estan buscando es:" + nombreMejorPromedioNTNE );
console.log("B-El nombre del mas viejo de los alumnos que solo sea estudiantes" + nombreMasViejoEstudiante);
}else {
  console.log("A y B- No hay alumnos solo estudiantes");
}


console.log("C-El promedio de nota de buscando " + promedioNotaBuscando + " el de trabajando " + promedioNotaTrabajando + " el de estudiante " + promedioNotaEstudiante);

if(flagBuscando !=0){
console.log("D-La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo: edad: " + edadMenosMateriasBuscando + " y el nombre " + nombreMenosMateriasBuscando);
}else {
  console.log("D-No hay estudiantes buscando trabajo")
}


}

/*
a) El nombre del mejor promedio de los que no tarbajan ni estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/

