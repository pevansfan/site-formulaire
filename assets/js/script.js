
function afficherMotDePasseOublie() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotForm').style.display = 'flex';
}

function retournerConnexion() {
    document.getElementById('forgotForm').style.display = 'none';
    document.getElementById('inscriptionContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'flex';
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('popup').style.display = 'none';
    }, 2000);
}

function checkPasswordMatch() {
    // Récupère les valeurs des champs de mot de passe et confirmation
    var password = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Vérifie si les mots de passe correspondent
    if (password !== confirmPassword) {
        // Affiche un message d'erreur
        document.getElementById('errorPassword').style.display = 'flex';
    } else {
        // Efface le message d'erreur s'il y en a un
        document.getElementById('errorPassword').style.display = 'none';
    }
}

function afficherInscription() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('inscriptionContainer').style.display = 'flex'
}
