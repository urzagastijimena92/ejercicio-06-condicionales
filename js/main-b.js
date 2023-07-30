console.warn("Ejercicio: b)") 

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

// var cantidadDeGatos = 2;
// var cantidadDePasos = 8;

// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;


for (var gato = 1; gato <= cantidadDeGatos; gato++) {
  var resultado = "Gato #" + gato + ":  🐈";
  
  for (var paso = 1; paso <= cantidadDePasos; paso++) {
    resultado += " 🐾";
  }

  console.log(resultado);
}
