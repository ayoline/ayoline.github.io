function generateCopyForms() {

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const ageValue = document.getElementById("age").value;
    const commentValue = document.getElementById("comment").value;

    document.getElementById("results").innerHTML = `<p>Nome: ${nameValue}</p>`;
    console.log(nameValue);
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