//선형해시테이블의 특징은 기존 해시테이블이랑 비슷하지만 충돌이나면 자동으로 다음 주소를 탐색해서 그 주소가 비어있으면 거기에 데이터 저장함.
const HASH_SIZE = 5; //테이블 사이즈 처음에 정해야함

//Element(): key, value 저장 위한 생성자
function Element(key ,value){
    this.key =key;
    this. value =value;
};

//LinearHashTable():생성자
function LinearHashTable(){
    this.table = new Array(HASH_SIZE);//HASH_SIZE만큼의 길이를 가진 배열 생성
    this.length = 0;//길이는 초기값이니까 0
};

//hashcode():해시함수(쉽게 말해서 내가 저장할 value의 값의 위치를 반환받는거)
//(key를 보내서 알파벳하나하나 아스키코드로 변환해서 더하고 배열크기만큼 나눈 나머지(대충 암호화한다고 생각))
LinearHashTable.prototype.hashcode = function(key){
    let hash=0;
    for(let i =0;i<key.length;i++){
        hash+= key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

//put():데이터 넣기
LinearHashTable.prototype.put = function(key, value){
    let index = this.hashcode(key); //index값 받아와서
    let startIndex=index;//일단 startindex에 기존 index값 저장하고

    console.log(`key : ${key} -> index: ${index}`);

    do{
        if(this.table[index] === undefined){//만약 처음 받아온값이 빈칸이면
            this.table[index] = new Element(key , value);//거기에 데이터넣기
            this.length++;
            return true;
        }
        else{//처음받아온 값에 이미 데이터 있으면
            console.log("충돌!!");
            index = (index+1) % HASH_SIZE;//다음칸으로 이동(만약 배열끝까지 가면 다시 0번째 방으로이동)
        }
    }
    while(index !== startIndex);//배열 한바퀴 다 돌았는데도 빈칸 못찾았으면(배열이 풀방이면)
    console.log("실패")
    return false;//실패
};

//get(): 데이터 조회
LinearHashTable.prototype.get = function(key){
    let index =this. hashcode(key);//찾고싶은 value의 key값을 입력해서 index 받아오기
    let startIndex = index;

    do{//만약 기존 index가 빈칸이 아니고 그 칸의 key가 내가찾고싶은 key면
        if(this.table[index] !== undefined && this.table[index].key === key){
            return this.table[index].value;//그 칸의 value값 리턴받아오기
        }
        else{//만약 빈칸이거나 내가 찾고싶은 key가 아니면
            console.log("여기가 아닌데유")
            index = (index+1) % HASH_SIZE;//다음칸으로 이동(만약 배열끝까지 가면 다시 0번째 방으로이동)
        }

    }while(index !== startIndex);//배열 한바퀴 다 돌았는데도 찾고싶은 key못찾았으면
    console.log("실패!")
    return undefined;//실패!
};


//remove(): 데이터 삭제
LinearHashTable.prototype.remove = function(key){
    let index =this. hashcode(key);//찾고싶은 value의 key값을 입력해서 index 받아오기
    let startIndex = index;

    do{//만약 기존 index가 빈칸이 아니고 그 칸의 key가 내가찾고싶은 key면
        if(this.table[index] !== undefined && this.table[index].key === key){
            let element =this.table[index];
            delete this.table[index];
            this.length--;
            return element;
        }
        else{//만약 빈칸이거나 내가 찾고싶은 key가 아니면
            console.log("여기가 아닌데유")
            index = (index+1) % HASH_SIZE;//다음칸으로 이동(만약 배열끝까지 가면 다시 0번째 방으로이동)
        }

    }while(index !== startIndex);//배열 한바퀴 다 돌았는데도 찾고싶은 key못찾았으면
    console.log("실패!")
    return undefined;//실패!
};

let lht = new LinearHashTable();

lht.put("Ana",172);
lht.put("asd",11);
lht.put("ghd",753);
lht.put("nsa",999);
lht.put("nsa",999);
console.log(lht);


console.log(lht.remove("nsa"));

console.log(lht);