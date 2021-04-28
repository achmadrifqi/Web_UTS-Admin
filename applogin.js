function login(url) {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if (email != '' && pass != null) {
        location.href = url;
    } else {
        window.alert('Login failed, check your email and password');
    }
}