// do something!

const body = document.getElementsByTagName("body")[0]; 

function visibleBody(body)//시작할때  visibilty hidden 없애기
{
    body.style.visibility="visible";
}
visibleBody(body);


window.addEventListener('DOMContentLoaded', (event) => { //렌더링이 끝나면 
    body.classList.remove('preload'); //preload 클래스 제거해서 transition 동작
});





var NavActive=false; //네비게이션이 활성화되어야 하는지
var nav = document.getElementsByTagName("nav")[0];
var isNavAct = localStorage.getItem('NavActive'); //만약 nav가 열린채로 페이지가 다시 로드됐다면

function reloadNav(isNavAct){
    if(isNavAct ==="true")
    {
        nav.classList.add('active'); //nav 활성화
      
        {NavActive=true;} //NavActive는 true
    }
}
reloadNav(isNavAct);


function pushToggle(){
    const toggleBtn = document.getElementsByTagName("i")[0]; //토글 버튼 가져오기
    toggleBtn.addEventListener("click",clickNav);//토글 버튼 눌렀을때 clickNav함수 실행
}
pushToggle();



function clickNav ()
{
    
    NavActive = !NavActive; //눌릴때마다 navactive 상태 바뀜
    
    localStorage.setItem('NavActive', NavActive); //상태바뀔때마다 영속적으로 저장해야지 ㅇㅇ
    
    isNavActive(NavActive);

   
}

function isNavActive()
{
    if(NavActive === true)//만약 NavActive true면
    {
        nav.classList.add('active');// nav클래스 활성화
       
    }
    else{//만약 NavActive false면
        nav.classList.remove('active');//nav클래스 비활성화
    }

}
