/*
: ************************************************************************************************************
                                    % Définir le langage de la page.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Récupération de l'adresse de la page.
. --------------------------------------------------------------------------------
*/

const URL = location.href;
const tableauURL = URL.split( '/' );
const adressePageComplete = tableauURL.pop();
const tableauAdressePageComplete = adressePageComplete.split( '#' );
const adressePage = tableauAdressePageComplete[0];

/*
. --------------------------------------------------------------------------------
                                £ Définition de la page actuelle.
. --------------------------------------------------------------------------------
*/

//. --------------------Les constantes des languages disponible sur le site.--------------------
let FR;
let EN;

//§ La page française.
if ( adressePage == "index.html" || adressePage == "yoann-bezard.fr" ) {
    FR = true;
    EN = false;
}
//§ La page anglaise.
else if ( adressePage == "index-eng.html" ) {
    FR = false;
    EN = true;
}
//§ Une page inconnue.
else {
    FR = false;
    EN = false;
}

/*
: ************************************************************************************************************
                                    % À propos.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des constantes.
. --------------------------------------------------------------------------------
*/

//. --------------------Le titre de la section.--------------------
const titreAPropos = document.getElementById( 'propos' );

//. --------------------Le descriptif de la section.--------------------
const AfficherAPropos = document.getElementById( 'proposTexte' ); 

//. --------------------L'image principal de la section.--------------------
const imageAPropos = document.getElementById( 'proposImage' );

//. --------------------Le paragraphe de la section.--------------------
const texteAPropos = document.getElementById( 'proposParagraphe' );

/*
. --------------------------------------------------------------------------------
                                £ Au survol de la section "À propos".
. --------------------------------------------------------------------------------
*/

//$ --------------------Le lancement des animations.--------------------

titreAPropos.addEventListener( 'mouseover', function showPropos() {
    AfficherAPropos.classList.remove( 'hidePropos' );
    imageAPropos.classList.add( 'proposImg' );
    texteAPropos.classList.add( 'proposP' );
})

/*
: ************************************************************************************************************
                                    % Mes passions.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Le hide and show.
. --------------------------------------------------------------------------------
*/

//§ La fonction qui va permettre d'afficher ou de cacher les textes sous les sous-sections de la section "Mes passions".
function hideAndShowPassions( titreSousSection, texteSousSection ) {
    //= Au click sur le titre du paragraphe de la sous-section.
    titreSousSection.addEventListener( 'click', function hideAndShow() {
        for ( let i=0; i < texteSousSection.length; i++ ) {
            texteSousSection[i].classList.toggle('hide');
        }
    })
}

/*
. --------------------------------------------------------------------------------
                                £ Les sites hors-ligne.
. --------------------------------------------------------------------------------
*/

const siteHorsLigne = document.getElementsByClassName('siteHS');

for( let i=0; i < siteHorsLigne.length; i++ ) {
    //§ La fonction qui va permettre d'enlever l'effet lors du survol de l'image par l'utilisateur.
    siteHorsLigne[i].addEventListener( 'mouseover', function defloute() {
        siteHorsLigne[i].classList.toggle('siteHorsLigne');
    })
    //§ La fonction qui va permettre de remettre l'effet lors du survol de l'image par l'utilisateur.
    siteHorsLigne[i].addEventListener( 'mouseout', function defloute() {
        siteHorsLigne[i].classList.toggle('siteHorsLigne');
    })
}

/*
. --------------------------------------------------------------------------------
                                £ Définition de l'emplacement des images.
. --------------------------------------------------------------------------------
*/

//: Cette variable va définir la source de l'image.
let srcIMG;

if (FR) {
    srcIMG = "img/";
} else if (EN) {
    srcIMG = "../img/";
}

/*
. --------------------------------------------------------------------------------
                                £ La sous-section "Lecture".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les constantes.------------------------------

//. --------------------L'image de la sous-section "Lecture".--------------------
const imageSectionLecture = document.getElementById( 'imageSectionLecture' );

//. --------------------Le titre du texte de la sous-section "Lecture".--------------------
const titreTexteSousSectionLecture = document.getElementById( 'titreTexteSousSectionLecture' );

//. --------------------Le texte de la sous-section "Lecture".--------------------
const texteSousSectionLecture = document.getElementsByClassName( 'texteSousSectionLecture' );

//$ ------------------------------Les textes pour les images.------------------------------

//. --------------------La première image.--------------------

let titleImageLecture1;
let altImageLecture1;

if (FR) {
    titleImageLecture1 = "Une bibliothèque dans les nuages.";
    altImageLecture1 = "Une bibliothèque à ciel ouvert. Au-dessus des étagères se trouve un soleil caché derrière un mur de nuages, et des oiseaux qui volent dans la pièce.";
} else if (EN) {
    titleImageLecture1 = "A library in the clouds.";
    altImageLecture1 = "An open-air library. Above the shelves is a sun hidden behind a wall of clouds, and birds flying around the room.";
}

//. --------------------La seconde image.--------------------

let titleImageLecture2;
let altImageLecture2;

if (FR) {
    titleImageLecture2 = "Un livre qui vous emmènera dans un monde féerique.";
    altImageLecture2 = "Un escalier nous amène à la page gauche d’un livre, nous pouvons y apercevoir une femme en robe blanche et portant un parapluie blanc regarder dans notre direction depuis un marais. Sur la page de droite se trouve une jeune fille en robe de chambre rose qui fait de la balançoire sur un cerisier, elle observe un pic à tête rouge qui s'apprête à se poser sur l’arbre.";
} else if (EN) {
    titleImageLecture2 = "A book that will take you to a fairy world.";
    altImageLecture2 = "A staircase leads us to the left page of a book, we can see a woman in a white dress and carrying a white umbrella looking in our direction from a swamp. On the right page is a young girl in a pink robe swinging on a cherry tree, watching a red-headed woodpecker about to land on the tree.";
}

//$ ------------------------------Les fonctions.------------------------------

//§ L'image change lorsque la souris de l'utilisateur vient sur l'image de la sous-section "Lecture".
imageSectionLecture.addEventListener( 'mouseover', function survolLecture() {
    imageSectionLecture.src = srcIMG + 'passions/livres/library.jpg'
    imageSectionLecture.setAttribute( "title", titleImageLecture1 )
    imageSectionLecture.setAttribute( "alt", altImageLecture1 )
});

//§ L'image de base revient lorsque la souris de l'utilisateur quitte la sous-section "Lecture".
imageSectionLecture.addEventListener( 'mouseout', function retourLecture() {
    imageSectionLecture.src = srcIMG + 'passions/livres/livre.jpg'
    imageSectionLecture.setAttribute( "title", titleImageLecture2 )
    imageSectionLecture.setAttribute( "alt", altImageLecture2 )
});

//§ La boucle qui affiche ou cache le texte sous la sous-section "Lecture".
hideAndShowPassions( titreTexteSousSectionLecture, texteSousSectionLecture );

/*
. --------------------------------------------------------------------------------
                                £ La sous-section "Musique".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les constantes.------------------------------

//. --------------------Le titre du texte de la sous-section "Musique".--------------------
const titreTexteSousSectionMusique = document.getElementById( 'titreTexteSousSectionMusique' );

//. --------------------Le texte de la sous-section "Musique".--------------------
const texteSousSectionMusique = document.getElementsByClassName( 'texteSousSectionMusique' );

//§ La boucle qui affiche ou cache le texte sous la sous-section "Musique".
hideAndShowPassions( titreTexteSousSectionMusique, texteSousSectionMusique );

/*
. --------------------------------------------------------------------------------
                                £ La sous-section "Jeux vidéo".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les constantes.------------------------------

//. --------------------L'image de la sous-section "Jeux vidéo".--------------------
const imageSectionJeuxVideo = document.getElementById( 'imageSectionJeuxVideo' );

//. --------------------Le titre du texte de la sous-section "Jeux vidéo".--------------------
const titreTexteSousSectionJeuxVideo = document.getElementById( 'titreTexteSousSectionJeuxVideo' );

//. --------------------Le texte de la sous-section "Jeux vidéo".--------------------
const texteSousSectionJeuxVideo = document.getElementsByClassName( 'texteSousSectionJeuxVideo' );

//$ ------------------------------Les textes pour les images.------------------------------

//. --------------------La première image.--------------------

let titleImageJeuxVideo1;
let altImageJeuxVideo1;

if (FR) {
    titleImageJeuxVideo1 = "Une paire de joy-con, espérons qu'ils ne vont pas souffrir de joy-con drift ....";
    altImageJeuxVideo1 = "Une paire de joy-cons rouges sont placés dans une poignée de confort bleu. Cette paire à été créée en référence au célèbre plombier italien de chez Nintendo, Mario.";
} else if (EN) {
    titleImageJeuxVideo1 = "A pair of joy-con, let's hope they won't suffer from joy-con drift ....";
    altImageJeuxVideo1 = "A pair of red joy-cons are placed in a blue comfort grip. This pair was created in reference to the famous Italian plumber from Nintendo, Mario.";
}

//. --------------------La seconde image.--------------------

let titleImageJeuxVideo2;
let altImageJeuxVideo2;

if (FR) {
    titleImageJeuxVideo2 = "Un duo de manette dualshock 4, leurs pavés tactiles sont aussi utile que ce titre ....";
    altImageJeuxVideo2 = "Une dualshock 4 noire est posé en biais, elle est accolé à une seconde dualshock 4 de couleur blanche. Elles sont toutes deux posées sur une surface blanche.";
} else if (EN) {
    titleImageJeuxVideo2 = "A duo of dualshock 4 controller, their touch pad are as useful as this title ....";
    altImageJeuxVideo2 = "A black dualshock 4 is placed at an angle, it is attached to a second dualshock 4 of white color. They are both placed on a white surface.";
}

//. --------------------La troisième image.--------------------

let titleImageJeuxVideo3;
let altImageJeuxVideo3;

if (FR) {
    titleImageJeuxVideo3 = "Une playstation 4, elle est plus performante qu’une switch, mais il est impossible de l’emporter avec soit pour jouer n’importe où.";
    altImageJeuxVideo3 = "Une dualshock 4 noire est posée contre une playstation 4 noire, elles sont représentées sur un fond blanc.";
} else if (EN) {
    titleImageJeuxVideo3 = "A playstation 4, it is more powerful than a switch, but it is impossible to take it with you to play anywhere.";
    altImageJeuxVideo3 = "A black dualshock 4 is placed against a black playstation 4, they are represented on a white background.";
}

//. --------------------L'image qui est affichée par défaut..--------------------

let titleImageJeuxVideoDefault;
let altImageJeuxVideoDefault;

if (FR) {
    titleImageJeuxVideoDefault = "La switch, une console de salon utilisable en console portable, du pur génie nippon.";
    altImageJeuxVideoDefault = "Une console Nintendo switch, elle est représenté en mode portable, avec un joy-con bleu à gauche et un rouge à droite. Elle est éteinte.";
} else if (EN) {
    titleImageJeuxVideoDefault = "The Switch, a home console that can be used as a portable console, pure Japanese genius.";
    altImageJeuxVideoDefault = "A Nintendo switch console, she is represented in portable mode, with a blue joy-con on the left and a red one on the right. She is turned off.";
}

//$ ------------------------------Les fonctions.------------------------------

imageSectionJeuxVideo.addEventListener( 'click', function cliqueSwitchImage(){

    //§ Vérification de l'image présente actuellement à l'écran.
    const sourceImageSectionJeuxVideo = imageSectionJeuxVideo.getAttribute( 'src' );

    //§ La fonction switch qui va déterminer qu'elle image afficher à chaque click.
    switch ( sourceImageSectionJeuxVideo ){

        case srcIMG + 'passions/jv/switch.jpg' :
            imageSectionJeuxVideo.src = srcIMG + 'passions/jv/joycon.jpg';
            imageSectionJeuxVideo.setAttribute( "title", titleImageJeuxVideo1 );
            imageSectionJeuxVideo.setAttribute( "alt", altImageJeuxVideo1 );
            break;

        case srcIMG + 'passions/jv/joycon.jpg' :
            imageSectionJeuxVideo.src = srcIMG + 'passions/jv/dualshock-4.jpg';
            imageSectionJeuxVideo.setAttribute( "title", titleImageJeuxVideo2 );
            imageSectionJeuxVideo.setAttribute( "alt", altImageJeuxVideo2 );
            break;

        case srcIMG + 'passions/jv/dualshock-4.jpg' :
            imageSectionJeuxVideo.src = srcIMG + 'passions/jv/playstation-4.jpg';
            imageSectionJeuxVideo.setAttribute( "title", titleImageJeuxVideo3 );
            imageSectionJeuxVideo.setAttribute( "alt", altImageJeuxVideo3 );
            break;

        default :
            imageSectionJeuxVideo.src = srcIMG + 'passions/jv/switch.jpg';
            imageSectionJeuxVideo.setAttribute( "title", titleImageJeuxVideoDefault );
            imageSectionJeuxVideo.setAttribute( "alt", altImageJeuxVideoDefault );
            break;
    }
});

//§ La boucle qui affiche ou cache le texte sous la sous-section "Jeux vidéo".
hideAndShowPassions( titreTexteSousSectionJeuxVideo, texteSousSectionJeuxVideo );

/*
. --------------------------------------------------------------------------------
                        £ La sous-section "science-fiction et fantastique".
. --------------------------------------------------------------------------------
*/

//$ ------------------------------Les constantes.------------------------------

//. --------------------Numéro de l'image à afficher.--------------------
let imgSFF = 0;

//. --------------------Le nombre d'images disponible dans la banque de donnée.--------------------
const nbrImgSFF = 9;

//. --------------------L'image de la sous-section "science-fiction et fantastique".--------------------
const monImage = document.getElementById( 'imageSectionSFF' );

//. --------------------Définition de l'intervalles de temps entre chaque changement d'image ( en ms ).--------------------
const timer = window.setInterval( "changeImageSFF()", 5000 );

//. --------------------Le titre du texte de la sous-section "science-fiction et fantastique".--------------------
const titreTexteSousSectionSFF = document.getElementById( 'titreTexteSousSectionSFF' );

//. --------------------Le texte de la sous-section "science-fiction et fantastique".--------------------
const texteSousSectionSFF = document.getElementsByClassName( 'texteSousSectionSFF' );

//$ ------------------------------Les fonctions.------------------------------

//§ Le carousel de la sous-section "science-fiction et fantastique" va automatiquement changer d'image.
function changeImageSFF() {
    //? Le carousel reprend à zéro après avoir affiché la dernière image de la banque de donnée.
    if ( imgSFF == nbrImgSFF ) {
        imgSFF = 0;
    }

    //? J'ajoute 1 afin de passer à l'image suivante.
    imgSFF +=1;

    //? Je remplace l'ancienne image par la nouvelle
    monImage.setAttribute( 'src', srcIMG + 'passions/sff/' + imgSFF + '.jpg' );
}

//§ La boucle qui affiche ou cache le texte sous la sous-section "science-fiction et fantastique".
hideAndShowPassions(titreTexteSousSectionSFF, texteSousSectionSFF);

/*
: ************************************************************************************************************
                                    % Mes compétences de développeur.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des constantes.
. --------------------------------------------------------------------------------
*/

//. --------------------La section "Mes compétences de développeur".--------------------
const sectionCompetences = document.getElementById( 'sectionCompetence' );

//. --------------------Les logos de la section "Mes compétences de développeur".--------------------
const logo = document.getElementsByClassName( 'logo-competences' ); //) Les images de la section compétence.

//$ ------------------------------Les sous-classes d'images.------------------------------

//. --------------------Les langages.--------------------
const langage = document.getElementsByClassName( 'langage' );

//. --------------------Les frameworks.--------------------
const frameworks = document.getElementsByClassName( 'frameworks' );

//. --------------------Les CMS.--------------------
const cms = document.getElementsByClassName( 'cms' );

//. --------------------Les outils.--------------------
const outils = document.getElementsByClassName( 'outils' );

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//§ La fonction qui va ajouter les animations à mes logos.
function animeLogoCompetences( logoCompetence, animationLogoCompetences ) {
    for ( let i=0; i < logoCompetence.length; i++ ) {
        logoCompetence[i].classList.add( animationLogoCompetences );
    }
}

//§ Lancement des animations au survol de la souris de l'utilisateur.
sectionCompetences.addEventListener( 'mouseover', function lancerAnimation() {

    for ( let i=0; i < logo.length; i++ ) {
        logo[i].classList.remove( 'hideCompetences' );
    }

    //. --------------------La sous-section "langage".--------------------
    animeLogoCompetences( langage, 'animationLanguages' );

    //. --------------------La sous-section "frameworks".--------------------
    animeLogoCompetences( frameworks, 'animationFrameworks' );

    //. --------------------La sous-section "CMS".--------------------
    animeLogoCompetences( cms, 'animationCms' );

    //. --------------------La sous-section "outils".--------------------
    animeLogoCompetences( outils, 'animationOutils' );
})

/*
: ************************************************************************************************************
                                    % Mon portfolio.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des constantes.
. --------------------------------------------------------------------------------
*/

//. --------------------Les cartes de la section.--------------------
const cartesPortfolio = document.getElementsByClassName( 'cartePortfolio' );

//. --------------------La section "Mes compétences de développeur".--------------------
const filtreCartePortfolio = document.getElementsByClassName( 'filtreCartePortfolioCartePortfolio' );

//$ ------------------------------Les boutons.------------------------------

//. --------------------Tout les boutons de la section.--------------------
const boutonSelectionCategorie = document.getElementsByClassName( 'boutonSelectionCategorie' );

//. --------------------Le bouton pour afficher tout les projets.--------------------
const all = document.getElementById( 'btnAll' );

//. --------------------Le bouton pour afficher les projets utilisant le HTML5 et le CSS3.--------------------
const btnHtml = document.getElementById( 'btnHtml' );

//. --------------------Le bouton pour afficher les projets utilisant JavaScript.--------------------
const btnJS = document.getElementById( 'btnJS' );

//. --------------------Le bouton pour afficher les projets utilisant Bootstrap5.--------------------
const btnBt = document.getElementById( 'btnBt' );

//. --------------------Le bouton pour afficher les projets utilisant le PHP.--------------------
const btnPhp = document.getElementById( 'btnPhp' );

//. --------------------Le bouton pour afficher les projets utilisant Java.--------------------
const btnJava = document.getElementById( 'btnJava' );

//. --------------------Le bouton pour afficher les projets utilisant MySQL.--------------------
const btnMySql = document.getElementById( 'btnMySql' )

//. --------------------Le bouton pour afficher les projets utilisant wordpress.--------------------
const btnWp = document.getElementById( 'btnWp' );

//$ ------------------------------Les différents langages.------------------------------

//. --------------------Les projets utilisant le HTML5 et le CSS3.--------------------
const html = document.getElementsByClassName( 'html' );

//. --------------------Les projets utilisant JavaScript.--------------------
const javaScript = document.getElementsByClassName( 'javaScript' );

//. --------------------Les projets utilisant bootstraps5.--------------------
const bootstrap = document.getElementsByClassName( 'bootstrap' );

//. --------------------Les projets utilisant le PHP.--------------------
const php = document.getElementsByClassName( 'php' );

//. --------------------Les projets utilisant Java.--------------------
const java = document.getElementsByClassName( 'java' );

//. --------------------Les projets utilisant MySQL.--------------------
const mySql = document.getElementsByClassName( 'mySql' );

//. --------------------Les projets utilisant wordpress.--------------------
const wordpress = document.getElementsByClassName( 'wordpress' );

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//§ Si l'utilisateur souhaite voir tout mes projets.
all.addEventListener( 'click', function cacheEtMontre() {

    //= Je montre toutes les cartes de la section "Mon portfolio".
    for ( let i=0; i < cartesPortfolio.length; i++ ) {
        cartesPortfolio[i].classList.remove( 'filtreCartePortfolio' );
    }

    //= J'enlève la classe "actif" de tout les boutons de la section "Mon portfolio".
    for ( let i=0; i < boutonSelectionCategorie.length; i++ ) {
        boutonSelectionCategorie[i].classList.remove( 'actif' );
    }

    //= Je change la couleur du bouton "Voir tout mes projets." afin de donner un repère visuel à l'utilisateur.
    all.classList.add( 'actif' );
})

//§ La fonction générale qui permet de filtrer les cartes de la section "Mon portfolio".
function filtrerCartePortfolio( boutonCategoriePortfolio, langageCartePortfolio ) {

    //= Je définit le bouton sur lequel le click va avoir lieu.
    boutonCategoriePortfolio.addEventListener( 'click', function hideAndShowCartePortfolio() {

        //= Je cache toutes les carte de la section "Mon portfolio".
        for ( let i=0; i < cartesPortfolio.length; i++ ) {
            cartesPortfolio[i].classList.add( 'filtreCartePortfolio' )
        }

        //= J'affiche les cartes utilisant le language souhaité par l'utilisateur.
        for ( let i=0; i < langageCartePortfolio.length; i++ ) {
            langageCartePortfolio[i].classList.remove( 'filtreCartePortfolio' );
        }

        //= J'enlève la classe "actif" de tout les boutons de la section "Mon portfolio".
        for ( let i=0; i < boutonSelectionCategorie.length; i++ ) {
            boutonSelectionCategorie[i].classList.remove('actif' );
        }

        //= Je change la couleur du bouton sur lequel l'utilisateur a cliqué afin de lui donner un repère visuel.
        boutonCategoriePortfolio.classList.add('actif');
    })
}

//? Si l'utilisateur souhaite voir tout mes projets utilisant le HTML5 et le CSS3.
filtrerCartePortfolio( btnHtml, html );

//? Si l'utilisateur souhaite voir tout mes projets utilisant le JavaScript.
filtrerCartePortfolio( btnJS, javaScript );

//? Si l'utilisateur souhaite voir tout mes projets utilisant le Bootstrap5.
filtrerCartePortfolio( btnBt, bootstrap );

//? Si l'utilisateur souhaite voir tout mes projets utilisant le PHP.
filtrerCartePortfolio( btnPhp, php );

//? Si l'utilisateur souhaite voir tout mes projets utilisant le Java.
filtrerCartePortfolio( btnJava, java );

//? Si l'utilisateur souhaite voir tout mes projets utilisant le MySQL.
filtrerCartePortfolio( btnMySql, mySql );

//? Si l'utilisateur souhaite voir tout mes projets fait avec Wordpress.
filtrerCartePortfolio( btnWp, wordpress );

/*
: ************************************************************************************************************
                                    % Contactez-moi.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des constantes.
. --------------------------------------------------------------------------------
*/

//. --------------------Le titre de la section contact.--------------------
const titreContact = document.getElementById( 'titreContact' );

//. --------------------Le formulaire de contact.--------------------
const formulaireContact = document.getElementById( 'formulaireContact' );

//. --------------------Les projets utilisant wordpress.--------------------
const droiteContact = document.getElementsByClassName( 'droiteContact' );

//. --------------------Les projets utilisant wordpress.--------------------
const gaucheContact = document.getElementsByClassName( 'gaucheContact' );

//. --------------------Les projets utilisant wordpress.--------------------
const basContact = document.getElementsByClassName( 'basContact' );

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//§ La fonction générale qui permet d'animer l'arrivé du formulaire.
function animerFormulaire( direction, directionAnimation ) {
    for (let i=0; i < direction.length; i++ ) {
        direction[i].classList.add(directionAnimation );
    }
}

//§ Au survol de la souris les animations du formulaire se déclenche.
titreContact.addEventListener( 'mouseover', function showFormulaire() {
    //? Permet d'afficher le formulaire.
    formulaireContact.classList.remove( 'hideContact' );

    //? Les éléments qui arrivent par la droite.
    animerFormulaire( droiteContact, 'slideDroiteContact' );

    //? Les éléments qui arrivent par la gauche.
    animerFormulaire( gaucheContact, 'slideGaucheContact' );

    //? Les éléments qui arrivent par le bas.
    animerFormulaire( basContact, 'slideBasContact' );
})