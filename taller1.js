// 1

function convertidorTemp(centigrados){
    let fahrenheit = (centigrados * 9/5) + 32;
    return fahrenheit;
}

console.log(convertidorTemp(23)+"°"); // 32
// 2

function resolvedor(a, b, c, signo = true){ 
    const sqrt = Math.sqrt(b**2 - 4*a*c);
     x1 = (-b + sqrt) / (2*a);
     x2 = (-b - sqrt) / (2*a);
    return signo ? x1:x2;
}
console.log(resolvedor(1, 5, 4, true)); 

// 3

function mejorParidad(a){
    Boolean = a%2 == 0;
    return (Boolean) ? "Par" : "Impar";
}
console.log(mejorParidad(5));

// 4

function peorParidad(numero) {
    if (numero == 0 || numero == 2 || numero == 4 || 
        numero == 6 || numero == 8 || numero == 10) {
        return "Par";
    }
    if(numero == 1 || numero == 3 || numero == 5 || 
        numero == 7 || numero == 9){
        return "Impar";
    }
}
console.log(peorParidad(2));