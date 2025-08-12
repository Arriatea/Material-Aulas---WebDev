// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){//executa  a função ao iniciar
    mostrarPosts()
    document.querySelector("#postForm").addEventListener("submit", criarPost)//Previne que o formulario seja enviado antes de clicar em submit
}
//CREATE
function criarPost(infosDoEvento){
    infosDoEvento.preventDefault();//Não joga fora os dados

    // Pega o input dos usuarios 
    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;
    const dataPost = new Date().toLocaleString();

    const post = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    }

    posts.unshift(post)//Adiciona o post no inicio do array

    mostrarPosts ();
    
}


//READ
function mostrarPosts(){
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""

    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
        <p> ${pegaItem.text}</p>
        <img src = "${pegaItem.image}" style="max-width: 150px"> </img>
        <p> ${pegaItem.category}</p>
        <p>${pegaItem.data}</p>
        <button> Editar </button> 
        <button> Apagar </button>`
        
        listaPosts.append(cardPost)


}) 
}
//UPDATE
//DELETE






// Estrurutação de objetos:      
// const pessoa = {
//     nome: "Marco",
//     idade: 18,
//     cidade: "São Bernardo",
// }
// console.log(pessoa.cidade);
// console.log(pessoa[cidade]);