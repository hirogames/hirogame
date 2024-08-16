const challenges = [
    "Chanter une chanson a cappella",
    "Faire le coq",
    "Faire dix tours sur soi-même avec un balai",
    "Boire un cocktail préparé par les autres",
    "Faire du pole dance autour d’un lampadaire",
    "Parler sans utiliser une lettre définie",
    "Mimer une célébrité",
    "Faire la Macarena à l'envers",
    "Interdiction de dire 'non' toute la soirée",
    "Faire un strip-tease (habillé)",
    "Imiter la démarche de la personne à votre droite",
    "Faire un selfie dans une position ridicule",
    "Échanger vos vêtements avec une autre personne",
    "Faire un discours comme si vous étiez président",
    "Danser comme si personne ne regardait",
    "Faire un moonwalk",
    "Imiter un animal",
    "Chanter une chanson à l'envers",
    "Danser sur une chanson choisie",
    "Envoyer un message embarrassant à un ex",
    "Changer la sonnerie de ton téléphone pour un son ridicule",
    "Dire une phrase en chuchotant dans l’oreille d’un autre joueur",
    "Porter une chaussette sur une main pendant deux tours",
    "Faire 10 pompes ou squats",
    "Appeler un restaurant et poser une question ridicule",
    "Parler en rimes pendant 5 minutes",
    "Mettre un glaçon dans son pantalon",
    "Inventer une chanson de rap sur un sujet aléatoire",
    "Faire semblant de rire de manière excessive à tout ce qui est dit",
    "Dire un tongue twister trois fois rapidement",
    "Faire une déclaration d'amour à un inconnu sur les réseaux sociaux",
    "Changer de voix à chaque phrase pendant 2 minutes",

    // Défis axés sur Hiro
    "Hiro doit boire deux shots chaque fois que quelqu'un dit 'boire'",
    "Hiro doit faire un moonwalk après avoir bu deux shots",
    "Hiro doit imiter un animal après avoir pris deux bouffées d'herbe",
    "Hiro doit chanter une chanson à l'envers après deux verres de vin",
    "Hiro doit danser sur une chanson choisie par le groupe après avoir fumé deux fois",
    "Hiro doit mimer un film en ayant les yeux bandés après deux shots",
    "Hiro doit échanger son verre avec la personne en face et boire cul sec deux fois",
    "Hiro doit raconter une blague en tenant deux glaçons dans sa bouche",
    "Hiro doit faire le poirier après avoir bu deux cocktails",
    "Hiro doit parler avec un accent après avoir fumé deux fois",
    "Hiro doit faire une danse TikTok après deux verres de bière",
    "Hiro doit envoyer un message embarrassant à un ex après deux shots",
    "Hiro doit changer la sonnerie de son téléphone pour un son ridicule après deux verres",
    "Hiro doit dire une phrase en chuchotant dans l’oreille d’un autre joueur après deux bouffées",
    "Hiro doit imiter un bébé qui pleure après avoir bu deux verres",
    "Hiro doit porter une chaussette sur une main pendant deux tours après avoir fumé",
    "Hiro doit faire 10 pompes ou squats après avoir fumé deux fois",
    "Hiro doit faire un tour de la pièce en courant sur les genoux après deux shots",
    "Hiro doit appeler un restaurant et poser une question ridicule après deux verres",
    "Hiro doit parler en rimes pendant 5 minutes après deux shots",
    "Hiro doit dessiner quelque chose les yeux fermés après avoir fumé deux fois",
    "Hiro doit boire deux verres sans utiliser les mains",
    "Hiro doit faire semblant d'être en slow motion pendant 2 minutes après deux shots",
    "Hiro doit faire un bisou sur le crâne d’un chauve après deux verres",
    "Hiro doit convaincre un étranger de chanter bon anniversaire après deux bouffées",
    "Hiro doit faire un dessin de quelqu’un dans la rue et essayer de le lui vendre après deux shots",
    "Hiro doit garder un glaçon dans sa main jusqu’à la fonte totale après deux verres",
    "Hiro doit écrire une déclaration d’amour sur un tableau blanc après avoir fumé deux fois",
    "Hiro doit jouer à un jeu vidéo en étant debout après deux shots",
    "Hiro doit faire une démonstration de yoga après avoir fumé deux fois",
    "Hiro doit chanter une chanson en imitant un personnage de dessin animé après deux shots",
    "Hiro doit faire le clown pendant 5 minutes après deux verres",
    "Hiro doit raconter une histoire drôle après avoir fumé deux fois",
    "Hiro doit changer son statut Facebook en quelque chose d'embarrassant après deux shots",
    "Hiro doit faire un selfie en train de faire une danse étrange",
    "Hiro doit préparer un plat étrange et le goûter",
    "Hiro doit faire une imitation d'un super-héros",
    "Hiro doit envoyer un message étrange à un ami",
    "Hiro doit faire une vidéo de 30 secondes en faisant une activité ridicule",
    "Hiro doit essayer un look de mode bizarre pour le reste de la soirée",
    "Hiro doit lire un passage de livre en imitant une voix de cartoon",
    "Hiro doit faire un discours sur un sujet aléatoire",
    "Hiro doit participer à un défi de danse sur les réseaux sociaux",
    "Hiro doit faire une démonstration de magie avec des objets du quotidien",
    "Hiro doit écrire une lettre d'amour fictive à un personnage célèbre",
    "Hiro doit réaliser une parodie d'une scène de film",
    "Hiro doit faire des grimaces jusqu'à ce que quelqu'un rit",
    "Hiro doit imiter une émission de télévision",
    "Hiro doit écrire une chanson en utilisant des objets de la pièce comme instruments",
    "Hiro doit dessiner un portrait d'un ami avec les yeux fermés",
    "Hiro doit faire des exercices de yoga en imitant un animal",
    "Hiro doit faire une lecture dramatique d'un texte drôle",
    "Hiro doit fabriquer un chapeau à partir de matériaux trouvés dans la pièce",
    "Hiro doit créer un mème basé sur une photo de lui",
    "Hiro doit essayer de jongler avec des objets légers",
    "Hiro doit réaliser une performance de stand-up improvisé",
    "Hiro doit faire des vocalises comme un chanteur d'opéra",
    "Hiro doit créer une danse en utilisant uniquement les bras",
    "Hiro doit imiter un personnage de dessin animé avec des accessoires improvisés",
    "Hiro doit écrire une courte histoire en 5 minutes",
    "Hiro doit organiser un mini défilé de mode avec des vêtements de la pièce",
    "Hiro doit essayer de parler en vers",
    "Hiro doit créer une œuvre d'art avec des éléments trouvés dans la pièce",
    "Hiro doit faire un numéro de magie avec des cartes",
    "Hiro doit réaliser une présentation PowerPoint sur un sujet absurde",
    "Hiro doit dessiner un personnage de film avec les pieds",
    "Hiro doit raconter une blague en imitant différents accents",
    "Hiro doit faire une démonstration de danse avec des mouvements improbables"
];

document.addEventListener('DOMContentLoaded', () => {
    // Récupération des éléments HTML par leur ID
    const prevChallengeBtn = document.getElementById('prev-challenge-btn');
    const nextChallengeBtn = document.getElementById('next-challenge-btn');
    const replayBtn = document.getElementById('replay-btn');
    const challengeDisplay = document.getElementById('challenge-display');
    const challengeCounter = document.getElementById('challenge-counter');
    const progress = document.getElementById('progress');
    const emojiContainer = document.getElementById('emoji-container');
    const scoreDisplay = document.getElementById('score-display');

    // Initialisation des variables
    let usedChallenges = []; // Tableau pour stocker les défis déjà utilisés
    const totalChallenges = 50; // Nombre total de défis dans le jeu
    let progressWidth = 0; // Largeur initiale de la barre de progression

    // Fonction pour obtenir un défi aléatoire non répété
    function getRandomChallenge() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * challenges.length); // Sélectionne un index aléatoire
        } while (usedChallenges.includes(randomIndex) && usedChallenges.length < challenges.length); 
        // Répète tant que le défi est déjà utilisé et que tous les défis ne sont pas encore utilisés
        return randomIndex;
    }

    // Fonction pour afficher le défi
    function showChallenge(index) {
        challengeDisplay.textContent = challenges[index]; // Affiche le défi actuel
        challengeCounter.textContent = `${usedChallenges.length}/${totalChallenges}`; // Met à jour le compteur de défis
    }

    // Fonction pour mettre à jour la barre de progression
    function updateProgress() {
        progressWidth = (usedChallenges.length / totalChallenges) * 100; // Calcule le pourcentage de progression
        progress.style.width = `${progressWidth}%`; // Met à jour la largeur de la barre de progression
    }

    // Fonction appelée à la fin du jeu
    function endGame() {
        confetti(); // Lance les confettis
        showEmojis(); // Affiche les emojis
        challengeDisplay.style.display = 'none'; // Cache le défi
        scoreDisplay.style.display = 'block'; // Affiche le score final
        scoreDisplay.textContent = `Score Final: ${usedChallenges.length}/${totalChallenges}`; // Affiche le score
        prevChallengeBtn.style.display = 'none'; // Cache le bouton précédent
        nextChallengeBtn.style.display = 'none'; // Cache le bouton suivant
        replayBtn.style.display = 'block'; // Affiche le bouton rejouer
    }

    // Fonction pour afficher des emojis festifs
    function showEmojis() {
        const emojis = ['🎉', '🎊', '🎈', '🥳', '💥']; // Liste d'emojis festifs
        const numEmojis = 50; // Nombre d'emojis à afficher

        for (let i = 0; i < numEmojis; i++) {
            const emoji = document.createElement('div'); // Crée un nouvel élément div pour l'emoji
            emoji.classList.add('emoji'); // Ajoute la classe 'emoji' à l'élément
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Sélectionne un emoji aléatoire
            emoji.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
            emoji.style.top = `${Math.random() * 100}vh`; // Position verticale aléatoire
            emoji.style.opacity = '1'; // Opacité à 1 pour être visible
            emoji.style.fontSize = `${Math.random() * 2 + 1}em`; // Taille aléatoire de l'emoji
            emojiContainer.appendChild(emoji); // Ajoute l'emoji au conteneur

            // Animation de la chute des emojis
            emoji.animate([
                { transform: `translateY(0)` },
                { transform: `translateY(100vh)` }
            ], {
                duration: 4000 + Math.random() * 2000, // Durée de l'animation entre 4 et 6 secondes
                easing: 'ease-out', // Courbe d'animation
                iterations: 1 // Animation unique
            });

            // Nettoyage des emojis après l'animation
            setTimeout(() => {
                emoji.remove(); // Supprime l'emoji après l'animation
            }, 6000); // 6 secondes avant la suppression
        }
    }

    // Gestionnaire d'événement pour le bouton "Suivant"
    nextChallengeBtn.addEventListener('click', () => {
        if (usedChallenges.length < totalChallenges) {
            const randomIndex = getRandomChallenge(); // Récupère un défi aléatoire
            usedChallenges.push(randomIndex); // Ajoute l'index au tableau des défis utilisés
            showChallenge(randomIndex); // Affiche le défi
            updateProgress(); // Met à jour la progression
        } else {
            endGame(); // Fin du jeu si tous les défis sont utilisés
        }
    });

    // Gestionnaire d'événement pour le bouton "Précédent"
    prevChallengeBtn.addEventListener('click', () => {
        if (usedChallenges.length > 1) {
            usedChallenges.pop(); // Retire le dernier défi du tableau
            showChallenge(usedChallenges[usedChallenges.length - 1]); // Affiche le défi précédent
            updateProgress(); // Met à jour la progression
        }
    });

    // Gestionnaire d'événement pour le bouton "Rejouer"
    replayBtn.addEventListener('click', () => {
        usedChallenges = []; // Réinitialise le tableau des défis utilisés
        showChallenge(getRandomChallenge()); // Affiche un nouveau défi aléatoire
        updateProgress(); // Réinitialise la progression
        replayBtn.style.display = 'none'; // Cache le bouton rejouer
        prevChallengeBtn.style.display = 'block'; // Affiche le bouton précédent
        nextChallengeBtn.style.display = 'block'; // Affiche le bouton suivant
        scoreDisplay.style.display = 'none'; // Cache l'affichage du score
        challengeDisplay.style.display = 'block'; // Affiche le défi
        emojiContainer.innerHTML = ''; // Efface les anciens emojis
    });

    // Initialise le premier défi et la barre de progression au chargement de la page
    showChallenge(getRandomChallenge());
    updateProgress();
});
