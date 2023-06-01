//Dictionary():개체를 저장할 생성자
function Dictionary(items ={}){//이름이 items라는 배열을 만듬
    this.items =items;
};

//getBuffer(): 모든 개체(entity) 반환
Dictionary.prototype.getBuffer = function(){
    return{ ...this.items};//items 들을 spread형식으로 새로 만들어서 리턴
};

//clear(): 초기화
Dictionary.prototype.clear = function(){
    this.items= {};//초기화
};

//size(): 크기 반환
Dictionary.prototype.size = function(){
    return Object.keys(this.items).length;
    //object.keys함수는 keys들을 반환함
    //예시
    // const object1 = {
    //     a: 'somestring',
    //     b: 42,
    //     c: false
    //   };
      
    //   console.log(Object.keys(object1));
      // Expected output: Array ["a", "b", "c"]
};

//has(): 개체 존재 여부 확인(key 정보를 배열로 반환)
Dictionary.prototype.has = function(key){

    return this.items.hasOwnProperty(key);//key에 맞는 value 있으면 true, 없으면 false 반환
};

//set(): 개체(entity) 추가
Dictionary.prototype.set = function(key , value){ 
    this.items[key] = value;
};

//get(): 개체(entity)의 value 반환
Dictionary.prototype.get = function(key){
    return this.has(key) ? this.items[key] : undefined;
};

//remove(): 개체(entity) 삭제
Dictionary.prototype.remove = function(key){
    if(this.has(key)){
        delete this.items[key];
        return true;
    }
    else{
        return false;
    }
};


//keys(): 모든 key값을 배열 형태로 반환
Dictionary.prototype.keys = function(){
    return Object.keys(this.items);
};

//values(): 모든 value값을 배열 형태로 반환
Dictionary.prototype.values = function(){
    // let values =[];
    // for(let k in this.items){
    //     values.push(this.items[k]);
    // }
    // return values;
    return Object.values(this.items);
};

//each(): 출력
Dictionary.prototype.each = function(fn){
    for(let k in this.items){
        fn(k,this.items[k]);
    }
};

function printDictionary(key , value){
    console.log(`key : ${key}`);
    console.log(`value : ${value}`);
 
};



let dicta = new Dictionary({});
dicta.set("age",19);
 dicta.set("name","alice");

dicta.set("height",172);
console.log(dicta);
console.log(dicta.keys());

dicta.each(printDictionary);


