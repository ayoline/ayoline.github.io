const ratingStars = [...document.getElementsByClassName("rating__star")];
document.querySelectorAll(".box-rating p")[1].innerHTML = "/";
document.querySelectorAll(".box-rating p")[2].innerHTML = "5";
const ratingNumber = document.querySelectorAll(".box-rating p")[0];
ratingNumber.innerHTML = "0"

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    let sum = 0;
    stars.map((star) => {

        star.onclick = () => {
            console.log("estrelas :" + stars);
            i = stars.indexOf(star);

            // pass star rating to number
            sum = stars.indexOf(star);
            if (i === 0) {
                if (star.className === starClassActive) {
                    sum = 0;
                } else {
                    sum = 1;
                }
            } else {
                if (star.className === starClassInactive) {
                    sum = i + 1;
                } else {
                    sum = i;
                }
            }

            console.log(sum);
            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) {
                    stars[i].className = starClassActive;
                }
                ratingNumber.innerHTML = sum.toString();
                ratingNumber.value = sum;
            } else {
                for (i; i < starsLength; ++i) {
                    stars[i].className = starClassInactive;
                }
                ratingNumber.innerHTML = sum.toString();
                ratingNumber.value = sum;
            }
        };
    });
}

function removeStars(stars) {
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    ratingNumber.innerHTML = "0"

    for (let i = 0; i < starsLength; ++i) {
        stars[i].className = starClassInactive;
    }
}

executeRating(ratingStars);

document.querySelector('body h1').innerHTML = "Restaurante Morte Lenta";
document.querySelector('body h2').innerHTML = "Formulário de satisfação do cliente";

document.querySelectorAll('label')[0].innerHTML = "Nome";
document.querySelectorAll('label')[1].innerHTML = "Email";
document.querySelectorAll('label')[2].innerHTML = "Idade";
document.querySelectorAll('label')[3].innerHTML = "Comentário";

function genCopyForm() {
    const results = document.querySelector('#results');
    removeAllChildNodes(results);

    const ratingValue = ratingNumber.value;
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const ageValue = document.getElementById("age").value;
    const commentValue = document.getElementById("comment").value;

    if (nameValue && emailValue && ageValue && ratingValue && commentValue) {
        results.innerHTML = `<p>Nome: ${nameValue}</p>`;
        results.innerHTML += `<p>Email: ${emailValue}</p>`;
        results.innerHTML += `<p>Idade: ${ageValue}</p>`;
        results.innerHTML += `<p>Avaliação: ${ratingValue}</p>`;
        results.innerHTML += `<p>Comentário: ${commentValue}</p>`;
    } else {
        document.getElementById("results").innerHTML += `<p>TODOS OS CAMPOS DEVEM SER PREENCHIDOS</p>`;
    }

    document.getElementById("myForm").reset();
    removeStars(ratingStars);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}