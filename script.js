const challenges = [
    "Faire une vidéo de 30 secondes en faisant une activité ridicule",
    "Faire le coq",
    "Faire un strip-tease (habillé)",
    "Faire un selfie dans une position ridicule",
    "Faire la Macarena à l'envers",
    "Faire un moonwalk",
    "Faire un tour de la pièce en courant sur les genoux après deux shots",
    "Imiter un animal",
    "Imiter un bébé qui pleure après avoir bu deux verres",
    "Faire un bisou sur le crâne d’un chauve après deux verres",
    "Faire un clown pendant 5 minutes après deux verres",
    "Faire des vocalises comme un chanteur d'opéra",
    "Faire une imitation d'un super-héros",
    "Faire une imitation d'un personnage de dessin animé",
    "Faire une imitation d'un personnage de dessin animé avec des accessoires improvisés",
    "Faire une imitation d'une émission de télévision",
    "Faire une lecture dramatique d'un texte drôle",
    "Faire une parodie d'une scène de film",
    "Faire une performance de stand-up improvisé",
    "Faire une présentation PowerPoint sur un sujet absurde",
    "Chanter une chanson a cappella",
    "Mimer une célébrité",
    "Parler sans utiliser une lettre définie",
    "Imiter la démarche de la personne à votre droite",
    "Échanger vos vêtements avec une autre personne",
    "Faire un discours comme si vous étiez président",
    "Danser comme si personne ne regardait",
    "Parler en rimes pendant 5 minutes",
    "Inventer une chanson de rap sur un sujet aléatoire",
    "Faire semblant de rire de manière excessive à tout ce qui est dit",
    "Dire un tongue twister trois fois rapidement",
    "Changer de voix à chaque phrase pendant 2 minutes",
    "Appeler un restaurant et poser une question ridicule",
    "Mettre un glaçon dans son pantalon",
    "Dire une phrase en chuchotant dans l’oreille d’un autre joueur",
    "Faire une déclaration d'amour à un inconnu sur les réseaux sociaux",
    "Changer la sonnerie de ton téléphone pour un son ridicule",
    "Porter une chaussette sur une main pendant deux tours",
    "Faire 10 pompes ou squats",
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
    "Faire une danse TikTok après deux verres de bière",
    "Envoyer un message embarrassant à un ex après deux shots",
    "Changer la sonnerie de son téléphone pour un son ridicule après deux verres",
    "Imiter un bébé qui pleure après avoir bu deux verres",
    "Porter une chaussette sur une main pendant deux tours après avoir fumé",
    "Faire 10 pompes ou squats après avoir fumé deux fois",
    "Dessiner quelque chose les yeux fermés après avoir fumé deux fois",
    "Faire semblant d'être en slow motion pendant 2 minutes après deux shots",
    "Convaincre un étranger de chanter bon anniversaire après deux bouffées",
    "Faire un dessin de quelqu’un dans la rue et essayer de le lui vendre après deux shots",
    "Garder un glaçon dans sa main jusqu’à la fonte totale après deux verres",
    "Écrire une déclaration d’amour sur un tableau blanc après avoir fumé deux fois",
    "Jouer à un jeu vidéo en étant debout après deux shots",
    "Faire une démonstration de yoga après avoir fumé deux fois",
    "Chanter une chanson en imitant un personnage de dessin animé après deux shots",
    "Raconter une histoire drôle après avoir fumé deux fois",
    "Changer son statut Facebook en quelque chose d'embarrassant après deux shots",
    "Faire un selfie en train de faire une danse étrange",
    "Préparer un plat étrange et le goûter",
    "Faire une imitation d'un super-héros",
    "Envoyer un message étrange à un ami",
    "Essayer un look de mode bizarre pour le reste de la soirée",
    "Lire un passage de livre en imitant une voix de cartoon",
    "Faire un discours sur un sujet aléatoire",
    "Participer à un défi de danse sur les réseaux sociaux",
    "Faire une démonstration de magie avec des objets du quotidien",
    "Écrire une lettre d'amour fictive à un personnage célèbre",
    "Raconter une blague en imitant différents accents",
    "Écrire une chanson en utilisant des objets de la pièce comme instruments",
    "Dessiner un portrait d'un ami avec les yeux fermés",
    "Faire des exercices de yoga en imitant un animal",
    "Faire une lecture dramatique d'un texte drôle",
    "Fabriquer un chapeau à partir de matériaux trouvés dans la pièce",
    "Créer un mème basé sur une photo de lui",
    "Essayer de jongler avec des objets légers",
    "Réaliser une performance de stand-up improvisé",
    "Créer une danse en utilisant uniquement les bras",
    "Écrire une courte histoire en 5 minutes",
    "Organiser un mini défilé de mode avec des vêtements de la pièce",
    "Essayer de parler en vers",
    "Créer une œuvre d'art avec des éléments trouvés dans la pièce",
    "Faire un numéro de magie avec des cartes",
    "Réaliser une présentation PowerPoint sur un sujet absurde",
    "Dessiner un personnage de film avec les pieds",
    "Faire une démonstration de danse avec des mouvements improbables",
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
    const prevChallengeBtn = document.getElementById('prev-challenge-btn');
    const nextChallengeBtn = document.getElementById('next-challenge-btn');
    const replayBtn = document.getElementById('replay-btn');
    const challengeDisplay = document.getElementById('challenge-display');
    const challengeCounter = document.getElementById('challenge-counter');
    const progress = document.getElementById('progress');
    const emojiContainer = document.getElementById('emoji-container');

    let usedChallenges = [];
    const totalChallenges = 50;
    let progressWidth = 0;

    function getRandomChallenge() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * challenges.length);
        } while (usedChallenges.includes(randomIndex) && usedChallenges.length < challenges.length);
        return randomIndex;
    }

    function showChallenge(index) {
        challengeDisplay.textContent = challenges[index];
        challengeCounter.textContent = `${usedChallenges.length}/${totalChallenges}`;
    }

    function updateProgress() {
        progressWidth = (usedChallenges.length / totalChallenges) * 100;
        progress.style.width = `${progressWidth}%`;
    }

    function endGame() {
        confetti();
        showEmojis();
        challengeDisplay.textContent = "Félicitations! \nVous êtes un gros Alcolo!";
        challengeDisplay.style.fontSize = '3em';
        prevChallengeBtn.style.display = 'none';
        nextChallengeBtn.style.display = 'none';
        replayBtn.style.display = 'block';
    }

    function showEmojis() {
        const emojis = ['🎉', '🎊', '🎈', '🥳', '💥', '🍾', '🥂', '🍻', '🍹', '🍸'];
        const numEmojis = 100;

        for (let i = 0; i < numEmojis; i++) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.top = `${Math.random() * 100}vh`;
            emoji.style.opacity = '1';
            emoji.style.fontSize = `${Math.random() * 2 + 1}em`;
            emojiContainer.appendChild(emoji);

            emoji.animate([
                { transform: `translateY(0)` },
                { transform: `translateY(100vh)` }
            ], {
                duration: 4000 + Math.random() * 2000,
                easing: 'ease-out',
                iterations: 1
            });

            setTimeout(() => {
                emoji.remove();
            }, 6000);
        }
    }

    nextChallengeBtn.addEventListener('click', () => {
        if (usedChallenges.length < totalChallenges) {
            const randomIndex = getRandomChallenge();
            usedChallenges.push(randomIndex);
            showChallenge(randomIndex);
            updateProgress();
        } else {
            endGame();
        }
    });

    prevChallengeBtn.addEventListener('click', () => {
        if (usedChallenges.length > 1) {
            usedChallenges.pop();
            showChallenge(usedChallenges[usedChallenges.length - 1]);
            updateProgress();
        }
    });

    replayBtn.addEventListener('click', () => {
        usedChallenges = [];
        showChallenge(getRandomChallenge());
        updateProgress();
        replayBtn.style.display = 'none';
        prevChallengeBtn.style.display = 'block';
        nextChallengeBtn.style.display = 'block';
        challengeDisplay.style.fontSize = '2em';
    });

    // Initialisation avec le premier défi
    showChallenge(getRandomChallenge());
    updateProgress();
});
