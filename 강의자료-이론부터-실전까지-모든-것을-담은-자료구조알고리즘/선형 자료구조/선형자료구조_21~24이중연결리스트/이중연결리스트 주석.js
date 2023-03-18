//Node()
function Node(data){
    this.data = data;
    this.next = null;
    this.prev = null;
};

function DoubleLinkedList(){
    this.head = null;
    this.tail = null;
    this.length= 0;
};

DoubleLinkedList.prototype.size = function(){
    return this.length;
};

DoubleLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
};

DoubleLinkedList.prototype.printNode = function(){
    process.stdout.write("head ->"); 
    for(let node = this.head; node != null; node= node.next){
        process.stdout.write(`${node.data} ->`);
    }
    console.log("null");
};

DoubleLinkedList.prototype.printNodeInverse = function(){
    let temp = []; //temp에 끝에서부터 data 저장해서 

    process.stdout.write("null <- ");

    for(let node = this.tail; node != null; node= node.prev){
        temp.push(node.data);//끝 노드 data부터 저장하기 
    }

    for(let i = temp.length-1; i>=0; i--){
        process.stdout.write(`${temp[i]} <- `); //temp 끝에서부터 읽기
    }
    console.log("tail");
};

DoubleLinkedList.prototype.append = function(value){
    let node = new Node(value);

    if(this.head === null){//만약 노드 하나도없다면
        this.head = node;
        this.tail = node; //tail에도 node붙이기
    }else{//노드 이미 있으면
        this.tail.next = node; //기존 맨끝 노드랑 새노드 연결
        node.prev = this.tail;//새 노드 prev(한칸 전 노드)는 기존 맨끝노드 
        this.tail=node;//이제 맨 끝 노드는 새로 만든 노드
    }
    this.length++;
};

DoubleLinkedList.prototype.insert = function(value, position = 0){//positon값 없으면 0이 기본값
    if(position<0 || position >this.length){ //포지션이 음수거나 length보다 크면 말도안되는 값이므로
        return false;//실패반환
    }
    let node = new Node(value);
    let current =this.head;
    let index=0;
    let prev =0;

    if(position === 0 ){//새 노드가 첫번째로 끼워질때
        if(this.head === null){//현재 node가 하나도 없으면
            this.head= node;//head에 node연결
            this.tail= node;//tail에 node연결
        }
        else{//노드가 이미 있으면
            node.next =current;//this.head가 가리키는 기존 첫번째 노드와 새치기할 노드 연결
            current.prev =node;//기존 노드의 이전 노드가 새로운 노드
            this.head= node;//head는 새 노드가리킴
        }
        
    }
    else if(position === this.length){//새 노드가 맨 끝에 끼워질때
        current = this.tail;//일단 기존 맨끝노드 저장해두고
        current.next = node;//기존 맨끝노드랑 새노드 연결
        node.prev = current;//새 노드의 이전노드가 기존 맨끝노드
        this.tail = node;//새 노드가 이제 맨 끝노드
    }
    else{//새 노드가 맨 첨과 맨 끝이아닌 중간에 끼워질때
        while(index<position){//index랑 position같아질때까지
            index++;//더하고
            prev=current;//prev에 기존 노드 저장
            current =current.next;//current는 한칸더가기
        }
        //index랑 position 같아지면
        node.next = current;//기존 노드 와 새 노드 연결
        prev.next=node;//기존 노드의 한칸 전 노드와 새 노드 연결

        current.prev =node;//기존 노드의 이전 노드는 이제 새 노드
        node.prev = prev;//기존노드의 한칸 전 노드는 이제 새 노드의 한칸전노드

    }
    this.length++;
    return true;
};

DoubleLinkedList.prototype.removeAt = function(position = 0 ){
    if(position<0 || position >=this.length){ //포지션이 음수거나 length보다 크면 말도안되는 값이므로
        return false;//실패반환
    }

    let current =this.head;
    let index=0;
    let prev=0;

    if(position === 0){//첫 노드 삭제해야 하면
        this.head= current.next;//첫노드의 next인 두번째 노드랑 head를 연결해서 첫노드를 없애버림
        if(this.length ===1){//노드가 1개만있을때
            this.tail = null;//tail은 null가리킴
        }
        else{//노드 1개 이상이면
            this.head.prev= null;//head의 prev는 null임
        }
    }
    else if(position === this.length-1){//맨끝노드 삭제해야하면
        current = this.tail;//기존 맨끝노드 저장
        this.tail = current.prev;//기존 맨끝에서 한칸 전 노드랑 tail연결해서 기존 맨끝노드 증발
        this.tail.next = null;//tail.next는 null
    }
    else{
        while(index<position){//이건뭐똑같고
            index++;
            prev =current;
            current =current.next;
        }
        prev.next = current.next;//current의 한칸 다음노드와 current의 한칸전 노드연결해서 current가 가리키는 노드 증발
        current.next.prev= prev;//current의 한칸 다음노드와 current의 한칸전 노드연결
    }
    this.length--;
    return current.data;
};

DoubleLinkedList.prototype.indexOf = function(value){
    let current = this.head;
    let index=0;

    while(current != null){ //끝까지 돌아라
        if(current.data ===value){//data가 value랑같으면
            return index;//index반환
        }
        index++;//안같으면 계속 도는거야
        current = current.next;//계속
    }
    return -1;//못찾으면 -1반환
}

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode();
dll.printNodeInverse();

dll.insert(2,1);
dll.insert(3,3);

dll.printNode();
dll.printNodeInverse();

dll.removeAt(3);
dll.removeAt(2);
dll.printNode();
dll.printNodeInverse();

console.log(dll.indexOf(100));
console.log(dll.indexOf(5));