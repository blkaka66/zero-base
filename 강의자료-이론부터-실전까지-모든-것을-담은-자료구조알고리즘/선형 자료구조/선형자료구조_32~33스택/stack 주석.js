//stack(): 생성자 함수

function Stack(array){//사실상 stack도 array의 한 형태이다
    this.array = array ? array : [];//삼항연산자: array가 값이 있으면 this.array에 array를 반환하고
   // 만약 array가 null또는 빈 배열이면 this.array에다 [] 즉 빈 배열을 반환한다.
    
};

// getBuffer():객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function(){
    return this.array.slice();//slice는 ()안에 값이 없으면 모든 값을 복사함(그 값을 return함)
};


//isEmpty():객체 내 데이터 있는지 없는지 파악
Stack.prototype.isEmpty = function(){
    return this.array.length === 0;
};

//push():데이터 추가
Stack.prototype.push = function(element){
    return this.array.push(element);
};

//pop():데이터 삭제
Stack.prototype.pop = function(){
    return this.array.pop();
};

//peek():가장 끝 데이터 반환(삭제x)
Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
};

//size():스택 내 데이터 개수 확인
Stack.prototype.size = function(){
    return this.array.length;
};

//indexOf(): 데이터 위치 값 조회
Stack.prototype.indexOf = function(element,position = 0){
    for(let i=position; i<this.array.length;i++){
        if(element === this.array[i]){
            return i;
        }
    }
    return -1;//데이터 없으면 -1 return
};

//includes(): 데이터 존재 여부 확인
Stack.prototype.includes = function(element,position  = 0){
    for(let i=position; i<this.array.length;i++){
        if(element === this.array[i]){
            return true;
        }
    }
    return false;//만약 못찾으면 false리턴
};

let stack = new Stack([1,2,3]);
console.log(stack.indexOf(2,2));