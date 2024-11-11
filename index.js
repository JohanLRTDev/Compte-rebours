const userChoice = document.getElementById("choice");
const secondsSong = document.getElementById("seconds-sound");
let totalSeconds; //number of seconds
let interval;

// afficher le décompte dans le HTML
const affichageCountdown = (minutes, sec) => {
  countdownDisplay.textContent = `${minutes}:${sec}`;
};
// Initialiser le compte à rebours
const countdown = () => {
  let minutes = Math.floor(totalSeconds / 60); //convertir total seconds en minute
  let seconds = totalSeconds % 60; //calcule les secondes restantes
  let sec = seconds < 10 ? "0" + seconds : seconds; //si seconds < 10 ajoute un zéro devant
  affichageCountdown(minutes, sec); //affiche le décompte dans le HTML
  totalSeconds--; //
  if (totalSeconds <= 0) {
    clearInterval(interval); //stop le timer si decompte est terminé
    countdownDisplay.textContent = "c'est terminé";
  }
};

//valide le formulaire avec valeur client
const validationFormulaire = () => {
  form.addEventListener("submit", (e) => {
    if (isNaN(choice.value)) {
      alert("Veuillez saisir un nombre valide");
      return; //si la saisie n'est pas un nombre, annule le submit et affiche un message d'erreur
    } else {
      e.preventDefault();
      totalSeconds = userChoice.value * 60;
      userChoice.value = ""; //vide le champ de saisie
      clearInterval(interval); //permet de clear le timer s'il existe déjà et que nouvelle valeur envoyer

      interval = setInterval(countdown, 1000);
    }
  });
};
///////////////////////////////
// fonction principale qui initialise le compte à rebours
const masterCountdown = () => {
  //joue la musique de départ
  validationFormulaire();
};
masterCountdown(); ////////////////////////////////////////////////
