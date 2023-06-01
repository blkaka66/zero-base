//node() :data와 point 갖고있는 객체
function Node(data){
    this.data = data;
    this.next =null;

}

//lindedlist(): head와 length갖고있는 객체
function LinkedList(){
    this.head=null;
    this.length=0;
}

//size(): 연결 리스트 내 노드 개수확인
LinkedList.prototype.size=function(){
    return this.length;
};

//isEmpty():객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function(){
    return this.length === 0;
};

//printNode() :노드 출력
LinkedList.prototype.printNode = function(){
    for(let node = this.head; node != null; node=node.next){//let node = 첫번째 head, node가 null이 아닐때까지(링크드 리스트의 끝까지 돌기),사실상 node++(다음 node로 가라)
        process.stdout.write(`${node.data} -> `);// console.log는 한줄씩띄워서 출력되는데 process.stdout.write 쓰면 옆으로 출력됨,`${node.data} -> `의 의미:node.data 출력하고 ->로 구분하자.
    }
    console.log("null");//맨끝엔 무조건 null이니까 콘솔로 찍자
};

//append(): 연결 리스트 끝에 노드 추가
LinkedList.prototype.append = function(value){ // value에 값 매개변수로 받기
    let node = new Node(value); // 새 노드 만들어서 data에 value 집어넣기
    let current = this.head;//current란 변수는 처음에 head(시작점)가리킴

    if(this.head === null){//만약 head밖에 없다면(아직 node 하나도 안만들었으면)
        this.head = node;//head가 첫번째 노드 가리켜라
    } else{//head가 이미 node 가리키고 있다면
        while(current.next != null){ // current가 가리키고 있는 노드가 맨끝 노드에 닿을때까지 (맨끝 노드의 next는 null 가리키니까)
            current = current.next;//current는 다음 노드 가리켜라
        }//만약 cuurent가 가리키고 있는 노드가 맨 끝 노드라면
        current.next = node;//그 노드의 next는 새 노드 가리켜라
    }
    this.length++;//새 노드 만들었으니 length 하나 늘리기
};

//insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function(value , position =0){//value(넣을 값)랑 position(어디에 끼워넣을건지)만약 position에 숫자 없으면 0으로 고정
    if(position < 0 || position >this.length){ //position이 음수거나 length보다 크면 말도 안되는 값이므로
        return false; //실패했다고 말하기
    }
    let node = new Node(value);
    let current = this.head; //노드 순회하면서 들어갈 node의 위치찾는데 쓰임
    let index = 0; //내가 현재 어디에 위치했는지
    let prev=0; //이전 노드값 저장

    if (position ===0){//만약 position이 0이면
        node.next=current;//새 노드의 next는 원래 있던 첫번째 노드를 가리키고
        this.head = node;//head(시작점)는 새 노드 가리키기(새치기하기)
    }
    else{//position이 0 아니면
        while(index < position){ // index가 postion이랑 같아질때까지
            index++; //index++하고
            prev =current; //current가 가리키고 있는 현재노드는 prev에 덮어씌우고 
            current = current.next;//current는 다음 노드 가리키기
        }
        node.next =current; //끼워넣을 node의 next는 그 다음 노드 가리키고
        prev.next =node;//이전 노드 prev는 새치기한 노드 가리키기
    }
    this.length++; //길이추가

    return true;//성공했다고 말하기
};

//remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function(value) {//value랑 노드 데이터 같으면 그 노드 삭제
    let current = this.head; //current는 현재 가라키는 노드
    let prev = current;//prev는 current의 한칸 전 노드

    while(current.data != value && current.next != null) {//현재 노드 데이터가 value 아니거나, 현재 노드 맨끝 노드 아니면 계속 찾아보기
        prev =current;//current가 가리키고 있는 현재노드는 prev에 덮어씌우고 
        current=current.next;//current는 다음 노드 가리키기
    }//현재 노드의 데이터가 value와 같거나, 현재 노드가 맨 끝 노드면 while문 중단
    if(current.data != value){ //맨끝 노드까지 왔는데 값을 못찾았으면
        return null; // 니가 찾는 값은 없다고 null 반환
    }
    if(current === this.head){ //만약 값을 찾았는데 그게 첫번쨰 노드의 data면
        this.head = current.next; //head를 두번째 노드에 연결(이러면 첫번째 노드는 증발해버림)
    }
    else{//만약 값을 찾았는데 그게 중간이나 맨 끝 노드의 data면
        prev.next = current.next;//그 전 노드를 다다음 노드에 연결(중간 노드는 증발해버림) (맨끝노드였으면 null에 연결됨)
    }
    this. length--;
    return current.data;
};

//removeAt(): position 위치 노드 삭제
LinkedList.prototype.removeAt = function(position = 0){//position에 아무것도 안넣으면 고정값 0
    if(position<0 || position>= this. length){//만약 position음수거나 length랑 같거나 크면 말안되는 값이므로
        return null;//실패 했다고 null 반환
    }
    let current = this.head; //현재 가리키고 있는 노드
    let index=0;//index
    let prev =0;//한칸 전 노드
    
    if(position === 0){//position 0이면
        this.head = current.next; //head는 두번째 노드 가리키기
    }else{//position 0 아니면.
        while(index < position){ //index가 position이랑 같아질때까지
            index++;//index++하고
            prev = current;//current가 가리키고 있는 현재노드는 prev에 덮어씌우고 
            current = current.next;//current는 다음 노드 가리키기
        }//index랑 position 같아지면
        prev.next = current.next;//한 칸 전노드랑 다다음 노드랑 연결 (중간 노드는 증발해버림)
    }
    this.length--;

    return current.data;
};

//indexOf(): value값 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function (value){
    let current = this.head;
    let index=0;

    while(current != null){ //null이 아닐동안 돌아라
        if(current.data === value){//value 값 찾았으면
            return index;//index 반환
        }

        index++;//못찾았으면 index++
        current = current.next;//current는 다음 노드 가리키기
    }//노드 죄다 돌았는데 못찾았으면(null이면)
    return -1;//-1반환해서 실패를 알림
};


let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);

ll.insert(2,1);
ll.insert(3,3);
ll.insert(4,5);

ll.printNode();

console.log(ll.removeAt());
ll.printNode();

console.log(ll.indexOf(10));