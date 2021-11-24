document.querySelector('body h1').innerHTML = "Restaurante Morte Lenta";
document.querySelector('body h2').innerHTML = "Formulário de satisfação do cliente";

document.querySelectorAll('label')[0].innerHTML = "Nome";
document.querySelectorAll('label')[1].innerHTML = "Email";
document.querySelectorAll('label')[2].innerHTML = "Idade";
document.querySelectorAll('label')[3].innerHTML = "Comentário";

function genCopyForm() {

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const ageValue = document.getElementById("age").value;
    const commentValue = document.getElementById("comment").value;

    if (nameValue) {
        document.getElementById("results").innerHTML = `<p>Nome: ${nameValue}</p>`;
    }
    if (emailValue) {
        document.getElementById("results").innerHTML += `<p>Email: ${emailValue}</p>`;
    }
    if (ageValue) {
        document.getElementById("results").innerHTML += `<p>Idade: ${ageValue}</p>`;
    }
    if (commentValue) {
        document.getElementById("results").innerHTML += `<p>Comentário: ${commentValue}</p>`;
    }

}