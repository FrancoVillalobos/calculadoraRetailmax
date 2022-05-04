document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("display");
    var listenerBtn = [];

    //capturar botones y controles
    var btnResultado = document.getElementById("resultado");
    var btnLimpiarDisplay = document.getElementById("reset");
    var btnBorrar = document.getElementById("borrar");
    listenerBtn.push(document.getElementById("punto"));
    listenerBtn.push(document.getElementById("sumar"));
    listenerBtn.push(document.getElementById("restar"));
    listenerBtn.push(document.getElementById("dividir"));
    listenerBtn.push(document.getElementById("multiplicar"));
    listenerBtn.push(document.getElementById("num0"));
    listenerBtn.push(document.getElementById("num1"));
    listenerBtn.push(document.getElementById("num2"));
    listenerBtn.push(document.getElementById("num3"));
    listenerBtn.push(document.getElementById("num4"));
    listenerBtn.push(document.getElementById("num5"));
    listenerBtn.push(document.getElementById("num6"));
    listenerBtn.push(document.getElementById("num7"));
    listenerBtn.push(document.getElementById("num8"));
    listenerBtn.push(document.getElementById("num9"));

    //agregar al arreglo las pulsaciones y pasalas al display
    for (var i = 0; i < listenerBtn.length; i++) {
        listenerBtn[i].addEventListener("click", mostrar);
    }

    //evaluar el resultado
    btnResultado.onclick = function () {
        display.value = eval(display.value);        
    }
    //funcion muestra en el display 
    function mostrar() {
        if (operacion(this.value)) {
            var aux = display.value.substring(display.value.length - 1, display.value.length);
            if (operacion(aux)) {
                Borrar();
            }
        }
        if (this.value) {
            display.value += this.value;
        }
    }

    btnBorrar.onclick = function () {
        Borrar();
    }

    function Borrar() {
        if (display.value.length > 0) {
            var aux = display.value.substring(0, display.value.length - 1);
            display.value = aux;
            //console.log(aux);
        }
    }

    btnLimpiarDisplay.onclick = function () {
        console.log("borrado");
        display.value = "";
    }

    function operacion(valor) {
        //console.log(valor);
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;
            default:
                return false;
        }
    }
});