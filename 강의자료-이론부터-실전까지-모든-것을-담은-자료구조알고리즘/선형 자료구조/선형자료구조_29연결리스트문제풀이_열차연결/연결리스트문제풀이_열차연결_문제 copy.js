/* user code */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}
LinkedList.prototype.isEmpty = function () {
  return LinkedList.length === 0;
};

LinkedList.prototype.append = function (value) {

};

function answer(nums) {
  let ll = new LinkedList();
  let ta = new Train(nums);
  let current =ll.head;
  if(ll.isEmpty() === true){
    ll.head =ta;
  }
  else{
    while(current.next !=null){
      current= current.next;
    }
    current.next=ta;
  }
  ta.next = null;


  // 코드 구현 시작 영역
  
  

  // 코드 구현 종료 영역

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [4, 7, 1, 10, 6],

  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],

  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}
