/* 
    1) Lógica de Programação 
        Saber a sequencia que o computador/projeto
        quer que você execute as coisas

    2) Algoritmo
        Receita de bolo, passo a passo, para que o computador entenda o que você quer que ele faça


    ALGOROITMO 1
    [x] Saber quem é quem (imagem, botão...)
    [x] Saber que o botão foi clicado (qual botão)
    [x] Trocar a foto e o nome do personagem
    
    ALGORITMO 2
    [ ] Pegar a imagem do usuario
    [ ] Enviar para a IA imagem + o que eu quero que ela faça
    [ ] Receber a imagem da IA
    [ ] Colocar a imagem no site
    



    3) Variaveis
        - É um pedacinho da memória do computador que você pode guardar alguma coisa
        - Exemplo: 
            let nome = "Lucia"
            let idade = 15
            let altura = 1.60
            let peso = 50
    4) Funções
        É um pedacinho de código que SÓ EXECUTA QUANDO VOCÊ CHAMA ELA

    HTML = document
    querySelector = selecionar ALGO no HTML
    ( ) = entre parenteses você coloca o que você quer selecionar
    Quem ? Classe = .nomeDaClasse
    console.log() = mostrar no console do navegador
    innerHTML = colocar algo dentro do HTML

    1)criar uma variavel para guardar o que eu quero
    2)ir no HTML ( com o document)
    3) Selecionar quem eu quero com o querySelector
    4) Colocar entre parenteses quem eu quero selecionar (classe)

*/

let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

// () = Capsula teletransportadora

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor){

    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = cor
    // innerHTML = colocar algo dentro do HTML
    // src = colocar algo dentro do src da imagem
}



