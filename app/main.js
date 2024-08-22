let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI) // a função async espera uma promessa e a promeça seria o await
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)

}

   /*
     código feito por mim hihi
     const titulos = document.querySelector('.teste')
     livros.forEach((element) => {
        titulos.innerHTML += `
        <ul>
            <li>
                <div><h2>${element.titulo}</h2>
                <img class="img-livro" src="${element.imagem}" alt="imagem livro">
                </div>
            </li>
        </ul>`
    });
   */ 


