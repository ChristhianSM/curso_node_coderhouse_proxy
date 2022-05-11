const socketLogin = io();

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formLogin = document.querySelector('.form-login');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    //Realizamos las validaciones

    const userDefault = email.value.slice(0, email.value.search('@'));

    const user = {
        id: email.value,
        user : userDefault,
        name : userDefault,
        lastname : null,
        age : null,
        avatar : null,
    }

    socketLogin.emit('user', {
        email: email.value,
        user : userDefault,
    });

    // sessionStorage.setItem('userActive', JSON.stringify(user))
    // location.replace('products.html');
    sendData(user)
})

async function sendData(userData) {
    const data = await fetch('http://localhost:4000/autentication/login', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    })
    const resp = await data.json();
    clearInputs();
}

function clearInputs () {
    user.value = "";
    password.value= "";
}