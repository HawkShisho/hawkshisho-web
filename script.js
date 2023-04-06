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

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.getAttribute('action'));

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      alert('Mensaje enviado correctamente.');
      form.reset();
    } else {
      alert('Error al enviar el mensaje.');
    }
  };

  xhr.send(formData);
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