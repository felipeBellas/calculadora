function insert(numero)
{
var cal = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = cal + numero

}
function clean()
{
document.getElementById('resultado').innerHTML = " "

}
function back()
{
var resultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length = -1);

}
function negativa(numero) {
var calc = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = calc + numero
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = '-'
    }
  

}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
         
    }
    else
    {
        document.getElementById('resultado').innerHTML = ' 0 '
    }

}

     
