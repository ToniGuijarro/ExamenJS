function _id(ident){
    return document.getElementById(ident);
}

function factorial(){
    var entrada=_id("entradaFactorial").value;
    var operaciones="";
    var resultado=1;
    for(var i=entrada;i>0;i--){
        resultado = resultado *i;
        operaciones+=i+"*"
    }
    _id("resultatFactorial").innerHTML=resultado;
    _id("operacionsFactorial").innerHTML=operaciones;
}

function calculaIVA(){
    
}

function canviaFons(tipus){
    if (tipus == "random"){
        var red = Math.floor(Math.random() * 255);
        var green = red;
        var blue = red;
        
        colorFondo = "rgb(" + red + "," + green + "," + blue + ")";
}

var colorFondo;
_id("cos").style.backgroundColor = colorFondo;