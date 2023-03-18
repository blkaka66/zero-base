//원형연결리스트는 헤드가 따로있는게 아니라 첫 노드가 헤드다. 그리고 맨 끝노드.next는 헤드인 첫 노드를 가리킨다
//Node()
function Node(data){
    this.data = data;
    this.next = null;
};

function CircularLinkedList(){
    this.head = null;
    this.length= 0;
};

CircularLinkedList.prototype.size = function(){
    return this.length;
};

CircularLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
};
CircularLinkedList.prototype.printNode = function(){
    process.stdout.write("head ->");//일단 헤드표시하고
    if(this.length !=0){//length가 1이상일때만 
        process.stdout.write(`${this.head.data} ->`);//일단 맨처음 head가 가리키는 첫번째 노드의 data출력
        for(let node = this.head.next; node!=this.head; node = node.next){//그다음 두번째 노드 data부터 출력 (종료조건이 node가 한바퀴 다 돌고 this.head 만날때 종료인데 첫번째 노드부터 시작하면 시작하자마자 끝나기때문에 두번쨰 노드부터 시작하게함)
            process.stdout.write(`${node.data} ->`);
        }
    }
    console.log("null");
}

CircularLinkedList.prototype.append = function(value){
    let node = new Node(value);
    let current = this.head;

    if(this.head === null){
        this.head =node;
    }else{
        while(current.next != this.head){
            current =current.next;

        }
        current.next =node;
    }

    node.next = this.head;
    this.length++;

};
CircularLinkedList.prototype.insert = function(value,position =0){
    if(position <0 || position>this.length){//포지션 터무니없으면
        return false; //false리턴
    }
    let node = new Node(value);
    let current = this.head;
    let index=0;
    let prev =null;

    if(position === 0){//노드를 맨처음에 추가할때
        node.next = current; //새 노드 -> 기존 첫 노드 연결 

        if(this.isEmpty()){//노드가 한개도없으면
            current=node;//헤드는 첫 노드가 되게(원형연결리스트는 헤드가 따로 있지않고 첫노드다)(노드가 1개이므로 첫노드이자 맨끛노드임)
        }
        else{//노드가 한개 이상 있으면
            while(current.next != this.head){//일단 맨끝노드 찾는다
                current = current.next;//current에 맨 끝노드 저장
            }
        }//맨끝노드 찾았으면
        this.head=node;//새 노드에게 헤드자격 부여
        current.next=this.head;//맨끝 노드.next는 이제 새노드(헤드)를 가리킴
    }else{//position이 중간이면
        while(index<position){//current에 입력한 position의 노드찾는다
            index++;
            prev =current;//prev엔 position 한칸 전 노드 저장
            current=current.next;//current엔 position 한칸 뒤 노드 저장
        }
        node.next =current;//새 노드 다음엔 current
        prev.next =node;//새노드 한칸전엔 prev

        if(node.next === null){//만약 맨끝에 노드 저장해야하면
            node.next =this.head;//새노드는 마지막 노드이므로 헤드에 연결해야함
        }
    }
    this.length++;

    return true;
};

CircularLinkedList.prototype.remove = function(value){
    let current = this.head;
    let prev = current;
    let data=0;
    while(current.data != value && current.next != this.head){//처음부터 끝노드 중 같은 data 있는지 찾아보기
        prev = current; //prev는 이전노드
        current= current.next;//current는 이후노드
    }
    if(current.data != value){//만약 끝노드까지 봤는데 data같은게 없으면
        return null;//거기 없으면 없는거에용
    }
    data = current.data;//data같은게 있으면 data에 저장
    if(current === this.head){//그게 첫번째 노드면
        while(current.next != this.head){//일단 맨 끝노드 찾기
            current= current.next;//맨끝노드 current에 저장
        }
        this.head = this.head.next;//두번째노드가 헤드로 승격
        current.next = this.head;//맨끝노드는 이제 기존 두번째 노드에 연결
    }
    else{//그게 중간노드면
        prev.next = current.next;//이전노드랑 다다음노드에 연결해서 중간노드 증발
    }
    this.length--;

    return data;
};

CircularLinkedList.prototype.removeAt = function(position = 0){
    if(position <0 || position>=this.length){
        return null;
    }
    let current = this.head;
    let index =0;
    let prev=null;
    let data =0;

    if(position === 0){//첫 노드면
        data = current.data; 

        while(current.next != this.head){
            current = current.next;//맨끝노드 current에 가져오기
        }

        this.head = this.head.next;//기존 둘째노드 헤드로 승격(기존 첫노드 증발)
        current.next =this.head;//맨끝노드랑 기존 둘쨰노드 연결
    }
    else{//첫노드아니면
        while(index < position){
            index++;
            prev = current;
            current=current.next;
        }
        data = current.data;
        prev.next = current.next;//한칸 전 노드랑 다음 노드 연결 (중간노드 증발)
    }
    this.length--;
    return data;

};

CircularLinkedList.prototype.indexOf = function(value){
    let current = this.head;
    let index =0;

    do{//맨 첫 노드의 data 비교하기위해 do while 씀
        if (current.data === value){ //data찾는거 같으면
        return index;//index 리턴
    }
    index++;//다르면 ++하고 계속찾기
    current = current.next;

    }while(current != this.head);//이 조건이 맨 첨부터있으면 시작과 동시에 끝나니까
    return -1;//못찾으면 -1 리턴
    
};


let cll = new CircularLinkedList();
cll.append(1);
cll.append(2);
cll.append(3);




cll.insert(4,3);
cll.insert(5,4);
cll.insert(6,5);

cll.printNode();

cll.removeAt(4);


cll.printNode();