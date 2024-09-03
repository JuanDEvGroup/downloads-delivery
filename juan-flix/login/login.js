const users = {
    'juan': { password: 'j24', name: 'Juan Andres' },
    'userad1': { password: 'p1try', name: 'Usuario Anónimo' },
    'yolanda': { password: 'y4', name: 'Yolanda Camacho' }
};

function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (users[email] && users[email].password === password) {
        const userName = users[email].name;
        message.textContent = `Bienvenido, ${userName}`;
        message.style.color = 'green';
        window.location.href = "premium.html"
    } else {
        message.textContent = 'Nombre o clave incorrectos';
        message.style.color = 'red';
    }
}