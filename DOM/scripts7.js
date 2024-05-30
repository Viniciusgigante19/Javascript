// criar elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Este é um texto de poucas palavras");

el.appendChild(texto);

console.log(el);

// selecionar o  elemento que vai ser trocado;

var title = document.querySelector("#title");

console.log(title);

// selecionar o pai do el;

var pai = title.parentNode;
// Este código é o equivalente a:
//var body = document.querySelector("body");

pai.replaceChild(el,title);




