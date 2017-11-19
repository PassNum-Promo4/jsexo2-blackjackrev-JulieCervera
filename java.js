// Sauvegarder le nombre choisi par l'utilisateur
function aleatoire() {
  var userNumber = document.getElementById('userEntry').value;
  document.getElementById('number').innerHTML = userNumber;

// Générer un nombre aléatoire
  var randomNumber = Math.floor(Math.random()*10)+1;
  document.getElementById('random').innerHTML = randomNumber;

// Comparaison est affichage
  if (userNumber > randomNumber) {
    document.getElementById('result').innerHTML = "C'est gagné !";
  } else {
    document.getElementById('result').innerHTML = "C'est perdu !";
  }
}
