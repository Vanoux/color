// good luck !


// !! FAIT EN ÉQUIPE AVEC SANDRINE !!

/*
## 1ere étape 
Les boutons doivent avoir leur fond de la couleur qui se trouvve dans le data attribute data-color
*/
    
    $(".color").each(function(){ 
/* .each(function) = fonction à exécuter pour chaque élément correspondant.
Donc pour chaque class color applique cette fonction.
*/
        var couleur= $(this).attr("data-color");//$(this) permet d'accéder à un objet jQuery à la place de l'élément DOM habituel.

        $(this).css("background-color",couleur); //La méthode .css() est un moyen pratique d'obtenir une propriété de style
        console.log(couleur);
        
/*
## 2e étape 
Un click sur le bouton doit mettre cette couleur en fond
*/
        $(this).click(function(){
        $('body').css('background-color',couleur);
        console.log("Fond à changé de couleur !!");
        })
        
    })

 /*
 ## 3e étape
quand la case #modify-texte est cochée, la couleur du texte
 doit etre modifiée
 */   
    
    $("#modify-texte").click(function(){
        if (this.checked) { //Le sélecteur .checked fonctionne pour les cases à cocher.
    $("p").css("color", "#FFFFFF");
        console.log("Couleur du texte blanc !");
        }else {
            $("p").css("color", "#231919");
            console.log("Back to Black !")
        }
    })


 