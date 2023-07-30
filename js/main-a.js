console.warn("Ejercicio: a)") 

var cantidadDeGatos= 10;

// var cantidadDeGatos = 1;

// var cantidadDeGatos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoticon;
    
    switch (i % 3) {
      case 1:
        emoticon = "😺";
        break;
      case 2:
        emoticon = "😸";
        break;
      case 0:
        emoticon = "😹";
        break;
    }
  
    console.log("Gato #" + i + ": " + emoticon);
  }
