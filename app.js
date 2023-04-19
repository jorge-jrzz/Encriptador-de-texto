var vocales = ["a", "e", "i", "o", "u"];
var cambios = ["ai", "enter", "imes", "ober", "ufat"];

var mensaje_temp = document.getElementById("msjTemp");

var output = document.getElementById("respuestaTexto");
var botton_copiar = document.getElementById("copiar");

let textarea = document.getElementById("ingresaTexto");
var cadena = "";

output.style.display = "none";
botton_copiar.style.display = "none";

function encriptar() {
  // Obtiene el texto de entrada para ser encriptado
  cadena = textarea.value;
  let text_encriptado = "";

  // Verifica si la cadena no esta vacia
  if (cadena != "") {
    // Oculta el mensaje y muestra el area de texto donde estara la respuesta
    output.style.display = "block";
    mensaje_temp.style.display = "none";

    // Recorre la cadena letra por letra para encontrar las vocales
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i];
      let change = false;

      // Verifica que el caracter no sea un espacio
      if (letra != " ") {
        // Recorre el arreglo de las vocales para saber si el caracter es una vocal
        for (let j = 0; j < vocales.length; j++) {
          const vocal = vocales[j];

          // Si el caracter es una vocal, se intercambia por su correspondiente
          // en el texto resultado y sale de la busqueda
          if (letra == vocal) {
            text_encriptado += cambios[j];
            change = true;
            break;
          }
        }
      }

      // Si el caracter no es vocal, se agrega al texto resultado
      if (!change) text_encriptado += letra;
    }

    // Se muestra en resultado en pantalla y se muestra el boton de copiar
    output.value = text_encriptado;
    botton_copiar.style.display = "block";

    // En caso de que la cadena este vacia, se muestra el mensaje correspondiente
  } else {
    output.style.display = "none";
    botton_copiar.style.display = "none";
    mostrarMensaje();
  }
}

function desencriptar() {
  // Obtiene el texto de entrada para ser desencriptado
  cadena = textarea.value;
  let text_desencriptado = "";

  // Verifica si la cadena no esta vacia
  if (cadena != "") {
    // Oculta el mensaje y muestra el area de texto donde estara la respuesta
    output.style.display = "block";
    mensaje_temp.style.display = "none";

    // Recorre la cadena letra por letra para encontrar las vocales
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i];
      let change = false;

      // Verifica que el caracter no sea un espacio
      if (letra != " ") {
        // Recorre el arreglo de las vocales para saber si el caracter es una vocal
        for (let j = 0; j < vocales.length; j++) {
          const vocal = vocales[j];

          // Si el caracter es una vocal, se recorre el arreglo de los cambios, y como los dos arreglos
          // (vocales y cambios) tiene el mismo orden y tamaño ya tambien es conoicida el cambio correspondiente
          // a los caracteres siguientes en la cadena; por lo que al mismo tiempo se incrementa i (contador de los
          // caracteres de la cadena original) para omitir de cierta forma estos caracteres.
          // Finalmente se intercambia por su correspondiente en el texto resultado y sale de la busqueda
          if (letra == vocal) {
            for (let k = 0; k < cambios[j].length; k++, i++) {}
            i--;
            text_desencriptado += vocales[j];
            change = true;
            break;
          }
        }
      }

      // Si el caracter no es vocal, se agrega al texto resultado
      if (!change) text_desencriptado += letra;
    }

    // Se muestra en resultado en pantalla y se muestra el boton de copiar
    output.value = text_desencriptado;
    botton_copiar.style.display = "block";

    // En caso de que la cadena este vacia, se muestra el mensaje correspondiente
  } else {
    output.style.display = "none";
    botton_copiar.style.display = "none";
    mostrarMensaje();
  }
}

function copiarPortapapeles() {
  // Obtener el texto que se va a copiar (el texto respuesta)
  let texto = output.value;

  // Copiar el texto al portapapeles
  navigator.clipboard.writeText(texto);
}

// Esta funcion muestra el mensaje temporal sobre que no hay texto que encriptar o desencriptar con todos sus atributos 
// necesarios para que esten centrados sus elemenos
function mostrarMensaje() {
  mensaje_temp.style.display = "block";
  mensaje_temp.style.display = "flex";
  mensaje_temp.style.flexDirection = "column";
  mensaje_temp.style.alignItems = "center";
  mensaje_temp.style.justifyContent = "center";
}

