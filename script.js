// NB. Je n'ai pas mis de point-virgules
// car ils sont devenus faculatifs dans les nouvelles verions de js

let b  = document.querySelector("#bouttonDemarage")
b.addEventListener("click", nombreAleatoire)

function nombreAleatoire() {
    // Nombre aléatoire
    let nb = Math.round(Math.random() * 101)
    printer(nb)

    // Création de notre objet de jeu
    let jeu = {nb: nb, tentatives: 0, fini: false, nb_tentatives_debut: 15}

    // On demande un nombre au joueur
    demanderNombre(jeu)
}

function demanderNombre(jeu) {
    // Création de la zone de saisie
    let tentatives_restantes = jeu.nb_tentatives_debut - jeu.tentatives
    let phrase1 = "Il vous reste " + tentatives_restantes + " " 
    if (tentatives_restantes == 1) {
        phrase1 += "tentative"
    } else {
        phrase1 += "tentatives"
    }

    let phrase2 = "Essayer de deviner le nombre:"
    let reponse = prompt(phrase1 + "\n" + phrase2)
    
    // On vérifie que la réponse est un nombre
    if (isNaN(reponse)) {
        alert("Perdu : il faut un nombre !")
        return
    }

    // Augmentation du nombre de tentatives
    jeu.tentatives ++;

    // vérification réponse
    if (parseInt(reponse) === jeu.nb) {
        jeu.fini = true
        afficherAlert(jeu, "Vous avez trouvé le nombre " + jeu.nb + " en " + jeu.tentatives + " tentatives!")
    } else if (reponse < jeu.nb) {
        afficherAlert(jeu, "Trop petit")
    } else if (reponse > jeu.nb) {
        afficherAlert(jeu, "Trop grand")
    }
}

function afficherAlert(jeu, phrase) {
    // On affiche le message dans la boite de dialogue
    alert(phrase)

    // On regarde si le joueur peu encore jouer
    if (jeu.tentatives >= jeu.nb_tentatives_debut) {
        alert("Vous avez perdu ! \n Le nombre était " + jeu.nb)
        return
    }

    // Si le joueur n'a toujours pas trouvé, on continue
    // de demander un nombre au joueur
    if (jeu.fini === false) {
        demanderNombre(jeu)
    } else {
        return
    }
}

// Fonction d'aide pour aller plus vite dans les tests
function printer(nb) {
    console.log("Pour le dev: " + nb)
}