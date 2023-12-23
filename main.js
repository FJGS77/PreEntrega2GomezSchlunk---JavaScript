let impGanancias = 0.30;
let bienesPersonales = 0.00;
let impPais = 0.30;
let iva21 = 0.21;
let iva105 = 0.105;
let iva27 = 0.27;

while (true) {
    let eleccion = prompt("Hola! Bienvenidos/as a LA CALCU.\nElegir qué desea utilizar:\n1- Calculadora\n2- Calculadora de impuestos argentinos\n3- Servicios con impuestos");
    eleccion = parseInt(eleccion);
    if (!isNaN(eleccion) && (eleccion === 1 || eleccion === 2 || eleccion === 3)) {
        if (eleccion === 1) {

            let num1 = Number(prompt("Calculadora.\nIngresa el primer número"));
            let operacion = prompt("Ingresa la operación a realizar\n(+, -, *, /)");
            let num2 = Number(prompt("Ingresa el segundo número"));

            function calcular(num1, operacion, num2) {
                switch (operacion) {
                    case "+":
                        return num1 + num2;
                    case "-":
                        return num1 - num2;
                    case "*":
                        return num1 * num2;
                    case "/":
                        return num1 / num2;
                    default:
                        return "Operación no válida";
                }
            }

            let resultado = calcular(num1, operacion, num2);
            alert(`${num1} ${operacion} ${num2} = ${resultado}`);

        } else if (eleccion === 2) {

            let importe = Number(prompt("Calculadora de impuestos argentinos.\nIngresa un monto a calcular"));

            function calcularImpGanancias(importe, impGanancias) {
                let resultado = importe * impGanancias;
                return resultado.toFixed(2);
            }
            function calcularBsPersonales(importe, bienesPersonales) {
                let resultado = importe * bienesPersonales;
                return resultado.toFixed(2);
            }
            function calcularImpPais(importe, impPais) {
                let resultado = importe * impPais;
                return resultado.toFixed(2);
            }
            function calcularIva21(importe, iva21) {
                let resultado = importe * iva21;
                return resultado.toFixed(2);
            }
            function calcularIva105(importe, iva105) {
                let resultado = importe * iva105;
                return resultado.toFixed(2);
            }
            function calcularIva27(importe, iva27) {
                let resultado = importe * iva27;
                return resultado.toFixed(2);
            }

            let resultadoImpGanancias = calcularImpGanancias(importe, impGanancias);
            let resultadoBsPersonales = calcularBsPersonales(importe, bienesPersonales);
            let resultadoImpPais = calcularImpPais(importe, impPais);
            let resultadoImpIva21 = calcularIva21(importe, iva21);
            let resultadoImpIva105 = calcularIva105(importe, iva105);
            let resultadoImpIva27 = calcularIva27(importe, iva27);

            alert(`$ ${importe}
            Impuesto a las ganancias (30%) = $ ${resultadoImpGanancias}
            Impuesto a los bienes personales (0%) = $ ${resultadoBsPersonales}
            Impuesto país (30%) = $ ${resultadoImpPais}
            Iva 21% = $ ${resultadoImpIva21}
            Iva 10.5% = $ ${resultadoImpIva105}
            Iva 27% = $ ${resultadoImpIva27}`);

        } else if (eleccion === 3) {

            const servicios = {
                1: [
                    { id: "Netflix", tipo: "Básico", precio: 2499.00 },
                    { id: "Netflix", tipo: "Estándar", precio: 4199.00 },
                    { id: "Netflix", tipo: "Premium", precio: 5799.00 }
                ],
                2: [
                    { id: "Amazon Prime Video", tipo: "Estándar", precio: 1599.00 }
                ],
                3: [
                    { id: "Spotify", tipo: "Individual", precio: 599.00 },
                    { id: "Spotify", tipo: "Dúo", precio: 799.00 },
                    { id: "Spotify", tipo: "Familiar", precio: 999.00 },
                    { id: "Spotify", tipo: "Premium p/ estudiantes", precio: 329.00 }
                ],
                4: [
                    { id: "HBO MAX", tipo: "Estándar", precio: 1590.00 }
                ],
                5: [
                    { id: "Youtube Premium", tipo: "Individual", precio: 869.00 },
                    { id: "Youtube Premium", tipo: "Familiar", precio: 1569.00 }
                ],
                6: [
                    { id: "Paramount+", tipo: "Estándar", precio: 599.00 }
                ],
                7: [
                    { id: "Disney+ y Star+", tipo: "Disney+", precio: 799.00 },
                    { id: "Disney+ y Star+", tipo: "Star+", precio: 1749.00 },
                    { id: "Disney+ y Star+", tipo: "Disney+ y Star+", precio: 1999.00 },
                    { id: "Disney+ y Star+", tipo: "Disney+, Star+ y Lionsgate+", precio: 2399.00 }
                ]
            };
            const ingresoServicio = Number(prompt("Calculadora de servicios.\nIngrese el número del servicio:\n1- Netflix\n2- Amazon Prime Video\n3- Spotify\n4- HBO Max\n5- Youtube Premium\n6- Paramount+\n7- Disney+ y Star+"));
            const opcionesServicio = servicios[ingresoServicio];
            if (opcionesServicio) {
                opcionesServicio.forEach(opcion => {
                    function calcularImpGanancias(opcion, impGanancias) {
                        if (opcion && opcion.precio !== undefined) {
                            let resultado = opcion.precio * impGanancias;
                            return resultado;
                        }
                    }
                    function calcularImpPais(opcion, impPais) {
                        if (opcion && opcion.precio !== undefined) {
                            let resultado = opcion.precio * impPais;
                            return resultado;
                        }
                    }
                    function calcularBsPers(opcion, bienesPersonales) {
                        if (opcion && opcion.precio !== undefined) {
                            let resultado = opcion.precio * bienesPersonales;
                            return resultado;
                        }
                    }

                    let precioImpGanancias = calcularImpGanancias(opcion, impGanancias);
                    let precioImpPais = calcularImpPais(opcion, impPais);
                    let precioBsPers = calcularBsPers(opcion, bienesPersonales);

                    const precioFinal = opcion.precio + parseFloat(precioImpGanancias) + parseFloat(precioImpPais) + parseFloat(precioBsPers);

                    alert(`${opcion.id}
                    Plan: ${opcion.tipo}
                    Precio: $ ${opcion.precio.toFixed(2)}
                    Imp. País: $ ${precioImpPais.toFixed(2)}
                    Imp. Ganancias: $ ${precioImpGanancias.toFixed(2)}
                    Imp. Bienes Personales: $ ${precioBsPers.toFixed(2)}
                    Precio final: $ ${precioFinal.toFixed(2)} /m`);
                });
            } else {
                alert(`Por favor, seleccione una opción de la lista`);
            }
        }
    } else {
        alert("Opción no válida. Por favor, elige 1, 2 o 3.");
    }
}