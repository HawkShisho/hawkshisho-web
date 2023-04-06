/* Texto loco */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let iterations = 0;
document.querySelector("#prueba").onmouseover = event => {
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
      if (index < iterations) {
        return event.target.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

    if(iterations >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
    }, 30);
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
