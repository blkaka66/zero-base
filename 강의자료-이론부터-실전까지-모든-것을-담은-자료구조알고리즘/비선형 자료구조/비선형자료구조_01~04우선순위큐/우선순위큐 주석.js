//element():데이터와 우선순위 저장하기 위한 생성자 함수
function Element(data, priority){
    this.data=data;
    this.priority=priority;
};
//priorityqueue():element 관리 위한 생성자함수
function PriorityQueue(){
    this.array = [];
};

//getBuffer():map을 통해 array내에 있는 data만 필터링해서 가져오기
PriorityQueue.prototype.getBuffer = function(){
    return this.array.map((element) => element.data);
};

//isEmpty(): 객체 내 데이터 존재여부 파악
PriorityQueue.prototype.isEmpty = function(){
    return this.array.length ===0;
};

//enqueue(): 데이터 추가
PriorityQueue.prototype.enqueue = function(data,priority){
    let element = new Element(data,priority); 
    let added = false;

    for(let i =0;i<this.array.length;i++){
        if(element.priority < this.array[i].priority)//새로운 element의 우선순위가 기존 어떤애 우선운위보다 낮으면 거기 들어가야하므로
        {
            this.array.splice(i,0,element);//splice함수로 i번쨰에 element를 추가한다는뜻
            added=true;
            break;
        }
    }

    if(added === false){//for문에서 걸린게없으면(새로운 element의 우선순위가 기존 애들 우선순위보다 높으면)
        this.array.push(element);//맨끝에추가
    }

    return this.array.length;
};

//dequeue(): 가장 첫 데이터 삭제하면서 반환
PriorityQueue.prototype.dequeue = function(){
    return this.array.shift();
};

//front(): 가장 첫 데이터 반환(삭제x)
PriorityQueue.prototype.front = function(){
    return this.array.length == 0 ? undefined : this.array[0].data;
};

//size(): 크기 반환
PriorityQueue.prototype.size = function(){
    return this.array.length;
};

//clear(): 초기화
PriorityQueue.prototype.clear = function(){
    this.array=[];
};





let pq = new PriorityQueue();

pq.enqueue("apple",1);
pq.enqueue("banana",2);
pq.enqueue("ggg",3);


pq.enqueue("nnn",23);
pq.enqueue("yyy",15);


console.log(pq.size());
console.log(pq.dequeue());
console.log(pq.getBuffer());