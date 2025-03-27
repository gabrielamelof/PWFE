// Funções: é um bloco de código que tem como preocupação a reutilização deste. 
// A ideia principal, é fazer valer a modularidade e a simplicidade das características de um algoritmo 
// function NomeFuncao (atributos) {} script que será usado
// cleanCode: código limpo - Não repetir códigos / as variáveis e funções devem ter nomes apropriados para o uso / os espaçamentos devem seguir as boas práticas e trazer a documentação necesária para ser manutenível

function saudar(){
    alert("Olá, lindo dia para nós!")
}

// soma de dois valores 
function soma(a,b){
    return a + b;
}

function somarVarios(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d
}

function converterMaiusculo(texto){
    return texto.toUpperCase();
}

function qtdCaractere(texto){
    return texto.length;
}

// limpa espaços finais e iniciais
function limparEspacos(frase){
    return frase.trim();
}

//para fazer uma função ser executada, é preciso chamá-la
saudar()

//chamando a função soma
let resultado = soma(10,20)
document.write(`<p> ${resultado}`)


//chamando a função soma
let resultadoVarios = somarVarios(20, 30, 40)
document.write(`<p> ${resultadoVarios}`)

let frase = prompt("Informe uma frase: ")
let fraseGrande = converterMaiusculo(frase)
document.write(`<p> Frase maiúscula: ${fraseGrande}`)

let qtdeCaractere = qtdCaractere(frase)
document.write(`<p> Quantidade de caracteres: ${qtdeCaractere}`)

let limpo = limparEspacos(frase)
document.write(`<p> Texto limpo: ${limpo}`)

let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color = 'blue';

let corpo = window.document.body;
corpo.style.background = "beige";


// mudar a cor de uma div
function mudarCor(){
    let div = document.getElementById("minhaDiv");

    if(div.style.backgroundColor == "purple"){
        div.style.backgroundColor = "green"

    }
    else{
        div.style.backgroundColor = "purple"
    }
}