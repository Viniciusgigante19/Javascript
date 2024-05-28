// inserir elemento no body

var novoParagrafo = document.createElement("p");


var texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById('container');

var paragrafo = document.createElement("p");

var textoP = document.createTextNode("Um texto qualquer que fala coisas aleatórias")

container.appendChild(paragrafo);

paragrafo.appendChild(textoP)

console.log(container)
