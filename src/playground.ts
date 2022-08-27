/*Aritmetic operations*/

function sum(num1: number, num2: number): number{
    return num1 + num2;
}

let adicion: (num1: number, num2: number) => number;
adicion = sum;

function pow(base: number, exponente: number): number{
    return base ** exponente;
}

let potencia: (base: number, exponente: number) => number;
potencia = pow;

/*Examples*/

console.log('Suma:', adicion(10, 3));

