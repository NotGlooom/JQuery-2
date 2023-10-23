// Document est prêt
$(document).ready(function () {

    // Valider la description
    $("#desc-check").hide();
    let descError = true;
    $("#desc").keyup(function (){
        validateDesc();
    })

    function validateDesc() {
        let descValue = $("#desc").val();
        if (descValue.length === 0) {
            $("#desc-check").show().html("**Entrez la description");
            descError = false;
            return false;
        } else if (descValue.length < 20 || descValue.length > 100) {
            $("#desc-check").show().html("**La longeur doit être comprise entre 20 et 100 caractères.");
            descError = false;
            return false;
        } else {
            $("#desc-check").hide();
        }
    }

    //Valider quantite
    $("#check-quantite").hide();
    let quantiteError = true;
    $("#quantite").keyup(function () {
        validateQuantite();
    }).click(function () {
        validateQuantite();
    })

    function validateQuantite() {
        let quantiteValue = $("#quantite").val();
        let categorie = $("#categorie").val();
        if (quantiteValue === "") {
            $("#check-quantite").show().html("**Entrez une quantité.")
            quantiteError = false;
            return false;
        } else if (categorie === "Dessert" && quantiteValue < 1 || quantiteValue > 8) {
            $("#check-quantite").show().html("**La quantité doit être entre 1 et 8 pour les dessert.");
            quantiteError = false;
            return false;
        } else {
            $("#check-quantite").hide();
        }

    }

    //Valider identifiant
    $("#identifiant-check").hide();
    let identifiantError = true;
    $("#identifiant").keyup(function () {
        validateIdentifiant();
    })

    function validedateIdentifiant() {
        let identifiantValue = $("#identifiant").val();
        if (identifiantValue.length === 0) {
            $("#identifiant-check").show().html("**Entrez votre identifiant.")
            identifiantError = false;
            return false;
        } else if
    }

    // Bouton Submit
    $("#submitbtn").click(function () {
        validateDesc();
        validateQuantite();
        if (
            descError === true &&
            quantiteError === true &&
            identifiantError === true
        ) {
            return true;
        } else {
            return false;
        }
    })
})