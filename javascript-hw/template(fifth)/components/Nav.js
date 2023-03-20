// do something!
const categories = [
    { id: "all", name: "전체보기", active: true },
    { id: "business", name: "비즈니스" , active: false},
    { id: "entertainment", name: "엔터테인먼트", active: false },
    { id: "health", name: "건강" , active: false},
    { id: "science", name: "과학", active: false },
    { id: "sports", name: "스포츠", active: false },
    { id: "technology", name: "기술" , active: false},
  ];


function Nav(){
    const list = document.createElement("nav");
    list.classList.add("category-list");

    const ul = document.createElement("ul");

    

    categories.forEach((category) => {
        let li = document.createElement("li");
        li.id = category.id;
        li.innerHTML= category.name;
        
        li.classList.add("category-item");

        li.addEventListener("click",function(){
            click(category,li,categories,ul.childNodes);
        });


        if(category.active === true){
            li.classList.add("active");
        }

        

        ul.appendChild(li);

        
    });

    

    list.appendChild(ul);
    document.body.appendChild(list);
}

function click(category,li,categories,children){
    category.active = !category.active;
    li.classList.add("active");
    let target=null;
    categories.forEach((category) =>{ //acitve는 1개여야만 한다
        if(li.id !== category.id){
            category.active= false;
        }
        else{
             target = li.id; //얘 뺴고 전부 active 제거해야함
        }

    });


    children.forEach((child)=>{
        if(target != child.id)
        {
            child.classList.remove("active"); //target뺴고 active 싹다제거
        }
    });
  

}
export default Nav;