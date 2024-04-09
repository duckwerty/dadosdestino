document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
  var dice = document.getElementById('dice');
  var sides = 6; // Número de lados del dado
  var rollTimes = 10; // Número de cambios antes de llegar al resultado final
  var intervalTime = 100; // Tiempo en milisegundos entre cada cambio
  
  // Deshabilita el botón mientras se está girando el dado
  document.getElementById('rollButton').disabled = true;
  
  // Generar un número aleatorio entre 1 y 6
  var finalResult = Math.floor(Math.random() * sides) + 1;
  
  // Iniciar temporizador para cambiar gradualmente el valor del dado
  var rollCount = 0;
  var interval = setInterval(function() {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    dice.style.backgroundImage = "url('img/dados/" + randomNumber + ".png')";
    rollCount++;
    if (rollCount >= rollTimes) {
      clearInterval(interval);
      // Muestra el resultado final después de la animación
      dice.style.backgroundImage = "url('img/dados/" + finalResult + ".png')";
      // Habilita el botón después de que el dado se detiene
      document.getElementById('rollButton').disabled = false;
    }
  }, intervalTime);
}
