function scrolObserver(entries) {//interscrion api 콜백함수(scrollObserver div랑 뷰포트 교차하면 실행)
  entries.forEach(entry => {//entries에는 api가 감시중인 객체 배열이 있고 그중 하나라도 뷰포트와 교차하면 scrolObserver 실행
    
    if (entry.isIntersecting) {//만약 교차하묜
      page++; // 뷰포트와 교차하면 page 값을 1 증가시킴
      console.log(page)
      
      NewsList();
    }
  });
}

const options = {//옵션객체
  root: null,//null이면 뷰포트가 관찰대상
  rootMargin: "0px",//뷰포트랑 관찰대상 간의 간격
  threshold: 0.5
};




const scrollObserver = document.createElement("div");
function makeScroll(){
  
  scrollObserver.classList.add("scroll-observer");

  const img = document.createElement("img");
  img.src="img/ball-triangle.svg";

  scrollObserver.appendChild(img);

  root.appendChild(scrollObserver);

  const observer = new IntersectionObserver(scrolObserver, options);
  observer.observe(scrollObserver);
}


// gx53q11@naver.com

// dnjs120!
export const category = new Proxy({ id: "all" }, {
  set: function(target, prop, value) {
    target[prop] = value;
    const removeContainer = document.getElementsByClassName("news-list-container");
      while (removeContainer[0]) {
        removeContainer[0].parentNode.removeChild(removeContainer[0]);
      } 
    scrollObserver.remove(); 
    NewsList(); 
    return true;
  }
});


let page =1;

const root = document.getElementById("root");
//let category = "";
async function NewsList(){
  console.log(document.body);
  console.log(category.id+"^^^^^^^^");
 
const apikey = "fdd5def9655b496980755b94ccfe31e9";
const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category.id === 'all' ? '' : category.id}&page=${page}&pageSize=${5}&apiKey=${apikey}`;

try{
const response = await axios.get(url);
     
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
    root.appendChild(newsListContainer);
    
    makeScroll();
    
    // 뉴스 데이터 처리
  }
  catch(error) {
    // API 호출이 실패한 경우
    console.log(error);
  }


}


export default NewsList;