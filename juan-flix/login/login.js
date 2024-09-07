const users = {
    'juan': { password: 'j24', name: 'Juan Andres', url: 'premium-j.html' },
    'userad1': { password: 'p1try', name: 'Usuario Anónimo', url: 'premium-y.html' },
    'yolanda': { password: 'y4', name: 'Yolanda Camacho', url: 'index.html' },
    'user2': { password: 'pl2f', name: 'Usuario Anónimo', url: 'premium- (2).html' },
    'user3': { password: 'pl5f', name: 'Usuario Anónimo', url: 'premium- (3).html' },
    'user4': { password: 'plr3f', name: 'Usuario Anónimo', url: 'premium- (4).html' },
    'user5': { password: 'l5g', name: 'Usuario Anónimo', url: 'premium- (5).html' }
};

function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (users[email] && users[email].password === password) {
        const userName = users[email].name;
        const userUrl = users[email].url;
        message.textContent = `Bienvenido, ${userName}`;
        message.style.color = 'green';
        window.location.href = userUrl;
    } else {
        message.textContent = 'Nombre o clave incorrectos';
        message.style.color = 'red';
    }
}