// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
	//Se inicializa el array que se devolverá al
   //final de la función.
   var arrayObjetos = [];
   var i = 0;
   //Bucle for in que recorrá el objeto
    for (var key in objeto){
    /*Un primer condicional que evaluará a falso y no se ejecutará.*/ 
        if (Array.isArray(arrayObjetos[i])){
            arrayObjetos[i] = new Array(key,objeto[key]);
        } /*Condicional que evaluará a verdadero*/
        else {
            arrayObjetos[i] = new Array(key,objeto[key]);
        } ++i;
  } return arrayObjetos;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
	//Inicializando algunas variables.
    var array = [];
    var breaker;
    const undfnd = undefined;
    var resultObj = undfnd || {};
    //Convirtiendo "string" en array para más 
    //comodidad.
    for (var x=0;x<string.length;x++){
       array.push(string.charAt(x));
       }
       

    /*Bucle for que recorrerá "array"*/
    for (var i=0; i<array.length; i++){
     var y = i-1;
     var valorObjeto = 0;
     /*Bucle Do/while y un condicional que verificará si el elemento actual ya se ha dado antes*/
     do {
         y--
         if (array[i] === array[y]){
             breaker = array[y];
             break;
         }
     } while(y>=0)
     if (array[i] === breaker){
         continue;
     } else{
    /*Bucle for que comparará cada valor del array con el valor actual (array[i])*/
        for (var j=0; j<array.length; j++){
            if (array[i]===array[j]){
                valorObjeto += 1;
            }
        } 
        resultObj[array[i]] = valorObjeto;
        }
  }
  return resultObj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
	var Capital = "";
    var Notcapitals = "";
    for (let i=0; i<s.length; i++){
        if (s.charAt(i)===s.charAt(i).toUpperCase()){
            Capital= Capital+s.charAt(i);
        } else {
            Notcapitals= Notcapitals + s.charAt(i);
        }
    } return Capital + Notcapitals;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
	var arrchars = [];
    var result = "";
    var result2 = "";
    for (let i=str.length-1; i>=0; i--){
        arrchars.push(str.charAt(i));
    }
    for (let i=0;i<arrchars.length;i++){
        result = result + arrchars[i];
    }
    var arrwords = result.split(" ");
    for (let i=arrwords.length-1; i>=0; i--){
        if (arrwords[i]===arrwords[0]){
        result2 = result2 + arrwords[i]
        } else {
            result2 = result2 + arrwords[i] + " ";
        }
    }
    return result2;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
	var str = "" + numero;
    var str2 = "";
    var arr = [];
    for (let i = str.length-1; i>=0; i--){
        arr.push(str.charAt(i));
    }
    for (let i=0; i<arr.length;i++){
        str2 = str2 + arr[i];
    }
    if (str2 === str){
        return "Es capicua";
    } else {
        return "No es capicua";
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
	   var arrchars = [];
    var filtered = [];
    var cadena2 = "";
    for (let i=0; i<cadena.length;i++){
        arrchars.push(cadena.charAt(i));
    }
    for (let i=0; i<arrchars.length; i++){
        if (arrchars[i]==="a" || arrchars[i]==="b" || arrchars[i] === "c"){
            continue;
        }else {
            filtered.push(arrchars[i]);
            }
        }
        for (let i=0;i<filtered.length;i++){
           cadena2 = cadena2 + filtered[i]; 
        }
        return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
	var array = [];
    var nose;
    for (var i=0; i<arr.length;){
        var largest = arr[i];
        for (var j=0;j<arr.length;j++){
            if (largest.length>arr[j].length){
                continue;
            } else if (largest.length<=arr[j].length){
                largest = arr[j];
            }
        }
        var index = arr.findIndex((elemento)=>elemento===largest);
        nose = arr.splice(index,1);
        array.unshift(largest);
    } return array
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
	  /*Bucle for que garantiza que no se repitan elementos*/
   var acumulador;
   for (var i=0; i<arreglo1.length;i++) {
       for(var j=0; j<arreglo1.length; j++){
           if (i===j && arreglo1[i]===arreglo1[j]){
               continue;
           } else if (arreglo1[i]===arreglo1[j]){
              acumulador = arreglo1.splice(j,1);
           }
       }
   }
   /*Bucle for que compara los valores entre ambos arrays*/
   var acumulador2 = [];
   for (var x=0;x<arreglo1.length;x++){
       for (var y=0;y<arreglo2.length;y++){
          if(arreglo1[x]===arreglo2[y]){
              acumulador2.push(arreglo1[x]);
              break;
          }
       }
   }
   return acumulador2;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

