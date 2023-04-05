
import {LinkedList} from "./linked_list.mjs";

//체이닝해시테이블의 특징은  index충돌이 나면 이차배열처럼 같은 index에 링크드 리스트로 value끼리 연결하는거다.(즉 배열 한칸한칸마다 링크드 리스트가 달려있음)
//예를들어 index로 3을 받았는데 배열[3]에 이미 데이터가 있다면 배열[3]은 기존 데이터를 가리키고 그 기존 데이터는 이번에 새로 받아온 데이터를 가리키는 것이다.
const HASH_SIZE = 37; //테이블 사이즈 처음에 정해야함

//Element(): key, value 저장 위한 생성자
function Element(key ,value){
    this.key =key;
    this. value =value;
};

//ChainingHashTable():생성자
function ChainingHashTable(){
    this.table = new Array(HASH_SIZE);//HASH_SIZE만큼의 길이를 가진 배열 생성
    this.length = 0;//길이는 초기값이니까 0
};

//hashcode():해시함수(쉽게 말해서 내가 저장할 value의 값의 위치를 반환받는거)
//(key를 보내서 알파벳하나하나 아스키코드로 변환해서 더하고 배열크기만큼 나눈 나머지(대충 암호화한다고 생각))
ChainingHashTable.prototype.hashcode = function(key){
    let hash=0;
    for(let i =0;i<key.length;i++){
        hash+= key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

//put():데이터 추가
ChainingHashTable.prototype.put = function(key , value){
    let index= this.hashcode(key);
    console.log(`key : ${key} -> index: ${index}`);

    if(this.table[index] === undefined){//만약 빈칸이면()
        this.table[index] = new LinkedList();//일단 링크드리스트
    }
    this.table[index].append(new Element(key,value)); //링크드리스트로 append함
    this.length++;
    return true;
};

// getBuffer(): 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
    let array = [];
  
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {//만약 head[i]에 뭐가 있으면
        let current = this.table[i].head; 
  
        do {//array에 table[i]전부 복사해서 집어넣기
          array.push(current.data);
          current = current.next;
        } while (current);
      }
    }
  
    return array;
  };

// print(): 데이터 셋 출력
ChainingHashTable.prototype.print = function () {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        let current = this.table[i].head;
        process.stdout.write(`#${i}`);
        do {
          process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
          current = current.next;
        } while (current);
        console.log("");
      }
    }
  };

  // get(): 데이터 조회
ChainingHashTable.prototype.get = function (key) {
    let index = this.hashcode(key);//얜 배정받은 index에 무조건 있어야함(거기 없으면 없는거)

    if(this.table[index] !== undefined && !this.table[index].isEmpty()){
        let current = this.table[index].head;//배정받은 index의 링크드리스트 전부 탐색하기
        do{
            if(current.data.key === key){//찾았으면
                return current.data.value;//return
            }
            else{//못찾았으면
                current=current.next;//담칸
            }
        }while(current);//전부 돌아도 못찾으면
    }
    return undefined;//실패!
  };

    // remove(): 데이터 삭제
ChainingHashTable.prototype.remove = function (key) {
    let index = this.hashcode(key);//얜 배정받은 index에 무조건 있어야함(거기 없으면 없는거)
    let element = undefined;

    if(this.table[index] !== undefined){
        let current = this.table[index].head;//배정받은 index의 링크드리스트 전부 탐색하기
        do{
            if(current.data.key === key){//찾았으면
                element = current.data;
                this.table[index].remove(current.data);
                this.length--;
                if(this.table[index].isEmpty()){
                    delete this.table[index];
                }
            }
            
        current=current.next;//담칸
            
        }while(current);//전부 돌아도 못찾으면
    }

   
    return element;//실패!
  };
  

let cht = new ChainingHashTable();

cht.put("Ana",172);

cht.put("abc",432);
cht.put("asd",788);
cht.put("nbv",32);
cht.put("nbbv",32);


console.log(cht.remove(","));
console.log(cht)