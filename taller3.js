//Punto 1
function desglosarString(palabra, tipo){
    let letrasSeparadas = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let contVoc = 0;
    let contCons = 0;
    letrasSeparadas = palabra.split('');
    for (let i = 0; i < letrasSeparadas.length; i++) {
        if(tipo == 'vocales'){
            if (vowels.includes(letrasSeparadas[i])){
                contVoc++;
            }
        }else{
            if (!vowels.includes(letrasSeparadas[i])){
                contCons++;
            }
        }
    }    
    return contVoc || contCons;   
}

console.log(desglosarString('murcielagos','consonantes'));

//Punto 2
function twoSum(lista, numero){
    let indices = [];
    for (let i = 0; i < lista.length; i++) {
        for (let j = i+1; j < lista.length; j++) {
            if(lista[i] + lista[j] === numero){
                indices.push(i, j);
            }           
        }
    }
    return indices;
}

console.log(twoSum([2, 2, 7, 9, 11], 4));

//Punto 3

function conversionRomana(roman){
    const numRomanos = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    let anterior, resultado = 0;

    for (let i = roman.length -1 ; i >= 0 ; i--) {
        const ultimo = numRomanos[roman.charAt(i)];
        if(ultimo < anterior){
            resultado = resultado - ultimo;
        }else{
            resultado = resultado+ultimo;
        }
        anterior = ultimo;
    }
    return resultado
}

console.log(conversionRomana("MMXXIV"));

