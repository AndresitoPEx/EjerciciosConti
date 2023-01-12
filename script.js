//Ej 1
function contrasenaValida() {
    
    let textoIngresado = document.getElementById('texto').value;
  
    let texto1 = '2Fj(jjbFsuj';
    let texto2 = 'eoZiugBf&g9';

    if (textoIngresado === texto1 || textoIngresado === texto2) {
      alert('True');
    } else {
      alert('False');
    }
  }
  //--------------------------------------------------------------------------------
//Ej 2
function calcularImpuestos(edad, ingresos){

    if (edad >= 18 && ingresos >= 1000) {
        alert(ingresos*0.4);
    } else {
        alert(0);
    }
}
function calcular1(){
    let edad = document.getElementById("edad").value;
    let ingresos = document.getElementById("ingresos").value;
    document.getElementById("resultado").innerHTML = calcularImpuestos(edad, ingresos);
}
//-----------------------------------------------------------------------------------
//Ej 3
function BMI(altura, peso) {
    let resultado = peso / (altura * altura);
    
    if (resultado < 18.5) {
        alert("Bajo de peso");
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        alert("Normal");     
    }
    else if (resultado >= 25 && resultado <= 29.9) {
        alert("Sobrepeso");
    }
    else if (resultado >= 30 && resultado <= 34.9) {
        alert("Obeso");
    }
}
function calcular2() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    document.getElementById("resultado").innerHTML =  BMI(altura, peso);
}