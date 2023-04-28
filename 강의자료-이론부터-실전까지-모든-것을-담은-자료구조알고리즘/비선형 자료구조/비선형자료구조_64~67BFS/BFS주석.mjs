import { Queue } from "./queue.mjs";
import {Stack} from "./stack.mjs";
function Graph() {
    this.edge = {};
    this.visited = {};
  }
  
  Graph.prototype.addVertex = function (v) {
    this.edge[v] = [];
    this.visited[v] = false;
  };
  
  Graph.prototype.addEdge = function (v1, v2) {
    this.edge[v1].push(v2);
  };
  
  Graph.prototype.print = function () {
    for (let vertex in this.edge) {
      let neighbors = this.edge[vertex];
      if (neighbors.length === 0) continue;
  
      process.stdout.write(`${vertex} -> `);
      for (let j = 0; j < neighbors.length; j++) {
        process.stdout.write(`${neighbors[j]} `);
      }
      console.log("");
    }
  };

//bfs(): bfs탐색(bfs탐색은 위에 노드부터 쭉 훑는 탐색으로 최단거리 찾을때 유용)
Graph.prototype.bfs = function (startVertex){
    this._bfsLoopVisit(startVertex);
};

//_bfsLoopVisit():큐 이용한 bfs탐색
Graph.prototype._bfsLoopVisit = function (vertex){
    let queue = new Queue(); //큐 하나 만들어서(큐는 선입선출)
    queue.enqueue(vertex);//큐에 받은 vertex를 시작 노드로 설정

    while (!queue.isEmpty()){//큐가 빌때까지(끝 노드까지 다 탐색할때까지)
        let vertex = queue.dequeue();//노드탐색하기
        if(this.visited[vertex]){//근데 노드가 이미 탐색했던 노드면
            continue;//다음 노드 탐색
        }
        
        this.visited[vertex] = true; //처음 탐색하는 노드면 방명록남기기
        console.log(`visit "${vertex}"`);

        let neighbors = this.edge[vertex];//해당노드랑 이웃한 노드 전부
        for(let i=0; i<neighbors.length;i++){
            queue.enqueue(neighbors[i]);//큐에 넣어서 탐색하기
        }
    }
};

//_bfsShortestPath():다른 노드 간 최단 경로 비용 산출
Graph.prototype._bfsShortestPath = function (vertex){
    let queue = new Queue(); //큐 하나 만들어서(큐는 선입선출)
    queue.enqueue(vertex);//큐에 받은 vertex를 시작 노드로 설정

    let distance = {}; //거리 저장하는 리스트
    let pre_visit = {};// 기준 노드에서 이웃한노드 저장할 리스트
    for(let vertex in this.edge){ 
        distance[vertex]=0;//초기화
        pre_visit[vertex]=null;//초기화

    }

    while (!queue.isEmpty()){
        let vertex = queue.dequeue();

        this.visited[vertex] = true;
        console.log(`visit "${vertex}"`);

        let neighbors = this.edge[vertex];//기준 노드에서 이웃한 노드들 저장
        for(let i=0; i<neighbors.length; i++){
            if(!this.visited[neighbors[i]]){//만약 이웃한 노드중 처음탐색하는 노드면
                
                distance[neighbors[i]] = distance[vertex] +1;//이웃한 노드의 거리(distance)를 저장하기 위해, 해당 노드의 distance 값을 현재 탐색 중인 노드의 distance 값에 1을 더한 값으로 설정
                pre_visit[neighbors[i]] = vertex;//이웃한 노드 방문했었다고 저장
                queue.enqueue(neighbors[i]);//해당 이웃 노드를 큐에 넣어 다음 번 탐색에 활용
            }
        }
    }
    return {distance , pre_visit};
};

//_from_to_path():from 노드에서 to 노드로 최단 경로 출력
Graph.prototype._from_to_path = function (pre_visit , from ,to){
    let stack = new Stack();//스택(선입 후출) 만들어서
    for(let v =to; v!==from; v =pre_visit[v]){
        stack.push(v);//목적지부터 출발지 까지 순서대로 넣기
    }
    stack.push(from);

    while(!stack.isEmpty()){//그럼 출발지부터 차례대로 빠져나옴
        let v = stack.pop();
        process.stdout.write(`${v} -> `);
    }
    console.log("end");
};

//shortestPath():다른 노드 간 최단 경로 탐색
Graph.prototype.shortestPath = function (startVertex){
    let result = this._bfsShortestPath(startVertex);//넣고 리턴값받아서

    console.log(result.distance);//출력
    console.log(result.pre_visit);//출력

    for(let vertex in this.edge){//그리고 이웃한 노드도 똑같이
        if(vertex === startVertex) continue;//그렇게 끝까지 
        
        this._from_to_path(result.pre_visit,startVertex,vertex);
    }
   
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.shortestPath("B");