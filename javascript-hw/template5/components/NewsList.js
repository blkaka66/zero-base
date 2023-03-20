

// gx53q11@naver.com

// dnjs120!

async function NewsList(){

const category = "health";
const page =1;
const apikey = "c200537b91234493ac99a0e5870abf36";
const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${5}&apiKey=${apikey}`;

await axios.get(url)
  .then(response => {
    // API 호출이 성공한 경우
    const newsListContainer = document.createElement("div");
    newsListContainer.classList.add("news-list-container");
    
    const articles = response.data.articles; // API에서 받아온 데이터
    console.log(articles);
    articles.forEach(article => {
      const newsList = document.createElement("article");
      newsList.classList.add("news-list");
    
      const newsItem = document.createElement("section");
      newsItem.classList.add("news-item");
    
      const thumbnail = document.createElement("div");
      thumbnail.classList.add("thumbnail");
    
      const link = document.createElement("a");
      link.href = article.url; // API에서 받아온 링크 정보
    
      const img = document.createElement("img");
      img.src = article.urlToImage; // API에서 받아온 이미지 정보
 
      if(img.src.includes("null")){
        img.src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
      }
    
      const contents = document.createElement("div");
      contents.classList.add("contents");
    
      const title = document.createElement("h2");
      const titleLink = document.createElement("a");
      titleLink.href = article.url; // API에서 받아온 링크 정보
      titleLink.textContent = article.title; // API에서 받아온 제목 정보
      title.appendChild(titleLink);
    
      const description = document.createElement("p");
      description.textContent = article.description; // API에서 받아온 요약 정보
      if(article.description === null){
        description.textContent="";
      }
      

      newsListContainer.appendChild(newsList);
      newsList.appendChild(newsItem);
      newsItem.appendChild(thumbnail);
      thumbnail.appendChild(link);
      link.appendChild(img);
      newsItem.appendChild(contents);
      contents.appendChild(title);
      contents.appendChild(description);
    });
    
    document.body.appendChild(newsListContainer);
    
    // 뉴스 데이터 처리
  })
  .catch(error => {
    // API 호출이 실패한 경우
    console.log(error);
  });
}




export default NewsList;