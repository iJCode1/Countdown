/* Lógica para el countdown*/

//Elementos HTML
const $dias = document.querySelector(".count__dia");
const $horas = document.querySelector(".count__hora");
const $minutos = document.querySelector(".count__minutos");
const $segundos = document.querySelector(".count__segundos");


const fechaFinal = new Date("Nov 17 2027");

interval = setInterval(()=>{
  let fechaActual = new Date();
  //Se indica 1000 para representar los milisegundos.
  let restaFechas = (fechaFinal.getTime() - fechaActual.getTime() + 1000) / 1000;


  //Calculo de countdown
  //3600 === (60 * 60) === 60 segundos para formar un minuto * 60 minutos que forman 1 hora
  //3600 * 24 === 36000 * 24 horas que tiene 1 dia...
  /*
      .slice(numeroNegativo) 
      Sirve para cortar y obtener solo los ultimos 2 digitos y asi al agregar el cero al principio,
      no se mostrara cuando se tiene un valor ya de 2 cifras. Ej: 11 no se mostrara como 011.
      Solo se mostraran los ultimo 2 digitos '11'
  */
  let restaDias = Math.floor(restaFechas / (3600 * 24)); 
  let restaHoras = ('0' + Math.floor(restaFechas / 3600 % 24)).slice(-2);
  let restaMinutos = ('0' + Math.floor(restaFechas / 60 % 60)).slice(-2);
  let restaSegundos = ('0' + Math.floor(restaFechas % 60)).slice(-2);

  $dias.textContent = restaDias;
  $horas.textContent = restaHoras;
  $minutos.textContent = restaMinutos;
  $segundos.textContent = restaSegundos;
  

  if(restaFechas < 0){
      console.log("El Countdown llego a su fin, el cual fue: 08/Diciembre/2022");
      clearInterval(interval);
  }
},1000);
