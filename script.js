function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'Ifeyikiitan') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect Password');
    }
}
