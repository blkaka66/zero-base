//Node(): value와 left, right node 저장을 위한 생성자
function Node(value){
    this.value =value;
    this.left = null;
    this.right =null;
};

//BinaryTree(): 시작 노드인 root를 생성하기 위한 생성자
function BinaryTree(){
    this.root=null;
};

//_insertNode(): 재귀로 트리를 순회하며 노드 추가(내부 사용(_를 붙였다는건 클래스 내부에서만 쓰겠다는 의미임))
BinaryTree.prototype._insertNode = function (node,value){
    if (node === null){ //만약 노드가 비어있으면
        node = new Node(value);//그 노드에 할당
    }
    else if(value < node.value){//부모 노드보다 값이 작으면
        node.left = this._insertNode(node.left , value);//노드 왼쪽으로
    }
    else if(value >= node.value){//부모 노드보다 값이 크면
        node.right = this._insertNode(node.right , value);//노드 오른쪽으로
    }
    return node;//return이 재귀적으로 쭉되는게 아니라 단 한번만 return 되기때문에 
    //트리가 비어있을때 노드를 추가하면 밑에 this.root가 업데이트되고
    //값을 더 추가할때는 위의 node.left나 node.right가 한번만 업데이트됨.(재귀함수 return처럼 쭉 업데이트 되는게 아님!!)
};

//insert():노드 추가
BinaryTree.prototype.insert = function (value){
    this.root = this._insertNode(this.root, value);//this.root는 트리가 비어있을때만 주소가 할당됨
};

let tree = new BinaryTree();
tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");


/////////////////전위 순회 (현재노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드)
//_preOrderTraverseNode():재귀로 트리를 순회하며 전위 순회(내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function (node , printNode){
   if(node === null){//만약 node가 null이면
    return;//출력안하고 바로 return
   }
   printNode(node);//node가 null이 아니면 해당 노드의 value를 출력하고
   this._preOrderTraverseNode(node.left , printNode);//출력한다음 left 자식노드랑 right 자식노드 다시 넘겨서 실행 (현재노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드)
   this._preOrderTraverseNode(node.right , printNode);
};

//_preOrderTraverse():전위 순회하며 노드 출력
BinaryTree.prototype._preOrderTraverse = function (printNode){ //_preOrderTraverseNode에 처음에 루트랑 printnode함수를 넘겨주는 기능
    this._preOrderTraverseNode(this.root , printNode);
 };

function printNode(node){ //실행할 주 함수(node의 value를 출력해주는 함수)
    process.stdout.write(`${node.value} ->`);
};



console.log("********** Pre-Order **********");
tree._preOrderTraverse(printNode);
console.log("end")


/////////////////중위 순회 (왼쪽 자식 노드 -> 현재 노드 -> 오른쪽 자식 노드)
//_inOrderTraverseNode():재귀로 트리를 순회하며 중위 순회(내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node , printNode){
    if(node === null){//만약 node가 null이면
     return;//출력안하고 바로 return
    }
   
    this._inOrderTraverseNode(node.left , printNode);//(왼쪽 자식 노드 -> 현재 노드 -> 오른쪽 자식 노드)
    printNode(node);//node가 null이 아니면 해당 노드의 value를 출력하고
    this._inOrderTraverseNode(node.right , printNode);
 };
 
 //_inOrderTraverse(): 순회하며 노드 출력
 BinaryTree.prototype._inOrderTraverse = function (printNode){ //_preOrderTraverseNode에 처음에 루트랑 printnode함수를 넘겨주는 기능
     this._inOrderTraverseNode(this.root , printNode);
  };
 

 
 
 console.log("********** In-Order **********");
 tree._inOrderTraverse(printNode);
 console.log("end")
 
////////////////////////////////////////층별 순회 
function Queue(array){
    this.array = array ?  array:[];
};

Queue.prototype.isEmpty = function(){
    return this.array.length ==0;
};

Queue.prototype.enqueue = function(element){
    return this.array.push(element);
};

Queue.prototype.dequeue = function(){
    return this.array.shift();
};

//levelOrderTraverse(): 층별 순회하며 노드 출력
BinaryTree.prototype.levelOrderTraverse = function (printNode){
    let q = new Queue();
    let node = null;
    q.enqueue(this.root);
    while(!q.isEmpty()){
        node = q.dequeue();
        printNode(node);
        if(node.left !== null){
            q.enqueue(node.left);
        }
        if(node.right !== null){
            q.enqueue(node.right);
        }
    }
};

console.log("********** Level-Order **********");
tree.levelOrderTraverse(printNode);
console.log("end")
