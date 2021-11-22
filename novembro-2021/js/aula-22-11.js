function fillHeader() {
    document.querySelector('#titles-in-fixed-navbar img').src = "../images/aula-22-11/sloth1.png";
    document.querySelector('#titles-in-fixed-navbar h1').innerHTML = "Bicho-Preguiça(Sloth)";
    document.querySelector('#titles-in-fixed-navbar a').innerHTML = "Home";
    document.querySelector('#titles-in-fixed-navbar a').href = "#first-page";
}

function fillMain() {
    document.querySelectorAll('#box-in-first-page p')[0].innerHTML = "Folivora é uma subordem de mamíferos,"
        + " da ordem Pilosa, cujas espécies são conhecidas popularmente por preguiça, bicho-preguiça, aí,"
        + " aígue e cabeluda.";
    document.querySelectorAll('#box-in-first-page p')[1].innerHTML = "São mamíferos arborícolas e "
        + "estão divididos em dois gêneros, Bradypus e Choloepus. Representam a superordem Xenarthra, "
        + "juntamente com os tamanduás e tatus (dasipodídeos; clamiforídeos).";
    document.querySelectorAll('#box-in-first-page p')[2].innerHTML = "Todos os dedos têm garras longas"
        + " pelas quais a preguiça se pendura aos galhos das árvores, com o dorso para baixo. Seu nome "
        + "advém do metabolismo muito lento do seu organismo, responsável pelos seus movimentos "
        + "extremamente lentos. É um animal de pelos longos, que vive na copa das árvores de florestas "
        + "tropicais desde a América Central até o norte da Argentina. Na Mata Atlântica, o animal se "
        + "alimenta dos frutos da Cecropia (a embaúba, conhecida, por isto, como árvore-da-preguiça).";
    document.querySelectorAll('#box-in-first-page p')[3].innerHTML = "De hábitos solitários, a preguiça "
        + "tem, como defesa, sua camuflagem e suas garras. Para se alimentar, a preguiça utiliza-se de "
        + "dentes que se apresentam em forma de uma pequena serra. Herbívoro, tem hábitos alimentares "
        + "restritos, o que torna difícil sua manutenção em cativeiro, além disso o bicho-preguiça é um "
        + "dos poucos mamíferos que vive sem precisar de água, isso porque a quantidade necessária do "
        + "líquido para a sua sobrevivência é absorvida dos alimentos (raízes, folhas e frutos de algumas "
        + "árvores, como da embaúba, figueira, ingazeira e tararanga). Dorme cerca de catorze horas por "
        + "dia, também pendurada nas árvores. Na reprodução, dá apenas uma cria. Apenas a fêmea cuida "
        + "do filhote. Reproduz-se, como tudo que faz, na copa das árvores. Raramente desce ao chão, "
        + "apenas aproximadamente a cada sete dias para fazer as suas necessidades fisiológicas. O seu "
        + "principal predador é a onça-pintada."


    document.querySelectorAll('#box-in-second-page h2')[0].innerHTML = "Status de Conservação";
    document.querySelector('#box-in-second-page p').innerHTML = "Atualmente, o principal predador desses "
        + "animais é mesmo o homem, que as comercializa em feiras livres e nas margens de rodovias. A "
        + "ação do homem sobre esses animais tem sido muito facilitada, nos últimos tempos, pela "
        + "acelerada fragmentação e destruição das matas, o que leva as preguiças a se locomoverem "
        + "desajeitadamente pela superfície do solo, de uma ilha de mata para outra, em busca de "
        + "sobrevivência, ficando totalmente expostas à caça e à captura."
        + "A preguiça - de - três - dedos é muito procurada como animal de estimação.Contudo, seu "
        + "metabolismo lento e adaptado as condições de vida na floresta mostra - se extremamente "
        + "vulnerável a doenças, causando uma alta mortalidade entre animais em cativeiro. Graças ao seu "
        + "temperamento agressivo e a seus caninos afiados, a preguiça - de - dois - dedos não é "
        + "valorizada como bicho de estimação. Devido a seu habitat limitado à copa das árvores, e a "
        + "seus hábitos alimentares especializados, a preguiça é muito afetada pela diminuição das "
        + "florestas tropicais.Estima - se que venha a ser espécie ameaçada em futuro próximo. No Brasil, "
        + "ocorrem todas as espécies de preguiças de três dedos, estando o B.torquatus restrito à Mata "
        + "Atlântica.";

    document.querySelectorAll('#box-in-second-page h2')[1].innerHTML = "Referências"
    let link1 = document.querySelectorAll('#box-in-second-page a')[0];
    link1.innerHTML = "https://pt.wikipedia.org/wiki/Folivora";
    link1.href = "https://pt.wikipedia.org/wiki/Folivora";
    link1.target = "_blank";
    let link2 = document.querySelectorAll('#box-in-second-page a')[1];
    link2.innerHTML = "https://www.biologianet.com/biodiversidade/bicho-preguica.htm";
    link2.href = "https://www.biologianet.com/biodiversidade/bicho-preguica.htm";
    link2.target = "_blank";
    let link3 = document.querySelectorAll('#box-in-second-page a')[2];
    link3.innerHTML = "https://www.worldwildlife.org/species/sloth";
    link3.href = "https://www.worldwildlife.org/species/sloth";
    link3.target = "_blank";
}

fillHeader();
fillMain();



