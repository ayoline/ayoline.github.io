document.querySelectorAll('#titles-in-fixed-navbar a')[0].href = "#initial-image";
document.querySelectorAll('#titles-in-fixed-navbar a')[0].innerHTML = "Página Inicial";
document.querySelectorAll('#titles-in-fixed-navbar a')[1].href = "#about-me";
document.querySelectorAll('#titles-in-fixed-navbar a')[1].innerHTML = "About me";
document.querySelectorAll('#titles-in-fixed-navbar a')[2].href = "#pearl-jam";
document.querySelectorAll('#titles-in-fixed-navbar a')[2].innerHTML = "Pearl Jam - Info";


document.querySelector('#initial-image p').innerHTML = "The Seattle Grunge Experience";


document.querySelector('#about-me h1').innerHTML = "Anderson Pacheco Soares";
document.querySelectorAll('#about-me p')[0].innerHTML = "37 anos";
document.querySelectorAll('#about-me p')[1].innerHTML = "Aracajú - SE";
document.querySelector('#about-me img').src = "/images/avatar.png";

document.querySelectorAll('#images-in-pearl-jam img')[0].src = "../images/aula-19-11/pearl-jam1.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[0].href = "https://ayoline.github.io/novembro-2021/images/aula-19-11/pearl-jam1.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[0].target = "_target";

document.querySelectorAll('#images-in-pearl-jam img')[1].src = "../images/aula-19-11/pearl-jam2.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[1].href = "https://ayoline.github.io/novembro-2021/images/aula-19-11/pearl-jam2.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[1].target = "_target";

document.querySelectorAll('#images-in-pearl-jam img')[2].src = "../images/aula-19-11/pearl-jam3.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[2].href = "https://ayoline.github.io/novembro-2021/images/aula-19-11/pearl-jam3.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[2].target = "_target";

document.querySelectorAll('#images-in-pearl-jam img')[3].src = "../images/aula-19-11/pearl-jam4.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[3].href = "https://ayoline.github.io/novembro-2021/images/aula-19-11/pearl-jam4.jpg";
document.querySelectorAll('#images-in-pearl-jam a')[3].target = "_target";


document.querySelector('#info-in-pearl-jam h1').innerHTML = "About the band";
document.querySelectorAll('#info-in-pearl-jam p')[0].innerHTML = "Name: pearl-Jam";
document.querySelectorAll('#info-in-pearl-jam p')[1].innerHTML = "Genres: Grunge - Alternative Rock";
document.querySelectorAll('#info-in-pearl-jam p')[2].innerHTML = `To get more information, <a id="link-information" href = "https://pt.wikipedia.org/wiki/Pearl_Jam">click here</a>`;
document.querySelector('#info-in-pearl-jam a').target = "_blank";

const youtube1 = document.querySelectorAll('#box-in-links a')[0];
youtube1.innerHTML = "Alive";
youtube1.href = "https://www.youtube.com/watch?v=qM0zINtulhM";
youtube1.target = "_blank";

const youtube2 = document.querySelectorAll('#box-in-links a')[1];
youtube2.innerHTML = "Black";
youtube2.href = "https://www.youtube.com/watch?v=5ZH2it92ZmA";
youtube2.target = "_blank";

const youtube3 = document.querySelectorAll('#box-in-links a')[2];
youtube3.innerHTML = "Even Flow";
youtube3.href = "https://www.youtube.com/watch?v=CxKWTzr-k6s";
youtube3.target = "_blank";

const youtube4 = document.querySelectorAll('#box-in-links a')[3];
youtube4.innerHTML = "Crazy Mary";
youtube4.href = "https://www.youtube.com/watch?v=qsZl9RgueCw";
youtube4.target = "_blank";

const youtube5 = document.querySelectorAll('#box-in-links a')[4];
youtube5.innerHTML = "Jeremy";
youtube5.href = "https://www.youtube.com/watch?v=MS91knuzoOA";
youtube5.target = "_blank";