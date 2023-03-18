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

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode();
dll.printNodeInverse();