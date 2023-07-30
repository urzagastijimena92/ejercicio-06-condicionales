console.warn("Ejercicio: c)") 

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
    if(gato %2 == 0){
        var resultado = "Gato #" + gato + ":  🐈⬛";
    }
    else{
        resultado = "Gato #" + gato + ":  🐈";
    }
 
  for (var paso = 1; paso <= cantidadDePasos; paso++) {
    resultado += " 🐾";
  }

  console.log(resultado);
}