let nom = document.getElementById("name");
let prenom = document.getElementById("prenom");
let mail = document.getElementById("mail");
const bouton = document.getElementById("bouton");

bouton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValide = verifName(nom.value);
  const prenomValide = verifPrenom(prenom.value);
  const mailValide = verifMail(mail.value);

  if (nameValide && prenomValide && mailValide) {
    alert("Formulaire valide !");
  } else {
    alert("Erreur: Vérifier votre saisie");
  }
});


/** 
 * Valide un nom
 * 2 caractères minimum, uniquement des lettres _nom
 * @param {string} _nom le nom à valider
 * @returns {Boolean} VRAI si le nom est valide, FAUX sinon
 */


function verifName(_nom) {
  const regexNom = /^[A-Za-z]{2,}$/;
  _nom = _nom.trim();
  return regexNom.test(_nom);
}

/** 
 * Valide un prénom
 * 2 caractères minimum, uniquement des lettres _prenom
 * @param {string} _prenom le prenom à valider
 * @returns {Boolean} VRAI si le nom est valide, FAUX sinon
 */

function verifPrenom(_prenom) {
  const regexPrenom = /^[A-Za-z]{2,}$/;
  _prenom = _prenom.trim();
  return regexPrenom.test(_prenom);
}


/** 
 * Valide un email
 * lettres chiffres ou certains symboles suivi d'un @ puis de chiffres ou lettres .et 2 lettres mini
 * @param {string} _mail le mail à valider
 * @returns {Boolean} VRAI si le nom est valide, FAUX sinon
 */
function verifMail(_mail) {
  const regexMail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;

  _mail = _mail.trim();
  return regexMail.test(_mail);
}
