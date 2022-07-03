/*
: ************************************************************************************************************
                                    % La section "À propos".
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------Le titre de la section.--------------------
var titreAPropos = document.getElementById('propos');

//. --------------------Le descriptif de la section.--------------------
var AfficherAPropos = document.getElementById('proposTexte'); 

//. --------------------L'image principal de la section.--------------------
var imageAPropos = document.getElementById('proposImage');

//. --------------------Le paragraphe de la section.--------------------
var texteAPropos = document.getElementById('proposParagraphe');

/*
. --------------------------------------------------------------------------------
                                £ Au survol de la section "À propos".
. --------------------------------------------------------------------------------
*/

//$ --------------------Le lancement des animations.--------------------

titreAPropos.addEventListener('mouseover', function showPropos() {
    AfficherAPropos.classList.remove('hidePropos');
    imageAPropos.classList.add('proposImg');
    texteAPropos.classList.add('proposP');
})

/*
: ************************************************************************************************************
                                    % La section "Mes passions".
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Le hide and show.
. --------------------------------------------------------------------------------
*/

//§ La fonction qui va me permettre d'afficher ou de cacher les textes sous les sous-sections de la section "Mes passions".
function hideAndShowPassions(titreSousSection, texteSousSection) {
    //= Au click sur le titre du paragraphe de la sous-section.
    titreSousSection.addEventListener('click', function hideAndShow() {
        for (var i=0; i < texteSousSection.length; i++) {
            //= La fonction qui va faire apparaître mon texte du site.
            if (texteSousSection[i].classList.contains('hide')) {
                texteSousSection[i].classList.replace('hide', 'show');
            }
            //= La fonction qui va faire disparaître mon texte du site.
            else if (texteSousSection[i].classList.contains('show')) {
                texteSousSection[i].classList.replace('show', 'hide');
            }
        }
    })
};

/*
. --------------------------------------------------------------------------------
                                £ La sous-section "Lecture".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les variables.------------------------------

//. --------------------L'image de la sous-section "Lecture".--------------------
var imageSectionLecture = document.getElementById('imageSectionLecture');

//. --------------------Le titre du texte de la sous-section "Lecture".--------------------
var titreTexteSousSectionLecture = document.getElementById('titreTexteSousSectionLecture');

//. --------------------Le texte de la sous-section "Lecture".--------------------
var texteSousSectionLecture = document.getElementsByClassName('texteSousSectionLecture');

//$ ------------------------------Les fonctions.------------------------------

//§ L'image change lorsque la souris de l'utilisateur vient sur l'image de la sous-section "Lecture".
imageSectionLecture.addEventListener('mouseover', function survolLecture() {
    imageSectionLecture.src = 'img/passions/livres/library.jpg'
    imageSectionLecture.setAttribute("title", "Une bibliothèque dans les nuages.")
    imageSectionLecture.setAttribute("alt", "Une bibliothèque à ciel ouvert qui laisse les nuages la pénétrer afin de créer une légère couche de fumée. L’on peut voir le soleil percer le ciel au-dessus de la bibliothèque, et des oiseaux voltiger au-dessus de ces livres qui font voyager notre imaginaire à l’aide chacune de leurs pages.")
});

//§ L'image de base revient lorsque la souris de l'utilisateur quitte la sous-section "Lecture".
imageSectionLecture.addEventListener('mouseout', function retourLecture() {
    imageSectionLecture.src = 'img/passions/livres/livre.jpg'
    imageSectionLecture.setAttribute("title", "Un livre qui vous emmènera dans un monde féerique.")
    imageSectionLecture.setAttribute("alt", "Un escalier qui mène à la page gauche d’un livre, et sur laquelle nous pouvons voir une femme en blanc se protégeant du soleil à l’aide d’un parapluie. Il y a sur la page de droite une jeune fille qui fait de la balançoire sur un arbre rose. L’on peut aussi apercevoir un pic à tête rouge qui s'apprête à se poser sur l’arbre.")
});

//§ La boucle qui affiche ou cache le texte sous la sous-section "Lecture".
hideAndShowPassions(titreTexteSousSectionLecture, texteSousSectionLecture);

/*
. --------------------------------------------------------------------------------
                                £ La sous-section "Musique".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les variables.------------------------------

//. --------------------Le titre du texte de la sous-section "Musique".--------------------
var titreTexteSousSectionMusique = document.getElementById('titreTexteSousSectionMusique');

//. --------------------Le texte de la sous-section "Musique".--------------------
var texteSousSectionMusique = document.getElementsByClassName('texteSousSectionMusique');

//§ La boucle qui affiche ou cache le texte sous la sous-section "Musique".
hideAndShowPassions(titreTexteSousSectionMusique, texteSousSectionMusique);

/*
. --------------------------------------------------------------------------------
                                £ La sous-section "Jeux vidéo".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les variables.------------------------------

//. --------------------L'image de la sous-section "Jeux vidéo".--------------------
var imageSectionJeuxVideo = document.getElementById('imageSectionJeuxVideo');

//. --------------------Le titre du texte de la sous-section "Jeux vidéo".--------------------
var titreTexteSousSectionJeuxVideo = document.getElementById('titreTexteSousSectionJeuxVideo');

//. --------------------Le texte de la sous-section "Jeux vidéo".--------------------
var texteSousSectionJeuxVideo = document.getElementsByClassName('texteSousSectionJeuxVideo');

//$ ------------------------------Les fonctions.------------------------------

imageSectionJeuxVideo.addEventListener('click', function cliqueSwitchImage(){

    //§ Vérification de l'image présente actuellement à l'écran.
    var sourceImageSectionJeuxVideo = imageSectionJeuxVideo.getAttribute('src');

    //§ La fonction switch qui va déterminer qu'elle image afficher à chaque click.
    switch (sourceImageSectionJeuxVideo){

        //? Si l'image présente est celle de la switch.
        case 'img/passions/jv/switch.jpg' :
            imageSectionJeuxVideo.src = 'img/passions/jv/joycon.jpg';
            imageSectionJeuxVideo.setAttribute("title", "Des joy-cons, espérons qu'ils ne vont pas drifter...");
            imageSectionJeuxVideo.setAttribute("alt", "Une paire de joy-cons rouges (de la série mario odyssey) sont placés dans une poignée de confort bleu. Le tout est une référence au célèbre plombier italien de Nintendo, Mario Bros.");
            break;

        //? Si l'image présente est celle des joy-cons.
        case 'img/passions/jv/joycon.jpg' :
            imageSectionJeuxVideo.src = 'img/passions/jv/dualshock-4.jpg';
            imageSectionJeuxVideo.setAttribute("title", "Deux dualshock 4, elles fonctionnent un peu mieux et ont moins de problèmes.");
            imageSectionJeuxVideo.setAttribute("alt", "Une dualshock 4 noire est posé en biais sur la gauche d’une image ayant un fond blanc. Elle est accolé à une seconde dualshock 4, elle de couleur blanche, et leurs associations forment une forme de P (en référence à Playstation).");
            break;

        //? Si l'image présente est celle des dualshocks 4.
        case 'img/passions/jv/dualshock-4.jpg' :
            imageSectionJeuxVideo.src = 'img/passions/jv/playstation-4.jpg';
            imageSectionJeuxVideo.setAttribute("title", "Une playstation 4, elle est plus performante mais n'apporte aucune innovation.");
            imageSectionJeuxVideo.setAttribute("alt", "Une dualshock 4 noire est posé contre une playstation 4 noire sur un fond blanc.");
            break;

        //? Par défaut je remet l'image de la switch, qui est celle qui apparaît en première dans la boucle.
        default :
            imageSectionJeuxVideo.src = 'img/passions/jv/switch.jpg';
            imageSectionJeuxVideo.setAttribute("title", "Une switch, une console de salon utilisable en console portable, du pur génie nippon.");
            imageSectionJeuxVideo.setAttribute("alt", "Une console Nintendo Switch. Elle est représentée en mode portable sur un fond de couleur purple; avec son joy-con bleu à gauche et son joy-con rouge à droite. Son écran est éteint.");
            break;
    }
});

//§ La boucle qui affiche ou cache le texte sous la sous-section "Jeux vidéo".
hideAndShowPassions(titreTexteSousSectionJeuxVideo, texteSousSectionJeuxVideo);

/*
. --------------------------------------------------------------------------------
                        £ La sous-section "science-fiction et fantastique".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les variables.------------------------------

//. --------------------Numéro de l'image à afficher.--------------------
var imgSFF = 0;

//. --------------------L'image de la sous-section "science-fiction et fantastique".--------------------
var monImage = document.getElementById('imageSectionSFF');

//. --------------------Définition de l'intervalles de temps entre chaque changement d'image ( en ms ).--------------------
var timer = window.setInterval("changeImageSFF()", 5000);

//. --------------------Le titre du texte de la sous-section "science-fiction et fantastique".--------------------
var titreTexteSousSectionSFF = document.getElementById('titreTexteSousSectionSFF');

//. --------------------Le texte de la sous-section "science-fiction et fantastique".--------------------
var texteSousSectionSFF = document.getElementsByClassName('texteSousSectionSFF');

//$ ------------------------------Les fonctions.------------------------------

//§ Le carousel de la sous-section "science-fiction et fantastique" va automatiquement changer d'image.
function changeImageSFF() {
    //? Le nombre d'images disponible dans ma banque d'image, quand il est atteint je reprends à 0.
    if (imgSFF == 9) {
        imgSFF = 0;
    }

    //? J'ajoute 1 afin de passer à l'image suivante.
    imgSFF +=1;

    //? Je remplace l'ancienne image par la nouvelle
    monImage.setAttribute('src', 'img/passions/sff/' + imgSFF + '.jpg');
}

//§ La boucle qui affiche ou cache le texte sous la sous-section "science-fiction et fantastique".
hideAndShowPassions(titreTexteSousSectionSFF, texteSousSectionSFF);

/*
: ************************************************************************************************************
                                    % La section "Mes compétences de développeur".
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------La section "Mes compétences de développeur".--------------------
var sectionCompetences = document.getElementById('sectionCompetence');

//. --------------------Les logos de la section "Mes compétences de développeur".--------------------
var logo = document.getElementsByClassName('logo-competences'); //) Les images de la section compétence.

//$ ------------------------------Les sous-classes d'images.------------------------------

//. --------------------Les langages.--------------------
var langage = document.getElementsByClassName('langage');

//. --------------------Les frameworks.--------------------
var frameworks = document.getElementsByClassName('frameworks');

//. --------------------Les CMS.--------------------
var cms = document.getElementsByClassName('cms');

//. --------------------Les outils.--------------------
var outils = document.getElementsByClassName('outils');

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//§ La fonction qui va ajouter les animations à mes logos.
function animeLogoCompetences(logoCompetence, animationLogoCompetences) {
    for (var i=0; i < logoCompetence.length; i++) {
        logoCompetence[i].classList.add(animationLogoCompetences);
    }
}

//§ Lancement des animations au survol de la souris de l'utilisateur.
sectionCompetences.addEventListener('mouseover', function lancerAnimation() {

    for (var i=0; i < logo.length; i++) {
        logo[i].classList.remove('hideCompetences');
    }

    //. --------------------La sous-section "langage".--------------------
    animeLogoCompetences(langage, 'animationLanguages');

    //. --------------------La sous-section "frameworks".--------------------
    animeLogoCompetences(frameworks, 'animationFrameworks');

    //. --------------------La sous-section "CMS".--------------------
    animeLogoCompetences(cms, 'animationCms');

    //. --------------------La sous-section "outils".--------------------
    animeLogoCompetences(outils, 'animationOutils');
})

/*
: ************************************************************************************************************
                                    % La section "Mon portfolio".
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------Les cartes de la section.--------------------
var cartesPortfolio = document.getElementsByClassName('cartePortfolio');

//. --------------------La section "Mes compétences de développeur".--------------------
var filtreCartePortfolio = document.getElementsByClassName('filtreCartePortfolioCartePortfolio');

//$ ------------------------------Les boutons.------------------------------

//. --------------------Tout les boutons de la section.--------------------
var boutonSelectionCategorie = document.getElementsByClassName('boutonSelectionCategorie');

//. --------------------Le bouton pour afficher tout les projets.--------------------
var all = document.getElementById('btnAll');

//. --------------------Le bouton pour afficher les projets utilisant le HTML5 et le CSS3.--------------------
var btnHtml = document.getElementById('btnHtml');

//. --------------------Le bouton pour afficher les projets utilisant JavaScript.--------------------
var btnJS = document.getElementById('btnJS');

//. --------------------Le bouton pour afficher les projets utilisant Bootstrap5.--------------------
var btnBt = document.getElementById('btnBt');

//. --------------------Le bouton pour afficher les projets utilisant le PHP.--------------------
var btnPhp = document.getElementById('btnPhp');

//. --------------------Le bouton pour afficher les projets utilisant Java.--------------------
var btnJava = document.getElementById('btnJava');

//. --------------------Le bouton pour afficher les projets utilisant MySQL.--------------------
var btnMySql = document.getElementById('btnMySql')

//. --------------------Le bouton pour afficher les projets utilisant wordpress.--------------------
var btnWp = document.getElementById('btnWp');

//$ ------------------------------Les différents langages.------------------------------

//. --------------------Les projets utilisant le HTML5 et le CSS3.--------------------
var html = document.getElementsByClassName('html');

//. --------------------Les projets utilisant JavaScript.--------------------
var javaScript = document.getElementsByClassName('javaScript');

//. --------------------Les projets utilisant bootstraps5.--------------------
var bootstrap = document.getElementsByClassName('bootstrap');

//. --------------------Les projets utilisant le PHP.--------------------
var php = document.getElementsByClassName('php');

//. --------------------Les projets utilisant Java.--------------------
var java = document.getElementsByClassName('java');

//. --------------------Les projets utilisant MySQL.--------------------
var mySql = document.getElementsByClassName('mySql');

//. --------------------Les projets utilisant wordpress.--------------------
var wordpress = document.getElementsByClassName('wordpress');

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//§ Si l'utilisateur souhaite voir tout mes projets.
all.addEventListener('click', function cacheEtMontre() {

    //= Je montre toutes les cartes de la section "Mon portfolio".
    for (var i=0; i < cartesPortfolio.length; i++) {
        cartesPortfolio[i].classList.remove('filtreCartePortfolio');
    }

    //= J'enlève la classe "actif" de tout les boutons de la section "Mon portfolio".
    for (var i=0; i < boutonSelectionCategorie.length; i++) {
        boutonSelectionCategorie[i].classList.remove('actif');
    }

    //= Je change la couleur du bouton "Voir tout mes projets." afin de donner un repère visuel à l'utilisateur.
    all.classList.add('actif');
})

//§ La fonction générale qui permet de filtrer les cartes de la section "Mon portfolio".
function filtrerCartePortfolio(boutonCategoriePortfolio, langageCartePortfolio) {

    //= Je définit le bouton sur lequel le click va avoir lieu.
    boutonCategoriePortfolio.addEventListener('click', function hideAndShowCartePortfolio() {

        //= Je cache toutes les carte de la section "Mon portfolio".
        for (var i=0; i < cartesPortfolio.length; i++) {
            cartesPortfolio[i].classList.add('filtreCartePortfolio')
        }

        //= J'affiche les cartes utilisant le language souhaité par l'utilisateur.
        for (var i=0; i < langageCartePortfolio.length; i++) {
            langageCartePortfolio[i].classList.remove('filtreCartePortfolio');
        }

        //= J'enlève la classe "actif" de tout les boutons de la section "Mon portfolio".
        for (var i=0; i < boutonSelectionCategorie.length; i++) {
            boutonSelectionCategorie[i].classList.remove('actif');
        }

        //= Je change la couleur du bouton sur lequel l'utilisateur a cliqué afin de lui donner un repère visuel.
        boutonCategoriePortfolio.classList.add('actif');
    })
}

//? Si l'utilisateur souhaite voir tout mes projets utilisant le HTML5 et le CSS3.
filtrerCartePortfolio(btnHtml, html);

//? Si l'utilisateur souhaite voir tout mes projets utilisant le JavaScript.
filtrerCartePortfolio(btnJS, javaScript);

//? Si l'utilisateur souhaite voir tout mes projets utilisant le Bootstrap5.
filtrerCartePortfolio(btnBt, bootstrap);

//? Si l'utilisateur souhaite voir tout mes projets utilisant le PHP.
filtrerCartePortfolio(btnPhp, php);

//? Si l'utilisateur souhaite voir tout mes projets utilisant le Java.
filtrerCartePortfolio(btnJava, java);

//? Si l'utilisateur souhaite voir tout mes projets utilisant le MySQL.
filtrerCartePortfolio(btnMySql, mySql);

//? Si l'utilisateur souhaite voir tout mes projets fait avec Wordpress.
filtrerCartePortfolio(btnWp, wordpress);

/*
: ************************************************************************************************************
                                    % La section "Contactez-moi".
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------Le titre de la section contact.--------------------
var titreContact = document.getElementById('titreContact');

//. --------------------Le formulaire de contact.--------------------
var formulaireContact = document.getElementById('formulaireContact');

//. --------------------Les projets utilisant wordpress.--------------------
var droiteContact = document.getElementsByClassName('droiteContact'); /// Les éléments sur la droite.

//. --------------------Les projets utilisant wordpress.--------------------
var gaucheContact = document.getElementsByClassName('gaucheContact'); /// Les éléments sur la gauche.

//. --------------------Les projets utilisant wordpress.--------------------
var basContact = document.getElementsByClassName('basContact'); /// Les éléments en bas.

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//§ La fonction générale qui permet d'animer l'arrivé du formulaire.
function animerFormulaire(direction, directionAnimation) {
    for (var i=0; i < direction.length; i++) {
        direction[i].classList.add(directionAnimation);
    }
}

//§ Au survol de la souris les animations du formulaire se déclenche.
titreContact.addEventListener('mouseover', function showFormulaire() {
    //? Permet d'afficher le formulaire.
    formulaireContact.classList.remove('hideContact');

    //? Les éléments qui arrivent par la droite.
    animerFormulaire(droiteContact, 'slideDroiteContact');

    //? Les éléments qui arrivent par la gauche.
    animerFormulaire(gaucheContact, 'slideGaucheContact');

    //? Les éléments qui arrivent par le bas.
    animerFormulaire(basContact, 'slideBasContact');
})