

//import axios from '../../../node_modules/axios/';

// function makeNews(){
//     const newsList = document.createElement("div");
//     newsList.classList.add("news-list-container");
//     document.body.appendChild(newsList);
// }

// gx53q11@naver.com

// dnjs120!

// function NewsList(){
// const category = "health";
// const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${5}&apiKey=${c200537b91234493ac99a0e5870abf36}`;

// axios.get(url)
//   .then(response => {
//     // API 호출이 성공한 경우
//     console.log("response.data.articles");
//     // 뉴스 데이터 처리
//   })
//   .catch(error => {
//     // API 호출이 실패한 경우
//     console.log(error);
//   });
// }

const baseUrl = "https://api.hnpwa.com/v0";

// html의 onClick 속성으로 menu값 할당한다.
const NewsList = (menu) => {
  let pagetop = document.querySelectorAll(".pagetop a");
 
  for (let item of pagetop) {
    if (menu.toLowerCase() === item.textContent.toLowerCase()) 
    
      api(menu);
  }
};

const api = (menu) => {
  axios
    .get(`${baseUrl}/${menu}/1.json`)
    .then(({ data }) => {
        

    })
    .catch((error) => {
        
      console.error(error);
    });
};



export default NewsList;