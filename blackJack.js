// Sauvegarder le nombre choisi par l'utilisateur
function aleatoire() {
  var userNumber = document.getElementById('userEntry').value;

  // Générer un nombre aléatoire
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById('random').innerHTML = randomNumber;

  // Comparaison est affichage
  if (userNumber > randomNumber) {
    document.getElementById('result').innerHTML = "C'est gagné !";
  } else {
    document.getElementById('result').innerHTML = "C'est perdu !";
  }
}

function blackJack() {
  var randomNumberUser = Math.floor(Math.random() * 11) + 1;
  document.getElementById('userNumber').innerHTML = randomNumberUser;
  var randomNumberCom = Math.floor(Math.random() * 11) + 1;
  document.getElementById('comNumber').innerHTML = randomNumberCom;
}

function blackJack2() {
  var randomNumberSum = randomNumberUser + Math.floor(Math.random() * 11) + 1;
  var randomNumberSumCom = randomNumberCom + Math.floor(Math.random() * 11) + 1;
}
