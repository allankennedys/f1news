
function getNews(){
    fetch('https://newsapi.org/v2/everything?q=f1&language=pt&apiKey=81744279e9d247f68fa29c098eb868f3')
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");        }
        else{
            return response.json();
        }
    })
    .then(data => {
        console.log(data);

    const newsArea = document.getElementById('newsArea');
    const articles = data.articles;
    
    for(i=0; i<articles.length; i++){

        const newsContainer = document.createElement('div');

        const titulo = document.createElement('h1');
        const autor = document.createElement('p');
        const descricao = document.createElement('h5');
        const data = document.createElement('p');
        const link = document.createElement('a');
        
        newsArea.appendChild(newsContainer);


        titulo.innerHTML = articles[i].title;
        autor.innerHTML = `Por ${articles[i].author}`;
        data.innerHTML = `Publicado em ${articles[i].publishedAt}`;
        descricao.innerHTML = articles[i].description;
        link.innerHTML = 'Leia mais';
        link.href = articles[i].url;
        link.target = '_blank';

        newsContainer.appendChild(titulo);
        newsContainer.appendChild(autor);
        newsContainer.appendChild(data);
        newsContainer.appendChild(descricao);
        newsContainer.appendChild(link);


}})
    .catch(error => {
        console.log(error);
        newsArea.innerHTML = 'Devido às limitações do plano gratuito da API utilizada para fornecer as notícias, o acesso às notícias em produção não é permitido diretamente via GitHub Pages. Para visualizar as notícias mais recentes, é necessário rodar o projeto localmente em sua máquina.';
    })
}

getNews();