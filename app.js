var vocales = ["a", "e", "i", "o", "u"];
var cambios = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar() {
  // Obtiene el texto de entrada para ser encriptado
  cadena = textarea.value;
  let text_encriptado = "";

  // Verifica si la cadena no esta vacia
  if (cadena != "") {
    // Oculta el mensaje y muestar el area de texto done estara la respuesta
    output.style.display = "block";
    mensaje_temp.style.display = "none";

    // Recorre la cadena letra por letra para encontrar las vocales
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i];
      let change = false;

      // Verifica que el carracter no sea un espacio
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

    // En caso de que la cadena este vacia, se muestar el mensaje correspondiente
  } else {
    output.style.display = "none";
    botton_copiar.style.display = "none";
    mensaje_temp.style.display = "block";
  }
}
