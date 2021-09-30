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


//§ La section mes passions.

//& La section lecture.
var livre = document.getElementById('book');

//, Je vais créer une fonction pour changer d'image lorsque la souris de l'utilisateur passe dessus.
livre.addEventListener('mouseover', function survolLecture() {
    livre.src = 'img/passions/livres/library.jpg'
    livre.setAttribute('title', 'Une bibliothèque paradisique.')
    livre.setAttribute('alt', 'Une bibliothèque dans les nuages.')
});

//, Puis remettre mon image quand la souris repart.
livre.addEventListener('mouseout', function retourLecture() {
    livre.src = 'img/passions/livres/livre.jpg'
    livre.setAttribute('title', 'Un livre sur le pays des merveilles.')
    livre.setAttribute('alt', 'Un livre fantastique.')
});

//& La section jeux vidéo.
var jv = document.getElementById('JV');

//$ L'image sera différente à chaque clic grâce à cette fonction.
jv.addEventListener('click', function cliqueSwitchImage(){
    var sourceJV = jv.getAttribute('src');
    switch (sourceJV){
        case 'img/passions/jv/switch.jpg':
            jv.src = 'img/passions/jv/joycon.jpg';
            jv.setAttribute('title', 'Des joycons, espéront qu\'ils ne vont pas drifter...');
            jv.setAttribute('alt', 'Des joycons.');
            break;
        case 'img/passions/jv/joycon.jpg':
            jv.src = 'img/passions/jv/dualshock-4.jpg';
            jv.setAttribute('title', 'Une paire de dualshock-4, elles fonctionnent un peu mieux.');
            jv.setAttribute('alt', 'Une dualshock-4.');
            break;
        case 'img/passions/jv/dualshock-4.jpg':
            jv.src = 'img/passions/jv/playstation-4.jpg';
            jv.setAttribute('title', 'Une playstation 4, plus performante mais aucune innovation.');
            jv.setAttribute('alt', 'Une playstation 4');
            break;
        case 'img/passions/jv/playstation-4.jpg':
            jv.src = 'img/passions/jv/switch.jpg';
            jv.setAttribute('title', 'Une switch, une console portable et une console de salon allié, du pur génie nippon.');
            jv.setAttribute('alt', 'Une console Nintendo Switch.');
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


/* 
//§ La section portfolio.
var présentation = document.getElementsByClassName('présentationPortfolio');
var image = document.getElementsByClassName('imagePortfolio');
var opacité = document.getElementsByClassName('opacité');

//* J'affiche le texte lors du survol de l'image par la souris.
image[0].addEventListener('mouseover', function showPrésentation() {
    présentation[0].style.display = 'flex';
});

//* Je rend l'image de font transparante pour permettre de bien lire le texte lors du survol.
image[0].addEventListener('mouseover', function opaque() {
    if (image[0].classList.contains('opacitéNone')) {
        image[0].classList.remove('opacitéNone');
        image[0].classList.add('opacité');
    }
});

//* Je désaffiche le texte quand la souris quitte l'image. 
image[0].addEventListener('mouseout', function hidePrésentaion() {
    présentation[0].style.display = 'none';
});

//* J'enlève la transparence pour rendre l'image de nouveau visible quand elle n'est plus survoler.
image[0].addEventListener('mouseout', function nonOpaque() {
    if (image[0].classList.contains('opacité')) {
        image[0].classList.remove('opacité');
        image[0].classList.add('opacitéNone');
    }
}); 
*/


























// cadrePhoto[0].addEventListener('click', function TexteSurPhoto(){
//     textePhoto[0].getAttribute('display');
// })

