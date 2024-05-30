//  irei adicionar uma class no titulo h1 id title

var title = document.querySelector("#title");

title.setAttribute("class","testando-atributo");

console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disable","disabled");

var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id","titulo-2");

//agora vou remover atributo

var lista = document.querySelector("#lista");

lista.removeAttribute("id");