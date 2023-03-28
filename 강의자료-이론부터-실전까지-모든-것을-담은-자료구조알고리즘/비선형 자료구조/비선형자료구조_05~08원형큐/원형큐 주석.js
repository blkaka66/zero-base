const DEFAULT_SIZE=5;
//circularQueue(): 초기 속성값 설정위한 생성자함수
function circularQueue(array= [], size = DEFAULT_SIZE){//array랑 size따로 입력안하면 각각 빈배열,size는 5가 할당됨
    this.array = array;
    this.size = array.length > size ? array.length : size; //array입력했는데 size입력안할 경우 대비해서 array.length랑 size중 더 큰값 this.size에 할당
    this.length =array.length;
    this.head = 0;
    this.tail = array.length;
};

//getBuffer() : 객체 내 데이터 셋 반환
circularQueue.prototype.getBuffer = function(){
    return this.array.slice(); // return this.array를안하고 굳이 slice를 하는 이유는 외ㅏ부에서 배열을 수정하지 못하게 하려고
};

//isEmpty() : 객체 내 데이터 셋 반환
circularQueue.prototype.isEmpty = function(){
    return this.length === 0;
};

//isFull() : 데이터가 꽉차있는지(원형큐는 자바 배열처럼 크기가 정해져있다)
circularQueue.prototype.isFull = function(){
    return this.length === this.size;
};

//enqueue() : 데이터추가
circularQueue.prototype.enqueue = function(element){
    if(this.isFull()){
        return false;
    }
    else{
        this.array[this.tail] = element; //만약 tail:1 size:5면 1%5=1이므로 array[1]에 추가됨 즉,비어있는 칸에 점점추가
        this.tail = (this.tail +1) % this.size;
        this.length++;
    }

    return true;
};

//dequeue() : 데이터삭제
circularQueue.prototype.dequeue = function(element){
    if(this.isEmpty()){
        return undefined;
    }
    else{
        let element = this.array[this.head];//head가 size보다 작으면 this.array[head]랑 똑같음
        delete this.array[this.head];
        this.head = (this.head +1) % this.size;
        this.length--;

        return element;
    }
};

//front() : 가장 첫 데이터 반환
circularQueue.prototype.front = function(){
    return this.length == 0 ? undefined : this.array[this.head];
};

//size() : 가장 첫 데이터 반환
circularQueue.prototype.size = function(){
    return this.length;
};

//clear() : 가장 첫 데이터 반환
circularQueue.prototype.clear = function(size = DEFAULT_SIZE){
    this.array=[];
    this.size=size;
    this.length=0;
    this.head=0;
    this.tail=0;

};

let cq= new circularQueue([1,2,3,4,5],7);
cq.enqueue(6);
cq.dequeue();
