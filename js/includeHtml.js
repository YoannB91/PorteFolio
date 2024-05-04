/*
: ************************************************************************************************************
                                    % La fonction pour inclure un fichier HTML.
: ************************************************************************************************************
*/

function includeHTML() {

    //§ Je récupère tout les éléments HTML présent sur la page.
    const htmlTag = document.getElementsByTagName("*");

    for (let i = 0; i < htmlTag.length; i++) {

        //§ Le tag HTML qui est en train d'être testé dans la boucle.
        let element = htmlTag[i];

        //§ Je cherche l'élément ayant l'attribut de demande d'inclusion d'un fichier HTML.
        let file = element.getAttribute("include-html");

        //§ Si l'attribut est présent sur le tag HTML.
        if (file) {

        //? J'effectue une requête HTTP en utilisant comme la valeur de l'attribut en nom de fichier.

        let http = new XMLHttpRequest();

        http.onreadystatechange = function() {

            if (this.readyState == 4) {

                //$ Réussite.
                if (this.status == 200) {element.innerHTML = this.responseText;}

                //$ Échec.
                if (this.status == 404) {element.innerHTML = "Page non trouvé.";}

                //§ J'enlève l'attribut de demande d'inclusion.
                element.removeAttribute("include-html");

                //§ Puis je demande à relancer ma fonction.
                includeHTML();
            }

        }

        //§ Envoie des données.
        http.open("GET", file, true);
        http.send();

        //? Je quitte la fonction.
        return;
        }

    }

}