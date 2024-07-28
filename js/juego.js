let numerosecreto;
let intentos = 9;

let buttons= document.getElementById("buttons");
let boton= document.getElementById("boton");
let box= document.getElementById("box");
let number = document.getElementsByName("number")[0];
let enviar = document.getElementsByName("enviar")[0];
let resultado = document.getElementById("resultado");
let intentosRestantes = document.getElementById("intentosRestantes");
let formulario = document.getElementById("formulario");
let imagen= document.getElementById("imagen");
let reiniciar = document.getElementById("reiniciar");
let numero = document.getElementById("numero");

boton.addEventListener('click', iniciarJuego);
reiniciar.addEventListener('click', iniciarJuego);

function iniciarJuego() {
    buttons.style.display = "none";
    box.style.display = "block";
    numerosecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 9;
    intentosRestantes.textContent = `Intentos restantes: ${intentos}`;
    numero.textContent="";
    resultado.textContent = "";
    number.value = "";
    number.disabled = false;
    enviar.disabled = false;
    reiniciar.style.display = "none";
    imagen.src = "./img/adivina.jpg";
}

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  let adivinanza = parseInt(number.value);

  if (isNaN(adivinanza)) {
    resultado.textContent = "Por favor, introduce un número válido.";
    resultado.style.color = "red";
  } else {
    intentos--;
    if (adivinanza < numerosecreto) {
        resultado.textContent = "Demasiado bajo. Intenta de nuevo.";
        resultado.style.color = "orange";
    } else if (adivinanza > numerosecreto) {
        resultado.textContent = "Demasiado alto. Intenta de nuevo.";
        resultado.style.color = "orange";
    } else {
        imagen.src="./img/muyBien.jpg"
        resultado.textContent = "¡Felicidades! Adivinaste el número.";
        numero.textContent = `${numerosecreto}`;
        resultado.style.color = "green";
        number.disabled = true;
        enviar.disabled = true;
        reiniciar.style.display = "block"; 
    }

    if (intentos === 0 && adivinanza !== numerosecreto) {
        imagen.src="./img/muyMal.jpg"
        resultado.textContent = `Has perdido. El número secreto era ${numerosecreto}.`;
        numero.textContent = `${numerosecreto}`;
        resultado.style.color = "red";
        number.disabled = true;
        enviar.disabled = true;
        reiniciar.style.display = "block"; 
    }

    intentosRestantes.textContent = `Intentos ${intentos}`;
  }
})

number.addEventListener('input', function(e) {
    resultado.textContent = ""; 
});