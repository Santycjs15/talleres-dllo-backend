// Punto 1
function findMax(lista){
    let valorMax = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if(valorMax < lista[i]){
            valorMax = lista[i];
        }
    }
    return valorMax;
}

console.log(findMax([8, 17, 18, -30, -19]));

//Punto 2
function includes(lista, numero){
let b = Boolean(false);
    for (let i = 0; i < lista.length; i++) {
        if(numero == lista[i]){
            b = Boolean(true);
        }   
    }
    return b;
}

console.log(includes([3, 17, -1, 4, -19], 4));

//Punto 3
function sum(lista){
    let sumaTotal = lista[0];
    for (let i = 1; i < lista.length; i++) {
        sumaTotal = lista[i] + sumaTotal;    
    }
    return sumaTotal;
}

console.log(sum([3, 17, -1, 4, -19]));

//Punto 4

function missingNumbers(lista){
    let ultNum = lista[lista.length - 1];
    for (let i = 1; i < ultNum; i++) {
        const element = lista[i];
        
    }
    return ultNum
}

console.log(missingNumbers([7, 2, 4, 6, 3, 9]));
