<?php

/// Si des données sont postés.

//+ Le code PHP pour traiter l'envoi de l'email.
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    //§ Récupération des variables et sécurisation des données.

    $nom = htmlentities($_POST['nom']); //, Je convertit des caractères spéciaux en leur équivalant HTML.
    $prenom = htmlentities($_POST['prenom']);
    $mail = htmlentities($_POST['mail']); 
    $telephone = htmlentities($_POST['telephone']);
    $objet = htmlentities($_POST['objet']);
    $message = htmlentities($_POST['message']);

    //* Les variables concerant l'e-mail.

    $destinataire = 'yoann.bezard@yoann-bezard.fr'; //= Mon adresse e-mail.
    $contenu = '<html><head><title> '.$objet . ' </title></head><body>';
    $contenu .= '<p>Tua as un nouveau message !</p>';
    $contenu .= '<p><stong>Prénom</stong> : ' .$prenom. '</p>';
    $contenu .= '<p><strong>Nom</strong> : ' .$nom. '</p>';
    $contenu .= '<p><strong>E-mail</strong> : ' .$mail. '</p>';
    $contenu .= '<p><strong>Téléphone</strong> : ' .$telephone. '</p>';
    $contenu .= '<p><strong>Message</strong> : ' .$message. '</p>';
    $contenu .= '</body></html>'; //, Le contenu du message est en XHTML.

    //$ Pour envoyer un email HTML, l'en-tête Content doit être défini.

    $headers = 'MIME-Version 1.0'."\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";

    //% L'envoi de l'e-mail.

    mail($destinataire, $objet, $contenu, $headers); //; La fonction principale qui me sert à envoyé l'e-mail.
    header("location:index.html"); //£ Afficher un message pour indiquer que le message à été envoyé.
}

?>