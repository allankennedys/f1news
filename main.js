
 function formatarDataBR(dataISO) {
  const data = new Date(dataISO);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}


const dataOriginal = "2023-10-05T14:30:00Z";
const dataFormatada = formatarDataBR(dataOriginal);
console.log(dataFormatada);


function getNews(){

    fetch('https://gnewsf1.vercel.app/api.news')
    .then(response => response.json())
    .then(data => {
        console.log(data);

    const newsArea = document.getElementById('newsArea');
    const articles = data.articles;
    
    
    for(let i=0; i<articles.length; i++){

        const newsContainer = document.createElement('div');

        const titulo = document.createElement('h2');
        const autor = document.createElement('p');
        const descricao = document.createElement('h5');
        const dataPub = document.createElement('p');
        const link = document.createElement('a');
        const image = document.createElement('img');
        const btn = document.createElement('a');
        
        newsArea.appendChild(newsContainer);
        image.classList.add('newsImage');
        
        const dataPublicacao = formatarDataBR(articles[i].publishedAt);




        titulo.innerHTML = articles[i].title;
        autor.innerHTML = `Por ${articles[i].source.name}`;
        dataPub.innerHTML = `Publicado em ${dataPublicacao}`;
        descricao.innerHTML = articles[i].description;
        btn.innerHTML = 'Leia mais';
        link.href = articles[i].url;
        link.target = '_blank';
        image.src = articles[i].image;
        btn.setAttribute('href', articles[i].url);
        btn.classList.add('btn');
        link.classList.add('newsTitle');
        
        newsContainer.appendChild(link);
        link.appendChild(titulo);
        newsContainer.appendChild(image);
        newsContainer.appendChild(autor);
        newsContainer.appendChild(dataPub);
        newsContainer.appendChild(descricao);
        newsContainer.appendChild(btn);

        newsContainer.classList.add('newsContainer');
        

}})
    .catch(error => {
        console.log(error);
        newsArea.innerHTML = 'Devido às limitações do plano gratuito da API utilizada para fornecer as notícias, o acesso às notícias em produção não é permitido diretamente via GitHub Pages. Para visualizar as notícias mais recentes, é necessário rodar o projeto localmente em sua máquina.';
    })
}

getNews();