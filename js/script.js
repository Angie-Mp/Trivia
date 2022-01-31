
//nombre del user
function obtenerdatos()
{
  let nombre = document.getElementById("nombre").value;
  console.log(nombre);
  
  if(nombre=="")
  {
    alert("Campo vacio, ingresa tu nombre")
    return;
  }
  document.getElementById("form1").style.display = 'none';  
  document.getElementById("mostrarnombre").value = nombre;
  document.getElementById("showname").style.display = 'block';
}

//FUNCIONES DE LA PÁGINA MENÚ
function peliculas(){
  location.href =("../html/peliculas.html")
}
//
function series(){
  location.href=("../html/series.html")
}

// FUNCIONES DE RESPUESTAS CORRECTAS O INCORRECTAS
function alertaIncorrecta()
    {
    alert("La respuesta es INCORRECTA")  
    document.getElementById("pregunta1s").style.display = 'none';  
    document.getElementById("pregunta2s").style.display = 'block';
}
function alertaIncorrecta1()
{
  alert("La respuesta es INCORRECTA")  
  document.getElementById("pregunta2s").style.display = 'none';  
  document.getElementById("pregunta3s").style.display = 'block';
}
function alertaIncorrecta2()
{
  alert("La respuesta es INCORRECTA")  
  document.getElementById("pregunta3s").style.display = 'none';  
  document.getElementById("resultadoSeries").style.display = 'block';
}

// CONTADOR DEL PUNTAJE
var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);

    document.getElementById("pregunta1s").style.display = 'none';  
    document.getElementById("pregunta2s").style.display = 'block';
}

function incrementClick1() {
    updateDisplay(++counterVal);
    
    document.getElementById("pregunta2s").style.display = 'none';  
    document.getElementById("pregunta3s").style.display = 'block';
}

function incrementClick2() {
    updateDisplay(++counterVal);
    
    document.getElementById("pregunta3s").style.display = 'none';  
    document.getElementById("resultadoSeries").style.display = 'block';
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    a = document.getElementById("counter-label").innerHTML = val;
    alert("Respuesta CORRECTA: Obtuviste "+a+" punto(s)"); 
}
