//§ La barre de naviguation.

//: Le clic sur l'icone du menu burger ouvre le menu vertical.
var ham = document.getElementsByClassName('ham');
var cacher = document.getElementsByClassName('cacher');

ham[0].addEventListener('click', function show() {
    for (var i = 0; i < cacher.length; i++) {
        if (cacher[i].classList.contains('hide2')) {
            cacher[i].classList.replace('hide2', 'show2');
        }
    };
});

//: Le clic sur l'icone X ferme le menu vertical.
var x = document.getElementsByClassName('menuX');

x[0].addEventListener('click', function hide() {
    for (var i = 0; i < cacher.length; i++) {
        if (cacher[i].classList.contains('show2')) {
            cacher[i].classList.replace('show2', 'hide2');
        }
    }
});

//: Le clic sur l'un des liens du menu vertical le ferme.
var menuLink = document.getElementsByClassName('menuLink');

for (var i=0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function hide() {
        for (var r=0; r < cacher.length; r++) {
        if (cacher[r].classList.contains('show2')) {
            cacher[r].classList.replace('show2', 'hide2');
        }}
    })
}


//§ La section À propos.

var propos = document.getElementById('propos'); //$ Le titre de la section.
<<<<<<< HEAD
var cacherPropos = document.getElementById('proposTexte'); //$ Le descriptif de la section.
=======
var cacher = document.getElementById('proposTexte'); //$ Le descriptif de la section.
>>>>>>> 48da2ea8d3d5ac316a0b3a3e3cb94c27ebb2083f
var image = document.getElementById('proposImage'); //$ L'image de la section.
var texte = document.getElementById('proposParagraphe'); //$ Le paragraphe de la section.

//£ Dès que l'utilisateur survole la section à propos j'active ma fonction.
propos.addEventListener('mouseover', function showPropos() {

<<<<<<< HEAD
    cacherPropos.classList.remove('hidePropos'); //£ J'affiche la section.
=======
    cacher.classList.remove('hidePropos'); //£ J'affiche la section.
>>>>>>> 48da2ea8d3d5ac316a0b3a3e3cb94c27ebb2083f
    image.classList.add('proposImg'); //£ Je lance l'animation de l'image.
    texte.classList.add('proposP'); //£ Je lance l'animation du paragraphe.
})


//§ La section mes passions.

//& La section lecture.
var livre = document.getElementById('book');

//, Je vais créer une fonction pour changer d'image lorsque la souris de l'utilisateur passe dessus.
livre.addEventListener('mouseover', function survolLecture() {
    livre.src = 'img/passions/livres/library.jpg'
    livre.setAttribute("title", "Une bibliothèque dans les nuages.")
    livre.setAttribute("alt", "Une bibliothèque à ciel ouvert qui laisse les nuages la pénétrer afin de créer une légère couche de fumée. L’on peut voir le soleil percer le ciel au-dessus de la bibliothèque, et des oiseaux voltiger au-dessus de ces livres qui font voyager notre imaginaire à l’aide chacune de leurs pages.")
});

//, Puis remettre mon image quand la souris repart.
livre.addEventListener('mouseout', function retourLecture() {
    livre.src = 'img/passions/livres/livre.jpg'
    livre.setAttribute("title", "Un livre qui vous emmènera dans un monde féérique.")
    livre.setAttribute("alt", "Un escalier qui mène à la page gauche d’un livre, et sur laquelle nous pouvons voir une femme en blanc se protégeant du soleil à l’aide d’un parapluie. Il y a sur la page de droite une jeune fille qui fait de la balançoire sur un arbre rose. L’on peut aussi apercevoir un pic à tête rouge qui s'apprête à se poser sur l’arbre.")
});

//& La section jeux vidéo.
var jv = document.getElementById('JV');

//$ L'image sera différente à chaque clic grâce à cette fonction.
jv.addEventListener('click', function cliqueSwitchImage(){
    var sourceJV = jv.getAttribute('src');
    switch (sourceJV){
        case 'img/passions/jv/switch.jpg':
            jv.src = 'img/passions/jv/joycon.jpg';
            jv.setAttribute("title", "Des joy-cons, espéront qu'ils ne vont pas drifter...");
            jv.setAttribute("alt", "Une paire de joy-cons rouges (de la série mario odyssey) sont placés dans une poignée de confort bleu. Le tout est une référence au célèbre plombier italien de Nintendo, Mario Bros.");
            break;
        case 'img/passions/jv/joycon.jpg':
            jv.src = 'img/passions/jv/dualshock-4.jpg';
            jv.setAttribute("title", "Deux dualshock 4, elles fonctionnent un peu mieux et ont moins de problèmes.");
            jv.setAttribute("alt", "Une dualshock 4 noire est posé en biais sur la gauche d’une image ayant un fond blanc. Elle est accolé à une seconde dualshock 4, elle de couleur blanche, et leurs associations forment une forme de P (en référence à Playstation).");
            break;
        case 'img/passions/jv/dualshock-4.jpg':
            jv.src = 'img/passions/jv/playstation-4.jpg';
            jv.setAttribute("title", "Une playstation 4, elle est plus performante mais n'apporte aucune innovation.");
            jv.setAttribute("alt", "Une dualshock 4 noire est posé contre une playstation 4 noire sur un fond blanc.");
            break;
        case 'img/passions/jv/playstation-4.jpg':
            jv.src = 'img/passions/jv/switch.jpg';
            jv.setAttribute("title", "Une switch, une console de salon utilisable en console portable, du pur génie nippon.");
            jv.setAttribute("alt", "Une console Nintendo Switch. Elle est représentée en mode portable sur un fond de couleur purple; avec son joy-con bleu à gauche et son joy-con rouge à droite. Son écran est éteint.");
            break;
    }
});

//& La section science-fiction et fantastique.

//$ Je vais créer un carousel qui change d'image automatiquement.
var img = 0;

function f(){
    img += 1;
    var monImage = document.getElementById('SFF');
    monImage.setAttribute('src', 'img/passions/sff/' + img + '.jpg');
    if(img == 10){
        img = 1;
        monImage.setAttribute('src', 'img/passions/sff/' + img + '.jpg');
    };
}

var timer = window.setInterval("f()", 3000); 

/// Les hide and show des textes sous les images de la section mes passions.

//£ La section lecture.
var texte2 = document.getElementsByClassName('hideOrShow2');
var cacher2 = document.getElementsByClassName('cacher2');

for (var i=0; i<texte2.length; i++) {
    texte2[i].addEventListener('click', function hideAndShow() {
        for (var i = 0; i < cacher2.length; i++) {
            if (cacher2[i].classList.contains('hide')) {
                cacher2[i].classList.replace('hide', 'show');
            } else {
                cacher2[i].classList.contains('show');
                cacher2[i].classList.replace('show', 'hide');
            };
        };
    });
};

//£ La section musique.
var texte3 = document.getElementsByClassName('hideOrShow3');
var cacher3 = document.getElementsByClassName('cacher3');

for (var i=0; i<texte3.length; i++) {
    texte3[i].addEventListener('click', function hideAndShow() {
        for (var i = 0; i < cacher3.length; i++) {
            if (cacher3[i].classList.contains('hide')) {
                cacher3[i].classList.replace('hide', 'show');
            } else {
                cacher3[i].classList.contains('show');
                cacher3[i].classList.replace('show', 'hide');
            };
        };
    });
};

//£ La section jeux vidéo.
var texte4 = document.getElementsByClassName('hideOrShow4');
var cacher4 = document.getElementsByClassName('cacher4');

for (var i=0; i<texte4.length; i++) {
    texte4[i].addEventListener('click', function hideAndShow() {
        for (var i = 0; i < cacher4.length; i++) {
            if (cacher4[i].classList.contains('hide')) {
                cacher4[i].classList.replace('hide', 'show');
            } else {
                cacher4[i].classList.contains('show');
                cacher4[i].classList.replace('show', 'hide');
            };
        };
    });
};

//£ La section science-fiction et fantastique.
var texte5 = document.getElementsByClassName('hideOrShow5');
var cacher5 = document.getElementsByClassName('cacher5');

for (var i=0; i<texte5.length; i++) {
    texte5[i].addEventListener('click', function hideAndShow() {
        for (var i = 0; i < cacher5.length; i++) {
            if (cacher5[i].classList.contains('hide')) {
                cacher5[i].classList.replace('hide', 'show');
            } else {
                cacher5[i].classList.contains('show');
                cacher5[i].classList.replace('show', 'hide');
            };
        };
    });
};


//§ La section compétences. 

var competences = document.getElementById('sectionCompetence'); //) La section mes compétences.
var logo = document.getElementsByClassName('logo-competences'); //) Les images de la section compétence.

//* Les différentes sous-sections d'images.
var langage = document.getElementsByClassName('langage'); //) Les langages.
var frameworks = document.getElementsByClassName('frameworks'); //) Les frameworks.
var cms = document.getElementsByClassName('cms'); //) Les CMS.
var outils = document.getElementsByClassName('outils'); //) Les outils. 

//) Je lance les animations lorsque l'utilisateur survol la section.
competences.addEventListener('mouseover', function lancerAnimation() {

<<<<<<< HEAD
    for (var i=0; i < logo.length; i++) {
        logo[i].classList.remove('hideComptecences');
    }

=======
>>>>>>> 48da2ea8d3d5ac316a0b3a3e3cb94c27ebb2083f
    //. La sous-section langage.
    for (var i=0; i < langage.length; i++) {
        langage[i].classList.add('animationLanguages');
    }

    //. La sous-section frameworks.
    for (var i=0; i < frameworks.length; i++) {
        frameworks[i].classList.add('animationFrameworks');
    }

    //. La sous-section CMS.
    for (var i=0; i < cms.length; i++) {
        cms[i].classList.add('animationCms');
    }

    //. La sous-section outils.
    for (var i=0; i < outils.length; i++) {
        outils[i].classList.add('animationOutils');
    }
})



//) Lorsque l'utilisateur quitte la section j'enlève les classes de l'animation afin de les relancer s'il y revient.
competences.addEventListener('mouseout', function resetAnimation() {

    //. La sous-section langage.
    for (var i=0; i < langage.length; i++) {
        langage[i].classList.remove('animationLanguages');
    }

    //. La sous-section frameworks.
    for (var i=0; i < frameworks.length; i++) {
        frameworks[i].classList.remove('animationFrameworks');
    }

    //. La sous-section CMS.
    for (var i=0; i < cms.length; i++) {
        cms[i].classList.remove('animationCms');
    }

    //. La sous-section outils.
    for (var i=0; i < outils.length; i++) {
        outils[i].classList.remove('animationOutils');
    }
})


//§ La section portfolio.

var carte = document.getElementsByClassName('cartePortfolio'); //; Toutes les cartes. 
var filtre = document.getElementsByClassName('filtre'); //; Cacher des cartes.
var bouton = document.getElementsByClassName('bouton'); //; Les boutons de sélection.


//? Si l'utilisateur veut voir tout les projets.

var all = document.getElementById('btnAll'); //; Le bouton pour tout voir.

all.addEventListener('click', function cacheEtMontre() {
    for (var i=0; i < carte.length; i++) {
        if (carte[i].classList.contains('filtre')) {
            carte[i].classList.remove('filtre');
        }
    }
    for (var i=0; i < bouton.length; i++) {
        if (bouton[i].classList.contains('actif')) {
            bouton[i].classList.remove('actif');
        }
    }
    all.classList.add('actif');
})


//? Si l'utilsateur veut uniquement voir les projets contenant du HTML5 et du CSS3.

var btnHtml = document.getElementById('btnHtml'); //; Le bouton pour voir les projet utilisant le HTML5 et le CSS3.
var html = document.getElementsByClassName('html'); //; Les projets utilisant le HTML5 et le CSS3.

btnHtml.addEventListener('click', function cacheEtMontreHtml() {
    for (var i=0; i < carte.length; i++) {
        carte[i].classList.add('filtre');
    }
    for (var i=0; i < html.length; i++) {
        if (html[i].classList.contains('filtre')) {
            html[i].classList.remove('filtre');
        }
    }
    for (var i=0; i < bouton.length; i++) {
        if (bouton[i].classList.contains('actif')) {
            bouton[i].classList.remove('actif');
        }
    }
    btnHtml.classList.add('actif');
})


//? Si l'utilisateur veut uniquement voir les projets contenant du Bootstrap5.

var btnBt = document.getElementById('btnBt'); //; Le bouton pour voir les projets utilisant Boostrap5.
var bootstrap = document.getElementsByClassName('bootstrap'); //; Les projets utilisant Bootstrap5.

btnBt.addEventListener('click', function cacheEtMontreBt() {
    for (var i=0; i < carte.length; i++) {
        carte[i].classList.add('filtre');
    }
    for (var i = 0; i < bootstrap.length; i++) {
        if (bootstrap[i].classList.contains('filtre')) {
            bootstrap[i].classList.remove('filtre');
        }
    }
    for (var i=0; i < bouton.length; i++) {
        if (bouton[i].classList.contains('actif')) {
            bouton[i].classList.remove('actif');
        }
    }
    btnBt.classList.add('actif');
})


//? Si l'utilisateur veut uniquement les projets contenant du PHP.

var btnPhp = document.getElementById('btnPhp'); //; Le bouton pour voir les projets utilisant du PHP.
var php = document.getElementsByClassName('php'); //; Les projets utilisant du PHP.

btnPhp.addEventListener('click', function cacheEtMontrePhp() {
    for (var i=0; i < carte.length; i++) {
        carte[i].classList.add('filtre');
    }
    for (var i=0; i < php.length; i++) {
        if (php[i].classList.contains('filtre')) {
            php[i].classList.remove('filtre');
        }
    }
    for (var i=0; i < bouton.length; i++) {
        if (bouton[i].classList.contains('actif')) {
            bouton[i].classList.remove('actif');
        }
    }
    btnPhp.classList.add('actif');
})


//? Si l'utilisateur veut voir les projets fait avec Wordpress.

var btnWp = document.getElementById('btnWp'); //; Le bouton pour voir les projets fait en Wordpress.
var wordpress = document.getElementsByClassName('wordpress'); //; Les projets que j'ai fait avec wordpress.

btnWp.addEventListener('click', function cacheEtMontreWp() {
    for (var i=0; i < carte.length; i++) {
        carte[i].classList.add('filtre');
    }
    for (var i=0; i < wordpress.length; i++) {
        if (wordpress[i].classList.contains('filtre')) {
            wordpress[i].classList.remove('filtre');
        }
    }
    for (var i=0; i < bouton.length; i++) {
        if (bouton[i].classList.contains('actif')) {
            bouton[i].classList.remove('actif');
        }
    }
    btnWp.classList.add('actif');
})


//§ La section contact.

var titreC = document.getElementById('titreContact'); /// Le titre de la section contact.
var showF = document.getElementById('formulaire'); /// Je vais cherché la classe hide du formulaire.
var droite = document.getElementsByClassName('droite'); /// Les éléments sur la droite.
var gauche = document.getElementsByClassName('gauche'); /// Les éléments sur la gauche.
var bas = document.getElementsByClassName('bas'); /// Les éléments en bas.

titreC.addEventListener('mouseover', function showFormulaire() {

    //. J'affiche le formulaire.
    showF.classList.remove('hideContact');

    for (var i=0; i < droite.length; i++) {
        droite[i].classList.add('slideDroite');
    }

    for (var i=0; i < gauche.length; i++) {
        gauche[i].classList.add('slideGauche');
    }

    for (var i=0; i < bas.length; i++) {
        bas[i].classList.add('slideBas');
    }
})