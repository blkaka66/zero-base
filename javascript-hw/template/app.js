// do something!

window.addEventListener('DOMContentLoaded', (event) => { //렌더링이 끝나면 
    $('body').removeClass('preload'); //preload 클래스 제거해서 transition 동작
});


var isNavAct = localStorage.getItem('NavActive'); //만약 nav가 열린채로 페이지가 다시 로드됐다면
reloadNav();
function reloadNav(){
    if(isNavAct ==="true")
    {
        $('nav').addClass('active');//nav 활성화
    }
}



const toggleBtn = document.querySelector(".toggle.bx.bx-right-arrow-circle"); //토글 버튼 가져오기
toggleBtn.addEventListener("click",clickNav);//토글 버튼 눌렀을때 clickNav함수 실행

var NavActive=false; //네비게이션이 활성화되어야 하는지

if(isNavAct ===  "true") //만약 nav 열린채로 새로고침했으면 
{NavActive=true;} //navactive는 true

function clickNav ()
{
    
    NavActive = !NavActive; //눌릴때마다 navactive 상태 바뀜
    localStorage.setItem('NavActive', NavActive); //상태바뀔때마다 저장해야지 ㅇㅇ
    
    if(NavActive === true)//만약 NavActive true면
    {
        $('nav').addClass('active');// nav클래스 활성화
       
    }
    else{//만약 NavActive false면
        $('nav').removeClass('active');//nav클래스 비활성화
    }

   
}


