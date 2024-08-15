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
    "Faire un tweet embarrassant",
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
    "Imiter un bébé qui pleure",
    "Porter une chaussette sur une main pendant deux tours",
    "Faire 10 pompes ou squats",
    "Faire un tour de la pièce en courant sur les genoux",
    "Appeler un restaurant et poser une question ridicule",
    "Parler en rimes pendant 5 minutes",
    "Dessiner quelque chose les yeux fermés",
    "Mettre un glaçon dans son pantalon",
    "Inventer une chanson de rap sur un sujet aléatoire",
    "Faire semblant de rire de manière excessive à tout ce qui est dit",
    "Dire un tongue twister trois fois rapidement",
    "Faire une déclaration d'amour à un inconnu sur les réseaux sociaux",
    "Faire une grimace pour le reste du tour",
    "Changer de voix à chaque phrase pendant 2 minutes",
    "Dessiner une moustache sur ton visage avec un marqueur",
    "Imiter un robot cassé",
    "Faire un cri d'animal chaque fois que quelqu'un dit ton prénom",
    "Prendre un selfie embarrassant et le poster en story",
    "Manger un citron sans faire de grimace",
    "Faire semblant d'être en slow motion pendant 2 minutes",
    "Imiter une publicité à la télé",
    "Porter des lunettes de soleil à l’intérieur jusqu’à la fin du tour",
    "Écrire un poème en 1 minute",
    "Essayer de toucher ton nez avec ta langue",
    "Faire semblant de parler une langue étrangère",
    "Porter une chaussette sur la tête pendant 3 minutes",
    "Changer de prénom pour le reste de la soirée",
    "Dire un mot interdit",
    "Manger un piment",
    // Défis axés sur Hiro (ne pas oublier d'ajouter vos propres défis si besoin)
];

let challengeCount = 0;
let currentChallengeIndex = -1;

function displayChallenge(index) {
    document.getElementById('challenge-display').textContent = challenges[index];
    document.getElementById('challenge-counter').textContent = `${challengeCount + 1}/20`;
    document.getElementById('progress').style.width = `${((challengeCount + 1) / 20) * 100}%`;
}

document.getElementById('next-challenge-btn').addEventListener('click', () => {
    if (challengeCount < 20) {
        currentChallengeIndex = (currentChallengeIndex + 1) % challenges.length;
        displayChallenge(currentChallengeIndex);
        challengeCount++;
    }
});

document.getElementById('prev-challenge-btn').addEventListener('click', () => {
    if (challengeCount > 0) {
        currentChallengeIndex = (currentChallengeIndex - 1 + challenges.length) % challenges.length;
        displayChallenge(currentChallengeIndex);
        challengeCount--;
    }
});

document.getElementById('replay-btn').addEventListener('click', () => {
    challengeCount = 0;
    currentChallengeIndex = -1;
    document.getElementById('challenge-display').textContent = "Cliquez sur le bouton pour un défi !";
    document.getElementById('challenge-counter').textContent = "0/20";
    document.getElementById('progress').style.width = "0%";
});
