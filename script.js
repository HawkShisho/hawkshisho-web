/* Texto loco */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("#prueba").onmouseover = event => {
    setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map(letter => letters[Math.floor(Math.random() * 26)])
    .join("");
    }, 100);
}

/* Formulario? */
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendEmail()  
});

/* Navegacion */

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // previene el comportamiento por defecto del enlace

    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({behavior: "smooth"}); // desplaza la página al elemento de la sección correspondiente
  });
});

/* Correo lol */
function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  
  var mailtoLink = 'mailto:alonsolazo12345@gmail.com?subject=' + subject + '&body=' + name + ' (' + email + '): ' + message;
  
  window.location.href = mailtoLink;
}
