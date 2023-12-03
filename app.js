function auth() {
    var email = document.getElementById('email').value;
var password= document.getElementById ('password').value;


if(email == 'admin@gmail.com' && password == 12345678 )
{
    window.location.assign('https://translate.google.com');
    alert("login successfully");
}

else {
    alert("Login incorrect");
    return;
}
}
