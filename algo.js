
//let nombre = prompt (`ingrese su nombre`);
//let edad = parseInt (prompt`ingrese su edad`);
//edad <=16? alert (`hola ${nombre}, eres menor de edad, tengo: ${edad}`) : alert (`hola ${nombre}, eres mayor de edad, tengo: ${edad}`);


//let A = parseInt(prompt("ingrese el valor de A:"));
//let B = parseInt(prompt("ingrese el valor de B:"));

//if(A === B) {
 //   alert(`los valores ingresados son iguales. ingrese un valor diferente`);
//}

//if (A > B) {
 //   alert("el mayor valor es:" + A);
   // } 
    //if (B > A) {
      //  alert("el mayor valor es:" + B);
    //}





let alumnos = 0;
let nombre, salario, edad, carrera;
let opcion;
let total_salario_admini = 0;
let total_salario = 0;
let total_sal_mayor = 0;
let continuarEncuesta;
do {
  nombre = prompt("ingrese el nombre del alumno:");
  salario = parseFloat(prompt("ingrese el salario del alumno:"));
  edad = parseInt(prompt("ingrese la edad del alumno:"));
  carrera = parseInt(prompt("ingrese la carrera del alumno(1: administracion, 2: derecho, 3: medicina, 4:sistemas):"));
 // alumnos.push({ nombre, salario, edad, carrera});

  continuarEncuesta= prompt("desea ingresar otro alumno (si/n0)");
}while (opcion === "si");

for (let alumno of alumnos) {
  contad_carrera[alumno.carrera - 1]++;
  if (alumno.carrera === 1) {
    total_salario_admini += alumno.salario;
  }
  if (alumno.salario > total_salario) {
    total_salario = alumno.salario;
    total_sal_mayor = alumno.edad;
  }
}
let carrera_mas_alumnos = contad_carrera.indexOf(math.max(contad_carrera)) +1;
let prom_salario_adminis = total_salario_admini / contad_carrera[0];
alert("carrera con mas alumnos: " + carrera_mas_alumnos);
alert("promedio de salario de los alumnos de administracion:" + prom_salario_adminis);
alert("edad de la persona con mayor salario:" + total_sal_mayor);

























