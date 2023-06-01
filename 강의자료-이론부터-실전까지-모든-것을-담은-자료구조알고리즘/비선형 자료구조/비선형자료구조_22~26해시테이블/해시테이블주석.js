
const HASH_SIZE = 37; //테이블 사이즈 처음에 정해야함

//Element(): key, value 저장 위한 생성자
function Element(key ,value){
    this.key =key;
    this.value =value;
};

//HashTable():생성자
function HashTable(){
    this.table = new Array(HASH_SIZE);//HASH_SIZE만큼의 길이를 가진 배열 생성
    this.length = 0;//길이는 초기값이니까 0
};

//hashcode():해시함수(쉽게 말해서 내가 저장할 value의 값의 위치를 반환받는거)
//(key를 보내서 알파벳하나하나 아스키코드로 변환해서 더하고 배열크기만큼 나눈 나머지(대충 암호화한다고 생각))
HashTable.prototype.hashcode = function(key){
    let hash=0;
    for(let i =0;i<key.length;i++){
        hash+= key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

//put(): 데이터추가
HashTable.prototype.put = function(key , value){
    let index = this.hashcode(key);
    console.log(`key : ${key} -> index : ${index}`);

    if(this.table[index] !== undefined){
        return false;
    }
    else{
        this.table[index] = new Element(key,value);
        this.length++;
    }
    return true;
};

//get(): 데이터조회
HashTable.prototype.get = function(key){
    return this.table[this.hashcode(key)];
};

//remove(): 데이터삭제
HashTable.prototype.remove = function(key){
    let element = this.table[this.hashcode(key)]; //만약 key에 대응되는 value가 있다면
   
    if(element !== undefined){
        delete this.table[this.hashcode(key)];//key와 value담고있는 element 자체를 삭제
        this.length--;
    }
    return element;
};

let ht = new HashTable();

ht.put("Ana",173);

ht.put("sue",543);
ht.put("asd",777);
console.log(ht)

ht.remove("asd")
console.log(ht)

