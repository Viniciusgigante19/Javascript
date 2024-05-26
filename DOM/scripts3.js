// seleionar elemento

 var title = document.querySelector('#title');

 console.log(title);

 // THERE ARE TWO WAYS TO CHANGE HTML ITEM

 // way one ; innerHTML

 // way two ; textContent -> mais ultilizado , recomendado e perfomático.

title.innerHTML = "Testando o texto alterado!";

var subTitle = document.querySelector(".subtitle");

subTitle.textContent = "Outro teste"



