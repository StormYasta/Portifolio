var modal_1 = {
    nome: "MiskaTech",
    resumo:  "Site page-landing de uma empresa fictícia, utilizado para contato, criado utilizando somente HTML e CSS.",
    btn: "pages/miska/index.html",
    imagem: "source/images/miska_display.png",
}

var modal_2 = {
    nome: "Proffy",
    resumo:  'Aplicação criada durante a NLW #2, um evento oferecido pela Rocketseat e mestrado por Maiyk Brito e Diego Fernandes. Essa aplicação utiliza de HTML, CSS, JavaScript e NodeJS, para criar uma plataforma de cadastro e busca de professores, com filtro de: Dia, Horário e Materia.',
    btn: "https://miska-port.herokuapp.com",
    imagem: "source/images/proffy.png",
}

var element = document.getElementById("modal")

function modal1(){
    element.classList.add("on");

    document.getElementById("titulo").innerText = modal_1.nome
    document.getElementById("imagem").src = modal_1.imagem
    document.getElementById("resumo").innerText = modal_1.resumo
    document.getElementById("btn").href = modal_1.btn
}

function modal2(){
    element.classList.add("on");

    document.getElementById("titulo").innerText = modal_2.nome
    document.getElementById("imagem").src = modal_2.imagem
    document.getElementById("resumo").innerText = modal_2.resumo
    document.getElementById("btn").href = modal_2.btn
}

function closeM(){
    element.classList.remove("on")
}