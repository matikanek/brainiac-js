let emailControl;
let passwordControl;

document.addEventListener("DOMContentLoaded", () => {
  emailControl = document.getElementById('emailInput');
  passwordControl = document.getElementById('passwordInput');
});

function loginHome() {
  window.location.href = 'http://127.0.0.1:8080/home.html';
}
window.loginHome = loginHome;

function login() {
  let dataToLogin = {
    email: emailControl.value,
    password: passwordControl.value
  };
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToLogin),
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data.token);
  })
  .then(() => {
    loginHome();
  })
  .catch((error) => {
    console.error('Something wrong with login to application:', error);
  });
}
window.login = login;

function logout() {
  fetch(`http://localhost:3000/api/logout`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(() => {
    localStorage.removeItem('token');
    if(!localStorage.getItem('token') && !window.location.href.match('index.html')) {
      window.location.href = 'http://127.0.0.1:8080/index.html';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
window.logout = logout;