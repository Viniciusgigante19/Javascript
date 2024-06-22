const objs = 
    [
        {  
            nome: "Gigante",
            idade: 19,
            esta_estudando:true,
            detalhes_profissão:{
            profissão: "Desenvolvedor",
            empresa:"mojang"
            },
        hobbies: ["programador","ler"]
        },
        {  
            nome: "vinicius",
            idade: 21,
            esta_trabalhando:false,
            detalhes_profissão:{
            profissão: null,
            empresa: null
            },
        hobbies: ["nadar","pedalar"]
        }
    ]
// imprimir esses valores em "console.log()" não é certo, conheça a maneira adequada.

//Json
// converter objeto para Json

const JsonData = JSON.stringify(objs)

console.log(JsonData)
console.log(typeof JsonData)

//converter Json para objeto

const objData = JSON.parse(JsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
});
