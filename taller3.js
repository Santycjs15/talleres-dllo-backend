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

console.log(desglosarString('murcielagos','vocales'));
