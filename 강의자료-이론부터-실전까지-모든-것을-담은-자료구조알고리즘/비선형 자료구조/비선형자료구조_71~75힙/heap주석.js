// 최소힙(힙은 부모노드가 최소 또는 최대 값을 가지는 완전이진트리로 부모노드 값을 가져오는게 목적이다)

// Heap(): 배열 내 요소를 저장하기 위한 생성자
function Heap(){
    this.items = [];
}

// swap() : 배열 내 두 요소 위치 변경
Heap.prototype.swap = function (index1 , index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
};


// parentIndex() : 부모노드 위치 반환
Heap.prototype.parentIndex = function (index) {
    return Math.floor((index - 1 )/2);
};

// leftCHildIndex() : 왼쪽 자식 노드 위치 반환
Heap.prototype.leftCHildIndex = function (index) {
    return index*2+1;
};

// rightCHildIndex() : 왼쪽 자식 노드 위치 반환
Heap.prototype.rightCHildIndex = function (index) {
    return index*2+2;
};

//parent() : 부모 노드 요소값 반환
Heap.prototype.parent = function (index) {
    return this.items[this.parentIndex(index)];
};

//leftChild() : 왼쪽 자식노드 요소값 반환
Heap.prototype.leftChild = function (index) {
    return this.items[this.leftCHildIndex(index)];
};

//rightChild() :  오른쪽 자식노드 요소값 반환
Heap.prototype.rightChild = function (index) {
    return this.items[this.rightCHildIndex(index)];
};

//peek():현재 정렬된 최소,최대 요소값반환
Heap.prototype.peek = function (){
    return this.items[0];
};

//size():현재 배열 크기 반환
Heap.prototype.size = function (){
    return this.items.length;
};

//insert() : 신규 노드 추가
Heap.prototype.insert = function (item){
    this.items[this.size()] = item; // 배열 맨끝에 item추가
    this.bubbleup();//bubbleup으로 서열정리
};

//bubbleup() : 신규 노드 추가
Heap.prototype.bubbleup = function (){
    let index = this.size()-1; 
    while(this.parent(index) && this.parent(index) > this.items[index]){ //parent가 존재하고 parent가 신규노드보다 클동안
        this.swap(this.parentIndex(index) , index);//parent랑 신규노드 자리 바꾸기(최소힙 만드는 거니까)
        index = this.parentIndex(index);//index도 바꾸기 
    }
};

//extract() : root노드 반환 및 삭제
Heap.prototype.extract = function (){
    let item  = this.items[0];
    this.items[0] = this.items[this.size()-1];
    this.items.pop();
    this.bubbleDown();
    return item;
};

//bubbleDown() : 대체된 루트 노드 위치 정렬
Heap.prototype.bubbleDown = function (){
    let index = 0;
    while(this.leftChild(index) &&  //왼쪽 자식이 있고
    (this.leftChild(index) < this.items[index] || //왼쪽 자식이 나보다 작거나
    this.rightChild(index) < this.items[index])) // 오른쪽 자식이 나보다 작으면
    {
        let childIndex = this.leftCHildIndex(index); //일단 왼쪽 자식으로 가기
        if(this.rightChild(index) && // 근데 오른쪽 자식이 나보다 작으면
        this.rightChild(index) < this.items[childIndex]) // 일단 오른쪽 자식 우선으로 가기
        {
            childIndex = this.rightCHildIndex(index);
        }
        this.swap(childIndex , index); //자식이랑 자리바꾸기
        index = childIndex;//index도 바꾸기
    }
};


let minHeap = new Heap();

minHeap.insert(90);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(3);
console.log(minHeap);

console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());


