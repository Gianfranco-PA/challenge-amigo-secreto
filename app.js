// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

const h3TitleListFriend = document.getElementById("title-list-friend");
const h3TitleResult = document.getElementById("title-result");

const amigos = [];

function agregarAmigo() {
    const amigo = inputAmigo.value.trim();
    if (amigo) {
        amigos.push(amigo);
        inputAmigo.value = "";
        renderizarListaAmigos();
    } else {
        alert("Ingrese el nombre de un amigo");
    }
}

function renderizarListaAmigos() {
    ulListaAmigos.innerHTML = "";
    h3TitleListFriend.classList.remove("hidden");
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos dos amigos para sortear");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    ulResultado.innerHTML = "";
    h3TitleResult.classList.remove("hidden");
    const li = document.createElement("li");
    li.textContent = amigoSorteado;
    li.coun
    ulResultado.appendChild(li);
}
