// Figura Cuadrado
console.group("Cuadrados");

let perimetroCuadrado = (lado)=>{
    return lado * 4;
}

let areaCuadrado = (lado) =>{
    return lado * lado;
}

console.groupEnd();

// Figura Triangulo
console.group("Triangulos");

let perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
}

let areaTriangulo = (base, altura) => {
    return (base*altura)/2;
}

console.groupEnd();

// Figura Circulo
console.group("Circulos");

const PI = Math.PI;

let perimetroCirculo = (radio) => {
    return radio * PI;
}

let areaCirculo = (radio)=>{
    return (radio * radio) * PI;
}

console.groupEnd();