document.getElementById("clickMe").onclick = test;
function test(){
    var h=document.getElementById("h").value;
    var m=document.getElementById("m").value;
    var resultado = m/(h*h);
    var mostrar = resultado.toFixed(1);
    alert(mostrar);
} 