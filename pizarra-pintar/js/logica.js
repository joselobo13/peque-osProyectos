
var colorActual = "#000000";
var pintar = false;
var cuadrados = 2500;
var totalGuarda = "";

rellenarPedazosPizarra();

var pikerColor = document.getElementById('colorSele');
pikerColor.addEventListener("change", cambioColor, false);

var botonGuadarDibujo = document.getElementById('guaDibu');
botonGuadarDibujo.addEventListener('click', guadraDibu, false);

var botonImportarDibujo = document.getElementById('importar');
botonImportarDibujo.addEventListener('click', importarDibujo, false);

var botonborrarLog = document.getElementById('borrarLog');
botonborrarLog.addEventListener('click', borrarLogText, false);

var botonGomaBorrar = document.getElementById('gomaBorrar');
botonGomaBorrar.addEventListener('click', gomaBorrarFunc, false);

function rellenarPedazosPizarra () {
    var pizarra = document.getElementById('pizarra');
    for (let i = 1; i <= cuadrados; i++) {
        var nuevoPedazo = document.createElement("div");
        nuevoPedazo.id = i;
        añadirColor(nuevoPedazo);
        pizarra.appendChild(nuevoPedazo);
    }
}

function añadirColor (div) {
    div.addEventListener("mouseover", function( event ) {
        if (pintar) {
            event.target.style.backgroundColor = colorActual;
        }
    }, false);

    div.addEventListener("click", function( event ) {
        if (pintar) {
            pintar = false
        } else {
            pintar = true;
        }
    }, false);
}

function cambioColor (event) {
    var colorActualMues = document.getElementById('colorActualMues');
    colorActualMues.style.backgroundColor = event.target.value + "";
    colorActual = event.target.value;
}

function guadraDibu () {
    var pizarra = document.getElementById('pizarra');
    for (let i = 1; i <= cuadrados; i++) {
        totalGuarda += "*" + i + "-";
        var pedazo = document.getElementById(i +"");
        if (pedazo.style.backgroundColor == "") {
            totalGuarda += "+";
        } else {
            totalGuarda += pedazo.style.backgroundColor;
        }
        totalGuarda += "-"
    }

    borrarLogText();
    var textoFinal = document.getElementById('textoFinal');
    textoFinal.value = totalGuarda;
}

function importarDibujo () {
    var textoImportado = document.getElementById('textoFinal').value;

    var accion = "id"; // id, estiloE, estiloT
    var idText = "";
    var rgbText = "";
    var elemento = "";
    
    for (let i = 0; i < textoImportado.length; i++) {
        if (textoImportado[i] == "*") {
            accion = "id";

        } else if (accion == "id" && textoImportado[i] == "-") {
            accion = "estiloE";
            elemento = document.getElementById(idText);
            idText = "";

        } else if (accion == "estiloE" && textoImportado[i] == "-") {
            accion = "estiloT";
            elemento.style.backgroundColor = rgbText;
            rgbText = "";

        } else if (accion == "id") {
            idText += textoImportado[i];

        } else if (accion == "estiloE") {
            if (textoImportado[i] == "+") {
                rgbText = "";
            } else {
                rgbText += textoImportado[i];
            } 

        }
    }
}

function borrarLogText () {
    var textolog = document.getElementById('textoFinal');
    textolog.value = "";
}

function gomaBorrarFunc () {
    var colorActualMues = document.getElementById('colorActualMues');
    colorActualMues.style.backgroundColor = "";
    colorActual = event.target.value;
}