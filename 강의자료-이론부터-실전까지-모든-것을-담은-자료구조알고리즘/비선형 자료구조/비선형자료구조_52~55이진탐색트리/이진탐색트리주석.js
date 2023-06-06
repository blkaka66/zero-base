//Node(): value와 left, right node 저장을 위한 생성자
function Node(value){
    this.value =value;
    this.left = null;
    this.right =null;
};

//BinaryTree(): 시작 노드인 root를 생성하기 위한 생성자
function BinarySearchTree(){
    this.root=null;
};

//_insertNode(): 재귀로 트리를 순회하며 노드 추가(내부 사용(_를 붙였다는건 클래스 내부에서만 쓰겠다는 의미임))
BinarySearchTree.prototype._insertNode = function (node,value){
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
BinarySearchTree.prototype.insert = function (value){
    this.root = this._insertNode(this.root, value);//this.root는 트리가 비어있을때만 주소가 할당됨
};

//_minNode():반복문으로 트리를 순회하며 최솟값 노드 탐색(계속 트리 왼쪽으로 쭉가면 맨 밑 왼쪽노드가 최솟값 노드)
BinarySearchTree.prototype._minNode= function(node){
    if(node === null){//만약 트리가 비어있으면
        return null;//최솟값이고 뭐고 없지
    }
    while (node && node.left !== null){//트리의 맨 왼쪽 아래 노드 찾아가는 코드
        node = node.left;//node.left가 null이면 while문 종료
    }
    return node.value;//최소노드 반환
};

//_maxNode():반복문으로 트리를 순회하며 최대값 노드 탐색(계속 트리 오른쪽으로 쭉가면 맨 밑 오른쪽노드가 최대값 노드)
BinarySearchTree.prototype._maxNode= function(node){
    if(node === null){
        return null;
    }
    while (node && node.right !== null){
        node = node.right;
    }
    return node.value;
};

//min():최솟값 노드 탐색
BinarySearchTree.prototype.min = function(){
    return this._minNode(this.root);
};

//max():최댓값 노드 탐색
BinarySearchTree.prototype.max = function(){
    return this._maxNode(this.root);
};

//_searchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function(node , value){
    if(node === null){//루트노드가 null이거나 트리 끝까지 쭉 찾아봤는데 값없으면
        return false;//false반환
    }
    if(node.value === value){//값 찾았으면
        return true;//true 반환
    }
    else if(node. value > value){ //자식노드보다 찾는값이 작으면 
       return this._searchNode(node.left, value);//더 왼쪽으로 찾기
    }
    else if(node. value < value){ //자식노드보다 찾는값이 크면 
        return this._searchNode(node.right, value);//더 오른쪽으로 찾기
     }
};

//search(): value 노드 탐색
BinarySearchTree.prototype.search = function(value){
    return this._searchNode(this.root , value);
};

//_findMinNode():반복문으로 트리 순회하며 최소값 보유한 노드 탐색(얜 값이 아니라 노드를찾음)
BinarySearchTree.prototype._findMinNode = function (node){
    while(node && node.left !== null){
        node= node.left;
    }
    return node;
};

//_removeNode():재귀로 트리 순회하며 값 만족하는 노드 찾고 삭제
BinarySearchTree.prototype._removeNode = function (node , value){
    if (node === null){//루트노드가 없을땐 
        return null;//뭐임?실패
    }
    if(node.value === value){//노드 찾았다 근데 3가지 경우가있다.

        if(node.left === null && node.right === null){ //첫번째, leaf node인 경우(자식노드가 없을때)
            node = null;//이땐 걍 해당노드만 null로 바꾼다.
        }
        //두번째, 자식노드가 1개 있을떄
        else if (node.left === null){//자식노드가 오른쪽에 있을땐
            node = node.right;//오른쪽에 있던 자식노드가 승격
        }
        else if(node. right === null){//자식노드가 왼쪽에 있을땐
            node = node.left;//왼쪽에 있던 자식노드가 승격
        }
        else{//세번째, 자식노드가 2개 있을때(공식이있는데 오른쪽 subtree의 최솟값 노드가 승격하고 원래 있던 최솟값 노드 자리는 없어짐)
            let aux = this._findMinNode(node.right);//오른쪽 subtree의 최솟값 노드찾기
 
            node.value = aux.value;//오른쪽 subtree의 최솟값 노드가 승격
            node.right = this._removeNode(node.right , aux.value);//원래 있던 최솟값 노드 자리는 없애고 재귀적으로 return 해서 오른쪽 서브트리 업데이트함
 
        }
    }
    else if (node. value > value){//이건 찾는거임
        node.left = this._removeNode(node.left , value);
    }
    else if (node. value < value){//이건 찾는거임
        node.left = this._removeNode(node.right , value);
    }
    return node;
};

//remove():노드 삭제
BinarySearchTree.prototype.remove = function(value){
    root = this._removeNode(this.root , value);
};


let tree = new BinarySearchTree();
tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

/////////////////중위 순회 (왼쪽 자식 노드 -> 현재 노드 -> 오른쪽 자식 노드)
//_inOrderTraverseNode():재귀로 트리를 순회하며 중위 순회(내부 사용)
BinarySearchTree.prototype._inOrderTraverseNode = function (node , printNode){
    if(node === null){//만약 node가 null이면
     return;//출력안하고 바로 return
    }
   
    this._inOrderTraverseNode(node.left , printNode);//(왼쪽 자식 노드 -> 현재 노드 -> 오른쪽 자식 노드)
    printNode(node);//node가 null이 아니면 해당 노드의 value를 출력하고
    this._inOrderTraverseNode(node.right , printNode);
 };
 
 //_inOrderTraverse(): 순회하며 노드 출력
 BinarySearchTree.prototype._inOrderTraverse = function (printNode){ //_preOrderTraverseNode에 처음에 루트랑 printnode함수를 넘겨주는 기능
     this._inOrderTraverseNode(this.root , printNode);
     console.log("end")
  };
 

  function printNode(node){ //실행할 주 함수(node의 value를 출력해주는 함수)
    process.stdout.write(`${node.value} ->`);
};

 
 
 console.log("********** In-Order **********");
 tree._inOrderTraverse(printNode);


 console.log(tree.min());
 console.log(tree.max());

 tree.remove("B");

  tree._inOrderTraverse(printNode);

//  console.log(tree.root)


