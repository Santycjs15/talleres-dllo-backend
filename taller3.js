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
        for (let j = lista[i+1]; j < lista.length; j++) {
            if(lista[i] + lista[j] == numero){
                indices.push(i, j);
            }      
            return indices;      
        }
    }
    return indices;
}

console.log(twoSum([2, 7, 11, 15], 9));

