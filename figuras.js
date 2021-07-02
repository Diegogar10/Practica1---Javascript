//array de clases botones
const arrayClasesBotones = [
    "perimetro--cuadrado",
    "perimetro--triangulo",
    "perimetro--circulo",
    "area--cuadrado",
    "area--triangulo",
    "area--circulo"
];

// Figura Cuadrado
let perimetroCuadrado = (lado)=>{
    return lado * 4;
}
let areaCuadrado = (lado) =>{
    return lado * lado;
}

// Figura Triangulo
let perimetroTriangulo = (base, lado1, lado2) => {
    let num1 = parseInt(lado1);
    let num2 = parseInt(lado2);
    let num3 = parseInt(base);
    return num1 + num2 + num3;
}
let areaTriangulo = (base, altura) => {
    return (base*altura)/2;
}

// Figura Circulo
const PI = Math.PI;
let perimetroCirculo = (radio) => {
    return radio * PI;
}
let areaCirculo = (radio)=>{
    return (radio * radio) * PI;
}

//Interelacion con HTML
const inicio = () => {
    return document.querySelectorAll('button');
}

const eventosBotones = () =>{
    let botones = inicio();
    botones.forEach((e)=>{
        e.onclick = (i) => {
            let valores = obtenerValores(i);
            selectFunction(i.target.className,valores,i);
        }
    });
}

const selectFunction = (clase, valores, e) => {
    let resultado = 0;
    switch (clase){
        case arrayClasesBotones[0]:
            resultado = perimetroCuadrado(valores[0].value);
            muestraResultado(e,resultado);
        break;
        case arrayClasesBotones[1]:            
            resultado = 
                perimetroTriangulo(
                        valores[0].value,
                        valores[1].value,
                        valores[2].value
                        );
            muestraResultado(e,resultado);
        break;
        case arrayClasesBotones[2]:
            resultado = perimetroCirculo(valores[0].value);
            muestraResultado(e,resultado);
        break;
        case arrayClasesBotones[3]:
            resultado = areaCuadrado(valores[0].value);
            muestraResultado(e,resultado);
        break;
        case arrayClasesBotones[4]:
            resultado = 
                areaTriangulo(
                    valores[0].value,
                    valores[1].value
                    );
            muestraResultado(e,resultado);
        break;
        case arrayClasesBotones[5]:
            resultado = areaCirculo(valores[0].value);
            muestraResultado(e,resultado);
        break;
        default:
            muestraResultado(e,0);
        break;
    } 
}

const obtenerValores = (e) => {
    let clase = "." + e.path[2].className + " input"; 
    return document.querySelectorAll(clase);  
}

const muestraResultado = (e, resultado) => {
    let clase = "." + e.path[2].className + " .resultado";
    let objeto = document.querySelector(clase);
    objeto.classList.toggle("resultado--visible");
    clase += " p";
    objeto = document.querySelector(clase);
    objeto.innerHTML = resultado; 
}

eventosBotones();