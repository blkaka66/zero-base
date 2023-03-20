function Queue(array){
    this.array = array ? array:[];//array가 값이 있으면 this.array에 array 덮어쓰고
    //array가 값이 없으면 this.array에 []반환한다.
    this.tail = array ? array.length:0;//마찬가지로 array 값있으면 array.length반환,없으면 0반환(tail은 현재 큐의 끝지점이 아니라 끝 다음 지점,즉 다음 element가 들어갈 자리임)
    this.head = 0;
};

Queue.prototype.enqueue= function(element){
    this.array[this.tail] = element;//꼬리에 element추가
    this.tail++;//tail 업데이트
    return;
};

Queue.prototype.dequeue= function(element){
    if(this.tail === this.head){//더 삭제할게 없을때
        return undefined;
    }
    let element = this.array[this.head]; //맨 처음값 element에 저장
    delete this.array[this.head];//맨 처음 값 삭제
    this.head++;//head 업데이트
    return element;//element 반환
};




let queue = new Queue([1,1]);
console.log(queue);

queue.enqueue(2);
queue.enqueue(3);
console.log(queue);