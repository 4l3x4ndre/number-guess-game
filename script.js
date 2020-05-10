// NB. Je n'ai pas mis de point-virgules
// car ils sont devenus faculatifs dans les nouvelles verions de js

let b  = document.querySelector("#bouttonDemarage")
b.addEventListener("click", nombreAleatoire)

function nombreAleatoire() {
    // Nombre aléatoire
    let nb = Math.round(Math.random() * 5) + 1
    printer(nb)

    // Création de notre objet de jeu
    let jeu = {nb: nb, tentatives: 0, fini: false, nb_tentatives_debut: 15}

    // On demande un nombre au joueur
    demanderNombre(jeu)
}

function demanderNombre(jeu) {
    // Création de la zone de saisie
    let tentatives_restantes = jeu.nb_tentatives_debut - jeu.tentatives
    let phrase1 = "Il vous reste " + tentatives_restantes + " tentative" + (tentatives_restantes > 1 ? "s" : "")

    let phrase2 = "Essayer de deviner le nombre:"
    let reponse = prompt(phrase1 + "\n" + phrase2)

    // Si le joueur annule
    if (reponse === null) {
        return
    }

    // On vérifie que la réponse est un nombre
    if (isNaN(reponse) || reponse === '') {
        alert("Il faut un nombre !")
        demanderNombre(jeu)
        return
    }

    // Augmentation du nombre de tentatives
    jeu.tentatives ++

    // vérification réponse
    if (parseInt(reponse) === jeu.nb) {
        jeu.fini = true
        afficherAlert(jeu, "Vous avez trouvé le nombre " + jeu.nb + " en " + jeu.tentatives + " tentative" + (jeu.tentatives > 1 ? "s" : ""))
    } else if (reponse < jeu.nb) {
        afficherAlert(jeu, "Trop petit")
    } else if (reponse > jeu.nb) {
        afficherAlert(jeu, "Trop grand")
    }
}

function afficherAlert(jeu, phrase) {
    // On affiche le message dans la boite de dialogue
    alert(phrase)

    // On regarde si le joueur peut encore jouer
    if (jeu.tentatives >= jeu.nb_tentatives_debut) {
        alert("Vous avez perdu ! \nLe nombre était " + jeu.nb)
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