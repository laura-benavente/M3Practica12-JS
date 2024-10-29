document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (username.length < 4) {
        alert('El nombre de usuario debe tener al menos 4 caracteres.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('El correo electrónico introducido no es válido.');
        return;
    }

    if (password.length < 6 || password.length > 12) {
        alert('La contraseña debe tener entre 6 y 12 caracteres.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    alert('Formulario enviado con éxito!');
});
