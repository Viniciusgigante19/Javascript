//evento de mouseOver

var title = document.querySelector("#title");

title.addEventListener("mouseover",function(){

this.style.backgroundColor = "green";

})

//mouse Out

title.addEventListener
("mouseout",function(){

this.style.backgroundColor = "lightgray";

})

//afetar os elementos com o mouse over

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover",function(){

    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");


})

subtitle.addEventListener("mouseout",function(){

    var legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");
    

})