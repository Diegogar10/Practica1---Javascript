// Figura Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado son: " + perimetroCuadrado + " cm.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area es: " + areaCuadrado + " cm^2.");

console.groupEnd();

// Figura Triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`
    Los lados del triangulo son: 
    ${ladoTriangulo1} cm,
    ${ladoTriangulo2} cm,
    ${baseTriangulo} cm.
`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo son: " + perimetroTriangulo + " cm.");

const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area es: " + areaTriangulo + " cm^2.");

console.groupEnd();

// Figura Circulo
console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm.");

const PI = Math.PI;
console.log("El el valor de PI es: " + PI);

const perimetroCirculo = radioCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm.");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + " cm.")


console.groupEnd();