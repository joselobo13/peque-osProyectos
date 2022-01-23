// variable

var array = []

// pre lanzamientos 

var botonGuadar = document.getElementById("btGuadar");

botonGuadar.addEventListener("click", function(evt) {
    guardar(evt);
}, false);


// principales
function guardar (evt) {
    // añadimos los eventos del div
    añadirEventoDiv();

    // ****** si el punto sale del div no cuenta el movimiento

    // cuando se haga click se para de guardar las cooordenadas
    cambiaEstadoGuadarCoordenadas();
};

function repetir () {
    var punta = document.getElementById("punteroSige");
    var ini = 0;

    var loop = setInterval(function(){
        if (ini < array.length) {
            punta.style.cssText = "margin-top: " + array[ini][1] + "px; margin-left: " + array[ini][0] + "px;";
            ini++;
        } else {
            clearInterval(loop);
        }
    }, 50);
};

// secundaria
function añadirEventoDiv () {
    var div = document.getElementById("divPuntero");
    
    div.addEventListener("mousemove", guadarCoordenadasActauales);
}

function cambiaEstadoGuadarCoordenadas () {
    botonGuadar.innerHTML = 'guardar las cooordenadas';

    botonGuadar.addEventListener("click", function(evt) {
        guadarCoordenadas();
    }, false);
}

// tercer nivel

function guadarCoordenadas () {
    botonGuadar.innerHTML = 'guardar Movimiento';

    var div = document.getElementById("divPuntero");
    
    div.removeEventListener("mousemove", guadarCoordenadasActauales);
}

function guadarCoordenadasActauales() {
    var a = [window.event.clientX, window.event.clientY];
    array.push(a);
}