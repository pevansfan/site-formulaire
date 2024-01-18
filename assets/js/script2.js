function passData() {
    var email = document.getElementById('email').value;
    
    // Stocke la valeur dans le stockage local (localStorage)
    localStorage.setItem('email', email);

    // Redirige vers la page de résultat
    window.location.href = 'index.html';
}
