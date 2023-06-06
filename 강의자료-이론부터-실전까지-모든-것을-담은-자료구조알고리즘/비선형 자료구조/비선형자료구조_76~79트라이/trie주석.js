//TrieNode() : 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
    this.children ={};
    this.endOFWord= false;
}

//Trie() : 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie(){
    this.root = new TrieNode();
}

//insert() : 문자열 추가
Trie.prototype.insert = function(word){
    let current = this.root;

    for(let i =0;i< word.length; i++){
        let ch  = word[i];  //문자열 하나하나 떼서
        let node = current.children[ch];//이미 있는지 확인

        if(node === undefined){//없으면
            node = new TrieNode();
            current.children[ch] = node;//맨끝에 추가(/만약 있으면 그대로 넘어가기)
        }
        current = node;//항상 맨끝으로 이동
    }
    current.endOFWord = true;//다추가했으면 끝났다고 말하기
};

//search() : 문자열 검색
Trie.prototype.search = function(word){
    let current = this.root;

    for(let i =0;i< word.length; i++){
        let ch  = word[i];  //문자열 하나하나 떼서
        let node = current.children[ch];//이미 있는지 확인

        if(node === undefined){//없으면
            return false;
        }
        current = node;//항상 맨끝으로 이동
    }
   return current.endOFWord;
};

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("b"));

