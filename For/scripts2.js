
/* PRATICAR!!!*/


var lista = ['Laranja','Maçã','Pera','Jaca','Limão']

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('Body');

console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for (var i = 0; i< lista.length;i++){
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    console.log(liFor);

    listaNoBody[0].appendChild(liFor);
}